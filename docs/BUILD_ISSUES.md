# Build and Runtime Issues Log

## 2026-04-11

### 1. Missing Sanity environment variables blocked startup
- Symptom: the app failed during startup when `sanity/env.ts` could not resolve `NEXT_PUBLIC_SANITY_DATASET`.
- Impact: local development could not boot cleanly, and CMS-backed pages would crash before render.
- Resolution: confirmed the required Sanity variables and added `NEXT_PUBLIC_SANITY_API_VERSION` to the local env file used for preview.
- Follow-up: add a committed `.env.example` so required variables are visible to future contributors.

### 2. Next.js local dev startup stalled under Node 25
- Symptom: `next dev --webpack` hung before binding to `localhost`, with no usable local URL.
- Impact: the site could not be previewed from the main workspace.
- Resolution: installed Node `22.22.2` locally and used that runtime for the working preview environment.
- Follow-up: standardize the project runtime with `.nvmrc` or documented engine constraints.

### 3. Filesystem access in the `Documents` workspace caused startup stalls
- Symptom: Next.js CLI and supporting file reads blocked before the dev server became ready.
- Impact: the primary workspace was unreliable for running the app locally.
- Resolution: created a clean preview workspace outside `Documents` under `~/.codex/memories/portfolio-preview` and ran the app there successfully.
- Follow-up: verify whether the original repo location is affected by iCloud/File Provider behavior and, if so, move the working repo to a normal local directory.

### 4. `/tmp` preview install failed on postinstall binary execution
- Symptom: `npm install` in `/tmp/portfolio-preview` failed with `Permission denied` on `node_modules/.bin/napi-postinstall`.
- Impact: `/tmp` was not usable for a full local preview.
- Resolution: abandoned the `/tmp` preview and used `~/.codex/memories/portfolio-preview` instead.
- Follow-up: keep preview workspaces on a normal writable filesystem when native package postinstalls are required.

### 5. Verification commands were unreliable in the original workspace
- Symptom: `npm run lint`, `npm run build`, and targeted CLI checks stalled without returning output in the main repo.
- Impact: automated verification could not be completed from the original workspace.
- Resolution: proceeded with manual validation through the live preview environment and documented the workspace/runtime blockers.
- Follow-up: rerun lint and build from a stable runtime and filesystem location once the repo is relocated or normalized.

## Repository Hardening Applied

### 2026-04-11
- Added `.nvmrc` pinned to Node `22.22.2`.
- Added `.env.example` so required Sanity variables are explicit.
- Added `npm run dev:webpack` for the stable local startup path.
- Updated `README.md` with the working runtime and startup instructions.
