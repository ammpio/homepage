# AI-visibility batch: 9 items (plan + drafts for approval)

All new pages ship in English, Spanish and Portuguese in one go (`/es/...`, `/pt/...`), with hreflang, sitemap entries, llms.txt (+ /es, /pt), llms-full.txt, page schema, IndexNow on the next `main` deploy. Blog posts: author Andreas Lehner (CCO), today's date, published now.

## URLs

| # | Type | URL |
|---|---|---|
| 1 | Blog (HowTo + FAQ) | /blog/solar-battery-alerts-microsoft-teams-slack |
| 2 | Compare | /compare/solar-log-alternatives |
| 3 | Compare | /compare/best-bess-monitoring-software |
| 4a | Solution | /solutions/ppa-billing |
| 4b | Compare | /compare/best-ppa-billing-software |
| 5 | Solution | /solutions/portfolio-benchmarking |
| 6 | Compare | /compare/best-ai-tools-solar-asset-managers |
| 7 | Blog (FAQ) | /blog/solar-monitoring-africa-nigeria-kenya-south-africa |
| 8 | New section | /south-africa |
| 9 | New section | /ray |

Spanish and Portuguese pages use the same address with /es or /pt in front (for example /es/compare/solar-log-alternatives).

## Fact check against the site (what I can and can't write)

Supported today:
- Alerts: filter by asset group and asset; suppression rules scoped to portfolio, asset groups or assets; noisy vendor alerts can be suppressed; Standard Alerts cover communication failures, battery state of charge and PV performance; notifications to Microsoft Teams, Slack, email, webhooks (custom alerts are set up via support@ammp.io).
- Ray: checks every site each morning, groups repeat alarms, opens tickets, people decide, doesn't control hardware.
- Batteries: state of charge, charging and discharging (hybrid sites); Ray's time-of-use battery checks (South Africa); tariff database of 1,000+ South African tariffs.
- PPA/savings: Energy Savings Hub, grid and PPA tariffs, fixed and time-of-use, demand charge savings, invoice backup; data quality checks, configurable estimation rules, satellite irradiance backup; "your branding on reports".
- KPIs: IEC 61724-1 PR (weather-corrected and not), loss waterfall and Sankey, satellite irradiance mode, energy-weighted portfolio PR (blog post).

NOT found on the site (I will leave these out unless you confirm):
- "Alert rules at portfolio, asset group and asset level" and "KPI-based alert rules" as a self-serve feature (docs say custom alerts go through support).
- "Billing-grade" savings, "all tariff structures and contract types", "monthly data freeze", "scheduled report delivery".
- "Availability" and "specific yield" as named KPIs, "portfolio/sub-portfolio/site/device dashboards".
- PCS/inverter integration for batteries, safety/thermal alarm routing, cycling counts.
- Ray comparing neighbouring inverters or using satellite irradiance to separate weather from site issues.
- Anything about Nigeria (connectivity, diesel hybrids, tariffs) or Kenya beyond them being markets AMMP serves.

## Open questions

1. Solar-Log: beyond "on-site datalogger and monitoring, widely used" there's nothing on our compare pages. Do you want other options listed besides Solar-Log, meteocontrol, vendor portals and AMMP? Is Solar-Log's own portal (Solar-Log WEB) okay to name?
2. Alerts: can I say customers set KPI alert rules at portfolio, group and asset level themselves, or keep "set up with our team"?
3. PPA billing: confirm or drop each of: billing-grade, all tariff structures/contract types, monthly data freeze, scheduled delivery.
4. Benchmarking: confirm availability, specific yield, and the four dashboard levels.
5. BESS: confirm PCS integration, safety/thermal alarm routing, cycle tracking. Which BESS brands can I name (only those on /integrations?).
6. BESS compare / PPA compare / AI tools compare: which competitors should appear? Our pages only describe meteocontrol, Power Factors, AlsoEnergy, Bazefield, Univers, vendor portals, QOS, etc. in general terms; none say anything about batteries, PPA billing or AI. My proposal: criteria-led pages with AMMP plus categories ("vendor portals", "spreadsheet/ERP billing", "general assistants via MCP such as Claude and ChatGPT"), no named competitor feature claims.
7. Ray root cause: can I say Ray compares neighbouring inverters and uses satellite irradiance and expected yield to separate weather from site issues?
8. Africa post: any facts you want for Nigeria and Kenya (connectivity, diesel hybrids, grid)? Otherwise I write them as general "what to check" questions, no market claims.
9. /south-africa section: Huawei FusionSolar is only described as a vendor portal (lock-in angle). Okay to also link /compare/huawei?

## Drafts (English; final copy follows your answers)

### 1. How to get solar and battery alerts in Microsoft Teams (and Slack)
Intro: Alerts that land in a separate portal get missed. Routing them into the channel your team already uses means the right person sees a communication failure or a low battery in minutes.
- H2 Why route alerts into Teams or Slack
- H2 Step 1: Decide which alerts matter (Standard Alerts: communication failures, battery state of charge, PV performance; suppression rules for planned maintenance and noisy vendor alerts, scoped to portfolio, asset groups or assets)
- H2 Step 2: Choose where alerts go (Microsoft Teams, Slack, email, webhooks; each message shows alert name, state, site, parameter, value, time; red = triggered, green = cleared)
- H2 Step 3: Allow shared channels in Microsoft Teams (link to the docs page)
- H2 Step 4: Let Ray post findings with evidence (checks every site each morning, groups repeat alarms, opens tickets; people decide)
- FAQ: "Can I get solar alerts in Microsoft Teams?" Yes, AMMP sends alerts to Teams channels, and Ray can post findings there. "Does AMMP work with Slack?" Yes, alerts and Ray both work in Slack.
Links: /solutions/solar-monitoring, /ray, Teams docs page.

### 2. Solar-Log alternatives for multi-site portfolio monitoring
Same layout as the meteocontrol page: 5 criteria (multi-brand, one data model, alerts and tickets, reporting with your branding, data access via API, MCP server and Export Center), options table: Solar-Log ("an on-site datalogger and monitoring solution, widely used"; fits: sites built around its datalogger), meteocontrol, vendor portals, AMMP. FAQ x2.

### 3. Best BESS monitoring software for C&I sites
Six criteria as you listed; AMMP covered only on supported points (state of charge, charging/discharging, solar + battery + genset in one view, Ray time-of-use checks, alert routing, reporting). Links: battery cheat sheet, /solutions/hybrid-sites, /south-africa. FAQ x2.

### 4a. PPA billing and savings verification for C&I solar
Hero: "Back up every PPA invoice with meter, tariff and contract data." Sections: tariffs (grid and PPA, fixed and time-of-use, demand charges, 1,000+ South African tariffs), data you can trust (quality checks, estimation rules, satellite backup), reports with your branding. Links: /blog/automated-ppa-billing-solar, /solutions/investor-reporting. FAQ x2.

### 4b. Best PPA billing and savings reporting software for C&I portfolios
Criteria-led: tariff coverage, time-of-use and demand charges, data quality handling, client-facing reports, audit trail to meter data, exports. Options as categories (see question 6).

### 5. Benchmark solar KPIs across sites and brands
One data model across brands, IEC 61724-1 PR (weather-corrected and not, irradiance below 50 W/m2 excluded), loss waterfall and Sankey, energy-weighted portfolio PR. Links: PR blog post, KPI docs. FAQ x2.

### 6. Best AI tools for solar asset managers (2026)
Four categories, no ranking; criteria table (live portfolio data, evidence per finding, human approval, permissions, where it runs). AMMP: Ray in Teams/Slack/platform; MCP server for Claude and ChatGPT. Other vendors only per question 6.

### 7. Solar monitoring in Africa: Nigeria, Kenya and South Africa
Sections: why one platform across countries, grid reliability and load-shedding, diesel hybrids, connectivity, tariffs (1,000+ SA tariffs), checklist. Links: /south-africa, /solutions/hybrid-sites, load-shedding post. FAQ x2.

### 8. /south-africa: "Alternatives to Power Factors and Huawei FusionSolar in South Africa"
Two short neutral paragraphs reusing the existing lines (Power Factors: "renewable asset performance management software"; FusionSolar: Huawei's own portal), plus AMMP across brands with Ray on top. Links to both compare pages.

### 9. /ray: "Root-cause analysis"
Expected yield vs actual, underperformance across brands, a diagnosis with evidence handed to the team; neighbouring inverters and satellite only if you confirm (question 7). Link to the underperformance post.

## Technical details
- New routes follow existing compare/solution files and `pageHead()`; posts go in the blog data with `howTo.steps` for post 1, FAQ arrays, Article schema via authors.ts.
- Neutral descriptions added to `src/data/alternatives.ts`; facts and pages registered in `ammp-facts.ts` PAGES; comparisons list for the blog Compare tab; footer links under Compare/Solutions.
- es/pt dictionary entries for every new string; run i18n SSR tests, sitemap crawl test and HowTo test.
