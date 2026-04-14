import {
  isNullish,
  betterTypeof,
  isActuallyNaN,
  isArray,
  areSameValue,
} from './equality.js';

console.log('--- isNullish ---');
console.log('isNullish(null):', isNullish(null));
console.log('isNullish(undefined):', isNullish(undefined));
console.log('isNullish(0):', isNullish(0));
console.log("isNullish(''):", isNullish(''));

console.log('\n--- betterTypeof ---');
console.log('betterTypeof(null):', betterTypeof(null));
console.log('betterTypeof([1, 2]):', betterTypeof([1, 2]));
console.log('betterTypeof(42):', betterTypeof(42));
console.log("betterTypeof('hi'):", betterTypeof('hi'));

console.log('\n--- isActuallyNaN ---');
console.log('isActuallyNaN(NaN):', isActuallyNaN(NaN));
console.log('isActuallyNaN(undefined):', isActuallyNaN(undefined));
console.log("isActuallyNaN('hello'):", isActuallyNaN('hello'));

console.log('\n--- isArray ---');
console.log('isArray([1, 2, 3]):', isArray([1, 2, 3]));
console.log("isArray('hello'):", isArray('hello'));
console.log('isArray(null):', isArray(null));

console.log('\n--- areSameValue ---');
console.log('areSameValue(1, 1):', areSameValue(1, 1));
console.log('areSameValue(NaN, NaN):', areSameValue(NaN, NaN));
console.log('areSameValue(0, -0):', areSameValue(0, -0));
