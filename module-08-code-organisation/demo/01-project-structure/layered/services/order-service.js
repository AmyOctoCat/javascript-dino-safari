import * as productService from './product-service.js';
import * as ordersRepo from '../repositories/orders-repo.js';
import { createOrder } from '../models/order.js';

export function placeOrder(userId, productId, quantity) {
  const product = productService.getProduct(productId);
  if (product.stock < quantity) {
    throw new Error(`Insufficient stock for ${product.name}`);
  }
  product.stock -= quantity;
  const totalCents = product.priceCents * quantity;
  const order = createOrder({ userId, productId, quantity, totalCents });
  return ordersRepo.save(order);
}

export function getUserOrders(userId) {
  return ordersRepo.findByUserId(userId);
}
