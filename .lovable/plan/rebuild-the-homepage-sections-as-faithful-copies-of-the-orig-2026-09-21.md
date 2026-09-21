# Rebuild the homepage sections as faithful copies of the originals

Today's homepage keeps the right content and order, but each section was rewritten in a compact custom layout. This plan replaces every homepage section with a faithful port of the layout from the project it came from — same structure, proportions, panels, imagery and small details — while keeping the light white background and pink accents.

## Section by section

1. **Opening section** — from AMMP AI Co-Pilots: status pill, oversized display headline with a coloured phrase, supporting paragraph, two buttons, inline scale line, and the full shared-workspace chat panel (message header with "shared workspace", timestamps, evidence block with irradiance / soiling / SLA detail, two buttons, caption underneath).
2. **Scale band** — the original three-metric strip on a soft band, with the longer metric descriptions.
3. **Your team, plus a few more** — the coworker roster layout from AMMP Home A, restoring its card structure and spacing.
4. **Coworkers** — the two-panel proactive / on-demand layout from AMMP AI Co-Pilots, with the heading and supporting line side by side.
5. **03 · Shared by design** — the original split layout: heading and paragraph on the left, three audience cards on the right.
6. **AMMP AI has the context to be useful** — the data-foundation diagram from the v2 homepage: asset rows, connecting line, unified data layer block, and the footer strip with capability chips.
7. **AI can only work with what it understands** — the v2 platform section with its original eyebrow, four named tabs (Monitor and act, Report and explain, Connect every system, Explore with AI) with their original descriptions, and the screenshot panel.
8. **A screen when you're watching / AMMP OS is still all here** — the merged section keeping the AMMP Home A module grid layout and the dashboard image placement.
9. **Results and closing CTA** — the v2 results layout and the original closing block with its two buttons.

## Styling rules

- White and off-white surfaces only; no dark bands and no patterned backgrounds.
- Pink is the single accent; original green accents are mapped to pink.
- Original type scale, spacing, borders and animations are preserved.
- All current text stays exactly as it is unless a section's original wording was lost in the rewrite, in which case the original wording returns.

## Technical notes

- Work stays in `src/routes/index.tsx` plus the shared closing block in `src/components/site/SiteShell.tsx`; supporting pages are untouched.
- Layouts are ported from read-only snapshots of AMMP AI Co-Pilots, AMMP Home A and v2 AMMP Homepage; any required helper components move across with them.
- Green tokens in the copied markup are swapped for the existing primary pink token rather than hardcoded colours.
- Verify desktop and mobile rendering, the chat panel interaction and the platform tabs after the rebuild.
