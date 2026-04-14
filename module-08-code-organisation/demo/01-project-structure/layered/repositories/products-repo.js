import { products as seedData } from '../../data.js';

const store = [...seedData];

export function findAll() {
  return [...store];
}

export function findById(id) {
  return store.find((p) => p.id === id) ?? null;
}
