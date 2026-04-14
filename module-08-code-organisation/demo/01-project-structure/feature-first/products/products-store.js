import { products as seedData } from '../../data.js';

const store = [...seedData];

export function findAll() {
  return [...store];
}

export function findById(id) {
  const p = store.find((item) => item.id === id);
  if (!p) throw new Error(`Product ${id} not found`);
  return p;
}
