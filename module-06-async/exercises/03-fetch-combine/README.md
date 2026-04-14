# Exercise - Fetch & Combine

**Mission briefing:** The park dashboard needs a user activity summary. Fetch users and posts from a public API in parallel, then combine them.

## Tasks

Implement `fetchUserSummaries(fetchFn)` in [`starter/fetch-combine.js`](starter/fetch-combine.js):

1. Use `fetchFn` (which works like `fetch`) to request **two endpoints in parallel**:
   - `https://jsonplaceholder.typicode.com/users`
   - `https://jsonplaceholder.typicode.com/posts`
2. Parse both JSON responses.
3. Return an array of objects, one per user, **sorted by `id`**:
   ```js
   { id, name, email, postCount }
   ```
   where `postCount` is the number of posts whose `userId` matches.

**Hints:**
- `Promise.all` is your friend for parallel fetches.
- Each post has a `userId` field linking it to a user.

## Verify

```bash
cd starter && pnpm install && pnpm test
```

## Try it for real

```bash
cd solution && pnpm install && pnpm start
```

Reference: [`solution/fetch-combine.js`](solution/fetch-combine.js).
