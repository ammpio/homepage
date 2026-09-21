# Switch to Inter and accent the tagline

## Changes

1. **Font → Inter (site-wide)**
   - `src/routes/__root.tsx`: replace the Google Fonts stylesheet link (currently DM Sans + Space Grotesk) with an Inter stylesheet (`wght 400–700`).
   - `src/styles.css`: update `@theme` font tokens — `--font-display` and `--font-body` both become `"Inter", sans-serif`. All headings, body text, and the `eyebrow` utility follow automatically since they reference these tokens.

2. **Tagline accent**
   - `src/routes/index.tsx` (Hero, line ~50): wrap "renewable energy portfolio" in a `<span className="text-primary">` inside the h1 — "Put AI to work across your" stays foreground, the closing phrase renders in the AMMP pink.

## Out of scope
- No content, layout, or section changes.
