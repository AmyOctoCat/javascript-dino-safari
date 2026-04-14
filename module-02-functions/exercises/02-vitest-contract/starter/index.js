import { formatSighting } from './format-sighting.js';

console.log(
  'formatSighting(full):',
  formatSighting({
    trackingId: 'TRX-001',
    name: 'Rex',
    species: 'Tyrannosaurus',
    zone: 'Cretaceous Valley',
    dangerLevel: 5,
  }),
);

console.log('formatSighting(empty):', formatSighting({}));
console.log('formatSighting(null):', formatSighting(null));
