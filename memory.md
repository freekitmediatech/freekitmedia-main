# MEMORY — freekitmedia
*Complete step-by-step code dump of the entire repository*

---

## PROJECT OVERVIEW

| Field | Value |
|-------|-------|
| Project name | `freekitmedia` |
| Version | `0.1.0` |
| Private | `true` |
| Framework | **Next.js 16.4.2** |
| UI library | **React 19.3.0** (`react-dom` 19.3.0) |
| Styling | **Tailwind CSS v4** (`@tailwindcss/turbopack`) |
| Language | **TypeScript 5.x** |
| Package manager | **Bun 1.3.14** (`bun.lock`) |
| Architecture | Next.js **App Router** (`app/`) |
| Fonts | Geist Sans + Geist Mono (via `next/font/google`) |
| Linter | ESLint 9 (`eslint-config-next` core-web-vitals + typescript) |

### Available scripts (`package.json`)

| Script | Command |
|--------|---------|
| `dev` | `next dev` — start dev server (Turbopack) |
| `build` | `next build` — production build |
| `start` | `next start` — production server |
| `lint` | `eslint` — lint the codebase |

---

## FILE TREE

```
freekitmedia/
├── .git/
├── .gitignore
├── .next/
├── AGENTS.md                <- Next.js agent rules (re-added by `next dev`)
├── app/
│   ├── favicon.ico
│   ├── globals.css          <- Tailwind import + CSS variables + dark mode
│   ├── layout.tsx           <- Root layout (html/body, metadata, fonts)
│   └── page.tsx             <- Home page (landing)
├── bun.lock
├── eslint.config.mjs        <- ESLint flat config
├── next-env.d.ts            <- Next.js TypeScript ambient types
├── next.config.ts           <- Next.js config (experimental + turbopack rules)
├── node_modules/
├── package.json
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg             <- Next.js logo (used in page.tsx)
│   ├── vercel.svg           <- Vercel logomark (Deploy Now button)
│   └── window.svg
├── README.md
└── tsconfig.json
```

---

## DETAILED FILE-BY-FILE STEP-BY-STEP BREAKDOWN

---

### 1. `next.config.ts` — Next.js Configuration

**Purpose:** Central Next.js runtime/build config. Enables experimental features and Tailwind v4 Turbopack integration.

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
```

**Step-by-step what each line does:**

1. `import type { NextConfig } from "next"` — Imports the Next.js config type for type safety.
2. `const nextConfig: NextConfig = { ... }` — Declares the config object typed as `NextConfig`.
3. `experimental.agentFeedback: true` — Enables the experimental agent feedback feature.
4. `cacheComponents: true` — Enables component caching across builds (speeds up recompiles).
5. `partialPrefetching: true` — Enables partial route prefetching for faster client transitions.
6. `turbopack.rules["*.css"]` — Routes `.css` files through the `@tailwindcss/turbopack` loader so Tailwind v4 works with Turbopack.
7. `as: "*.css"` — Keeps the output as CSS.
8. `export default nextConfig` — Exports the config so Next.js picks it up.

---

### 2. `tsconfig.json` — TypeScript Configuration

**Purpose:** TypeScript compiler settings, strict mode, path aliases (`@/*`), and JSX config.

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts", ".next/dev/types/**/*.ts", "**/*.mts"],
  "exclude": ["node_modules"]
}
```

**Step-by-step:**

- `target: ES2017` — Compiles down to ES2017 for broad browser support.
- `lib: dom, dom.iterable, esnext` — Includes DOM types, iterable DOM, and ES next features.
- `strict: true` — Turns on all strict type-checking flags.
- `jsx: react-jsx` — Uses the automatic JSX runtime (no React import needed in `.tsx`).
- `paths: @/* -> ./` — Absolute import alias: `@/components/foo` maps to `components/foo`.
- `moduleResolution: bundler` — Bundler-style resolution (matches Next.js/Turbopack).
- `incremental: true` — Enables incremental compilation for faster `tsc` runs.

---

### 3. `eslint.config.mjs` — ESLint Flat Config

**Purpose:** Linting rules for Next.js, using the official `eslint-config-next` presets.

```mjs
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

**Step-by-step:**

1. Imports `defineConfig` and `globalIgnores` from ESLint's flat config API.
2. Imports Next.js Core Web Vitals ruleset (`nextVitals`).
3. Imports Next.js TypeScript ruleset (`nextTs`).
4. `defineConfig([...])` — Merges both rulesets into one flat config array.
5. `globalIgnores([...])` — Overrides default ignores: skips `.next/`, `out/`, `build/`, and `next-env.d.ts`.
6. `export default eslintConfig` — Exports for ESLint to consume.

---

### 4. `app/layout.tsx` — Root Layout

**Purpose:** The outermost shell that wraps every page. Defines `<html>`, `<body>`, metadata, fonts, and global CSS. This is the **Root Layout** — it applies to all routes.

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
```

**Step-by-step:**

1. `import type { Metadata } from "next"` — Imports the Metadata type for SEO tags.
2. `import { Geist, Geist_Mono } from "next/font/google"` — Imports the Geist font family (sans + mono) from Google Fonts, self-optimized by Next.js.
3. `import "./globals.css"` — Imports the global stylesheet (Tailwind + CSS variables).
4. `const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })` — Loads Geist Sans as a CSS variable `--font-geist-sans`, latin subset only.
5. `const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })` — Loads Geist Mono as `--font-geist-mono`, latin subset only.
6. `export const metadata: Metadata = { title, description }` — Sets the `<title>` and `<meta description>` for the document head.
7. `export default function RootLayout({ children }: LayoutProps<"/">)` — The root layout component. `children` is the page content injected by Next.js.
8. `<html lang="en" className={...}>` — Root HTML element with both font variables, `h-full` (full height), and `antialiased` for crisp text rendering.
9. `<body className="min-h-full flex flex-col">{children}</body>` — Body is full min-height, flex column layout; renders `children` (the active page).

---

### 5. `app/page.tsx` — Home Page (`/`)

**Purpose:** The landing page rendered at the root route. Contains the Next.js logo, heading, description, and two call-to-action buttons (Deploy to Vercel, Documentation).

```tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="dark:invert h-[14px] w-4" src="/vercel.svg" alt="Vercel logomark" width={16} height={14} />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
```

**Step-by-step:**

1. `import Image from "next/image"` — Imports Next.js Image component (automatic optimization, lazy loading, priority loading).
2. `export default function Home()` — Defines the home page component (default export = route handler for `/`).
3. Outer `<div>` — `flex flex-col flex-1 items-center justify-center` centers content; `bg-zinc-50` light bg, `dark:bg-black` dark mode; `font-sans` applies Geist Sans.
4. `<main>` — Constrained to `max-w-3xl`, vertical padding `py-32`, horizontal `px-16`; white bg in light mode, black in dark.
5. `<Image src="/next.svg" ... priority />` — Renders the Next.js logo with `priority` (above-the-fold, eager load), inverts in dark mode.
6. `<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">` — Text stack, centered on mobile, left-aligned on `sm`+.
7. `<h1>` — Heading: "To get started, edit the page.tsx file." `page.tsx` is wrapped in `<code>` with a subtle background.
8. `<p>` — Body paragraph linking to Vercel Templates and the Next.js Learning Center (with UTM params).
9. CTA button group (`flex flex-col gap-4 ... sm:flex-row`):
   - **Deploy Now** — Link to `vercel.com/new`, Vercel logo, primary filled button style (`bg-foreground`/`text-background`), hover state.
   - **Documentation** — Link to `nextjs.org/docs`, outlined button style, hover fills slightly.
   - Both open in `_blank` with `rel="noopener noreferrer"` for security.

---

### 6. `app/globals.css` — Global Styles

**Purpose:** Tailwind CSS v4 import, CSS custom properties for colors/fonts, dark mode via `@media (prefers-color-scheme: dark)`.

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

**Step-by-step:**

1. `@import "tailwindcss"` — Imports Tailwind CSS v4 (the new CSS-first Tailwind).
2. `:root { --background: #ffffff; --foreground: #171717; }` — Light-mode CSS variables: white background, near-black foreground.
3. `@theme inline { ... }` — Maps CSS variables to Tailwind theme keys:
   - `--color-background` / `--color-foreground` → `bg-background`, `text-foreground`
   - `--font-sans` / `--font-mono` → `font-sans`, `font-mono` (bound to Geist fonts)
4. `@media (prefers-color-scheme: dark)` — Dark mode override: background `#0a0a0a`, foreground `#ededed`.
5. `body { background: var(--background); color: var(--foreground); font-family: ... }` — Applies theme colors and a fallback font stack to `<body>`.

---

### 7. `package.json` — Manifest & Dependencies

**Purpose:** Defines project metadata, scripts, and dependency tree.

```json
{
  "name": "freekitmedia",
  "version": "0.1.0",
  "private": true,
  "scripts": { "dev": "next dev", "build": "next build", "start": "next start", "lint": "eslint" },
  "dependencies": { "next": "16.4.2", "react": "19.3.0", "react-dom": "19.3.0" },
  "devDependencies": {
    "@tailwindcss/turbopack": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.4.2",
    "tailwindcss": "^4",
    "typescript": "^5"
  },
  "packageManager": "bun@1.3.14",
  "ignoreScripts": ["sharp", "unrs-resolver"],
  "trustedDependencies": ["sharp", "unrs-resolver"]
}
```

**Dependency breakdown:**

- **Production:** `next` (framework), `react` + `react-dom` (UI).
- **Dev:** Tailwind v4 + Turbopack loader, Node/React/React-DOM types, ESLint 9 + Next.js ESLint config, TypeScript 5.
- **Package manager:** Bun (lockfile = `bun.lock`).
- **Trusted deps:** `sharp` and `unrs-resolver` (native modules used by Next.js for image optimization).

---

### 8. `public/` — Static Assets

| File | Purpose |
|------|---------|
| `next.svg` | Next.js logo, used by `page.tsx` |
| `vercel.svg` | Vercel logomark, used by "Deploy Now" button |
| `file.svg`, `globe.svg`, `window.svg` | Unused placeholder icons (create-next-app defaults) |

---

### 9. `next-env.d.ts` — Next.js TypeScript Ambient Types

Auto-generated by Next.js. Declares the Next.js module types so TypeScript understands `next/*` imports. Do not edit manually.

---

### 10. `AGENTS.md` — Agent Rules

Auto-injected block warning that this Next.js 16 version has breaking changes vs. older training data. Re-added by `next dev` via `generate-agent-files.js`.

---

### 11. `README.md` — User Documentation

Standard `create-next-app` README: dev commands (`npm/yarn/pnpm/bun dev`), localhost:3000, editing `app/page.tsx`, Geist font info, Learn Next.js links, Vercel deployment instructions.

---

## HOW THE PAGES CONNECT (REQUEST FLOW)

```
Browser request: http://localhost:3000/
                    │
                    ▼
            Next.js App Router
                    │
                    ▼
          app/layout.tsx  (Root Layout)
            ├── <html> + <body> + Geist fonts + metadata
            │
            ▼
          app/page.tsx    (Home Page, injected as {children})
            ├── Next.js logo (Image)
            ├── Heading + paragraph (edit page.tsx)
            └── Deploy Now / Documentation buttons
```

- `layout.tsx` is the **shell** — persists across route changes, holds `<html>`/`<body>`.
- `page.tsx` is the **content** — swapped in as `children` when the route matches `/`.
- No additional routes exist yet. To add a page, create `app/<route>/page.tsx`.

---

## DEVELOPMENT COMMANDS (STEP BY STEP)

```bash
# 1. Install dependencies (uses Bun)
bun install

# 2. Start dev server (Turbopack, hot reload)
bun dev
# → open http://localhost:3000

# 3. Lint the codebase
bun run lint

# 4. Production build
bun run build

# 5. Start production server
bun run start
```

---

## KEY DESIGN DECISIONS SUMMARY

1. **App Router** — Uses `app/` directory (not `pages/`). Routes are file-system based.
2. **Tailwind CSS v4** — CSS-first Tailwind, loaded via `@tailwindcss/turbopack` for Turbopack compatibility.
3. **Geist fonts** — Self-hosted/optimized via `next/font/google`, zero layout shift.
4. **Dark mode** — Built-in via CSS variables + `prefers-color-scheme: dark` media query; Tailwind `dark:` utilities work out of the box.
5. **Image optimization** — `next/image` with `priority` for above-the-fold logo.
6. **TypeScript strict** — Full strict mode enabled; path alias `@/*` configured.
7. **No extra UI libraries** — Pure React + Next.js + Tailwind. No component library, no state management, no database, no API routes yet.

---

*End of memory.md — full repository snapshot captured.*
