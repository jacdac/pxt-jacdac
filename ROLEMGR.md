# Role Manager Comparison: pxt-jacdac vs jacdac-c

This document compares the Role Manager implementation in:
- TypeScript: `pxt-jacdac/rolemgr.ts`
- C: `jacdac-c/client/rolemgr.c`

It summarizes functional differences and provides a parity checklist for aligning behavior.

## Scope

Compared areas:
- Service commands and registers
- Binding data model
- Auto-bind strategy and cadence
- Hint/query handling
- Persistence and rebinding stability
- Change/event signaling
- Device lifecycle handling

## High-Level Summary

Both implementations expose the same Role Manager service surface (AutoBind register, AllRolesAllocated register, SetRole, ListRoles, ClearAllRoles) and both auto-bind unbound roles to matching services.

However, they are not algorithmically equivalent:
- `rolemgr.ts` is policy-heavy, host-aware, and persistence-aware.
- `rolemgr.c` is role-object-centric, simple first-fit, and process-loop driven.

## Detailed Comparison

### 1) Internal Binding Model

TypeScript (`rolemgr.ts`):
- Reconstructs bindings from `jacdac.bus.allClients` during each bind pass.
- Uses temporary `RoleBinding` and `DeviceWrapper` structures.
- Applies assignments via settings persistence (`setRole(...)`) and attach cache invalidation.

C (`rolemgr.c`):
- Maintains a persistent linked list of `jd_role_t` role objects (`state->roles`).
- Each role holds direct pointer to assigned `jd_device_service_t`.
- Assignment updates service flags (`JD_DEVICE_SERVICE_FLAG_ROLE_ASSIGNED`).

Implication:
- TS computes then converges via attach logic.
- C mutates canonical role state directly.

### 2) Auto-Bind Trigger and Cadence

TypeScript:
- Auto-bind is gated in routing (`routing.ts`) by `roleManagerServer.autoBind && roleManagerServer.running`.
- Binding invoked every two announces (`autoBindCnt >= 2`).

C:
- Auto-bind runs in `rolemgr_process()` on fixed interval (`AUTOBIND_MS`, 980 ms).
- Gated by `state->auto_bind_enabled`.

Implication:
- TS cadence depends on announce timing.
- C cadence depends on process sampling interval.

### 3) Assignment Strategy

TypeScript:
- Groups roles by host (`roleQuery.device` or role prefix before `/`).
- Prioritizes hosts with more bindings.
- Scores candidate devices by `(numBound << 8) | numPossible`.
- Handles `serviceOffset` first, then ordered class-based matches.
- Includes deterministic tie-breaks by host/device id.

C:
- Applies hints first (`rolemgr_use_hint`).
- Then first-fit scan over devices/services for matching class.
- No host grouping or multi-role co-location optimization.

Implication:
- TS tends to produce more coherent multi-role placement.
- C is simpler and predictable but less globally optimal.

### 4) Hint/Query Semantics

TypeScript:
- Uses parsed role query (`roleQuery`) and `matchesRoleAt(...)` checks.
- Has explicit "self" sanity/unbind logic in `bindRoles()`.

C:
- Parses bracket hints during `jd_role_alloc()` (`[app:N]`, `[int:N]`).
- Supports forced hint behavior (`state->force_hints`) via `jd_role_set_hints(...)`.

Implication:
- Both support hinted placement, but the mechanisms differ.

### 5) Persistence and Rebinding Stability

TypeScript:
- Persists role assignments in settings keyspace `#jdr:<deviceId>:<serviceIdx>`.
- `tryBindFromStoredRole(...)` restores explicit mapping for unbound clients.
- `setRole(...)` strips query suffix before storing role name.

C:
- No built-in persistent role mapping in role manager state.
- Role bindings are in-memory only (unless external app layer persists hints/roles).

Implication:
- TS can preserve assignment stability across restarts/re-enumeration.
- C relies on runtime role list and current topology.

### 6) Command Semantics: SetRole

TypeScript:
- `RoleManagerCmd.SetRole` updates persisted mapping and clears attach cache.
- Does not directly set `Client.device` in command handler; attach path reconnects.

C:
- `JD_ROLE_MANAGER_CMD_SET_ROLE` resolves role by name and directly sets/clears target service pointer.

Implication:
- TS command path is eventually consistent via attach.
- C command path is immediate in role state.

### 7) ListRoles Payload Source

TypeScript:
- Lists from `jacdac.bus.allClients` via `OutPipe.respondForEach(...)`.

C:
- Streams from role object list (`state->roles`) with hidden-role filtering.

Implication:
- TS list reflects active client objects.
- C list reflects allocated role objects (including role metadata model).

### 8) AllRolesAllocated

TypeScript:
- Computed at read time: all clients are broadcast or attached.

C:
- Updated by scanning `state->roles` and checking `r->service` pointers.

Implication:
- Equivalent intent, but source-of-truth differs (clients vs role objects).

### 9) Change/Event Signaling

TypeScript:
- Hashes current binding state (`bindingHash()`) and sends change event when hash changes.

C:
- Marks `state->changed` on mutation.
- Emits `JD_EV_CHANGE` on a debounce timer (~50 ms).
- Also emits per-role client event via `rolemgr_role_changed(...)`.

Implication:
- C exposes richer role-change signaling at client-event layer.

### 10) Device Lifecycle

TypeScript:
- Relies on bus detach/attach cache invalidation and rebinding pass.

C:
- Explicit `rolemgr_device_destroyed(...)` unbinds roles tied to destroyed device.

Implication:
- C has direct cleanup hook in role manager.

## Behavioral Drift Risks

1. Same logical setup may yield different bindings due to strategy differences.
2. Manual SetRole behavior may appear immediate in C but delayed in TS until attach settles.
3. Persistence in TS can override expected fresh auto-bind behavior if stale settings remain.
4. AllRolesAllocated can diverge if role object set and client set differ.

## Parity Checklist

Legend:
- [x] Aligned
- [~] Partially aligned
- [ ] Not aligned

### Protocol Surface

- [x] AutoBind register exists and is writable in both.
- [x] AllRolesAllocated register exists and is readable in both.
- [x] ClearAllRoles command exists in both.
- [x] SetRole command exists in both.
- [x] ListRoles command exists in both.

### Binding Core

- [~] One-service-per-role exclusivity enforcement is present in both (different mechanisms).
- [ ] Identical assignment algorithm (TS host/scoring vs C first-fit).
- [ ] Identical tie-break behavior.
- [~] serviceOffset/hint precedence behavior matches exactly.

### Persistence and Stability

- [ ] Persistent role binding storage in C equivalent to TS `settings` map.
- [~] Stable rebinding after topology churn matches across runtimes.
- [ ] Query handling in persisted names matches (TS strips query; C path does not store this model).

### Command Behavior

- [ ] SetRole has identical immediate side effects (TS eventual attach vs C direct assignment).
- [~] ClearAllRoles side effects equivalent (cache/state/event timing differs).
- [~] ListRoles source semantics equivalent (clients vs role objects).

### Runtime Cadence

- [ ] Auto-bind trigger/cadence equivalent (announce-driven TS vs timer-driven C).
- [ ] Event emission semantics equivalent (hash change TS vs changed/debounce + role event C).

### Lifecycle and Cleanup

- [~] Device removal unbind behavior equivalent (explicit C hook vs TS attach/cache flow).
- [ ] Hidden-role filtering parity (present in C role list, not modeled in TS client listing).

## Suggested Parity Work Items

1. Decide target semantics first:
   - Make C match TS policy-rich behavior, or
   - Make TS match C simpler role-object behavior.

2. If targeting TS-like behavior in C:
   - Add host-group aware scoring pass before first-fit fallback.
   - Add optional persistent mapping layer keyed by deviceId/serviceIdx.

3. If targeting C-like behavior in TS:
   - Introduce explicit role objects with direct assignment state.
   - Make SetRole update active binding immediately, not only settings/cache.

4. Normalize cadence/events:
   - Choose a shared rebinding trigger model.
   - Align change-event timing and role-changed notifications.

5. Add parity test matrix:
   - Multi-role same-host placement
   - serviceOffset and hint interactions
   - Manual SetRole override and recovery
   - Device disappear/reappear rebinding
   - Restart persistence behavior

## References

- `pxt-jacdac/rolemgr.ts`
- `pxt-jacdac/routing.ts`
- `jacdac-c/client/rolemgr.c`
- `jacdac-c/client/routing.c`
- `jacdac-c/inc/jd_client.h`
