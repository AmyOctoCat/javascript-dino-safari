const store = [];

export function save(order) {
  store.push(order);
  return order;
}

export function findByUserId(userId) {
  return store.filter((o) => o.userId === userId);
}
