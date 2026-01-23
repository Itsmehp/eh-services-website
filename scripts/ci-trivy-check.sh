#!/usr/bin/env bash
set -euo pipefail

if [ -z "${1:-}" ]; then
  echo "Usage: $0 <image-ref>"
  exit 2
fi
IMAGE="$1"
SEVERITY="${TRIVY_FAIL_SEVERITY:-HIGH}"

if ! command -v trivy >/dev/null 2>&1; then
  echo "trivy not found in PATH. Install locally or run via GitHub Actions."
  exit 2
fi

echo "Running trivy against ${IMAGE} with severity ${SEVERITY}"
trivy image --severity "$SEVERITY" --exit-code 1 "$IMAGE"
