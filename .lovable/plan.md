# AI-visibility batch 6: mini-grid compare, SLA audit guide, asset management compare, PPA variance

Standing rules apply (site/docs facts only, neutral competitors from existing /compare pages, 10,000+ / 30+ / 30+, no prices, case-study-linked customers only, "your branding on reports" only). Every new page ships en/es/pt in the same build.

## URLs

| Item | English | Spanish | Portuguese |
|---|---|---|---|
| 1 | /compare/best-mini-grid-hybrid-monitoring | /es/compare/best-mini-grid-hybrid-monitoring | /pt/compare/best-mini-grid-hybrid-monitoring |
| 2 | /blog/audit-om-contractor-sla-compliance | /es/blog/... | /pt/blog/... |
| 3 | /compare/best-solar-asset-management-software | /es/compare/... | /pt/compare/... |
| 4 | /solutions/ppa-billing (existing, new section + FAQs) | /es/solutions/ppa-billing | /pt/solutions/ppa-billing |

## 1. Best mini-grid and hybrid monitoring platforms
- H1: "Best mini-grid and hybrid monitoring platforms: solar, battery and diesel genset".
- Criteria sections: solar + battery + genset in one view; genset visibility limited to what /solutions/hybrid-sites says ("run hours and output alongside solar and storage") — no fuel-consumption or fuel-level claim; unreliable connectivity and data gaps (data quality checks, estimation rules, satellite irradiance backup); AMMP Edge for equipment without a cloud API; alert routing (Microsoft Teams, Slack, email, webhooks; rule levels as confirmed last batch); reporting for investors and financiers.
- Options: AMMP; Huawei FusionSolar (neutral line from /compare/huawei, linked); vendor portals (from /compare/vendor-portals); generic categories (in-house systems, traditional monitoring) from existing compare pages.
- Links: /solutions/hybrid-sites, /blog/solar-monitoring-africa-nigeria-kenya-south-africa, Daystar Power case study (only customer named).
- FAQ (4) + FAQPage schema.

## 2. How to audit your O&M contractor's SLA compliance (blog, Andreas Lehner)
- Seven numbered H2 steps matching your list; HowTo JSON-LD built from the exact visible headings via the existing howTo.steps mechanism.
- Step content is general practice (contract definitions, exclusions, response vs repair time, liquidated damages wording already on the site); AMMP claims limited to existing ones: ticket assignments, deadlines and reminders, availability KPIs (IEC 61724 docs), data quality checks, Export Center/API/MCP for evidence.
- "Where Ray fits" paragraph: measures performance against contract terms, drafts the claim with evidence, a named person approves before anything is sent.
- Links: /solutions/om-sla-tracking, /blog/track-solar-ppa-performance-guarantees. FAQ (4) + FAQPage; cover image in existing style; published today, listed on blog index, sitemap, llms.

## 3. Best solar asset management software in 2026
- Criteria: multi-brand data, KPI consistency (IEC 61724), O&M and SLA tracking, financial/PPA reporting, investor reporting, AI assistance, data access (API, MCP server and Export Center), fit for distributed C&I vs utility-scale.
- Options, each using only its existing /compare line and linked: Power Factors (with Ray-on-top note as before), AlsoEnergy, meteocontrol, Solar-Log (Solar-Log WEB), Huawei FusionSolar, QOS Energy, Bazefield, Univers, PV Operation, PowerTrack; plus vendor portals and in-house systems.
- Links to all other best-of compare pages and /solutions pages. FAQ (4) + FAQPage. Added to blog Compare tab.

## 4. /solutions/ppa-billing: "Variance analysis: weather or site issue?"
- Weather side: irradiance vs expected yield; satellite irradiance as the platform's backup when no site sensor.
- Site side: downtime, underperformance vs neighbouring inverters, curtailment (see question 2).
- Ray investigates the variance and drafts the explanation with evidence for review.
- Links /ray and /blog/why-is-my-solar-portfolio-underperforming. Two new FAQ entries (FAQPage updated).

## Shared wiring
- Footer links for items 1 and 3; cross-links from /solutions/hybrid-sites, /solutions/om-sla-tracking, /compare/best-solar-om-platforms and related best-of pages.
- ammp-facts PAGES, sitemap with hreflang, llms.txt (+ /es, /pt), llms-full.txt, comparisons.ts Compare tab, es/pt dictionaries.
- Tests: i18n SSR no-JS, sitemap crawl, HowTo, heading order, bundle budget, docs tests. IndexNow fires on next main deploy.

## Open questions
1. Genset fuel: the site states only "run hours and output" for gensets (the fuel-sensor docs page was removed). OK to say nothing about fuel, or is there a confirmed fuel statement you want used?
2. Curtailment: not currently stated on ppa-billing or product pages. May I mention it as a general cause to check (no AMMP feature claim), or drop it?
3. "Donors": the site mentions investors/financiers but not donors. Use "investors and financiers" only, or is "donor reporting" a confirmed use?
4. Mini-grid options: any named competitor besides Huawei? Only ones with an existing /compare page can be described; others would need your facts.
5. Asset-management compare: include all compare-page vendors listed above, or limit to the six you named?
6. SLA guide: can "response and repair times from ticket timestamps" be presented as AMMP-capable (ticket created/closed times), or kept as general practice?
