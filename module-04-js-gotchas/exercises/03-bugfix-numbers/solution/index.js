import {
  totalPriceCents,
  parseAge,
  isStrictlyNaN,
  safeDivide,
  roundTo2,
} from './numbers.js';

console.log('--- totalPriceCents ---');
console.log("totalPriceCents(['10.00', '5.00']):", totalPriceCents(['10.00', '5.00']));
console.log("totalPriceCents(['0.10', '0.20']):", totalPriceCents(['0.10', '0.20']));
console.log("totalPriceCents(['12.10', '3.99', '0.01']):", totalPriceCents(['12.10', '3.99', '0.01']));

console.log('\n--- parseAge ---');
console.log("parseAge('25'):", parseAge('25'));
console.log("parseAge('12abc'):", parseAge('12abc'));
console.log("parseAge(''):", parseAge(''));
console.log("parseAge('08'):", parseAge('08'));

console.log('\n--- isStrictlyNaN ---');
console.log('isStrictlyNaN(NaN):', isStrictlyNaN(NaN));
console.log('isStrictlyNaN(undefined):', isStrictlyNaN(undefined));
console.log("isStrictlyNaN('hello'):", isStrictlyNaN('hello'));

console.log('\n--- safeDivide ---');
console.log('safeDivide(10, 2):', safeDivide(10, 2));
console.log('safeDivide(1, 0):', safeDivide(1, 0));
console.log('safeDivide(0, 0):', safeDivide(0, 0));

console.log('\n--- roundTo2 ---');
console.log('roundTo2(3.456):', roundTo2(3.456));
console.log('roundTo2(10):', roundTo2(10));
console.log('typeof roundTo2(3.456):', typeof roundTo2(3.456));
