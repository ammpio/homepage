# Restore true white sections with clearer grey contrast

## Goal

The homepage's "white" sections currently use an off-white with a blue-grey tint (`oklch(0.985 0.004 248)`), which reads as light grey — so the page looks like grey next to slightly-different grey. Make the white sections genuinely white and give the alternating grey bands a touch more depth so the separation is clearly visible.

## Changes

**`src/styles.css` (tokens only, no layout changes):**

- `--background`: change from `oklch(0.985 0.004 248)` to `oklch(1 0 0)` (pure white). This token already matches `--card`, so cards and section backgrounds stay consistent.
- `--secondary`: deepen slightly from `oklch(0.952 0.008 248)` to `oklch(0.955 0.006 250)` neutral territory — actually set to a clearly distinguishable soft grey, `oklch(0.94 0.006 250)`, so the `bg-secondary/30–40` bands read as a gentle grey against pure white rather than near-identical.

No other tokens change; foreground, primary (pink), borders, and dark-mode values stay as they are.

**No changes to `src/routes/index.tsx`** — sections already alternate `bg-background` and `bg-secondary/*`; once the tokens are fixed, the alternation becomes white/grey as intended.

## Verify

- Build OK via `/tmp/observability/build-errors.log`.
- Playwright screenshot pass (desktop + mobile) confirming alternating pure-white and soft-grey bands, with no adjacent same-colour sections and pink accents unchanged.
