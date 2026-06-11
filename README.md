<div align="center">
  <img src="assets/banner.png?raw=true" alt="CodeImage logo" />

  <h1>CodeImage unlmtd</h1>

  <p><strong>Create elegant, high-definition code screenshots. No limits. No tracking. Pure awesomeness.</strong></p>

[![Built with SolidJS](https://img.shields.io/badge/Built%20with-SolidJS-blue)](https://github.com/solidjs/solid)
[![Built with Vanilla Extract](https://img.shields.io/badge/Built%20with-Vanilla%20Extract-ff69b4)](https://github.com/seek-oss/vanilla-extract)
![License](https://img.shields.io/github/license/riccardoperra/codeimage)

  <p><strong><a href="https://codeimageunlmtd.pages.dev/">🚀 Launch the Web App</a></strong></p>
</div>

---

## 🌟 The UNLMTD Version

Welcome to **CodeImage UNLMTD**! This is a supercharged, stripped-down, and beautifully optimized fork of the amazing [CodeImage](https://github.com/riccardoperra/codeimage).

We took an already fantastic tool and asked: _How can we make this lighter, faster, more secure, and completely unrestricted?_ Here is what makes this codebase the ultimate version to fork, use, and trust:

### 🚀 What Makes It Better?

- 🖼️ **No Size Limit Restrictions:** Say goodbye to arbitrary limits! Export your code at massive resolutions with a continuous slider scaling all the way up to **16x pixel ratio** (up to ~16,384px canvas limits). Your code deserves to be crystal clear.
- 📦 **Latest & Essential Dependencies Only:** We've ruthlessly audited and purged all unnecessary, bloated, and deprecated packages. Every dependency has been bumped to its absolute latest, most secure version. It's leaner, meaner, and faster than ever.
- 🕵️ **Zero Data Collection:** We respect your privacy. All analytics, telemetry, and tracking (like Umami) have been completely removed. Your data is yours.
- ☁️ **100% Serverless & Backend-Free:** We stripped out the heavy backend requirements (Auth0, Prisma, Fastify, Databases). This is a pure static frontend application. Try it instantly at **[codeimageunlmtd.pages.dev](https://codeimageunlmtd.pages.dev/)**.
- 🛠️ **Fully Open Source, Forkable & Ready to Use:** Since there's no complex backend infrastructure to wire up, you can fork this repo and deploy it immediately for free on Cloudflare Pages, Vercel, or GitHub Pages.

---

## 🎨 Features You'll Love

All the core awesomeness of the original project is still here, untouched and ready to shine:

- 💅 **Beautiful Customization:** Tweak padding, fonts, shadows, and backgrounds to make your code pop.
- 🌗 **15+ Custom Themes:** From dark modes to vibrant colors, find the perfect aesthetic for your snippets.
- 📱 **Responsive & Accessible:** Works beautifully across devices with an accessible UI toolkit.
- ⚡ **Blazing Fast:** Powered by SolidJS and zero-runtime CSS (Vanilla Extract).

---

## 🏗️ Tech Stack

CodeImage UNLMTD is a highly optimized `pnpm` monorepo:

### Front-End App (`@codeimage/app`)

Built entirely with SolidJS, focusing on extreme performance and minimal footprint:

- [SolidJS](https://github.com/solidjs/solid) — Reactive, blazing fast UI framework
- [vanilla-extract](https://github.com/seek-oss/vanilla-extract) — Zero-runtime CSS-in-TypeScript
- [CodeMirror 6](https://codemirror.net/6/) — The extensible code editor powering the core experience

### Packages

- `@codeimage/ui`: Accessible UI kit for the front-end
- `@codeimage/dom-export`: Ultra-optimized export engine without artificial caps
- `@codeimage/highlight`: Custom editor highlighting themes
- `@codeimage/config`: Shared base configurations

_(Note: The old `@codeimage/api`, `@codeimage/prisma-models`, and authentication packages have been permanently removed for a pure frontend experience!)_

---

## 🚀 Running Locally

Getting started is insanely easy since there are no databases or backend APIs to configure! If you just want to use the app, visit the **[Live Website](https://codeimageunlmtd.pages.dev/)**. Otherwise, to run it locally:

```bash
# 1. Install dependencies (we use pnpm!)
pnpm install

# 2. Build the local packages
pnpm libs:build

# 3. Start the dev server
pnpm dev
```

Open [http://localhost:4200](http://localhost:4200) in your browser and start capturing!

---

## 🏆 Credits

This project wouldn't be possible without the incredible foundation laid by **Riccardo Perra**.
The original CodeImage won the **Best Application** category at [SolidHack 2022](https://hack.solidjs.com).

- Original repository: [github.com/riccardoperra/codeimage](https://github.com/riccardoperra/codeimage)
- Original author: [Riccardo Perra](https://github.com/riccardoperra)

---

## 📄 License

MIT © [Riccardo Perra](https://github.com/riccardoperra) & [Rahul Anand](https://github.com/rahulnsanand)
