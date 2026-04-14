# Capstone - Alert Pipeline

**Mission briefing:** Sensor alerts arrive messy — some invalid, some duplicated. Build a composable pipeline that validates, normalises, deduplicates, and categorises them. This exercise combines closures, higher-order functions, map/filter, immutability, and module organisation.

## Files to implement

| File | Responsibility |
|---|---|
| `validate.js` | `validateAlert` — check required fields and ranges |
| `normalise.js` | `normaliseAlert` — trim, lowercase, add id (immutable) |
| `deduplicate.js` | `createDeduplicator` — closure over a Set, returns filter function |
| `pipeline.js` | `processAlerts` — wire the steps together, categorise results |

## Verify

```bash
cd starter && pnpm install && pnpm test
```

Reference: `solution/` folder.
