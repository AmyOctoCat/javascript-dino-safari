let nextId = 1;

export function createOrder({ userId, productId, quantity, totalCents }) {
  return {
    id: `ORD-${String(nextId++).padStart(3, '0')}`,
    userId,
    productId,
    quantity,
    totalCents,
    status: 'placed',
    createdAt: new Date().toISOString(),
  };
}
