import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { streamFilterDangerous } from './stream-filter.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fixture = path.join(__dirname, 'fixture.csv');

const dangerous = await streamFilterDangerous(fixture, 4);
console.log('Dangerous dinosaurs (danger >= 4):', dangerous);
