# HubSpot AI-visibility batch: two comparison pages, blog section, investor-reporting section

Rules for all copy: only facts already on the site; competitors described only with wording from `src/data/alternatives.ts` (which mirrors our /compare pages); 10,000+ sites / 30+ countries / 30+ integrations; no prices; no customer names; branding framed only as "your branding on reports". English, es and pt ship together.

## 1. /compare/best-solar-om-platforms
"Best solar and battery O&M platforms compared" (C&I O&M teams, multi-brand portfolios).
- Intro + "How to choose" criteria cards: multi-brand data (API or datalogger), SLA and availability tracking against contract terms, preventive maintenance support (scheduled checks, recurring-fault detection), ticketing and work assignment, alert routing (Microsoft Teams, Slack, email, webhooks), reporting, data access and lock-in (API, MCP, exports).
- Platform list: AMMP, Meteocontrol, AlsoEnergy PowerTrack, QOS Energy, Bazefield, Univers (EnOS), PV Operation, Manufacturer portals. Each card uses the existing neutral description/"fits"/multi-brand line plus a link to its /compare page. Power Factors: include with its existing neutral line only (no /compare page) — see question 1.
- Section "Pairing a CMMS or work-order tool with a monitoring platform": general guidance (monitoring detects and prioritises, CMMS schedules work; what to check: ticket sync, asset IDs, API/webhooks). No claim of a specific CMMS integration.
- FAQ (4–5 entries) with FAQPage schema.
- Links: /solutions/om-sla-tracking, /use-cases/om-providers, /blog/rank-solar-alarms-by-revenue-risk.

## 2. /compare/best-epc-solar-monitoring-software
"Best monitoring software for EPCs: client reporting and portfolio visibility".
- Criteria: multi-brand support, handover checks as a buying criterion (+ "AMMP onboards new sites with data quality checks"), guarantee tracking, client access to their own sites (stakeholder portal), scheduled client reports with your branding on reports, multi-portfolio management.
- Same platform list and neutral wording as page 1.
- FAQ with FAQPage schema. Links: /use-cases/epcs, /solutions/investor-reporting.

## 3. /blog/solar-investor-reporting-tools-compared
Add section "Reporting for O&M teams and clients": operational vs investor reports, SLA/availability evidence, scheduled delivery, client-facing reports. Update dateModified to the build date (authors.ts last-updated too). es/pt runtime translations.

## 4. /solutions/investor-reporting
Add section "What investors expect in a performance report": generation vs budget, PR (IEC 61724), availability, energy losses by cause (loss waterfall), savings and PPA revenue, variance commentary, data-quality notes for estimated values, consistent monthly delivery. Two new FAQ entries (e.g. "What should a monthly solar investor report include?", "How are estimated values shown?"). es/pt translations.

## Discovery
Both new pages: sitemap (staticData), ammp-facts PAGES (feeds llms.txt / llms-full.txt), footer Compare list ("O&M platforms", "EPC monitoring software"), pageHead() with WebPage + FAQPage JSON-LD, unique head per page.

## Open questions
1. Power Factors has no /compare page. Include it on both pages with only its existing neutral line, or leave it out?
2. Bazefield and Univers have no multi-brand line in our data. Show them without one, or omit "multi-brand" for them?
3. Preventive maintenance: I can't find "scheduled checks" or "recurring-fault detection" as stated AMMP features. Keep these as buying criteria only (no AMMP claim), or confirm AMMP supports them?
4. MCP and exports exist on the site (/mcp, Export Center docs). OK to state "API, MCP server and Export Center" as AMMP's data-access answer?
5. /solutions/investor-reporting currently says "white-label branding" (meta description and a feature card). That conflicts with the "your branding on reports" rule. Change it to "Your branding on reports" in this build?
6. IEC 61724 and loss waterfalls are in the KPI calculations docs and earlier posts. OK to link the PR line to /product/documentation/kpi-calculations?

## Technical details
- Routes: `src/routes/compare.best-solar-om-platforms.tsx`, `src/routes/compare.best-epc-solar-monitoring-software.tsx`, modelled on `compare.best-commercial-solar-monitoring-platforms.tsx`, reusing `src/data/alternatives.ts` (add new criteria arrays there, no new competitor wording).
- es/pt: new `src/i18n/compare-om-epc-translations.ts` wired into AutoTranslate like `epc-translations.ts`; blog/investor-reporting strings added to runtime translations.
- Edits: `SiteShell.tsx` footer, `ammp-facts.ts` PAGES, `blog-posts.ts` (section + dateModified), `authors.ts`, `solutions.investor-reporting.tsx`.
- Tests: add a check that both new routes are in PAGES, and run the existing test suite.
