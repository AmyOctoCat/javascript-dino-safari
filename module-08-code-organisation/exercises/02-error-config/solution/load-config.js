import { AppError } from './app-error.js';

export function loadConfig(env) {
  const parkName = env.PARK_NAME?.trim();
  if (!parkName) {
    throw new AppError('CONFIG_MISSING', 'PARK_NAME is required');
  }

  const portRaw = env.API_PORT ?? '8080';
  const port = Number(portRaw);
  if (!Number.isInteger(port) || port <= 0) {
    throw new AppError('CONFIG_INVALID', 'API_PORT must be a positive integer');
  }

  return { parkName, apiPort: port };
}
