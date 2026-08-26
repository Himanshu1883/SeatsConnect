# Brand & theme

## Identity

| Item | Value |
|---|---|
| Name | SeatsConnect |
| Trademark | SeatsConnect™ |
| Parent | SeatsGroup |
| Tagline | Connect Once. Distribute Globally. |
| Statement | Connecting Global Supply to Global Demand. |
| Logo | `/public/seatsconnect-logo.png` (do not redesign) |

## Color tokens (`src/app/globals.css`)

| Token | Hex | Role |
|---|---|---|
| `--color-brand-orange` | `#d4a574` | Primary accent |
| `--color-brand-orange-hover` | `#c49262` | Hover |
| `--color-brand-orange-light` | `#faf6f2` | Cream surfaces |
| `--color-brand-orange-muted` | `#e8c9a8` | Soft accent |
| `--color-brand-dark` | `#1a1a1a` | Text |
| `--color-brand-gray-text` | `#64748b` | Body copy |

## Typography

- Body / UI: Plus Jakarta Sans (`font-sans`)
- Display / tech: Space Grotesk (`font-tech`)

## Visual rules

- Prefer light cream / white sections with muted orange accents.
- Avoid dark-mode consoles, purple gradients, and heavy glow stacks.
- Hero: full-bleed banner slideshow + one live console.
- Below the fold: no section photo backgrounds unless the user asks.
- Motion should reinforce hierarchy (reveal, cycle, progress) — not noise.

## Live console

- Component: `src/components/ui/LiveConsole.tsx`
- Light glass / cream UI with LIVE clock, pipeline chips, streaming feed.
- Homepage placement: **hero only**.
- Other pages may use consoles sparingly where the brief already shows API / platform / solution flows.
