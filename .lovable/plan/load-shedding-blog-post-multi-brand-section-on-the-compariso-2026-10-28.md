# Load-shedding blog post + multi-brand section on the comparison page

## 1. Scheduled blog post (Wed 9 Dec 2026, 09:00 CET)

- Slug: `monitor-solar-battery-backup-load-shedding-south-africa`
- Title: "How to monitor solar and battery backup sites through load-shedding: a guide for South African C&I operators"
- `date: "2026-12-09"`, `publishAt: "2026-12-09T08:00:00Z"` (09:00 CET = 08:00 UTC), category "Insights", author Andreas Lehner (CCO).
- Uses the existing scheduling, so it stays out of the blog list, sitemap, llms.txt and the post page (404) until then. The daily IndexNow check pings it when it goes live.
- Sections (H2s):
  1. Why backup sites need different monitoring: grid outages, battery state of charge, gensets where there are any, and communication dropouts during outages. This covers what operators should check. Of AMMP features it names only the built-in data quality checks, configurable estimation rules and backup satellite irradiance data (used when a site sensor is missing). It makes no claim about buffering.
  2. KPIs to track: availability, battery cycling, backup hours delivered, performance ratio (PR).
  3. Checking savings and PPA performance when the grid is down for part of the day.
  4. Checking battery charging and discharging against time-of-use tariffs (AMMP's tariff database covers 1,000+ South African tariffs).
  5. What to look for in vendor-neutral monitoring: support for many brands (30+ integrations), AMMP Edge for equipment without an API, alerts sent to Microsoft Teams, Slack, email and webhooks (in that order), and reporting.
  6. One short paragraph on Ray, consistent with /south-africa: every day, Ray checks each battery's charging and discharging against the site's time-of-use tariff and flags sites that lost money by charging or discharging in the wrong window.
  7. A short checklist to end on.
- "Commercial and industrial (C&I)" is written out once. No prices, no customer names, and only the approved figures.
- In-text links and related cards go to /south-africa, /solutions/hybrid-sites and /solutions/investor-reporting.
- Spanish and Portuguese versions are added the same way as for the other posts.
- Cover image: a new generated cover in the style of the existing scheduled-post covers.
- The full draft is shared in chat for approval before building.

## 2. /compare/best-commercial-solar-monitoring-platforms: new section

- New section after "The platforms", with the heading **"Monitoring Huawei, SMA and Sungrow in one portal"**.
  - Why mixed-brand fleets end up with several portals (FusionSolar, Sunny Portal, iSolarCloud). This uses wording already on /compare/vendor-portals.
  - What to check: whether each brand connects through its cloud API or a datalogger, whether KPIs are calculated the same way across brands, and where alerts go.
  - How each listed platform handles data from several brands: a short, neutral line per platform, based only on its existing description on the site. Where our pages don't cover it, I won't guess.
  - Links to /integrations and /solutions/solar-monitoring.
- FAQ entry: "How do I monitor Huawei, SMA and Sungrow inverters in one portal?" It is shown on the page and added to the page's Google FAQ schema.

## Technical details

- `src/data/blog-posts.ts`: new body plus a post entry. The cover pointer is `src/assets/blog-loadshedding-cover.jpg.asset.json`, loaded through `assetUrl()`.
- es/pt: the same translation files the earlier scheduled posts used.
- Comparison page: the platform lines come from a new field in `src/data/alternatives.ts`. The FAQ is passed to `pageHead({ faqs })`.
- Tests: run the existing tests. Add one test that checks the new post is hidden before 2026-12-09T08:00:00Z and live after it.

## Open questions

None. All three are answered: alert channels are Microsoft Teams, Slack, email and webhooks; data gaps are described as checks plus AMMP's existing data quality features; Ray gets one short paragraph near the end.
