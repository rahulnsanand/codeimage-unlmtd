![CodeImage logo](assets/banner.png?raw=true)

> Create elegant code screenshots of your source code — now with up to 16K export quality.

[![Built with SolidJS](https://img.shields.io/badge/Built%20with-SolidJS-blue)](https://github.com/solidjs/solid)
[![Built with Vanilla Extract](https://img.shields.io/badge/Built%20with-Vanilla%20Extract-ff69b4)](https://github.com/seek-oss/vanilla-extract)
![License](https://img.shields.io/github/license/riccardoperra/codeimage)

---

## About This Fork

This is a fork of [CodeImage](https://github.com/riccardoperra/codeimage) by [Riccardo Perra](https://github.com/riccardoperra), modified to be the best, most stripped-down, no-nonsense version of the original code.

### What Changed

| Area | Original | This Fork |
|---|---|---|
| Export dialog slider | Max `3x` pixel ratio | Max `16x` pixel ratio |
| Export settings popover | Fixed buttons: `1x / 2x / 3x / 6x` | Continuous slider: `1x → 16x` |
| Backend & Database | Required Auth0, Prisma, Fastify | **Removed.** 100% serverless static app |
| Data Collection | Umami analytics tracking | **Removed.** No analytics or tracking |

**That's it.** Everything else — all core features, themes, editor behaviour, and state management — is untouched. It's a no-nonsense tool that does what it's supposed to do, nothing more, nothing less. It can be deployed for free on Cloudflare Pages or GitHub Pages without requiring any backend infrastructure or database limits.

At a typical frame width of ~800 px, a `16x` export produces a **~12 800 px wide** image, well within the browser canvas limit of 16 384 px. The underlying export engine (`@codeimage/dom-export`) already handled the canvas safety cap; only the UI sliders were artificially limited.

---

## Original Project

[CodeImage](https://codeimage.dev) is a tool to help developers create beautiful screenshots of their code, with features for quick social media sharing.

🏆 Winner of [SolidHack 2022](https://hack.solidjs.com) — **Best Application** category.

Original repository: [github.com/riccardoperra/codeimage](https://github.com/riccardoperra/codeimage)  
Original author: [Riccardo Perra](https://github.com/riccardoperra)

---

## Tech Stack

CodeImage is a pnpm monorepo split into `apps` and `packages`.

### Apps

#### [`@codeimage/app`](./apps/codeimage)

The front-end SPA, built entirely with SolidJS. Key dependencies:

- [vanilla-extract](https://github.com/seek-oss/vanilla-extract) — zero-runtime CSS-in-TypeScript
- [CodeMirror 6](https://codemirror.net/6/) — extensible code editor
- [StateBuilder](https://github.com/riccardoperra/statebuilder) — composable state management
- [@codeui/kit](https://github.com/riccardoperra/codeui) — accessible UI kit built on [Kobalte](https://github.com/kobaltedev/kobalte)
- [solid-primitives](https://github.com/solidjs-community/solid-primitives) — SolidJS primitives library

#### [`@codeimage/api`](./apps/api)

The REST API layer built with [Fastify](https://github.com/fastify/fastify), [Prisma ORM](https://github.com/prisma/prisma), and [Auth0](https://auth0.com/).

### Packages

| Package | Description |
|---|---|
| [`@codeimage/ui`](./packages/ui) | UI kit for the CodeImage front-end |
| [`@codeimage/dom-export`](./packages/dom-export) | Custom fork of [html-to-image](https://github.com/bubkoo/html-to-image) with several export fixes |
| [`@codeimage/highlight`](./packages/highlight) | Custom editor and highlighting themes for CodeMirror |
| [`@codeimage/locale`](./packages/locale) | Strict-typed i18n wrapper around `@solid-primitives/i18n` |
| [`@codeimage/config`](./packages/config) | Shared base configurations and interfaces |
| [`@codeimage/prisma-models`](./packages/prisma-models) | Prisma ORM models shared between front-end and back-end |
| [`@codeimage/atomic-state`](./packages/atomic-state) | Small state manager with RxJS and solid-js/store utilities |

---

## Running Locally

See [CONTRIBUTING.md](./CONTRIBUTING.md) for full setup instructions.

```bash
pnpm install
pnpm libs:build
pnpm dev
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

---

## License

MIT © [Riccardo Perra](https://github.com/riccardoperra)
