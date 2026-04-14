export function createAlertFn(severity) {
  return (message) => `[${severity}] ${message}`;
}
