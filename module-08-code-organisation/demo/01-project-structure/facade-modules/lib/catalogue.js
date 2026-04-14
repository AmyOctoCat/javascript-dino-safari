export function createCatalogue(seedProducts) {
  const store = [...seedProducts];

  return {
    listProducts() {
      return [...store];
    },

    getProduct(id) {
      const p = store.find((item) => item.id === id);
      if (!p) throw new Error(`Product ${id} not found`);
      return p;
    },
  };
}
