# Alternate homepage section backgrounds (white / soft grey)

## Goal
Give the homepage's full-width sections subtle visual separation by alternating between white and a soft grey, without changing any content.

## Current state
`src/routes/index.tsx` renders ten full-width sections. Most use `bg-background` (white); the scale band, shared-by-design, data-context and two-interface sections already use light tints (`bg-secondary/30–40`). Two adjacent sections (AMMP OS module grid and results strip) are both plain white, so they blend together.

## Change
Alternate the section backgrounds down the page so no two adjacent sections match:

1. Hero — white (`bg-background`)
2. Scale band — soft grey (`bg-secondary/40`)
3. Your team, plus a few more — white
4. Coworkers — soft grey (`bg-secondary/30`)
5. Shared by design — white (drop its current tint)
6. AI has the context (data foundation) — soft grey (`bg-secondary/35`)
7. AI can only work with what it understands (platform tabs) — white
8. A screen when you're watching / AMMP OS modules — soft grey (`bg-secondary/35`)
9. Results already delivered — white
10. Closing Cta — soft grey tint (only if it currently reads as another plain white band; otherwise leave)

- Keep all card/panel surfaces white (`bg-card`) so panels pop against the grey bands.
- Keep thin `border-border` separators as they are.
- No text, layout or imagery changes.

## Files
- `src/routes/index.tsx` — background classes only.
- Check `SiteShell.tsx`'s closing Cta for the same alternation treatment.

## Verification
- Build OK in `/tmp/observability/build-errors.log`.
- Playwright screenshots at desktop (1280 wide) and mobile (390 wide) confirming clear alternation and no adjacent same-colour sections.
