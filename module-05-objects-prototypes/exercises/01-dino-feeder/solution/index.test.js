import { beforeEach, describe, expect, it } from 'vitest';
import { feeder } from './feeder.js';

beforeEach(() => {
  feeder.supply = 0;
  feeder.feedings = [];
});

describe('01-dino-feeder', () => {
  it('exposes the station name', () => {
    expect(feeder.name).toBe('Carnivore Canyon Feeder');
  });

  it('stock adds food and returns the new total', () => {
    expect(feeder.stock(30)).toBe(30);
    expect(feeder.stock(20)).toBe(50);
  });

  it('remaining starts at 0', () => {
    expect(feeder.remaining()).toBe(0);
  });

  it('feed dispenses food and returns a message', () => {
    feeder.stock(40);
    expect(feeder.feed('Rex', 15)).toBe('Fed Rex 15kg');
    expect(feeder.remaining()).toBe(25);
  });

  it('feed throws when not enough food', () => {
    feeder.stock(5);
    expect(() => feeder.feed('Rex', 10)).toThrow('Not enough food');
    expect(feeder.remaining()).toBe(5);
  });

  it('log records every feeding in order', () => {
    feeder.stock(100);
    feeder.feed('Rex', 20);
    feeder.feed('Tank', 10);
    feeder.feed('Rex', 5);
    expect(feeder.log()).toEqual([
      { dino: 'Rex', kg: 20 },
      { dino: 'Tank', kg: 10 },
      { dino: 'Rex', kg: 5 },
    ]);
  });

  it('log returns an empty array before any feedings', () => {
    expect(feeder.log()).toEqual([]);
  });
});
