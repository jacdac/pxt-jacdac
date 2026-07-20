# Jacdac Top-Level TypeScript Design

This document summarizes Jacdac classes and relationships found in top-level `*.ts` files in this repository root.

## Scope

Included files are root-level TypeScript files such as:
`eventsource.ts`, `packet.ts`, `eventqueue.ts`, `pipes.ts`, `routing.ts`, `rolemgr.ts`, `service.ts`, `servers.ts`, `diagnostics.ts`, `pack.ts`, and `test.ts`.

## Design Summary

The architecture is centered around three layers:

1. Event foundation (`EventSource` and listeners)
2. Packet and transport primitives (`JDPacket`, pipe classes, pack/unpack)
3. Routing and binding (`Bus`, `Device`, `Server`, `Client`, `RoleManagerServer`)

`EventSource` is the base type for most runtime objects. `Bus` orchestrates startup, device discovery, packet dispatch, and client/server attachment. `Device` represents a remote Jacdac node and routes incoming packets to matching clients. `Server` and `Client` implement the two sides of service behavior: servers are hosts of services, while clients are consumers of these services.

`RoleManagerServer` performs role-to-device/service binding using helper structures (`RoleBinding`, `ServerBindings`, `DeviceWrapper`).

## Class Inventory (Top-Level `*.ts`)

We focus here on exported classes, ignoring internal ones used for implementation.

### Event Foundation

- `EventListener` (`eventsource.ts`)
- `EventSource` (`eventsource.ts`)

### Packet/Transport

- `JDPacket` (`packet.ts`)
- `InPipe` and `OutPipe` (`pipes.ts`)
- `JDDiagnostics` (`diagnostics.ts`)

### Core Routing

- `Bus` extends `EventSource` (`routing.ts`); the bus hosts devices
- `Device` extends `EventSource` (`routing.ts`); a device can host multiple services and can be bound to multiple clients
- `Server` extends `EventSource` (`routing.ts`); a server 
implements a single service; it is useful for exposing local (self)
hardware features on the Jacdac bus;
- `ControlServer` extends `Server` (`routing.ts`)
- `Client` extends `EventSource` (`routing.ts`); this is the primary user visible way to interact with a Jacdac service;
- `RegisterClient<T>` extends `EventSource` (`routing.ts`)

### Role Management

- `RoleManagerServer` extends `Server` (`rolemgr.ts`)
- `ClientRoleQuery` (`routing.ts`)

## Role Naming Forms (`routing.ts`, `rolemgr.ts`)

Roles are expressed as strings on clients (`new Client(serviceClass, role)`), and the runtime supports several naming forms.

1. Plain role name
  - Example: `"light"`
  - Matched through stored bindings managed by role manager (`getRole()` / `setRole()`).

2. Host-prefixed role name
  - Example: `"robot/leftMotor"`, `"robot/rightMotor"`
  - Used by auto-bind grouping logic (`RoleBinding.host()`), so related roles are allocated together.

3. Legacy direct device binding
  - Example: `"<deviceId>"` or `"<deviceId>:<serviceIndex>"`
  - Handled directly in `Device.matchesRoleAt(...)` before role-manager lookup.

4. Query-based role name
  - Example: `"light?dev=<deviceId>&srvi=2"`
  - Parsed by `ClientRoleQuery` with supported keys:
    - `dev`: target device id, short id, or `self`
    - `srvi`: exact service index
    - `srvo`: service offset among services of the same class

5. Explicit role-manager assignment
  - `RoleManagerCmd.SetRole` and `_rolemgr.setRole(...)` bind a specific `deviceId:serviceIndex` to a role name.
  - Query suffixes are dropped when stored (`name?dev=...` is persisted as `name`).

### Service Helpers

- `BroadcastClient` extends `Client` (`service.ts`)
- `BroadcastServer` extends `Server` (`service.ts`)

## Relationship Notes

- Composition highlights:
  - `Bus` owns `Server[]`, `Device[]`, and tracks `Client[]`
  - `Device` owns attached `Client[]` and packet query state
  - `Client` owns a `ClientPacketQueue` and `RegisterClient[]`
  - `RoleManagerServer` computes role bindings via `DeviceWrapper`, `RoleBinding`, and `ServerBindings`

- Packet flow:
  - `JDPacket` send path loops back through `bus.processPacket(...)`
  - `Server.sendEvent(...)` uses delayed retransmission (`delayedSend`)
  - Pipes (`InPipe`/`OutPipe`) exchange framed data via `JDPacket` on `JD_SERVICE_INDEX_PIPE`

## Client Design (`routing.ts`)

`Client` is the consumer-side runtime object for one Jacdac service class and role.
It binds to a `Device`/service index, receives packets, tracks register projections,
and replays client state after reconnect.

### Lifecycle and Binding

- Construction sets service class and role (`new Client(serviceClass, role)`).
- `start()` registers the client with the bus (`bus.startClient(this)`), enabling auto-attach.
- `_attach(...)` validates role match, sets `device` and `serviceIndex`, and emits connect.
- `_detach()` clears binding, emits disconnect, and returns the client to unattached pool.
- `destroy()` unregisters the client and replaces registered event handlers with no-op handlers.

### Register Model

Client subclasses typically call `addRegister(...)` for each typed register.
Each register is represented by `RegisterClient<TValues>`, which provides:

- packed-value storage (`_data`) and timestamp (`_localTime`)
- typed get/set (`values`) via `jdpack`/`jdunpack`
- update/change notifications (`REPORT_RECEIVE`, `REPORT_UPDATE`, `CHANGE`)
- polling helper (`pauseUntilValues(...)`)

### Caching and Refresh Behavior

The client stack uses two cache layers and one reconnect queue:

1. Register value cache (`RegisterClient`)
  - Last report bytes are cached in `_data`.
  - Incoming `GET_REG` reports update cache and timestamp.
  - Change events fire only when payload bytes differ from prior cache.

2. Device query cache (`Device.query(...)`)
  - Query state per `(register, serviceIndex)` is cached as `RegQuery`
    (`lastQuery`, `lastReport`, `value`, `notImplemented`).
  - Refresh is throttled by register class:
    - regular registers use `REGISTER_REFRESH_RATE` (250 ms)
    - optional registers use `REGISTER_OPTIONAL_REFRESH_RATE` (1000 ms)
    - const registers pass `null` refresh and are only requested until value exists
  - `CommandNotImplemented` marks a query as unsupported to suppress retries.

3. Outbound replay cache (`ClientPacketQueue`)
  - Queues `SET_REG` packets and packets sent while unbound.
  - Deduplicates by command, keeping only the most recent payload per command.
  - On reconnect (`handleConnected()`), `resend()` replays queued packets.
  - After replay, non-`SET_REG` packets are dropped; `SET_REG` state persists for future reconnects.

### Cache Invalidation Triggers

Register caches are cleared when:

- the client changes bound device (`Client.device` setter calls `reg.reset()`)
- a `SystemEvent.Change` is received by the client (`handlePacketOuter` resets registers)

This ensures stale values are not reused across topology or service-state changes.

### Broadcast Client Behavior

When `broadcast` is true, client binding differs:

- `device` is not pinned to a single server
- matching uses service class across attached devices
- packet handling still goes through the same register and event machinery

## Server Design (`routing.ts`)

`Server` is the provider-side runtime object for one local Jacdac service.
It exposes registers and commands over the bus, tracks local service state,
and emits events/reports to remote clients.

### Lifecycle and Connectivity

- Construction sets the service class and optional behavior (`ServerOptions`).
- `start()` registers the server with the bus (`bus.addServer(this)`) and marks it running.
- `stop()` marks it not running.
- `isConnected()` reflects running state (server presence on local bus runtime).

### Configurable Surface (`ServerOptions`)

The base class can expose common service metadata and controls without subclass boilerplate:

- `instanceName` and `variant`
- `statusCode` and vendor status code
- optional `value` register (with `valuePackFormat`)
- optional `intensity` register (with `intensityPackFormat`)
- optional `calibrate` callback
- optional constant register table (`constants`)

### Packet Handling Model

`handlePacketOuter(pkt)` implements layered dispatch:

1. Generic system registers and commands
  - `StatusCode`, `InstanceName`, `Variant`, optional `Value`, optional `Intensity`
  - `Calibrate` command

2. Constant registers
  - If configured, `GET_REG` reads are served from `constants`.

3. Service-specific logic
  - Falls through to subclass override `handlePacket(pkt)`.

The base class sets `stateUpdated = false` before specialized handling; helper register
handlers set it true when incoming writes actually change state.

### Register Read/Write Helpers

The class provides helpers that implement GET/SET semantics with change detection:

- `handleRegFormat(...)` for tuple-like packed registers
- `handleRegValue(...)` for scalar values
- `handleRegBool(...)`, `handleRegInt32(...)`, `handleRegUInt32(...)`
- `handleRegBuffer(...)` for fixed-size buffer registers

Common behavior in these helpers:

- ignore unrelated packet/register IDs
- on GET: send current value with `sendReport(...)`
- on SET: ignore read-only registers (`0x1xx`), apply new value, and mark state changed when different

### Event and Report Semantics

- `sendReport(pkt)` sends a report from this service index.
- `sendEvent(eventCode, data?)` emits an event report and schedules two retries
  (`+20 ms` and `+100 ms`) via delayed send for reliability.
- `sendChangeEvent()` emits `SystemEvent.Change` and local `CHANGE` event.
- `setStatusCode(...)` and `setStatusVendorCode(...)` call `sendChangeEvent()` when value changes.

### Built-In State Semantics

- `disabled` is true when the optional intensity register exists and is zero.
- `ready` requires server running, not disabled, and status code `Ready`.
- `value` and `intensity` setters emit local `CHANGE` on mutation.

### Calibration Flow

- `Calibrate` command is handled by `handleCalibrateCommand(...)`.
- If calibration support is provided, status moves to `Calibrating`, calibration runs in background,
  then status becomes `Ready` on success or `CalibrationNeeded` on failure.
- If calibration is not implemented, command is reported as not implemented.

## Client vs Server Responsibilities

| Aspect | Client (`routing.ts`) | Server (`routing.ts`) |
|---|---|---|
| Primary role | Consumes remote services by role/service class | Exposes a local service implementation |
| Bus registration | `start()` -> `bus.startClient(this)` | `start()` -> `bus.addServer(this)` |
| Binding model | Dynamic attach/detach to `Device` + `serviceIndex` | Fixed local `serviceIndex` assigned by bus |
| Main packet entry | `handlePacketOuter(pkt)` then `handlePacket(pkt)` | `handlePacketOuter(pkt)` then `handlePacket(pkt)` |
| Register abstraction | `RegisterClient<T>` per register via `addRegister(...)` | Helper handlers (`handleRegValue`, `handleRegFormat`, etc.) |
| Read path | Poll/query + consume `GET_REG` reports into cache | Serve `GET_REG` from current service state |
| Write path | `setReg`/`setRegBuffer` send commands to remote service | Accept `SET_REG`, update local state, mark `stateUpdated` |
| Caching | Register value cache + device query cache | No separate read cache layer; state fields are source of truth |
| Reconnect behavior | `ClientPacketQueue.resend()` replays queued outbound state | No reconnect replay queue in base class |
| Change propagation | Emits local events from incoming reports/events | Emits `SystemEvent.Change` via `sendChangeEvent()` |
| Broadcast mode | Optional (`broadcast=true`) for service-class fanout | N/A at base class level |

## Mermaid Diagram

```mermaid
classDiagram
    class EventSource
    class EventListener
    EventSource "1" o-- "many" EventListener : listeners

    class Bus
    class Server
    class Client
    class RegisterClient
    class Device
    class ClientPacketQueue
    class ClientRoleQuery
    class ControlServer
    class ProxyServer
    class BrainServer

    EventSource <|-- Bus
    EventSource <|-- Server
    EventSource <|-- Client
    EventSource <|-- RegisterClient
    EventSource <|-- Device

    Server <|-- ControlServer
    Server <|-- ProxyServer
    Server <|-- BrainServer

    Bus "1" o-- "many" Server : servers
    Bus "1" o-- "many" Device : devices
    Bus "1" o-- "many" Client : allClients

    Client "1" *-- "1" ClientPacketQueue : config
    Client "1" o-- "many" RegisterClient : registers
    Client --> ClientRoleQuery : parses role query

    Device "1" o-- "many" Client : attached clients
    Bus --> ControlServer : start/control

    class BroadcastServer
    class BroadcastClient
    class RoleManagerServer
    class ActuatorServer
    class DeviceWrapper
    class RoleBinding
    class ServerBindings
    class JDPacket
    class InPipe
    class OutPipe
    class DelayedPacket
    class AckAwaiter
    class JDDiagnostics
    class TokenParser
    class HumidityClient
    class SimpleSensorClient

    Server <|-- BroadcastServer
    Client <|-- BroadcastClient
    Server <|-- RoleManagerServer
    Server <|-- ActuatorServer
    SimpleSensorClient <|-- HumidityClient

    BroadcastServer "1" *-- "1" BroadcastClient : embedded client

    RoleManagerServer --> DeviceWrapper : uses
    RoleManagerServer --> RoleBinding : uses
    RoleManagerServer --> ServerBindings : uses

    JDPacket ..> AckAwaiter : ack tracking
    Server ..> DelayedPacket : delayed send queue
    OutPipe ..> JDPacket : writes packets
    InPipe ..> JDPacket : receives packets

    JDDiagnostics ..> JDPacket : from diagnostics buffer
    TokenParser ..> RegisterClient : pack/unpack formats
```

  ## Runtime Packet Flow Diagram

  ```mermaid
  flowchart TD
    App[Application code] -->|start and announce| Bus[Bus]

    subgraph LocalDevice
      direction TD
      Bus --> Servers[Server instances]
      Bus --> Clients[Client instances]
      Servers -->|send report event| Pkt[JDPacket]
      Clients -->|send command set reg| Pkt
      Servers -.->|sendEvent retries| DelayQ[DelayedPacket queue]
      DelayQ --> Pkt
    end

    Pkt -->|send core| Phys[Jacdac physical transport]
    Phys -->|incoming frame| PktIn[JDPacket from binary]
    PktIn -->|processPacket| Bus

    Bus -->|route by device id and service index| Dev[Device]
    Dev -->|dispatch packet| MatchClient[Bound Client]
    MatchClient -->|update register cache| Regs[RegisterClient values]

    Dev -->|GET register query| RegQuery[RegQuery cache]
    RegQuery --> Dev

    subgraph PipeChannel
      direction TD
      InPipe[InPipe] -->|pipe packets| Pkt
      Pkt -->|pipe packets| OutPipe[OutPipe]
      OutPipe -->|ack retries| Ack[AckAwaiter]
    end

    RoleMgr[RoleManagerServer] -->|bind and unbind roles| Bus
    RoleMgr --> BindHelpers[RoleBinding and ServerBindings and DeviceWrapper]
  ```

## Proxy Mode Logic (`routing.ts`)

Proxy mode is a special runtime mode where the device behaves as a Jacdac proxy/dongle.
Note that this code runs both in the micro:bit simulator and the actual device. Only
one of the devices will be in proxy mode at a time.
In proxy mode, normal client-side Jacdac packet handling is suppressed; the bus can
still observe packets, but user-facing `Client` handlers do not receive them.

### Simulator vs Actual Device

- Proxy mode is not switched in place between simulator and hardware; it is entered after a reset and left by rebooting without the proxy setting.
- The simulator-only transition happens when `isSimulator()` is true and both self and the newly announced device are brains, which triggers `resetToProxy()`.
- On actual hardware, the same proxy boot path is still available, but there is no simulator brain conflict trigger and no simulator-specific branch.
- Once `proxyMode` is active, the runtime behavior is the same regardless of whether it booted on the simulator or on hardware.

### Activation Paths

- Explicit control command: `ControlCmd.Proxy` in `ControlServer.handlePacketOuter(...)` calls `resetToProxy()` when not already in proxy mode.
- Simulator brain conflict path: during announce processing in `Bus.processPacket(...)`, if self and a remote device both expose brain service in simulator, runtime calls `resetToProxy()`.
- Deferred boot activation: `resetToProxy()` persists `JACDAC_PROXY_SETTING` and resets. On next boot, `startProxy()` checks the setting and starts in proxy mode.

### Startup Sequence

- `startProxy()` runs at module init time (after `__physStart()` and platform init, before background `start()`).
- If `JACDAC_PROXY_SETTING` is present, it calls:
  - `start({ disableLogger: false, disableRoleManager: true, noWait: true, proxyMode: true })`
- In `start(...)`, proxy mode does two key things:
  - Starts `ProxyServer` (`SRV_PROXY`), making proxy capability visible on the bus.
  - Sets `jacdac.bus.proxyMode = true`.

### Early vs Late Finalization

- `checkProxy()` stores `JACDAC_PROXY_SETTING_LATE` and reports current proxy status.
- `proxyFinalize()` enters proxy runtime loop, but only if proxy mode is active.
- `startProxy()` detects whether startup is:
  - **early**: no late marker; enters proxy loop immediately.
  - **late**: marker exists; starts proxy stack but lets application call `proxyFinalize()` later.
- `startSelfServers(...)` uses this pattern by calling `checkProxy()` and then `proxyFinalize()` when needed.

### Runtime Behavior in Proxy Mode

- `proxyLoop()` emits status events:
  - `StatusEvent.ProxyStarted` at entry.
  - `StatusEvent.ProxyPacketReceived` on each packet processed.
- `proxyLoop()` drives a continuous LED pulse animation and intentionally never returns.
- Client-side packet handling is suppressed by `Client.handlePacketOuter(...)` early return when `jacdac.bus.proxyMode` is true.

### Persistence and Transition Mechanics

- Entering proxy mode is reset-based and persistent across reboot using settings keys:
  - `JACDAC_PROXY_SETTING`
  - `JACDAC_PROXY_SETTING_LATE`
- `resetToProxy()` writes proxy setting then calls `control.reset()`.
- `startProxy()` consumes and clears settings before starting proxy runtime.

### State Diagram

```mermaid
stateDiagram-v2
    [*] --> NormalBoot

    state "Normal runtime" as NormalBoot
    state "Simulator brain-conflict path" as SimulatorBranch
    state "Hardware proxy-command path" as HardwareBranch
    state "Proxy boot" as ProxyBoot
    state "Proxy runtime" as ProxyRuntime
    state "Late finalize gate" as LateGate

    NormalBoot --> SimulatorBranch: isSimulator() && brain conflict
    NormalBoot --> HardwareBranch: ControlCmd.Proxy
    HardwareBranch --> ProxyBoot: resetToProxy() / reboot
    SimulatorBranch --> ProxyBoot: resetToProxy() / reboot

    ProxyBoot --> LateGate: checkProxy() sets JACDAC_PROXY_SETTING_LATE
    ProxyBoot --> ProxyRuntime: no late marker
    LateGate --> ProxyRuntime: proxyFinalize()

    ProxyRuntime --> ProxyRuntime: packets processed / status events
    ProxyRuntime --> NormalBoot: reboot without proxy setting
```

## Native C/C++ Summary (`*.cpp`, `*.c`)

The native layer is split into three responsibilities:

1. **Runtime integration and packet bridge** (`app.cpp`)
2. **Physical transport drivers** (`hw.cpp`, `jdble.cpp`, `JacdacBLE.cpp`, `mbbridge.cpp`, `led.cpp`)
3. **Protocol/utility core** (`jdlow.c`, `jdutil.c`)

### `app.cpp`

- Implements the PXT-facing Jacdac physical shim methods (`__physStart`, `__physSendPacket`, `__physGetPacket`, `__physGetDiagnostics`, etc.).
- Owns RX/TX frame queues (`LinkedFrame`) and event signaling (`EVT_DATA_READY`, `EVT_QUEUE_ANNOUNCE`, `EVT_TX_EMPTY`).
- Bridges between high-level TypeScript packet flow and the low-level Jacdac core (`jd_init`, `jd_packet_ready`, frame callbacks).
- Handles super-frame iteration using `jd_shift_frame()` and packet timestamp exposure.

### `hw.cpp`

- Non-ESP32 single-wire Jacdac PHY implementation built around `ZSingleWireSerial`.
- Provides timer hooks (`tim_*`) and UART/line control hooks expected by `jdlow.c`.
- Implements low-level bus arbitration details (line-falling detection, TX race handling, RX DMA completion).
- Reconfigures pin mode dynamically between interrupt edge-detect, RX, and TX to emulate Jacdac single-wire behavior.

### `jdlow.c`

- Core Jacdac low-level state machine and scheduler shared across platforms.
- Manages bus state, RX/TX activity flags, random backoff, announce scheduling, and timeout recovery.
- Validates received frames (size, CRC, flags), updates diagnostics counters, and hands packets to app bridge callbacks.
- Coordinates with platform hooks (`uart_*`, `tim_*`) and app hooks (`app_pull_frame`, `app_handle_frame`, `app_frame_sent`).

### `jdutil.c`

- Utility routines used by the low-level core:
  - FNV-1a hashing
  - Pseudo-random generation (`jd_random`, `jd_random_around`)
  - CRC16 calculation and frame CRC helpers
  - Super-frame chunk shifting (`jd_shift_frame`)
  - Frame payload assembly (`jd_push_in_frame`)

### `mbbridge.cpp`

- micro:bit (non-BLE Jacdac transport mode) bridge between device firmware and host tooling.
- Uses an exchange buffer in RAM and IRQ poke mechanism to move Jacdac frames between device and PC.
- Hooks `pxt::logJDFrame`/`pxt::sendJDFrame` for bidirectional frame forwarding.

### `jdble.cpp`

- micro:bit BLE Jacdac transport bootstrap.
- Initializes `JacdacBLE`, wires BLE RX events to `pxt::sendJDFrame`, and device TX to BLE indications.
- Acts as the integration glue between Jacdac frame logging callbacks and BLE service transport.

### `JacdacBLE.cpp`

- BLE service implementation used by `jdble.cpp`.
- Defines custom Jacdac BLE UUID/service/characteristics (TX, RX, diagnostics).
- Implements chunked frame transfer over BLE MTU with sequencing and reassembly.
- Raises Jacdac BLE events once a complete reassembled frame is available.

### `led.cpp`

- Jacdac status LED backend (`_setLedChannel`) with per-target PWM implementations.
- Supports RP2040, ESP32, and generic CODAL-style pin abstractions.
- Handles single LED fallback and active-low configuration logic.
