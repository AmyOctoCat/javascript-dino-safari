# Exercise - Dino Feeder

**Mission briefing:** Each zone in the park has a feeding station. Build one as an object literal with methods — store state as properties and use `this` to access them.

## Tasks

Add methods to the `feeder` object in [`starter/feeder.js`](starter/feeder.js):

- `stock(kg)` — add `kg` of food to the hopper. Returns the new total.
- `feed(dinoName, kg)` — dispense `kg` of food. If there isn't enough, throw `Error('Not enough food')`. Otherwise record the feeding and reduce the supply. Returns `"Fed <dinoName> <kg>kg"`.
- `remaining()` — kg of food still in the hopper.
- `log()` — array of all feedings, each `{ dino, kg }`, oldest first.

## Verify

```bash
cd starter && pnpm install && pnpm test
```

Reference: [`solution/feeder.js`](solution/feeder.js).
