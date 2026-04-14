# Capstone - Park Config

**Mission briefing:** The park needs a robust config system before it can scale. Build custom typed errors, validated config loading, and a levelled structured logger. This exercise combines classes, custom errors, object literals with methods, closures, and module boundaries.

## Files to implement

| File | Responsibility |
|---|---|
| `app-error.js` | `AppError` class — typed error with a `code` property |
| `config.js` | `loadConfig` — validate env vars, fail fast with `AppError` |
| `logger.js` | `createLogger` — levelled logger with structured output |

## Verify

```bash
cd starter && pnpm install && pnpm test
```

Reference: `solution/` folder.
