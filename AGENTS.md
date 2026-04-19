# AGENTS.md

## Repository intent
This repository powers the "Cake Forest" ordering experience with one shared React Native component stack that must run on:
- Web (react-native-web)
- iOS (React Native via Expo)
- Android (React Native via Expo)

## Product intent
The app should feel consistent across platforms while preserving platform-native performance and interaction quality.

Current core flows:
1. Browse featured items in the hero carousel.
2. Filter catalog by category.
3. Add/remove/update cart quantities.
4. Review cart and subtotal before checkout integration.

## Engineering intent
- Keep UI and business logic shared by default.
- Avoid platform-specific forks unless absolutely necessary.
- Prefer composable components and isolated state updates.
- Keep data access and state transitions deterministic/testable.

## Architecture map
- `App.js`: runtime entry for all platforms.
- `src/AppShell.jsx`: layout composition and view routing (`home`, `menu`, `cart`).
- `src/components`: shared cross-platform components.
- `src/context/CartContext.jsx`: cart source of truth.
- `src/data/menu.js`: menu catalog, categories, and filtering helper.
- `src/__tests__`: integration coverage.
- `src/context/__tests__`: unit coverage for cart behavior.

## Guardrails for future changes
1. Do not introduce web-only DOM primitives (`div`, `button`, etc.) in shared components.
2. Keep style definitions in React Native StyleSheet-compatible objects.
3. Any cart logic change must include unit test updates in `src/context/__tests__`.
4. Any major screen-flow change must include or update an integration test in `src/__tests__`.
5. If platform-specific behavior is required, isolate with `Platform` checks and document why.

## CI action intent
- Web actions are fully runnable (`Web Dist Build`, `Web Server Start Check`).
- Mobile actions are intentionally stub-first (`Android Build (Stub)`, `iOS Build (Stub)`).
- Keep mobile actions in stub mode until signing credentials and delivery pipelines (EAS/keystore/Apple certs) are configured.
- When enabling real mobile builds, preserve testing and distribution mode separation for both Android and iOS.

## Next recommended milestones
- Add persistence adapter (`localStorage` on web, `AsyncStorage` on mobile).
- Add real navigation stack (Expo Router or React Navigation).
- Wire checkout and order tracking to backend APIs.
