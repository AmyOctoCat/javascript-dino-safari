import { withTimeout } from './with-timeout.js';

export async function runWithRetry(task, { maxAttempts, timeoutMs }) {
  let lastErr;
  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await withTimeout(task(), timeoutMs);
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}
