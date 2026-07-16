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

### Simulator vs Actual Device

- Proxy mode is not switched in place between simulator and hardware; it is entered after a reset and left by rebooting without the proxy setting.
- The simulator-only transition happens when `isSimulator()` is true and both self and the newly announced device are brains, which triggers `resetToProxy()`.
- On actual hardware, the same proxy boot path is still available, but there is no simulator brain conflict trigger.
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
