# @weekly-superstar/shared

Shared design tokens + domain logic for the [Weekly Superstar Tracker](https://weekly-superstar-tracker.web.app) apps.

Consumed by:
- `weekly-superstar-ios` — Expo / React Native
- `Kids-achievement-tracker` — Vite / React web

## Exports

- `./tokens` — `colors`, `radii`, `shadowsCss`, `shadowsRn`, `typography`, `motion`, `spacing`
- `./themes` — `THEMES`, `PET_CHAINS`, `PET_ASSET`, `EGG_NAMES`, `DEFAULT_ACTIVITIES`, helpers
- `./week` — `getCurrentWeek`, `getWeekKey`, `formatWeekRange`
- `./auth-errors` — `formatAuthError`
- `./codes` — `generateShareCode`
- `./achievements` — `ACHIEVEMENTS`, `evaluateAchievements`

## Development

```bash
npm install
npm run build   # dual-emit CJS + ESM to dist/ via tsup
npm run dev     # watch mode
npm run typecheck
```

Consumers link this package via `file:` protocol:

```json
{
  "dependencies": {
    "@weekly-superstar/shared": "file:../weekly-superstar-shared"
  }
}
```

After any token change:
- `cd weekly-superstar-shared && npm run build`
- Restart Metro / Vite in consumer apps.
