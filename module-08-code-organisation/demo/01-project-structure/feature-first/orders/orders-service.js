import { getProduct } from '../products/index.js';
import * as store from './orders-store.js';

let nextId = 1;

export function placeOrder(userId, productId, quantity) {
  const product = getProduct(productId);
  if (product.stock < quantity) {
    throw new Error(`Insufficient stock for ${product.name}`);
  }
  product.stock -= quantity;
  const order = {
    id: `ORD-${String(nextId++).padStart(3, '0')}`,
    userId,
    productId,
    quantity,
    totalCents: product.priceCents * quantity,
    status: 'placed',
    createdAt: new Date().toISOString(),
  };
  return store.save(order);
}

export function getUserOrders(userId) {
  return store.findByUserId(userId);
}
