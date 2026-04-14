import {
  isUsableReading,
  getZoneName,
  addReadings,
  countTruthy,
  hasItems,
  getTimeout,
} from './coercion.js';

console.log('--- isUsableReading ---');
console.log('isUsableReading(42):', isUsableReading(42));
console.log('isUsableReading(0):', isUsableReading(0));
console.log('isUsableReading(null):', isUsableReading(null));
console.log('isUsableReading(undefined):', isUsableReading(undefined));

console.log('\n--- getZoneName ---');
console.log("getZoneName('Alpha'):", getZoneName('Alpha'));
console.log("getZoneName(''):", getZoneName(''));
console.log('getZoneName(null):', getZoneName(null));

console.log('\n--- addReadings ---');
console.log('addReadings(10, 20):', addReadings(10, 20));
console.log("addReadings('5', '3'):", addReadings('5', '3'));
console.log("addReadings('7', 3):", addReadings('7', 3));

console.log('\n--- countTruthy ---');
console.log("countTruthy([1, 0, true, false, 'yes', '']):", countTruthy([1, 0, true, false, 'yes', '']));

console.log('\n--- hasItems ---');
console.log('hasItems([1, 2, 3]):', hasItems([1, 2, 3]));
console.log('hasItems([]):', hasItems([]));

console.log('\n--- getTimeout ---');
console.log('getTimeout({ timeout: 3000 }):', getTimeout({ timeout: 3000 }));
console.log('getTimeout({ timeout: 0 }):', getTimeout({ timeout: 0 }));
console.log('getTimeout({ timeout: null }):', getTimeout({ timeout: null }));
