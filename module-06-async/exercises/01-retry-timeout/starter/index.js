import { withTimeout } from './with-timeout.js';
import { runWithRetry } from './run-with-retry.js';

const sampleTask = () =>
  new Promise((resolve) => setTimeout(() => resolve('hello'), 50));

console.log('--- withTimeout demo ---');
try {
  const result = await withTimeout(sampleTask(), 200);
  console.log('withTimeout result:', result);
} catch (err) {
  console.error('withTimeout error:', err.message);
}

console.log('\n--- runWithRetry demo ---');
let attempt = 0;
const flaky = () =>
  new Promise((resolve, reject) => {
    attempt++;
    if (attempt < 3) reject(new Error('transient failure'));
    else resolve('success');
  });

try {
  const result = await runWithRetry(flaky, { maxAttempts: 5, timeoutMs: 200 });
  console.log('runWithRetry result:', result);
} catch (err) {
  console.error('runWithRetry error:', err.message);
}
