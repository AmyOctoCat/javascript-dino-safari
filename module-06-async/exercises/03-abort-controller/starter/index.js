import { createCancellableTask } from './cancellable-task.js';

console.log('--- createCancellableTask demo ---');
const task = createCancellableTask(500);

try {
  const result = await task.start('myValue');
  console.log('Task completed:', result);
} catch (err) {
  console.error('Task error:', err.message);
}
