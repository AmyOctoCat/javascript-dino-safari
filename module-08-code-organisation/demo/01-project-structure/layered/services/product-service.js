import * as repo from '../repositories/products-repo.js';

export function listProducts() {
  return repo.findAll();
}

export function getProduct(id) {
  const p = repo.findById(id);
  if (!p) throw new Error(`Product ${id} not found`);
  return p;
}
