# Three AEO pages: backup-power monitoring, Power Factors alternatives (South Africa), PPA guarantee exceptions

All three go live on the next deploy from `main` (no `publishAt`), in en/es/pt with localized URLs, hreflang (pt-BR), canonical, sitemap, llms.txt (+ /es, /pt) and llms-full.txt. IndexNow fires on the Netlify production deploy from `main`.

## 1) /solutions/backup-power-monitoring
- Hero: one view of solar and battery backup across a branch network (banks, retailers, franchise and property portfolios as the audience, framed as "companies with many branches", no customer names, no telecom).
- Sections (standard PageHero / Band / IconCards / PageCta):
  - One view across sites and inverter/battery brands (Huawei, SMA, Sungrow, Victron, Deye, as on /south-africa).
  - Alerts when backup isn't ready: battery state of charge low before a load-shedding slot, inverter offline (communication failures). Uses the wording from Standard Alerts and the load-shedding post.
  - Alerts into Microsoft Teams, then Slack, email, webhooks.
  - Ray's morning check across all branches (he checks every site, groups repeat alarms, opens tickets; people decide).
  - Site, sub-portfolio and portfolio dashboards.
  - Savings reporting with 1,000+ South African tariffs and time-of-use battery checks.
- 4–5 FAQs; WebPage + FAQPage JSON-LD via pageHead().
- Links: /south-africa, the load-shedding post, /solutions/hybrid-sites, the Teams/Slack alerts post, /integrations.
- Added to footer Solutions, a link from /south-africa, and ammp-facts PAGES.

## 2) /compare/power-factors-alternatives-south-africa
- Same layout as /compare/power-factors-alternatives (AlternativesList). Each tool gets only the descriptions already in src/data/alternatives.ts, with a short South Africa lens per criterion: load shedding and backup, multi-brand fleets, SLA tracking with O&M contractors, investor reporting, local tariffs (1,000+ SA tariffs, AMMP only).
- "Moving from another platform" section linking to /switch (map sites, devices, alarm rules, report templates).
- Article + FAQPage JSON-LD; byline Andreas Lehner (CCO).
- Two-way links with /compare/power-factors-alternatives and /south-africa; added to src/data/comparisons.ts so it shows under the "Compare" filter on /blog.

## 3) /blog/solar-ppa-guarantee-exceptions
- Category **Insights** (same as the two PPA posts). Author Andreas Lehner.
- How-to: what typically counts as an exception (grid outages, curtailment as a general cause, offtaker load limits, data gaps, force majeure as defined in the contract), why each needs evidence at the time, a monthly routine (flag, attach data, agree with the offtaker before the month closes), consistency across sites and brands.
- AMMP claims limited to: billing-grade PPA data, monthly data freeze, all tariff structures, scheduled report delivery, availability KPI, Ray flagging gaps and saying when data is missing. No auto-classification, no contract reading.
- Article + HowTo (steps = exact visible headings) + FAQPage JSON-LD.
- Links: /solutions/ppa-billing, the PPA guarantees post, the automated PPA billing post, /compare/best-ppa-billing-software.

## Header images
- Solution and compare pages: no cover image (consistent with existing solution/compare pages).
- Blog post: one new generated cover in the site's luminous glass style (abstract solar array with a calendar/document motif, no text, no logos), uploaded via the Lovable CDN and referenced with assetUrl().

## Facts I could not find in our sources (will leave out unless you confirm)
- "Site on grid with no solar" as an alert condition. Existing alert wording covers communication failures, battery state of charge and PV generation performance. I'll write "PV generation below expected" instead.
- Banks, retailers, franchise and property portfolios as named AMMP segments. I'll use them only to describe who the page is for, not as a claim that we serve them today.
- "Before a load-shedding slot" alerting on a schedule: the site says to track state of charge before each scheduled outage. I'll keep that wording and not claim we pull load-shedding schedules automatically.
- Any South Africa-specific facts about other tools in the comparison. Only the existing neutral descriptions are reused.

## Technical details (files)
- New: src/routes/solutions.backup-power-monitoring.tsx, src/routes/compare.power-factors-alternatives-south-africa.tsx, src/data/batch7.ts (FAQs and blog body), src/i18n/batch7-translations.ts (es/pt).
- Edited: src/data/blog-posts.ts (new post entry), src/data/blog-schedule.ts, src/data/authors.ts (POST_AUTHOR + last-updated dates), src/data/comparisons.ts, src/data/ammp-facts.ts (PAGES), src/i18n/dictionaries.ts, src/components/site/SiteShell.tsx (footer), src/routes/south-africa.tsx (two links), src/routes/compare.power-factors-alternatives.tsx (link back), src/lib/sitemap and llms routes only if they don't already read from PAGES/blog data.
- Checks: `bunx vitest run` incl. `SSR_BASE_URL=http://localhost:8080 bunx vitest run src/i18n` (localized SSR, sitemap crawl, HowTo), plus Playwright at phone and desktop for all nine URLs.
