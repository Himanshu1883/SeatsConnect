# Homepage sections

Entry: `src/app/page.tsx`  
Sections: `src/components/sections/home/`

Banner imagery and the live console belong on the **hero only**. Other sections use cream/white frames, scroll reveals, and interactive motion — not photo backgrounds or repeated consoles.

| Order | Component | Purpose | Interaction |
|---|---|---|---|
| 1 | `HomeHero` | Brand + headline + CTAs + live console | Banner slideshow, console feed, ops ticker |
| 2 | `HomeProblem` | Fragmented vs connected distribution | Toggle Fragmented / Connected graph |
| 3 | `HomeSupplier` | Supplier value props | Asymmetric bento cards |
| 4 | `HomePartner` | Partner access methods | Cycling access dock |
| 5 | `HomeHowItWorks` | Supply → Fulfil workflow | Auto-advancing steps (pauses on hover) |
| 6 | `HomeApi` | API connectivity lanes | Supply → SeatsConnect → Demand flow |
| 7 | `HomeControlledDist` | Distribution control factors | Toggleable rule chips |
| 8 | `HomeNetwork` | Professional demand channels | Sequenced channel highlight |
| 9 | `HomeB2BTools` | Search → Quote → Book → Fulfil | Stage tracker + capability list |
| 10 | `HomeWhiteLabel` | Brand-over-infrastructure | Stacked brand layers |
| 11 | `HomeInternational` | Global distribution regions | Region routing sweep |
| 12 | `HomeExperience` | 30+ years experience | Count-up + pillars |
| 13 | `HomeFinalCTA` | Closing CTAs | Framed CTA panel |
| 14 | `HomeLoginNote` | Existing partners | Portal login link |

## Shared helpers

- `HomeFrame` / `HomeKicker` — section shell and live eyebrow
- `Reveal` / `useCycle` — scroll-in and auto-cycle state
- Motion utilities in `src/app/globals.css` (`.reveal-up`, `.flow-line`, `.home-card-lift`, etc.)

## Primary hero CTAs

1. Connect Your Inventory → `/join/supplier`
2. Join Our Network → `/join/partner`
3. Talk to Our Team → `/contact`
