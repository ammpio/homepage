# Match the footer to the Luminous Glass layout

## Goal
The footer currently reads as a solid grey band (76% `--secondary` grey over the porcelain canvas) that clashes with the airy, glassy page above it. Restyle it so it blends into the same luminous porcelain environment, keeping every link, column, logo, and line of copy exactly as it is.

## Changes

### 1. `src/styles.css` — restyle the `glass-footer` utility
- Replace the grey fill with a transparent-to-barely-tinted porcelain surface: mostly transparent white mix so the page glows show through softly (similar language to `glass-soft`, but lighter).
- Keep a gentle backdrop blur + saturate so any glow behind it stays soft.
- Softer top border: keep the existing hairline (`border-border/60` stays in the component) — no change needed there.

### 2. `src/components/site/SiteShell.tsx` — footer wrapper polish only
- Let the footer sit on the page canvas: remove any visual heaviness by keeping the existing structure, columns, and spacing (`py-14`, grid, bottom bar) untouched.
- Add a subtle page-anchored glow behind the footer area (one soft amber/magenta orb, absolutely positioned, non-interactive, scrolls with the page) so the footer feels part of the luminous environment rather than a slab at the bottom. Same orb-drift treatment as the existing three orbs.
- No copy, link, or layout changes anywhere in the footer.

## Verification
- Check `/`, `/pricing`, and `/contact` on desktop (1280) and mobile (390): footer blends with the page, glows visible but text contrast intact, no horizontal overflow.
- Confirm build passes and the three-shade hierarchy above the footer (results band, PageCta) still reads correctly.
