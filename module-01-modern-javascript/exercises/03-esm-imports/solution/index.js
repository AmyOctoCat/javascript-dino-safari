import { formatAlert } from './format-alert.js';
import { getExtension } from './get-extension.js';

console.log(formatAlert({ name: 'Rex', zone: 'Valley', dangerLevel: 5 }));
console.log(formatAlert({ name: 'Bronto', zone: 'Lake', dangerLevel: 1 }));
console.log(formatAlert(null));

console.log('Extension of "data.json":', getExtension('data.json'));
console.log('Extension of "index.js":', getExtension('index.js'));
