export function formatLogLine(level, message, meta) {
  if (!meta || Object.keys(meta).length === 0) {
    return `[${level}] ${message}`;
  }
  const parts = Object.keys(meta)
    .sort()
    .map((k) => `${k}=${meta[k]}`);
  return `[${level}] ${message} | ${parts.join(' ')}`;
}
