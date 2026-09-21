# Cleanup pass: colours, navigation and key pages

Nine fixes, all in the current light look (white, Inter, pink accents). No content rewrites beyond what is listed.

## 1. Grey from ammp.io

The soft grey used for alternating sections becomes the exact ammp.io grey (`hsl(220 14% 96%)`), a lighter, cooler tone than today's. Applies everywhere at once: section bands, footer, cards, inputs.

## 2. Integrations page rebuilt like the original

Three tabs — API integrations, Software add-ons, AMMP Edge — with a live search box on the API tab that filters brands as you type, an empty-state line linking to Contact when nothing matches, and the real brand logos grouped by Inverters, Meters, Batteries, Energy management systems and Data services. Logo files are copied over from the original project.

## 3. Use cases as a dropdown with two pages

The menu gets a "Use cases" dropdown with the two original options — Asset managers and O&M providers — each keeping its own page. The two extra use-case pages added earlier (portfolio operators, system integrators) are removed and any links to them are re-pointed.

## 4. Product page tabs

The product page gets the original category tab bar (monitoring, ticketing, alerting, reporting, commercials, integrations, customisations, API, AI), with the features of each category shown in its own panel. On small screens the tabs collapse into a select list, as in the original.

## 5. Delete the two solutions pages

Solar monitoring and Energy asset management pages are deleted, along with their footer links.

## 6. Homepage headline line breaks

Set explicit breaks so these read as asked:
- "Each coworker has a clear job. They add capacity to the people you already have." — one line
- "Proactive when you don't ask. / On demand when you do." — two lines
- "Same workspace. / Same evidence. / Humans stay in control." — three lines
- "A screen when you're watching. / A coworker when you're not." — two lines
- "The dashboards, tickets and reports your team uses every day. The coworkers sit on top of them." — one line

## 7. Footer and closing section

The closing call-to-action band and the footer get the same grey background and a single shared border, so the page ends as one calm block instead of two mismatched strips. Spacing and type sizes are matched between them.

## 8. Book a meeting scheduler

The demo/contact booking places the original HubSpot meetings scheduler inline (Andreas Lehner's contact-form calendar), loading the embed script on mount, replacing the placeholder call-to-action.

## 9. Cleaner menu

New header: Product (dropdown: product overview, AI coworkers, Integrations, Customisation, Security), Use cases (dropdown: asset managers, O&M providers), Case studies, Pricing. Blog is removed from the header (the blog pages stay reachable from the footer). Log in / Try demo / Contact sales are grouped and aligned on a consistent baseline with even spacing. The mobile menu mirrors the same structure.

## Technical notes

- `--secondary` and `--muted` in `src/styles.css` move to `oklch(0.9685 0.0062 247.9)` (ammp.io's `hsl(220 14% 96%)`); no per-component colour changes.
- New `src/data/integrations.ts` plus a `BrandGrid`/`BrandCard` pair under `src/components/site/`; logo assets copied from the snapshot into `src/assets/integrations/` and `src/assets/compare/`.
- Tabs on product/integrations use local `useState` (no shadcn dependency), matching the existing kit in `src/components/site/sections.tsx`.
- Header dropdowns use hover/focus-accessible `<details>`-free markup with keyboard support; nav data moves into a typed structure in `SiteShell.tsx`.
- Routes deleted: `solutions.solar-monitoring.tsx`, `solutions.energy-asset-management.tsx`, `use-cases.portfolio-operators.tsx`, `use-cases.system-integrators.tsx`; all internal links updated so the typed router stays green.
- `BookMeeting` component added (HubSpot `MeetingsEmbedCode.js`, `meetings-iframe-container`), used on `/demo` and `/contact`.
