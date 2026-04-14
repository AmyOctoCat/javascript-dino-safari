export function createTaggedLogger(tag, baseAlertFn) {
  return (message) => `${tag}: ${baseAlertFn(message)}`;
}
