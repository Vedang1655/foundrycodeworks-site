# Foundry Codeworks

Source for foundrycodeworks.com — built with Next.js (App Router) + TypeScript, matching the Viszlyn stack.

## Local dev

```
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Push this repo to GitHub, then import it on Vercel and connect the foundrycodeworks.com domain (same flow used for viszlyn.io via Namecheap DNS: A record + CNAME).

## Structure

- `app/layout.tsx` — root layout, fonts, metadata
- `app/page.tsx` — the one-page site (hero, services, work, about, contact)
- `app/globals.css` — design tokens + styles (dark/light theme aware)
