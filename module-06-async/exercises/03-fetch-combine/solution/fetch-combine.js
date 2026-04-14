/**
 * Fetch users and posts in parallel, return a combined summary.
 *
 * @param {typeof fetch} fetchFn
 * @returns {Promise<Array<{ id: number, name: string, email: string, postCount: number }>>}
 */
export async function fetchUserSummaries(fetchFn) {
  const [usersRes, postsRes] = await Promise.all([
    fetchFn('https://jsonplaceholder.typicode.com/users'),
    fetchFn('https://jsonplaceholder.typicode.com/posts'),
  ]);

  const users = await usersRes.json();
  const posts = await postsRes.json();

  const postCounts = new Map();
  for (const post of posts) {
    postCounts.set(post.userId, (postCounts.get(post.userId) ?? 0) + 1);
  }

  return users
    .map((u) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      postCount: postCounts.get(u.id) ?? 0,
    }))
    .sort((a, b) => a.id - b.id);
}
