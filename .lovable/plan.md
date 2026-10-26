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

## C. New pages (English first)
| URL | Content |
|---|---|
| /solutions/solar-monitoring | Multi-brand solar monitoring (item 5) |
| /solutions/om-sla-tracking | O&M availability and response times against contracts, PPA guarantees, Ray drafts claims with evidence, people review |
| /solutions/investor-reporting | Investor and PPA billing/savings reports, scheduled delivery, Word/PowerPoint/PDF, branding on reports; links to /use-cases/reporting-teams and the 11 Nov post once live |
| /solutions/hybrid-sites | Solar, battery, genset, mini-grid; AMMP Edge for non-API equipment; unreliable connectivity; general Africa experience, linking to /case-studies |
| /south-africa | Load-shedding backup sites, SA tariff database, time-of-use battery checks; same layout as /us and /brazil |
| /compare/meteocontrol-alternatives | Selection criteria, fair short descriptions, where each fits |
| /compare/power-factors-alternatives | Same structure |
| /compare/best-renewable-solar-monitoring-platforms (name to confirm, see Q1) | Platforms for multi-brand portfolios against six criteria |

Every new page: one unique headline, title and description under 160 characters, WebPage details (plus FAQ details where there's an FAQ), own canonical, in sitemap.xml, listed in llms.txt and llms-full.txt.

Linking: a new "Solutions" group in the footer with the four solution pages; /south-africa next to US and Brazil wherever those are linked; alternatives pages from their /compare page and the comparisons list; solution pages linked from the matching Product and use-case pages. Header menu unchanged unless you want a Solutions dropdown (Q6).

## Open questions
1. "C&I" never appears on the site (your earlier decision). Use /compare/best-commercial-solar-monitoring-platforms and "commercial and industrial" in text instead?
2. Power Factors: there is no /compare page for it, so I have no approved facts. What may I say about it? Otherwise the page describes only what you give me.
3. Alternatives pages: which other platforms should be listed? I can use only those with existing /compare pages (Meteocontrol, AlsoEnergy, PowerTrack, Bazefield, QOS Energy, Univers, PV Operation, vendor portals). OK?
4. /south-africa: the site only says the tariff database covers "up-to-date South African tariff structures" and lists SolarSaver and Broadreach case studies. Confirm load-shedding and time-of-use battery check claims, or send facts.
5. Hybrid sites and investor reporting: may I say "scheduled delivery" and "branding on reports" (the site already lists white-label reports)? Any Africa facts beyond the Daystar Power, SolarSaver, Broadreach case studies?
6. Add a "Solutions" dropdown to the header, or footer only?
7. Spanish/Portuguese for new pages now or later? Default: English only; other languages fall back to English.

## Technical details
- New routes: solutions.solar-monitoring.tsx, solutions.om-sla-tracking.tsx, solutions.investor-reporting.tsx, solutions.hybrid-sites.tsx, south-africa.tsx, compare.meteocontrol-alternatives.tsx, compare.power-factors-alternatives.tsx, compare.best-...tsx; each staticData { sitemap: true }, head() with WebPage JSON-LD.
- Gated links use isPublished(getPostBySlugRaw) from blog-posts.ts so they appear at request time without a deploy.
- llms.txt PAGES list in ammp-facts.ts gains the new URLs; MCP FAQ added to faq.ts and emitted as FAQPage on /mcp.
- Wikidata removed from sameAs in __root.tsx.
