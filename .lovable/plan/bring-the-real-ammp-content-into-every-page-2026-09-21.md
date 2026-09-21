# Bring the real AMMP content into every page

Right now the homepage is fully built, but every other page uses the same generic four-card template with placeholder copy — that is why they all look alike. This plan replaces that with the actual content from the AMMP Homepage site, page by page, rewritten so the AI coworker story leads.

## What changes

Each page gets its own real structure and copy taken from its counterpart on the AMMP Homepage: hero, story sections, cards, comparison tables, FAQ lists, pricing modules, customer proof, and closing calls to action. No two pages will share a layout unless the originals do.

Everything is rebuilt in the current look: white and soft-grey alternating bands, Inter, pink accents, the existing header and footer. Nothing from the homepage changes.

## Pages covered

Existing pages (28), filled with their real content:
Product, AI, Integrations, Pricing, Case studies, Customization, Security, About, Careers, Blog, FAQ, Contact, Demo, Beta, Switch, Privacy, Terms, the two Solutions pages, the two Use-case pages, and the six Comparison pages.

New pages added from the AMMP Homepage:
- Free trial, US, Brazil
- Two more use cases: portfolio operators, system integrators
- The remaining comparison pages: AlsoEnergy, Bazefield, Fronius, GoodWe, Growatt, Huawei, Meteocontrol, Qos Energy, SMA, SolarEdge, Sungrow, Univers, Victron, PV Operation, cloud vs on-premise, data-first vs UI-first, open vs proprietary
- The blog index plus all 25 articles (partnership announcements, ISO 27001, MCP server beta, monitoring guide, white paper, featured press items)

Footer and navigation get the new pages wired in where the original site links them.

## Tone

Facts, numbers, customer names and claims stay as they are on the AMMP Homepage. The framing leads with AI coworkers sitting on top of AMMP OS: each page opens with what the coworkers do for that audience, then backs it with the platform capability the original page described.

## Build order

1. Shared building blocks: page hero, feature grid, comparison table, FAQ accordion, article layout, stat strip.
2. Core pages: Product, AI, Integrations, Pricing, Case studies, Customization, Security, Solutions, Use cases.
3. Company and conversion pages: About, Careers, Contact, Demo, Trial, Beta, Switch, FAQ, US, Brazil, Privacy, Terms.
4. Comparison pages (shared template, per-competitor content).
5. Blog index and all articles.
6. Navigation and footer links, per-page titles and descriptions, then a click-through check of every page on desktop and mobile.

## Technical notes

- Source content lives in the AMMP Homepage snapshot under `src/pages/**` with copy in `src/i18n/translations/*`; English strings get resolved to literals here (no i18n layer is added).
- Source pages use react-router; ported pages use TanStack `createFileRoute` files under `src/routes/`, with dotted filenames for nested paths (`compare.sma.tsx`, `blog.$slug.tsx` style where an article template fits).
- The generic `ContentPage` template and `src/lib/site-pages.ts` are retired once every route has real content.
- Images referenced by source pages are copied into `src/assets/` from the snapshot where they are real files; pointer-only assets get downloaded and re-uploaded, or replaced with a generated substitute if unavailable.
- Each route defines its own `head()` with a unique title, description and Open Graph pair.
