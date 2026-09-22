# How it works

## New building blocks

- **`Reveal` component** (`src/components/site/Reveal.tsx`) — wraps any block, watches it with an IntersectionObserver, and animates opacity + a 12px rise the first time it enters the viewport. Supports a `delay` prop so grid cards can stagger (0ms, 80ms, 160ms…).
- **New keyframes in `src/styles.css`** — `float-y` (slow 6s bob for the workspace module), `orb-drift` (20s+ slow translation for the glow orbs), `shimmer` (for the evidence bar), `msg-in` (message bubble pop). All inside the existing reduced-motion guard so they switch off for users who prefer that.

## Section-by-section

| Section | Animation |
|---|---|
| Hero | Badge, headline, copy and buttons fade up in sequence on page load; workspace panel floats gently forever |
| Workspace panel | Coworker message and evidence card pop in one after another, like a reply being typed |
| Scale band | The three metrics stagger in on scroll |
| Co-workers grid | Cards ripple in with stagger; keep existing hover lift |
| Proactive / on demand | The two panels reveal from opposite slight offsets; list rows stagger |
| Shared by design | Outcome cards stagger; chevron nudges right on hover |
| Platform diagram | Source cards stagger, center "AMMP AI" card scales in softly, arrows get a subtle pulse |
| AMMP OS modules | Nine module cards ripple in row by row |
| Results | Stat numbers reveal with stagger |

## Technical notes

- Files touched: `src/styles.css` (keyframes/utilities), new `src/components/site/Reveal.tsx`, and `src/routes/index.tsx` (wrapping existing markup — no content edits).
- Pure CSS transform/opacity animations; one shared IntersectionObserver, disconnected after reveal. No new dependencies.
- Everything wrapped in the existing `@media (prefers-reduced-motion: reduce)` guard: animations off, content fully visible.
- Verified afterwards with a browser pass: no console errors, animations fire, reduced-motion path clean.
