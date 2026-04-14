import { Dinosaur, FlyingDinosaur } from './dinosaur.js';

const tank = new Dinosaur('Tank', 'Triceratops', 'Herbivore Meadow');
console.log(tank.describe());

const skyler = new FlyingDinosaur('Skyler', 'Pteranodon', 'Aviary Ascent', 6);
console.log(skyler.describe());
console.log('Is Dinosaur?', skyler instanceof Dinosaur);
console.log('Wingspan:', skyler.wingspanM);
