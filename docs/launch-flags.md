# Launch flags

Defined in `src/lib/constants/features.ts`.

| Flag | Default | Meaning |
|---|---|---|
| `partnerLogos` | `false` | Show partner / supplier logo wall only when commercial relationship and publishing permission exist. |
| `developerPortal` | `false` | Link to `https://developers.seatsconnect.com` only when the portal is live; otherwise keep “Request Developer Access”. |

## Related components / pages

- `LogoWall` — returns `null` when `partnerLogos` is false
- `/developers` — portal CTA vs access request form
- `/resources` and `/support` — may reference portal / docs depending on flags

Flip flags only when ops / legal / product confirm the destination is ready.
