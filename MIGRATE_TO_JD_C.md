# Migrate `pxt-jacdac` to `jacdac-c`

This document summarizes the current comparison between native C/C++ code in `pxt-jacdac` and `jacdac-c`, and proposes a practical Phase 1 migration plan.

## Executive Summary

Using `jacdac-c` as a subrepo of `pxt-jacdac` is feasible, but not as a direct drop-in replacement.

Key point:
- The low-level physical layer and utility logic are very similar and can be shared.
- The runtime architecture is different, so full replacement would break current `pxt-jacdac` behavior without additional adaptation.

Recommended strategy:
- Phase 1: migrate only low-level PHY/util internals behind a compatibility layer.
- Phase 2 (optional): evaluate moving toward full `jacdac-c` runtime/service loop.

## What Was Compared

### `pxt-jacdac` native core
- `jdlow.c`, `jdlow.h`
- `jdutil.c`
- `jdprotocol.h`
- `app.cpp`
- `hw.cpp`, `hw-esp32.c`
- bridge-related native files (`mbbridge.cpp`, BLE files)

### `jacdac-c` equivalents
- `source/jd_physical.c`
- `source/jd_util.c`
- `source/interfaces/tx_queue.c`
- `source/interfaces/simple_rx.c`
- `source/jd_protocol.c`
- `inc/jd_physical.h`, `inc/jd_protocol.h`
- `inc/interfaces/jd_hw.h`, `inc/jd_config.h`
- `CMakeLists.txt`

## Findings

## 1) Strong code overlap in low-level logic

There is high overlap between:
- `pxt-jacdac/jdlow.c` and `jacdac-c/source/jd_physical.c`
- `pxt-jacdac/jdutil.c` and `jacdac-c/source/jd_util.c`

This is the best candidate area for immediate deduplication.

## 2) Architectural mismatch in packet flow and runtime

`pxt-jacdac` today:
- PHY calls app callbacks (`app_pull_frame`, `app_frame_sent`, `app_handle_frame`, `app_queue_annouce`).
- TypeScript-side runtime remains central to behavior.

`jacdac-c` today:
- PHY expects tx/rx queue interfaces (`jd_tx_get_frame`, `jd_tx_frame_sent`, `jd_rx_frame_received`).
- `jd_init()` initializes allocator/tx/rx/services and assumes `jd_process_everything()` model.

Result:
- A direct swap of `jdlow.c` for `jacdac-c` PHY is not enough.
- `pxt-jacdac` needs a compatibility shim if we want to keep current JS-facing behavior.

## 3) API/header differences exist

Examples include:
- packet field naming differences (`service_number` vs `service_index` conventions)
- panic/log macro model (`jd_panic` vs `JD_PANIC` and `JD_DMESG/JD_LOG` conventions)
- compile-time config model centered on `jd_user_config.h`

These are manageable with adapter headers and compile flags.

## 4) Build integration mismatch

`jacdac-c` expects:
- source selection via external build system (example CMake glob)
- include path with a user config header directory

`pxt-jacdac` uses:
- explicit native file list in `pxt.json`

So Phase 1 must define explicit source inclusion and config glue for PXT builds.

## Migration Approach

## Phase 1 Goal

Replace only low-level PHY/util internals with `jacdac-c` sources while preserving current `pxt-jacdac` external behavior and TS integration.

Non-goal in Phase 1:
- Do not adopt full `jacdac-c` service runtime (`jd_services`, `jd_process_everything`) yet.

## Phase 1 Deliverables

1. Add `jacdac-c` to repository layout as a subrepo-style directory.
2. Compile a minimal subset of `jacdac-c` sources in PXT native builds.
3. Add compatibility layer(s) to preserve current app callback model and JS ABI.
4. Keep `hw.cpp` and `hw-esp32.c` as platform HAL providers.
5. Pass existing `pxt build --local` for supported targets and maintain runtime behavior.

## Phase 1 Implementation Plan

## Step 0: Pin subrepo structure

- Add `jacdac-c` under a stable path (for example `libs/jacdac-c` or `jacdac-c`).
- Pin to a known commit hash and document update workflow.
- Prefer subtree-style vendoring for downstream reliability unless strict git submodule behavior is required.

Output:
- repeatable source location and version pin.

## Step 1: Introduce config adapter for `jacdac-c`

Create a local adapter config header used when compiling `jacdac-c` from PXT.

Define/confirm at minimum:
- `JD_PHYSICAL=1`
- `JD_CLIENT` and bridge flags to match current behavior expectations
- `JD_DMESG`/logging settings compatible with target constraints
- timing and sleep knobs (`JD_TIM_OVERHEAD`, `JD_WR_OVERHEAD`, `JD_MIN_MAX_SLEEP`)
- allocation mode that works in PXT (`JD_SIMPLE_ALLOC` / `JD_HW_ALLOC` choices)

Output:
- one authoritative PXT-specific `jacdac-c` configuration layer.

## Step 2: Replace utility implementation first

- Swap `pxt-jacdac/jdutil.c` implementation to `jacdac-c/source/jd_util.c` (or compile upstream source directly).
- Provide small compatibility wrappers for any symbol drift.

Why first:
- lower risk than PHY replacement
- validates include/config strategy early

Output:
- util parity with successful compile across native targets.

## Step 3: Introduce PHY compatibility shim

Goal: compile `jacdac-c/source/jd_physical.c` without changing `app.cpp` JS-facing contract.

Implement adapter functions/wrappers to map:
- `jd_tx_get_frame` <-> existing tx queue path in `app.cpp`
- `jd_tx_frame_sent` <-> existing frame free/notify path
- `jd_rx_frame_received` <-> existing rx queue/notification path

Keep current behavior for:
- queue events (`EVT_DATA_READY`, `EVT_QUEUE_ANNOUNCE`, `EVT_TX_EMPTY`)
- frame logging hooks (`pxt::logJDFrame`)
- bridge injection behavior (`sendExtFrame` path)

Output:
- `jacdac-c` PHY running with unchanged public behavior of `__phys*` API.

## Step 4: Keep platform HAL as-is, only retarget signatures

Continue using:
- `hw.cpp` for CODAL targets
- `hw-esp32.c` for ESP32 targets

Adjust only signature/macro compatibility if needed so these satisfy `jacdac-c` hardware interface contracts.

Output:
- no platform transport rewrite in Phase 1.

## Step 5: Wire PXT build lists

- Update `pxt.json` native file list to include selected `jacdac-c` files and new shim/config files.
- Ensure no duplicate symbol collisions with old implementations.
- Keep old files only where still needed by bridge glue.

Output:
- deterministic builds with explicit source set.

## Step 6: Validation matrix

Build validation:
- `pxt build --local` on primary target set used in repo CI/workflow.

Runtime validation:
- packet tx/rx on wire
- queue readiness events and packet retrieval behavior
- diagnostics output (`jd_get_diagnostics`) still available
- USB/BLE bridge paths continue functioning

Regression checks:
- no behavior regressions in existing TS APIs around `__physSendPacket`, `__physGetPacket`, `__physStart`

Output:
- Phase 1 signoff report with pass/fail per target.

## Risks and Mitigations

Risk: hidden behavior drift in queue timing and event ordering.
Mitigation:
- keep existing `app.cpp` queue ownership in Phase 1 and adapt via wrappers.

Risk: compile-time config mismatch causes subtle runtime differences.
Mitigation:
- centralize all `jacdac-c` defines in one PXT adapter header and document rationale.

Risk: target-specific HAL assumptions break under new headers/macros.
Mitigation:
- preserve `hw.cpp` and `hw-esp32.c` logic; change only compatibility signatures.

## Estimated Effort

Phase 1 (PHY/util dedup with compatibility shim):
- about 2 to 4 engineering days, plus target test time.

Full runtime convergence to `jacdac-c` services/client loop:
- multi-week effort, separate project.

## Phase 1 Exit Criteria

Phase 1 is complete when all are true:
1. `jacdac-c` low-level util and physical layers are used in `pxt-jacdac` build.
2. Existing `pxt-jacdac` JS/native public behavior remains unchanged.
3. Primary target builds pass and core on-wire behavior is validated.
4. Migration is documented and reproducible with pinned `jacdac-c` revision.
