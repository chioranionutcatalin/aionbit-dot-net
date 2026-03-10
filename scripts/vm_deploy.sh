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
    exit 1
  fi
fi

cd "${APP_DIR}"

# Curățăm containerele vechi care pot cauza KeyError: 'ContainerConfig'
echo "Cleaning up old containers..."
if docker compose version >/dev/null 2>&1; then
    docker compose down || true
elif command -v docker-compose >/dev/null 2>&1; then
    docker-compose down || true
fi

# Pornim noul build
echo "Starting deployment..."
if docker compose version >/dev/null 2>&1; then
  docker compose up -d --build --remove-orphans
elif command -v docker-compose >/dev/null 2>&1; then
  docker-compose up -d --build --remove-orphans
else
  echo "Nicio versiune de docker compose nu a fost gasita!" >&2
  exit 1
fi

# Health Check Loop (Verificăm dacă site-ul chiar a pornit)
echo "Running health check on ${HEALTH_URL}..."
for attempt in $(seq 1 "${ATTEMPTS}"); do
  status_code="$(curl -s -o /dev/null -w "%{http_code}" "${HEALTH_URL}" || true)"
  if [ "${status_code}" = "200" ]; then
    echo "Health check passed on attempt ${attempt}!"
    echo "Deploy complete: aitonbit.net is live on port ${SITE_PORT}."
    exit 0
  fi
  echo "Attempt ${attempt}: Site not ready yet (Status: ${status_code}). Waiting..."
  sleep 2
done

echo "Health check failed! Last container logs:" >&2
"${DOCKER_CMD[@]}" logs --tail 80 "${CONTAINER_NAME}" >&2 || true
exit 1