import { users } from '../../data.js';

export function authenticate(token) {
  const user = users.find((u) => u.token === token);
  if (!user) throw new Error(`AUTH: invalid token`);
  return user;
}

export function authorize(user, requiredRole) {
  if (user.role !== requiredRole && user.role !== 'admin') {
    throw new Error(`AUTH: ${user.name} lacks role "${requiredRole}"`);
  }
}
