import { feeder } from './feeder.js';

console.log('Station:', feeder.name);
console.log('Stocked:', feeder.stock(50), 'kg');
console.log('Stocked:', feeder.stock(20), 'kg');

console.log(feeder.feed('Rex', 15));
console.log(feeder.feed('Fang', 10));

console.log('Remaining:', feeder.remaining(), 'kg');
console.log('Feeding log:', feeder.log());
