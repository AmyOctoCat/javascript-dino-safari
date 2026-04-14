import { createAlertFn } from './create-alert-fn.js';
import { createTaggedLogger } from './create-tagged-logger.js';

const warn = createAlertFn('WARN');
console.log(warn('fence stress'));

const crit = createAlertFn('CRITICAL');
const lagoon = createTaggedLogger('LAGOON', crit);
console.log(lagoon('breach detected'));
