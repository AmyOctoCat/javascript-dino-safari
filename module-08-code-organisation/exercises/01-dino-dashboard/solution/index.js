import { fetchParkData } from './fetch-data.js';
import { buildDashboard } from './dashboard.js';

const { users, posts } = await fetchParkData(fetch);
const dashboard = buildDashboard(users, posts);

console.log(dashboard.summary());
console.log('Top posters:', dashboard.topPosters);
