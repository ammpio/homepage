# Load-shedding blog post + multi-brand section on the comparison page

## 1. Scheduled blog post (Wed 9 Dec 2026, 09:00 CET)

- Slug: `monitor-solar-battery-backup-load-shedding-south-africa`
- Title: "How to monitor solar and battery backup sites through load-shedding: a guide for South African C&I operators"
- `date: "2026-12-09"`, `publishAt: "2026-12-09T08:00:00Z"` (09:00 CET = 08:00 UTC), category "Insights", author Andreas Lehner (CCO).
- Uses the existing scheduling, so it stays out of the blog list, sitemap, llms.txt and the post page (404) until then. The daily IndexNow check pings it when it goes live. Nothing else is needed.
- Sections (H2s):
  1. Why backup sites need different monitoring: grid outages, battery state of charge, gensets where there are any, and communication dropouts during outages.
  2. KPIs to track: availability, battery cycling, backup hours delivered, performance ratio (PR).
  3. Checking savings and PPA performance when the grid is down for part of the day.
  4. Checking battery charging and discharging against time-of-use tariffs (AMMP's tariff database covers 1,000+ South African tariffs).
  5. What to look for in vendor-neutral monitoring: support for many brands (30+ integrations), AMMP Edge for equipment without an API, alerts sent to Microsoft Teams and Slack, and reporting.
  6. A short checklist to end on.
- "Commercial and industrial (C&I)" is written out once. No prices, no customer names, and only the approved figures (10,000+ sites, 30+ countries, 30+ integrations).
- In-text links go to /south-africa, /solutions/hybrid-sites and /solutions/investor-reporting. The related cards point to the same three pages.
- Spanish and Portuguese versions are added the same way as for the other posts.
- Cover image: a new generated cover in the style of the existing scheduled-post covers (I'll look at those first). Upload it the same way as the other covers.
- **Before building, I'll put the full draft text in chat for your approval.** Nothing ships until you approve it. Even after it ships, the post stays hidden until 9 Dec.

## 2. /compare/best-commercial-solar-monitoring-platforms: new section

- New section after "The platforms", with the heading **"Monitoring Huawei, SMA and Sungrow in one portal"**.
  - Why mixed-brand fleets end up with several portals: each brand has its own (FusionSolar, Sunny Portal, iSolarCloud). This uses wording already on /compare/vendor-portals.
  - What to check: whether each brand connects through its cloud API or a datalogger, whether KPIs are calculated the same way across brands, and where alerts go.
  - How each listed platform handles data from several brands. Each one gets a short, neutral line based only on its existing description on the site. Manufacturer portals are described as covering only their own brand. Where our pages say nothing about a platform's multi-brand approach, I'll say we haven't published details rather than guess.
  - Links to /integrations and /solutions/solar-monitoring.
- FAQ entry on the page: "How do I monitor Huawei, SMA and Sungrow inverters in one portal?" The answer: use a vendor-neutral platform that connects each brand by cloud API or datalogger, calculates KPIs the same way for all brands, and sends alerts to Teams or Slack. AMMP is named as one option, with 30+ integrations and AMMP Edge.
- The FAQ is shown on the page and also added to the page's Google FAQ schema, which the existing page setup supports. Other text on the page stays unchanged.

## Technical details

- `src/data/blog-posts.ts`: new body plus a post entry; cover pointer in `src/assets/blog-loadshedding-cover.jpg.asset.json`, loaded through `assetUrl()`.
- es/pt: the same translation files the earlier scheduled posts used.
- Comparison page: the platform lines come from `src/data/alternatives.ts` as a new field (e.g. `multiBrand`), so the wording has one source. The FAQ is passed to `pageHead({ faqs })` and shown on the page.
- Tests: run the existing blog scheduling and docs tests. Add one test that checks the new post is hidden before 2026-12-09T08:00:00Z and live after it.

## Open questions

1. **Email alerts:** the site currently names Microsoft Teams and Slack (and AMMP OS) as alert channels. Email isn't mentioned anywhere. Can I say email, or should I leave it out? Unless you confirm, I'll leave it out.
2. **Gensets and communication dropouts:** /solutions/hybrid-sites covers gensets through AMMP Edge. The site doesn't say how AMMP handles data gaps during outages, so I'll describe what operators should check without claiming a specific AMMP feature. Is that OK?
3. **Ray in the post:** /south-africa says Ray checks every battery. Should the post mention Ray, or stick to monitoring software in general?
