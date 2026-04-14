/**
 * Demo: object literals, methods, and the `this` keyword.
 *
 * Run: node demo/01-object-literals
 */

// --- 1. Object literal with methods -----------------------------------

const feeder = {
  name: 'Carnivore Canyon Feeder',
  supply: 50,

  stock(kg) {
    this.supply += kg;
    return this.supply;
  },

  status() {
    return `${this.name}: ${this.supply}kg remaining`;
  },
};

console.log('\n--- Object literal methods ---');
console.log(feeder.status());
feeder.stock(20);
console.log(feeder.status());

// --- 2. `this` refers to the object before the dot --------------------

const paddockA = {
  zone: 'Paddock A',
  announce() {
    return `Welcome to ${this.zone}!`;
  },
};

const paddockB = {
  zone: 'Paddock B',
  announce: paddockA.announce, // same function, different `this`
};

console.log('\n--- this follows the dot ---');
console.log('paddockA:', paddockA.announce());
console.log('paddockB:', paddockB.announce());

// --- 3. Losing `this` when extracting a method -----------------------

const { announce } = paddockA;

console.log('\n--- Extracted method - this is undefined ---');
try {
  console.log(announce());
} catch (err) {
  console.log('Error:', err.message);
  console.log('Fix: use .bind(), or call via the object');
}

// --- 4. Shorthand property names and computed keys --------------------

const species = 'Velociraptor';
const danger = 4;

const dino = {
  species,
  danger,
  ['zone_' + danger]: 'High Security',
};

console.log('\n--- Shorthand & computed keys ---');
console.log(dino);
