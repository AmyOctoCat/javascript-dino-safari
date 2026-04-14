import { createDinoRegistry } from './dino-registry.js';

const registry = createDinoRegistry();

registry.add({ trackingId: 'T01', species: 'Trex', zone: 'Carnivore Canyon', name: 'Rex' });
registry.add({ trackingId: 'T02', species: 'Triceratops', zone: 'Herbivore Meadow', name: 'Tank' });
registry.add({ trackingId: 'T03', species: 'Trex', zone: 'Carnivore Canyon', name: 'Fang' });

console.log('Get T01:', registry.get('T01'));
console.log('Carnivore Canyon:', registry.findByZone('Carnivore Canyon'));
console.log('Species:', registry.listSpecies());
