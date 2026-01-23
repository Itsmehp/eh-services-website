# CI Registry Init — Phase 3 Complete

Status: Draft — awaiting CI runs on `main` / tag merges to verify `image-scan` and `smoke-test` jobs pass.

Summary of changes:

- Added `scripts/ci-smoke-test.sh` — starts container from image ref, waits for an HTTP 200 on `/`, prints logs on failure, and cleans up. Used by CI and for local smoke checks.
- Added `scripts/ci-trivy-check.sh` — local wrapper for `trivy image` with configurable severity.
- Added `ci:smoke-local` and `ci:trivy-local` npm scripts for local testing.
- Updated `.github/workflows/ci.yml`:
  - Exposes `IMAGE_REF` env as `${{ env.IMAGE_REPO }}:sha-<short>` for downstream jobs.
  - Adds `image-scan` job using `aquasecurity/trivy-action@v0`, configured to fail when vulnerabilities are at or above `TRIVY_FAIL_SEVERITY` (default: `HIGH`).
  - Adds `smoke-test` job that pulls the image and runs `scripts/ci-smoke-test.sh`.
  - Introduced `DOCKERHUB_MULTI_ARCH` (default `false`) to optionally build multi-arch images when `true`.
- Documented the scanning policy, smoke-test behavior, and multi-arch toggle in `docs/DEPLOYMENT.md`.

Acceptance criteria & notes:

- The workflow runs `image-scan` and `smoke-test` only on `main` and tag pushes and only when DockerHub credentials are present to allow scanning/pulling private images.
- Local testing instructions: `npm run ci:smoke-local <image-ref>` and `npm run ci:trivy-local <image-ref>`.

Proposed commit message for the completion commit:

"ci: phase 3 — build & publish: add Trivy image scan, smoke-test job, multi-arch option; add local TDD helpers"

Once CI green on `main` (image-scan & smoke-test), delete this note's 'Draft' marker and include CI run links and any follow-up tasks (e.g., add branch protection to require `image-scan` or adjust `TRIVY_FAIL_SEVERITY`).
