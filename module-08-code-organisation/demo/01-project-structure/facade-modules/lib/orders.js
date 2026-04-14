export function createOrderService(catalogue) {
  const store = [];
  let nextId = 1;

  return {
    placeOrder(userId, productId, quantity) {
      const product = catalogue.getProduct(productId);
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
      store.push(order);
      return order;
    },

    getUserOrders(userId) {
      return store.filter((o) => o.userId === userId);
    },
  };
}
