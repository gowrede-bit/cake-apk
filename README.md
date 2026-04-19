# Cake Forest (Universal)

Cake Forest is a single-codebase food ordering experience that renders the same React Native components on web, iOS, and Android.

## What this repo is now
- Runtime: Expo + React Native + React Native Web.
- Architecture: Shared component system and shared cart/menu logic used by all platforms.
- Entry point: `App.js`.

## Features
- Hero carousel.
- Category filtering.
- Menu grid with add/increment/decrement interactions.
- Cart view with subtotal and popular picks.
- Shared state via context (`CartProvider`).

## Run locally
1. Install dependencies:
   - `npm install`
2. Start the Expo dev server:
   - `npm run start`
3. Run specific targets:
   - Web: `npm run web`
   - Android: `npm run android`
   - iOS: `npm run ios`

## Test
- `npm run test`

## Build Actions
### Local commands
- Build frontend dist:
  - `npm run build:web:dist`
- Start website dev server:
  - `npm run start:web`
- Serve built dist:
  - `npm run serve:web:dist`
- Android build stubs:
  - Testing: `npm run build:android:testing`
  - Distribution: `npm run build:android:distribution`
- iOS build stubs:
  - Testing (simulator/dev): `npm run build:ios:testing`
  - Distribution (IPA intent): `npm run build:ios:distribution`

### GitHub Actions (manual dispatch)
- `Web Dist Build`: builds `dist` and uploads artifact.
- `Web Server Start Check`: starts website server, runs health check, uploads server log.
- `Android Build (Stub)`: testing/distribution mode stub run with uploaded stub log.
- `iOS Build (Stub)`: testing/distribution mode stub run with uploaded stub log.

## GitHub Pages deployment
- Workflow: `.github/workflows/deploy-github-pages.yml`
- Trigger: push to `main` (or manual run via `workflow_dispatch`)
- One-time repo setting:
  - In GitHub, open `Settings -> Pages`
  - Set `Build and deployment -> Source` to `GitHub Actions`

After the first successful workflow run, your site URL appears in the workflow output and on the repo `Pages` settings screen.

## Project structure
- `App.js`: universal app entry.
- `src/AppShell.jsx`: top-level app composition and view switching.
- `src/components/*`: shared UI components used by web + iOS + Android.
- `src/context/CartContext.jsx`: shared cart logic/state.
- `src/data/menu.js`: shared static data and category filtering helpers.
- `src/__tests__` + `src/context/__tests__`: integration and unit tests.

## Why this architecture
This layout keeps behavior and visual structure unified across platforms, so feature work happens once in shared components rather than being duplicated for web and mobile.
