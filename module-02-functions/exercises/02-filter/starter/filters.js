/** @param {number[]} numbers */
export const keepEvens = (numbers) => {
  return numbers.filter(number => number % 2 == 0);
};

/**
 * @param {number[]} a
 * @param {number[]} b
 */
export const overlap = (a, b) => {
  void a;
  void b;
  return a.filter(element => b.includes(element));
};

/** @param {{ species: string, zone: string, dangerLevel: number }[]} dinos */
export const getDangerous = (dinos) => {
  return dinos.filter(dino => dino.dangerLevel > 5);
};
