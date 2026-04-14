import path from 'node:path';

/**
 * @param {string} filename
 * @returns {string}
 */
export function getExtension(filename) {
  return path.extname(filename);
}
