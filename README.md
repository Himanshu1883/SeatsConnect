# SeatsConnect™

API-powered B2B distribution infrastructure for tickets, hospitality and live experiences.

**Connect Once. Distribute Globally.**

This repository is the public marketing website for SeatsConnect (part of SeatsGroup). It is not a consumer marketplace, resale platform, or broker site.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

## Commands

```bash
npm install
npm run dev          # development server
npm run dev:clean    # wipe Next caches, then start dev
npm run clean        # wipe `.next` and `.next-dev`
npm run build        # production build
npm run start        # serve production build
npm run lint
```

### Dev / build cache note

`next.config.ts` uses separate dist folders:

- `next dev` → `.next-dev`
- `next build` → `.next`

Do not run `build` while `dev` is open, or you can hit missing chunk errors. Prefer `npm run clean` / `npm run dev:clean` if the cache is corrupted.

## Project layout

```text
src/app/                 # routes (pages)
src/components/
  layout/                # Navbar, Footer
  sections/home/         # homepage sections
  ui/                    # shared UI (Button, LiveConsole, PageLayout, Reveal)
src/lib/constants/       # site copy, routes, images, flags, topics
docs/                    # project markdown docs
```

## Key URLs

| Environment | URL |
|---|---|
| Marketing site | https://seatsconnect.com |
| Partner portal | https://app.seatsconnect.com |
| Developer portal | https://developers.seatsconnect.com |

Navbar **Login** always points to the partner portal (`app.seatsconnect.com`).

## Docs

- [Brand & theme](docs/brand.md)
- [Sitemap & pages](docs/sitemap.md)
- [Homepage sections](docs/homepage.md)
- [Content guidelines](docs/content-guidelines.md)
- [Launch flags](docs/launch-flags.md)
- [Agent notes](AGENTS.md)

## License

Private. All rights reserved.
