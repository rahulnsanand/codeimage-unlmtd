<div align="center">
  <img src="assets/banner.png?raw=true" alt="CodeImage logo" />

  <h1>CodeImage unlmtd</h1>

  <p><strong>Gorgeous, high-res code screenshots. No limits. No tracking. No backend. Just yours.</strong></p>

[![Built with SolidJS](https://img.shields.io/badge/Built%20with-SolidJS-blue)](https://github.com/solidjs/solid)
[![Built with Vanilla Extract](https://img.shields.io/badge/Built%20with-Vanilla%20Extract-ff69b4)](https://github.com/seek-oss/vanilla-extract)
[![Docker Ready](https://img.shields.io/badge/Docker-self--hostable-2496ED?logo=docker&logoColor=white)](DOCKER.md)
![License](https://img.shields.io/github/license/riccardoperra/codeimage)

  <p>
    <strong><a href="https://codeimageunlmtd.pages.dev/">🚀 Try it out!</a></strong>
    &nbsp;·&nbsp;
    <strong><a href="DOCKER.md">🐳 Self-Host with Docker</a></strong>
  </p>
</div>

---

## 👋 So, what is this?

CodeImage is the tool you've seen before — the one that turns plain source code into screenshots that actually look good. This is **CodeImage UNLMTD**: a faster, leaner, privacy-first fork of the original [CodeImage](https://github.com/riccardoperra/codeimage) by Riccardo Perra.

Same beautiful output. None of the baggage. We took an already-great tool and asked one question: _what if it had zero limits, zero tracking, and could run entirely on your own machine?_

That's the whole pitch. Here's the longer version. 👇

---

## ⚡ Why use this instead of the original?

The original CodeImage is fantastic — genuinely. But it ships with a backend, accounts, telemetry, and a few arbitrary caps. UNLMTD strips all of that out and hands the keys back to you.

| | Original CodeImage | **CodeImage UNLMTD** |
|---|---|---|
| **Export resolution** | Fixed 1x / 2x / 3x / 6x | 🔥 Smooth slider up to **16x** (~16,384px) |
| **Tracking & analytics** | Umami telemetry built in | 🕵️ **Completely removed** |
| **Backend** | Auth0 · Prisma · Fastify · DB | ☁️ **None.** Pure static frontend |
| **Self-hosting** | Wire up a whole stack | 🐳 **One Docker command** |
| **Accounts** | Sign-in for full features | 🙅 **No login. Ever.** |
| **Dependencies** | As-is | 📦 Audited, de-bloated, all bumped to latest |

Bottom line: **your code never leaves your browser, and you own the whole thing.** ✨

---

## 🛡️ Privacy, the way it should be

This is the part we actually care about most.

- 🚫 **Zero telemetry** — every tracker, analytics call, and metric (Umami included) is gone. Not disabled. *Deleted.*
- 🔒 **Nothing leaves your browser** — the code you paste, write, or import never touches a server. It can't, because there isn't one.
- 🧾 **No accounts, no cookies, no profiling** — open it, use it, close it. That's the entire data lifecycle.
- 👀 **Verifiable** — it's all open source. Don't take our word for it, read the diff.

---

## 🐳 Self-host it in seconds

No databases. No env files. No setup ritual. One command and it's live on your own box:

```bash
docker run -d \
  -p 8080:8080 \
  --name codeimage-unlmtd \
  --restart unless-stopped \
  lyfie/codeimage-unlmtd:latest
```

Then open **[http://localhost:8080](http://localhost:8080)** and you're done. 🎉

The image is multi-arch (**amd64** + **arm64**), so it runs happily on cloud VMs, Apple Silicon, and even a Raspberry Pi — sipping **under 10MB of RAM** at idle. Prefer Compose? Full instructions live in **[DOCKER.md](DOCKER.md)**.

> Because the whole app is static, you can also deploy it for **free** on Cloudflare Pages, Vercel, or GitHub Pages. Fork → deploy → ship.

---

## 🎨 The good stuff (still all here)

Everything that made CodeImage worth using is untouched:

- 🌈 **25+ handcrafted themes** — Dracula, Night Owl, Synthwave '84, GitHub, Material, Vitesse and a bunch more.
- 💅 **Total control** — padding, fonts, shadows, backgrounds, window styles. Make it *yours*.
- 🪟 **Crisp exports** — copy to clipboard or download in glorious high resolution.
- 📱 **Works everywhere** — fully responsive, accessible, and smooth on mobile.
- ⚡ **Stupidly fast** — SolidJS + zero-runtime CSS means it just snaps.

---

## 🏗️ Under the hood

A clean `pnpm` monorepo, tuned for speed and a tiny footprint.

**App (`@codeimage/app`)**
- [SolidJS](https://github.com/solidjs/solid) — reactive, blazing-fast UI
- [vanilla-extract](https://github.com/seek-oss/vanilla-extract) — zero-runtime CSS-in-TS
- [CodeMirror 6](https://codemirror.net/6/) — the editor at the core

**Packages**
- `@codeimage/ui` — accessible UI kit
- `@codeimage/dom-export` — the export engine, minus the artificial caps
- `@codeimage/highlight` — the theme/highlighting library
- `@codeimage/config` — shared base config

> The old `@codeimage/api`, `@codeimage/prisma-models`, and auth packages? Gone for good — that's how we got fully serverless.

---

## 🧑‍💻 Run it locally

No backend to configure, so this is about as easy as it gets:

```bash
# 1. Install deps (pnpm!)
pnpm install

# 2. Build the local packages
pnpm libs:build

# 3. Fire up the dev server
pnpm dev
```

Then head to **[http://localhost:4200](http://localhost:4200)** and start shipping screenshots. 🚀

---

## 🏆 Credits

This exists because of the brilliant work of **Riccardo Perra**. The original CodeImage won **Best Application** at [SolidHack 2022](https://hack.solidjs.com) — and deservedly so.

- Original repo: [github.com/riccardoperra/codeimage](https://github.com/riccardoperra/codeimage)
- Original author: [Riccardo Perra](https://github.com/riccardoperra)

If you like this fork, go give the original a ⭐ too. Good work deserves it.

---

## 📄 License

MIT © [Riccardo Perra](https://github.com/riccardoperra) & [Rahul Anand](https://github.com/rahulnsanand)
