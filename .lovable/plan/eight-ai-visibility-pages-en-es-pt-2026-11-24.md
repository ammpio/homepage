# Eight AI-visibility pages (en/es/pt)

Every page follows the usual setup: en/es/pt from the same build with translated addresses and hreflang (es, pt-BR); listed in the sitemap, llms.txt (+ /es, /pt) and llms-full.txt; author Andreas Lehner (CCO); Article + FAQPage schema (3–4 FAQs each), plus HowTo on posts 1, 3 and 6; no scheduling, so they go live on the next deploy from main and IndexNow pings them.

## Pages

1. **/blog/solar-monitoring-data-warehouse-api** (category: Guides). HowTo steps: get an API key, request a token, choose what to pull (site/device metadata, energy, KPIs), load only new data, schedule refreshes (refresh the token first, because tokens expire), normalise across brands. The steps are generic and invent no endpoint names. They link to data-api.ammp.io/docs for the real endpoints. A closing section explains that the MCP server is for ad-hoc questions and the warehouse is for planned analytics. Links: /mcp, /integrations, Excel and Google Sheets doc. Linked from /mcp.
2. **/blog/solar-monitoring-software-rfp-checklist** (Guides). A vendor-neutral table of nine areas, each with RFP questions and what a good answer looks like. The AMMP paragraph mentions only: multi-brand integrations, user permissions, alerting/ticketing, SLA tracking, "your branding on reports", API/MCP/Export Center, ISO/IEC 27001:2022, and /switch. Linked from /use-cases/om-providers.
3. **/blog/benchmark-solar-portfolio-p50-energy-yield-reports** (Insights). Covers what P50/P90 mean and why yield reports and live data diverge. DNV and 3E are named only as commonly used assessment providers. HowTo: a monthly reconciliation routine. AMMP claims are limited to: actual vs expected yield, PR, availability, portfolio benchmarking, and Ray separating resource-driven shortfalls from faults. The post makes no claim that AMMP imports P50 budgets or yield reports.
4. **Brazil post, written in Portuguese first:** /pt/blog/plataformas-monitoramento-solar-api-aberta-brasil. The English version is /blog/open-api-solar-monitoring-platforms-brazil and the Spanish one is /es/blog/plataformas-monitoreo-solar-api-abierta-brasil. It covers five criteria, plus a neutral comparison of PV Operation, Meteocontrol, Power Factors, manufacturer portals and AMMP, using alternatives.ts text only. Links: /brazil, /compare/pv-operation, /solutions/investor-reporting, and the Energea case study (see open item). This needs a small change so the post's address can differ per language.
5. **/blog/germany-multi-brand-pv-portfolio-monitoring** (Guides). Explains Direktvermarktung, Marktstammdatenregister and Einspeisemanagement/Redispatch as terms operators deal with, with no integration claims. AMMP claims: multi-brand integration, portfolio dashboards, reporting, Data API export. German terms stay in German in the es/pt versions.
6. **/blog/uk-solar-bess-monitoring-platform-checklist** (Guides). A checklist covering commercial rooftops, installers with many client sites, battery storage and investor reporting. Battery claims stay at the level already on the site. Links: /compare/best-bess-monitoring-software, /blog/multi-brand-solar-monitoring-checklist.
7. **/compare/best-renewable-portfolio-management-software-europe**. Uses the /compare/best-solar-asset-management-software format. Power Factors, Meteocontrol, Bazefield and AMMP use the existing alternatives.ts text. 3E, DNV and GreenPowerMonitor get a one-line neutral category description each, with no feature claims. Added to the Compare category and the footer Compare list.
8. **/compare/solar-wind-battery-single-platform**. Criteria-led. On wind, AMMP is described only with the published wording: "vendor-agnostic platform for solar, battery, hybrid, wind and genset portfolios" and "supports … wind". The site lists no wind-specific features (such as turbine data or wind KPIs), so the page makes none. Added to the Compare category.

## Header images
Six newly generated cover images for posts 1–6 (Luminous Glass look, no text). The compare pages use the standard page hero with no image, like the existing compare pages.

## Facts not found (left out)
- Specific Data API endpoint names and parameters (only the token endpoint and the x-api-key header are documented). The page links to the API docs instead.
- Any built-in warehouse connector (Snowflake, BigQuery and so on).
- AMMP importing P50 budgets or yield reports; P90 handling; degradation or soiling analytics as named features.
- Integrations with direct marketers, the Marktstammdatenregister or grid operators.
- Descriptions of 3E, DNV and GreenPowerMonitor in alternatives.ts (these get one neutral line each).
- Wind-specific features.
- UK- and Germany-specific product claims.
- Energea: I found it only in a blog post, not as a case-study page. I'll link that post only if it is the published case study. Otherwise I'll leave it out. Please confirm.
- SLA terms in RFP answers beyond tickets with assignment, deadlines and reminders.

## Technical details
- New: src/data/batch8.ts (FAQs, criteria, checklist rows, options); src/data/blog-scheduled-10.ts (bodies of posts 1–6 and HowTo steps); src/i18n/batch8-translations.ts (es/pt), registered in dictionaries.ts; 6 cover .asset.json files; routes compare.best-renewable-portfolio-management-software-europe.tsx and compare.solar-wind-battery-single-platform.tsx.
- Edit: blog-posts.ts, blog-schedule.ts, authors.ts (Andreas), comparisons.ts, ammp-facts.ts PAGES, SiteShell.tsx footer, mcp.tsx, use-cases.om-providers.tsx, howto.test.ts EXPECTED. For post 4: per-locale slug support in src/i18n/locale.ts and the sitemap, so the canonical and hreflang URLs point to the translated addresses.
- Verify: SSR_BASE_URL=http://localhost:8080 bunx vitest run src/i18n and the full test suite, plus a phone and desktop check of all 24 addresses.
