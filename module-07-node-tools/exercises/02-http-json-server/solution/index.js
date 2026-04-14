import { createDinoApiServer } from './server.js';

const dinosaurs = [
  { trackingId: 'TRX-001', name: 'Rexy', species: 'T-Rex' },
  { trackingId: 'VLR-042', name: 'Blue', species: 'Velociraptor' },
];

const server = createDinoApiServer({ dinosaurs });
console.log('Dino API server created with', dinosaurs.length, 'dinosaurs');
console.log('Routes: GET /health, GET /dinosaurs, GET /dinosaurs/:id');
