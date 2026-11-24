# Correct AMMP claims in the P50 benchmarking post (en/es/pt)

Post: /blog/benchmark-solar-portfolio-p50-energy-yield-reports

## What the docs actually say (checked)
- kpi-calculations.md: yield target ratio = actual energy / target yield; target yield "usually based on PVsyst simulation results"; set per asset under **Target Yield**. Losses split into **irradiance underperformance** (PV potential vs target yield, i.e. actual irradiance vs the simulation) and **remaining loss** (PV potential vs actual production).
- data-management.md: Target Yield = "Expected energy yield, daily or monthly". No mention of PDF/report upload.

## Conflicts with the requested wording
1. **Helioscope** is not in either doc, only PVsyst. Plan: say "usually taken from the PVsyst simulation in the yield report". Tell me if you want Helioscope kept anyway.
2. **Yearly resolution** is not in the docs (only daily or monthly). Plan: "daily or monthly".
3. **PDF upload**: data-management.md doesn't mention it, so per your rule the last sentence ("Where the import is enabled...") is dropped.

## Changes
1. FAQ answer (src/data/batch8.ts, P50_FAQ) becomes:
   "Yes. Each site has a target yield, usually taken from the PVsyst simulation in the yield report, set under Target Yield at daily or monthly resolution. AMMP then reports the yield target ratio (actual energy ÷ target yield) and splits the gap into irradiance underperformance (actual irradiance vs the simulation) and remaining loss (plant issues)."
   The FAQPage JSON-LD reads from the same list, so it updates automatically.
2. "Where AMMP helps" section (post body in src/data/blog-posts.ts): add one to two sentences with the same facts plus a link to /product/documentation/kpi-calculations. Keep the existing PR, availability and Ray sentences.
3. No new claims on P90, IE report parsing or automated reconciliation.
4. Bump the post date in src/data/authors.ts POST_UPDATED to today (2026-11-24).
5. Spanish and Portuguese: update the matching entries in src/i18n/batch8-translations.ts (FAQ + new sentences), so /es and /pt match.

## Checks
- `SSR_BASE_URL=http://localhost:8080 bunx vitest run src/i18n` and blog/howto tests.
- Load en/es/pt pages; confirm visible FAQ, JSON-LD and "Last updated" match.
