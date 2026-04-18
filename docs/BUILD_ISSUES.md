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

## 2026-04-18

### 6. Homepage scroll stutter during section transitions
- Symptom: PM reported visible stutter / lag while scrolling into large editorial homepage sections, including `Point of view` and `Writing / insight`.
- Impact: homepage does not yet meet the expected quality bar for motion smoothness and functional polish.
- Investigation:
  - reduced or removed section-specific motion in problem areas
  - reduced global paint-heavy effects such as sticky header blur and decorative background overlays in the isolated preview branch
- Current assessment: the issue appears to be a combination of motion cost and global repaint cost, not a single isolated component bug.
- Current status: still open until browser QA confirms the homepage scroll feel is stable.

### 7. Mobile navigation and breadcrumb UX are incomplete
- Symptom: the current navbar does not provide a dedicated mobile hamburger experience, and the site has no breadcrumb layer despite being an SEO-led portfolio.
- Impact: mobile navigation feels unfinished, and deeper pages lack contextual wayfinding expected from a structurally strong SEO site.
- Current status: implementation is now in place in the isolated builder branch, but final browser QA is still pending.
- Follow-up:
  - complete manual browser QA for mobile nav open/close behavior, `Escape` close, link-click close, and scroll lock
  - verify breadcrumb presentation across interior pages after moving it out of the shared intro block
  - do not mark this work complete until the interaction and placement are manually checked in browser
