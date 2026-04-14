import { AppError } from './app-error.js';
import { loadConfig } from './load-config.js';
import { formatLogLine } from './format-log.js';

const err = new AppError('DEMO_ERROR', 'something went wrong');
console.log(`AppError: code=${err.code}, message=${err.message}`);

try {
  const config = loadConfig({ PARK_NAME: 'DinoWorld', API_PORT: '3000' });
  console.log('Config:', config);
} catch (e) {
  console.error('Config error:', e.message);
}

console.log(formatLogLine('INFO', 'boot', { zone: 'CV', id: '1' }));
console.log(formatLogLine('WARN', 'slow'));
