import { appendSighting, readSightings } from './sightings-io.js';

const filePath = 'sightings.ndjson';

await appendSighting(filePath, { id: '1', species: 'T-Rex', zone: 'Cretaceous Valley' });
await appendSighting(filePath, { id: '2', species: 'Velociraptor', zone: 'Raptor Ridge' });

const sightings = await readSightings(filePath);
console.log('All sightings:', sightings);
