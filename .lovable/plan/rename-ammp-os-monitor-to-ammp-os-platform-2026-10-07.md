# Rename "AMMP OS Monitor" to "AMMP OS Platform"

## Goal
Rename the pricing module "AMMP OS Monitor" to "AMMP OS Platform" everywhere it appears, including the Spanish and Portuguese translations.

## Changes

1. **Pricing page** (`src/routes/pricing.tsx`) — 4 spots:
   - Module card name: "AMMP OS Monitor" → "AMMP OS Platform"
   - Hero intro sentence: "...AMMP OS Monitor gives you the dashboards." → "...AMMP OS Platform gives you the dashboards."
   - Page metadata description and og:description (both mention the module name)
   - Feature-comparison table column header

2. **Runtime translations** (`src/i18n/runtime-translations.ts`):
   - Spanish: update the three sentences containing "AMMP OS Monitor" and the standalone entry `"AMMP OS Monitor": "Monitor de AMMP OS"` → map to "AMMP OS Platform" (kept as the English product name in both languages, matching how "AMMP AI" and "AMMP OS" are handled)
   - Portuguese: same three sentences plus the standalone entry

3. **Roadmap note** (`roadmap.md`): update the completed pricing task wording to the new name.

## Notes
- No other pages use "AMMP OS Monitor" — other routes say plain "AMMP OS", which stays as is.
- The module description "Dashboards for monitoring, alerting and reporting…" stays unchanged; only the product name changes.
