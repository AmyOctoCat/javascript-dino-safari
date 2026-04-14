import { describe, expect, it } from 'vitest';
import { fetchUserSummaries } from './fetch-combine.js';

const mockUsers = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

const mockPosts = [
  { userId: 1, id: 1, title: 'A' },
  { userId: 1, id: 2, title: 'B' },
  { userId: 1, id: 3, title: 'C' },
  { userId: 2, id: 4, title: 'D' },
  // user 3 has no posts
];

function createMockFetch(users, posts) {
  return async (url) => ({
    json: async () => (url.includes('/users') ? users : posts),
  });
}

describe('03-fetch-combine', () => {
  it('returns one summary per user sorted by id', async () => {
    const result = await fetchUserSummaries(createMockFetch(mockUsers, mockPosts));
    expect(result).toHaveLength(3);
    expect(result.map((r) => r.id)).toEqual([1, 2, 3]);
  });

  it('counts posts per user', async () => {
    const result = await fetchUserSummaries(createMockFetch(mockUsers, mockPosts));
    expect(result[0].postCount).toBe(3);
    expect(result[1].postCount).toBe(1);
    expect(result[2].postCount).toBe(0);
  });

  it('includes name and email', async () => {
    const result = await fetchUserSummaries(createMockFetch(mockUsers, mockPosts));
    expect(result[0]).toEqual({
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      postCount: 3,
    });
  });

  it('handles empty data', async () => {
    const result = await fetchUserSummaries(createMockFetch([], []));
    expect(result).toEqual([]);
  });

  it('calls both endpoints in parallel', async () => {
    const calls = [];
    const mockFetch = async (url) => {
      calls.push(url);
      return { json: async () => (url.includes('/users') ? mockUsers : mockPosts) };
    };
    await fetchUserSummaries(mockFetch);
    expect(calls).toHaveLength(2);
    expect(calls.some((u) => u.includes('/users'))).toBe(true);
    expect(calls.some((u) => u.includes('/posts'))).toBe(true);
  });
});
