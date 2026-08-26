# Agent notes — SeatsConnect

Guidance for AI agents working in this repo.

## Positioning (do not break)

- SeatsConnect is **B2B distribution infrastructure**, not a consumer ticket marketplace.
- No resale / broker / SeatsBrokers language.
- Keep logo as-is (`/seatsconnect-logo.png`).
- Parent brand: SeatsGroup.

## Theme

- Accent orange: `#ff6b00` (hover `#e55f00`).
- Cream / light surfaces; avoid purple-on-white and default AI dark themes.
- Live console on homepage **hero only** (light cream console, not dark terminal).
- Banner images on **heroes only** — not on every homepage section.

## Primary CTAs

1. Connect Your Inventory → `/join/supplier`
2. Join Our Network → `/join/partner`
3. Talk to Our Team → `/contact`
4. Login → `https://app.seatsconnect.com` (external)

## Claims & stats

- Do **not** invent supplier counts, partner counts, country counts, latency, or ticket volume.
- “30+ years” experience copy is allowed where already used in the brief.
- Partner logos stay behind `launchFlags.partnerLogos` until permission is confirmed.
- Developer portal CTA stays behind `launchFlags.developerPortal` until the portal is live.

## Workflow language

Prefer: Search → Quote → Book → Fulfil, approved partners, controlled distribution, API infrastructure.

## Code conventions

- Prefer existing components in `src/components/ui/` and `src/components/sections/home/`.
- Put shared copy/routes/images in `src/lib/constants/`.
- Keep homepage sections unique and animated, but do not re-add photo backgrounds or consoles to every block unless explicitly requested.
- Do not create markdown files unless the user asks for them.
