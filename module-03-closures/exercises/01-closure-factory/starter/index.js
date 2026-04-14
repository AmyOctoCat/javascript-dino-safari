import { createZoneTracker } from './zone-tracker.js';

const ridge = createZoneTracker('Ridge');

ridge.logSighting('VLR-1', 'spotted near north fence');

console.log('Sighting count:', ridge.getCount());
console.log('All sightings:', ridge.getSightings());
