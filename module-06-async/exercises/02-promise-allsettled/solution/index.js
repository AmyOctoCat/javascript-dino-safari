import { summarizeSensorBatch } from './summarize-batch.js';

const sensorFns = [
  () => Promise.resolve('temperature: 22C'),
  () => Promise.reject(new Error('sensor offline')),
  () => Promise.resolve('humidity: 45%'),
];

console.log('--- summarizeSensorBatch demo ---');
const results = await summarizeSensorBatch(sensorFns);
console.log('Batch results:', results);
