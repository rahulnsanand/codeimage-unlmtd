# 🤝 Contributing

First off — thanks for being here. Every issue, idea, and PR genuinely helps. 🙌

Got a change in mind? It's usually best to float it first via an issue or discussion before you dive in, so we're on the same page. And while you're around our spaces, please keep things friendly — we follow a simple [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 📋 What you'll need

- 🟢 **Node.js** v24 or higher
- 📦 **pnpm** v10 or higher

Quick check:

```bash
node -v
pnpm -v
```

---

## 💻 Get it running

### 1. Clone it

```bash
git clone https://github.com/lyfie-org/codeimage-unlmtd.git
cd codeimage-unlmtd
```

### 2. Install deps

```bash
pnpm install
```

### 3. Fire it up

No databases, no mock APIs, no containers needed. Build the libs once, then start the dev server:

```bash
pnpm libs:build   # build the local packages first
pnpm dev
```

- 🖥️ Local: [http://localhost:4200](http://localhost:4200)
- 🌐 Live app: [https://codeimageunlmtd.pages.dev/](https://codeimageunlmtd.pages.dev/)

---

## 🔍 Working on the 16x export feature

This is the headline feature of the fork, so here's a map of where the magic happens:

| File                                                      | What it does                                    |
| --------------------------------------------------------- | ----------------------------------------------- |
| `apps/codeimage/src/components/Toolbar/ExportButton.tsx`  | Export dialog modal — pixel ratio slider        |
| `apps/codeimage/src/components/Toolbar/ExportContent.tsx` | Settings popover — pixel ratio slider           |
| `apps/codeimage/src/state/canvas.ts`                      | `ExportCanvasStore` — persisted export settings |
| `packages/dom-export/src/lib/index.ts`                    | Core export engine (`toCanvas`, `toPng`, etc.)  |
| `packages/dom-export/src/lib/util.ts`                     | Canvas dimension helpers and pixel ratio logic  |
| `packages/dom-export/src/lib/options.ts`                  | `HtmlExportOptions` interface                   |

---

## ✍️ Commit style

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/). Keeps the history clean and readable:

```
feat(export): increase pixel ratio slider max to 16
fix(canvas): handle dimension cap at 16384px
```

---

## 🚀 Opening a PR

1. Branch off: `git checkout -b feat/my-feature`
2. Make your changes (add tests where it makes sense)
3. Commit using the Conventional Commits format above
4. Open a PR with a clear "what changed and why"

That's it. We'll take it from there. ✨
