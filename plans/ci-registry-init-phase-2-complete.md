## Phase 2 Complete: Add CI (lint / typecheck / build / test)

Phase 2 implemented and committed to branch `ci/init/dockerhub`. The repository now has a GitHub Actions workflow that performs validation jobs on PRs and pushes and supports PR preview builds and Docker Hub publish on `main`.

**Files created/changed:**
- `.github/workflows/ci.yml`
- `package.json` (added/updated scripts: `typecheck`, `ci:verify:local`, `verify:ci`)
- `scripts/validate-ci.js`
- `docs/DEPLOYMENT.md`

**Functions created/changed:**
- `scripts/validate-ci.js` — validation script to ensure CI scripts exist
- `package.json` scripts updated to include CI verification and typecheck

**Tests created/changed:**
- `verify:ci` script (runs `node scripts/validate-ci.js`)
- `ci:verify:local` (runs `lint`, `typecheck`, `build` locally)

**Review Status:** NEEDS_REVIEW

**Git Commit Message:**
ci: add CI workflow and local verification scripts

- Add `.github/workflows/ci.yml` with `validate`, `pr-preview`, and `build-and-push` jobs
- Add `scripts/validate-ci.js` and `verify:ci` script
- Add `docs/DEPLOYMENT.md` documenting secrets and tagging strategy

---

**Notes & Next Steps:**
1. I pushed the branch `ci/init/dockerhub` to origin. You can open the draft PR at:
   https://github.com/Itsmehp/eh-services-website/pull/new/ci/init/dockerhub
2. The workflow will only push images if GitHub secrets `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` exist (you added them).
3. Recommend enabling branch protection rules requiring passing CI on `main` and adding the repo Docker Hub namespace if you want explicit naming.

Please review the changes or allow me to run a code review pass (I will invoke the code-review subagent next) and then open a draft PR for you if you want me to set reviewers/labels.
