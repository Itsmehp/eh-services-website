#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 1 ]; then
  echo "Usage: $0 <image-ref> [port]"
  exit 2
fi

IMAGE_REF="$1"
PORT="${2:-3000}"
CONTAINER_NAME="eh-smoke-$$"
MAX_WAIT=120
SLEEP_INTERVAL=2

cleanup() {
  echo "Cleaning up container ${CONTAINER_NAME}..."
  docker rm -f "$CONTAINER_NAME" >/dev/null 2>&1 || true
}
trap cleanup EXIT

echo "Starting smoke test for image: $IMAGE_REF (mapping host port $PORT -> container 3000)"

# Run container in background, bind to localhost only
docker run -d --rm --name "$CONTAINER_NAME" -p 127.0.0.1:${PORT}:3000 "$IMAGE_REF" >/dev/null

# Wait for HTTP 200
start_ts=$(date +%s)
while true; do
  status=$(curl -s -o /dev/null -w "%{http_code}" -L "http://127.0.0.1:${PORT}/" || echo "000")
  if [[ "$status" =~ ^2 ]]; then
    echo "Health check returned $status"
    exit 0
  else
    echo "Health check returned status: $status"
  fi

  if [ $(( $(date +%s) - start_ts )) -ge $MAX_WAIT ]; then
    echo "Timeout waiting for service to become healthy"
    echo "Container logs:"
    docker logs "$CONTAINER_NAME" || true
    exit 1
  fi

  sleep $SLEEP_INTERVAL
done
