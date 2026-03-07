#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-$HOME/aionbit-dot-net}"
CONTAINER_NAME="${CONTAINER_NAME:-aionbit-web}"
SITE_PORT="${SITE_PORT:-8081}"
HEALTH_URL="http://127.0.0.1:${SITE_PORT}/"
ATTEMPTS="${ATTEMPTS:-20}"

if ! command -v docker >/dev/null 2>&1; then
  echo "docker is required on VM." >&2
  exit 1
fi

if ! command -v curl >/dev/null 2>&1; then
  echo "curl is required on VM." >&2
  exit 1
fi

DOCKER_CMD=(docker)
if ! docker ps >/dev/null 2>&1; then
  if sudo -n docker ps >/dev/null 2>&1; then
    DOCKER_CMD=(sudo docker)
  else
    echo "docker requires elevated privileges for this user." >&2
    echo "Run once on VM: sudo usermod -aG docker $USER, then logout/login." >&2
    exit 1
  fi
fi

cd "${APP_DIR}"

if [ ! -d "out" ]; then
  echo "out/ not found in ${APP_DIR}. Upload step likely failed." >&2
  exit 1
fi

if [ ! -f ".env.runtime" ]; then
  echo ".env.runtime not found in ${APP_DIR}. Secret injection likely failed." >&2
  exit 1
fi

if [ ! -f "docker-compose.yml" ]; then
  echo "docker-compose.yml not found in ${APP_DIR}." >&2
  exit 1
fi

"${DOCKER_CMD[@]}" compose up -d --build --remove-orphans

for attempt in $(seq 1 "${ATTEMPTS}"); do
  status_code="$(curl -s -o /dev/null -w "%{http_code}" "${HEALTH_URL}" || true)"
  if [ "${status_code}" = "200" ]; then
    echo "Health check passed on attempt ${attempt}: ${HEALTH_URL}"
    echo "Deploy complete. ${CONTAINER_NAME} serves static out/ on port ${SITE_PORT}."
    exit 0
  fi
  sleep 1
done

echo "Health check failed for ${HEALTH_URL}. Last container logs:" >&2
"${DOCKER_CMD[@]}" logs --tail 80 "${CONTAINER_NAME}" >&2 || true
exit 1
