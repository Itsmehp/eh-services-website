# Deployment / Docker Hub Integration

This project can build and push Docker images via GitHub Actions. Follow these steps to enable automatic pushes and PR preview images.

## Required Secrets

- `DOCKERHUB_USERNAME` — Docker Hub username used for pushing images
- `DOCKERHUB_TOKEN` — Docker Hub access token or password

(Optional)
- `DOCKERHUB_REPOSITORY` — If you want to push to a different repository name than the default `eh-services`, set this to the repository (e.g. `my-org/my-repo`). By default the workflow will push to `${DOCKERHUB_USERNAME}/eh-services`.

To add secrets: go to your repository Settings → Secrets and variables → Actions and add the secrets above.

## Tagging Strategy

- PR Preview: On pull requests the workflow will build a preview image and:
  - Push to Docker Hub under tag `pr-<PR_NUMBER>` **only** if `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` are present.
  - If Docker Hub credentials are not available, the image will be saved as an artifact attached to the workflow run.

- Main branch pushes: On `push` to `main`, the workflow builds and pushes images with tags:
  - `latest`
  - `sha-<short>` (short git SHA)

- Release tags: On pushing a Git tag matching `v*.*.*` (semantic version), the workflow will also push the corresponding semver tag to Docker Hub.

## Notes & Security

- The workflow will refuse to push to Docker Hub if the credentials are missing to avoid accidental public pushes.
- If you want to push to an organization repository, set `DOCKERHUB_REPOSITORY` as described above.

## Image scanning & smoke tests ✅

- We run an automated image scan using Trivy after images are built and pushed on `main` and tag pushes. The scan uses the environment variable `TRIVY_FAIL_SEVERITY` to decide which severities should fail the job (default: **HIGH**). The scan is only performed when DockerHub credentials are present (private images require auth).

- A smoke-test job pulls the pushed image and runs it in a container, then probes `/` (or `/health`) until it receives an HTTP 200. This job runs after `build-and-push` on `main` and tag pushes and is conditional on DockerHub credentials being available.

- Multi-arch builds are optional and controlled via the repository/workflow environment variable `DOCKERHUB_MULTI_ARCH` (set to `true` to build `linux/amd64,linux/arm64`). Default is `false`.

## Local verification

- You can verify the CI-required scripts locally by running:

  ```bash
  npm run verify:ci
  ```

- Ensure `npm run lint`, `npm run typecheck` and `npm run build` succeed locally before opening PRs.
