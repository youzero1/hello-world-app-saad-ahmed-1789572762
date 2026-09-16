---
status: pending
title: Minimal Hello World App
---

Current state: the project directory is empty — no scaffolding, routes, config, or stylesheet exist yet. Everything below must be created from scratch.

1. Create `package.json` as an ESM package (`"type": "module"`) with npm scripts `dev`, `build`, `preview`, and dependencies: `react`, `react-dom`, `@tanstack/react-router`; dev dependencies: `vite`, `@vitejs/plugin-react`, `typescript`, `@types/react`, `@types/react-dom`, `tailwindcss`, `@tailwindcss/vite`, `@tanstack/router-plugin`. Outcome: installable project manifest.

2. Create `vite.config.ts` registering the TanStack Router plugin (from `@tanstack/router-plugin/vite`, configured for the `src/routes` directory), the React plugin, and the Tailwind Vite plugin; add a resolve alias mapping `@/` to `src/`. Outcome: dev server generates the route tree and processes Tailwind.

3. Create `tsconfig.json` (and `tsconfig.node.json` if splitting app/node configs) targeting modern ESNext modules with `jsx: react-jsx`, strict mode on, and `paths` mapping `@/*` to `src/*` so the alias resolves in the editor and build. Outcome: type checking and alias resolution work.

4. Create `index.html` at the project root with a `#root` div and a module script tag pointing at `/src/main.tsx`. Outcome: Vite has an entry HTML document.

5. Create `src/styles/global.css` containing exactly one line: the Tailwind import directive. Outcome: all Tailwind v4 utilities available app-wide.

6. Create `src/main.tsx` that imports `@/styles/global.css`, builds the router from the generated `src/routeTree.gen.ts`, and mounts `RouterProvider` into `#root` inside React StrictMode. Outcome: app boots with routing and styles active.

7. Create `src/routes/__root.tsx` as the app shell: a root route rendering only an `Outlet` (no nav, no header). Outcome: minimal shell with no extra chrome.

8. Create `src/routes/index.tsx` for the `/` route: a full-viewport-height flex container centering a single heading that reads "Hello World", styled with Tailwind utilities (large bold type, neutral background, readable text color). Static text only — no state, handlers, or inputs. Outcome: visiting `/` shows centered "Hello World".

9. Add a `.gitignore` covering `node_modules`, `dist`, and `src/routeTree.gen.ts` is generated — leave it untracked or tracked per preference, but never hand-edit it. Outcome: generated and installed artifacts stay out of manual edits.

10. Verify: run `npm install` then `npm run dev`, open the dev server URL, and confirm the page renders "Hello World" centered both vertically and horizontally with Tailwind styles applied and no console errors; then run `npm run build` to confirm a clean production build. Outcome: app works in dev and builds successfully.
