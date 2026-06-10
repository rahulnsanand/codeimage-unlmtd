# Contributing

> Thank you for considering contributing to this project. Your help is very much appreciated!

When contributing, it's better to first discuss the change you wish to make via an issue, discussion, or any other method with the owners of this repository before making a change.

All members of our community are expected to follow our [Code of Conduct](CODE_OF_CONDUCT.md). Please make sure you are welcoming and friendly in all of our spaces.

---

## Requirements

- **Node.js** v24 or higher
- **pnpm** v10 or higher

Check your versions:

```bash
node -v
pnpm -v
```

---

## Run on Your Machine

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/codeimage-unlmtd.git
cd codeimage-unlmtd
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Prepare the environment

You need [Docker](https://www.docker.com/) installed to spin up the local database:

```bash
# Docker Compose v2
docker compose -f apps/api/docker-compose.dev.yml -p codeimage up -d

# Docker Compose v1 (legacy)
docker-compose -f apps/api/docker-compose.dev.yml -p codeimage up -d
```

Once containers are ready, run the environment setup CLI:

```bash
pnpm prepare:env
```

> **Note:** Enable the Auth0 mock if you don't have a configured Auth0 account with environment variables.

Prisma migrations will run automatically after configuration.

### 4. Start the development server

```bash
pnpm libs:build   # Build dependent libraries first
pnpm dev
```

- Front-end: [http://localhost:4200](http://localhost:4200)
- API: [http://localhost:3000](http://localhost:3000)

---

## Working on the 16K Export Feature

The key files involved in image export resolution are:

| File | Role |
|---|---|
| `apps/codeimage/src/components/Toolbar/ExportButton.tsx` | Export dialog modal — pixel ratio slider |
| `apps/codeimage/src/components/Toolbar/ExportContent.tsx` | Settings popover — pixel ratio slider |
| `apps/codeimage/src/state/canvas.ts` | `ExportCanvasStore` — persisted export settings |
| `packages/dom-export/src/lib/index.ts` | Core export engine (`toCanvas`, `toPng`, etc.) |
| `packages/dom-export/src/lib/util.ts` | Canvas dimension helpers and pixel ratio logic |
| `packages/dom-export/src/lib/options.ts` | `HtmlExportOptions` interface |

---

## Commit Conventions

This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/):

```
feat(export): increase pixel ratio slider max to 16
fix(canvas): handle dimension cap at 16384px
```

---

## Pull Request Process

1. Create a new branch: `git checkout -b feat/my-feature`
2. Make your changes with appropriate tests where relevant
3. Commit using Conventional Commits format
4. Open a pull request with a clear description of what changed and why
