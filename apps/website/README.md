# 🌐 CodeImage UNLMTD — Website

This is the marketing site for [CodeImage UNLMTD](../../README.md) — the landing page that tells the world why it's worth using. Built with [TanStack Start](https://tanstack.com/start) + SolidJS.

> Looking for the actual app? That lives in [`apps/codeimage`](../codeimage). This package is just the website around it.

---

## 🚀 Get it running

```bash
pnpm install
pnpm dev
```

## 📦 Build for production

```bash
pnpm build
```

---

## 🧭 Good to know

- 🎨 **Styling** — [Tailwind CSS](https://tailwindcss.com/). Imported in `src/styles.css`, wired up via `tailwindcss()` in `vite.config.ts`.
- 🗺️ **Routing** — file-based via [TanStack Router](https://tanstack.com/router). Routes live in `src/routes`; the root layout is `src/routes/__root.tsx`.
- 🧩 **Components** — landing sections live under `src/components` (Header, Main, Landing, Footer, and friends).

That's the whole tour. Happy hacking. ✨
