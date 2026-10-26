# AI-visibility recommendations: fixes, stronger pages, new pages

## A. Quick fixes
1. Remove the Wikidata link from the company details for search engines (LinkedIn stays).
2. MCP server is generally available:
   - Remove "beta" from the MCP blog title and summary (EN/ES/PT) and the AMMP Labs card. The post text that says "opening up the beta" and "onboarding a small group" is reworded to past tense.
   - Keep /blog/mcp-server-beta. Add a dated note at the top: "Update (26 Oct 2026): the AMMP MCP server is now generally available." Set its "Last updated" date to 26 Oct.
   - /mcp intro states it is available as an add-on to either module (AMMP AI or AMMP OS Platform).
   - llms.txt, llms-full.txt, FAQ and product facts already say "generally available"; I will re-check for any leftover "beta".

## B. Strengthen existing pages
3. /ray: new section "Rank alarms by revenue risk" with the formula (energy at risk x value per kWh + contract penalty, divided by time to fix). The link to the 4 Nov post appears only once that post is live, using the same live check as the blog.
4. /mcp: new FAQ (what it is; which assistants work with it: Claude, Copilot, your own agent; permissions follow the user's AMMP access; how to get access: contact sales@ammp.io) with FAQ details for search engines. Copy goes in the shared FAQ file.
5. /solutions/solar-monitoring does not exist today. I will create it as a new page (see C) with the multi-brand section: Huawei, SMA, Sungrow and other brands in one portal, alerts into Microsoft Teams and Slack (Teams first), linking to /integrations and /compare/vendor-portals.
6. /compare/meteocontrol: link to /compare/meteocontrol-alternatives.

## C. New pages (English only for now; other languages fall back to English)
| URL | Content |
|---|---|
| /solutions/solar-monitoring | Multi-brand solar monitoring (item 5) |
| /solutions/om-sla-tracking | O&M availability and response times against contracts, PPA guarantees, Ray drafts claims with evidence, people review |
| /solutions/investor-reporting | Investor and PPA billing/savings reports, scheduled delivery, Word/PowerPoint/PDF, white-label branding on reports; links to /use-cases/reporting-teams and the 11 Nov post once live |
| /solutions/hybrid-sites | Solar, battery, genset, mini-grid; AMMP Edge for non-API equipment; unreliable connectivity; general Africa experience, linking the Daystar Power, SolarSaver and Broadreach case studies |
| /south-africa | Load-shedding backup sites; tariff database with 1,000+ South African tariffs; Ray checks each battery's charging and discharging against the site's time-of-use tariff and flags sites that lost money to the wrong window; same layout as /us and /brazil; links SolarSaver and Broadreach case studies |
| /compare/meteocontrol-alternatives | Selection criteria, fair short descriptions of platforms with existing /compare pages plus Power Factors (neutral), where each fits |
| /compare/power-factors-alternatives | "Power Factors alternatives, and how to add AI alongside Power Factors": Power Factors described neutrally in one or two sentences as renewable asset performance management software; Ray can run on top of it, or teams can switch to AMMP OS Platform; Meteocontrol and other /compare platforms listed neutrally |
| /compare/best-commercial-solar-monitoring-platforms | Platforms for multi-brand commercial and industrial portfolios against six criteria: brand coverage, KPI consistency, alerting, reporting, SLA tracking, data access/API/MCP |

Every new page: one unique headline, title and description under 160 characters, WebPage details (plus FAQ details where there's an FAQ), own canonical, in sitemap.xml, listed in llms.txt and llms-full.txt.

Linking: a new "Solutions" group in the footer with the four solution pages; /south-africa next to US and Brazil wherever those are linked; alternatives pages from their /compare page and the comparisons list; solution pages linked from the matching Product and use-case pages. Header menu unchanged.

## Decisions
- Wording: "commercial and industrial (C&I)" once per page, then "commercial and industrial".
- Competitor facts: only what existing /compare pages say; Power Factors and Meteocontrol described neutrally on each other's alternatives page. AMMP is one option, not the only good one.
- Numbers: 10,000+ sites, 30+ countries, 30+ integrations. No prices.
- Customer names only where a published case study exists, always linked.
- No white-label/OEM product page.

## Open questions
None.

## Technical details
- New routes: solutions.solar-monitoring.tsx, solutions.om-sla-tracking.tsx, solutions.investor-reporting.tsx, solutions.hybrid-sites.tsx, south-africa.tsx, compare.meteocontrol-alternatives.tsx, compare.power-factors-alternatives.tsx, compare.best-commercial-solar-monitoring-platforms.tsx; each staticData { sitemap: true }, head() with WebPage JSON-LD.
- Gated blog links use the existing isPublished check in blog-posts.ts so they appear at request time without a deploy.
- llms.txt PAGES list in ammp-facts.ts gains the new URLs; MCP FAQ added to faq.ts and emitted as FAQPage on /mcp.
- Wikidata removed from sameAs in __root.tsx.
- The "C&I" exception is saved to memory so it isn't flagged later.
