# AI-visibility review: remaining items

## What I found before planning
- **Press pages:** there is no "Read Original Article" button anywhere in the code, and none of the four posts contains an original article URL. The posts just end with a "Read the full feature…" sentence that links nowhere.
- **TechLeap:** /blog/featured-techleap-climate-report currently redirects to /blog (an older cleanup rule), so that page isn't reachable at all right now.
- **Press post text:** the bullet lists on the Sifted, ESI Africa and Foresight Media posts ("Topics discussed", "Customer success stories"…) don't come from any source in the project. They may not match what the articles actually said.
- **Hybrid sites:** the page names Daystar Power, SolarSaver and Broadreach in one sentence, with links.
- **Author LinkedIn:** still missing for Andreas and Svet, so bylines show as plain names with no link.

## A. Three scheduled blog posts (Andreas Lehner, CCO; live 08:00 UTC = 09:00 CET)
| Date | URL | Links to |
|---|---|---|
| Wed 18 Nov 2026 | /blog/automated-ppa-billing-solar | /solutions/investor-reporting |
| Wed 25 Nov 2026 | /blog/track-solar-ppa-performance-guarantees | /solutions/om-sla-tracking |
| Wed 2 Dec 2026 | /blog/solar-investor-reporting-tools-compared | /solutions/investor-reporting |

- They go through the same publish-date check as the last three posts: hidden from the blog list, related cards, sitemap and llms files, and the URL returns 404 until the date.
- Each post gets full article details for search engines, its own canonical, a cover as the share image with alt text, the subtitle as the description (155 characters max) and a "Questions about your own portfolio? Write to sales@ammp.io." ending.
- Translated into Spanish and Portuguese, like the last three.
- Headlines say "commercial and industrial (C&I)" once, then "commercial and industrial".

**Drafts first.** Next step, still without building anything, I write the full text of all three posts (about 1,000–1,300 words each, with H2/H3 headings) into a document for you to review:
1. *The complete guide to automated PPA billing for C&I solar*: data sources (meter, inverter, tariff), data quality checks, the monthly data freeze, estimation rules for gaps, tariff structures (flat, time-of-use, the tariff database), savings vs PPA invoices, scheduled delivery in Word/PowerPoint/PDF with white-label branding, where Ray helps.
2. *How to track solar PPA performance guarantees*: (1) write the guarantee into the contract terms, (2) pick the KPI method (IEC 61724 PR, availability), (3) normalise across brands, (4) track monthly, (5) collect evidence, (6) act before the guarantee is missed. Ray drafts claims with evidence and people review.
3. *Investor reporting tools for C&I solar portfolios compared*: the criteria (data sources, consistent KPIs, billing support, formats and branding, scheduling, data access/API/MCP). Then each platform that already has a /compare page, using only the neutral wording in the shared competitor descriptions. AMMP is one option.

**Covers:** I generate three covers in the same flat illustration style as the existing scheduled posts (pale background, one pink accent), shown to you with the drafts:
- PPA invoice built from data streams
- a guarantee line with monthly check marks
- criteria cards side by side

## B. Page updates
4. **Meteocontrol alternatives:** new section "Add AI on top of Meteocontrol". Ray can run on an existing monitoring stack such as Meteocontrol, ranking issues by operational and commercial impact, as an alternative to switching platforms. **Power Factors alternatives** gets a mirrored section "Add AI on top of Power Factors", which adds to its existing framing without repeating it. Translated into Spanish and Portuguese. No claims about either platform's features.
5. **Hybrid sites:** the sentence names and links only Daystar Power. SolarSaver and Broadreach stay on /south-africa. Translated.

## C. Press pages
6. **No original URLs exist in the project, so I won't add any links yet.** Please send the URLs for:
   - /blog/featured-sifted
   - /blog/featured-esi-africa
   - /blog/featured-foresight-media
   - /blog/featured-techleap-climate-report

   Once I have them, each post gets a "Read original article" button (opens in a new tab) in place of the dead-end sentence. I'll also remove the redirect that hides the TechLeap page.
7. **New press pages, in the same format** (category Press, credited to AMMP, translated):
   - /blog/featured-tech-eu: 7 Sept 2020, link https://tech.eu/2020/09/07/ammp-seed-funding/
   - /blog/featured-afrik21: link https://afrik21.africa/en/africa-ammp-raises-1-15-million-to-distribute-its-off-grid-monitoring-solutions
   - /blog/featured-silicon-canals: link https://siliconcanals.com/amsterdam-startups-cooling-planet/

   Before writing, I read each article so the summary is in our own words and correct. Facts such as the funding amount only go in if the article states them, and quotes stay to a short phrase.

## D. Technical
8. **IndexNow:**
   - Generate a random key and serve it at https://www.ammp.io/<key>.txt.
   - **On each production deploy:** a small Netlify build plugin runs after a successful production deploy. It sends the sitemap's URLs to api.indexnow.org. Preview and branch deploys are skipped.
   - **When a scheduled post goes live:** a daily job at 08:05 UTC asks the site which posts went live in the last 24 hours and submits only those URLs. This needs no deploy. It runs from the backend you already have, because Netlify scheduled functions don't work with how this site is built.
   - The submit step is protected by a secret, so only our own jobs can trigger it.
9. **Status of the 22 Oct site-audit plan:**
   - Live in code (needs a publish to be live on www.ammp.io if it hasn't been published since): full article details on every post, including headline, description, image only where a cover exists, published and modified dates, author or AMMP, publisher, and the page itself.
   - Live: visible "Published" and "Last updated" on posts, and "Last updated" on /product, /pricing and /faq.
   - Partly done: bylines with name, role and person details are live, but **the LinkedIn links are still missing** for Andreas and Svet.
   - Partly done: page weight. Images were converted to WebP, below-the-fold images lazy-load, and videos wait to download until played. I never sent you a before/after size report. I'll measure / , /ray and /product again and report.
   - Still open: checking that http/https and ammp.io/www redirect to https://www.ammp.io after publishing.

## Open questions
1. Original article URLs for the four press pages (item 6).
2. Should I rewrite the press-post bullet lists that have no source, based on the real articles once I have the links?
3. LinkedIn URLs for Andreas Lehner and Svet Bajlekov.
4. Are the three blog URLs above OK?
5. PPA billing post: may I name the tariff database as "1,000+ South African tariffs" (the only figure on the site), or keep it general?

## Technical details
- Posts are added to src/data/blog-scheduled.ts with publishAt, covers are uploaded as CDN assets, and authors map to andreas.
- Press posts get an optional `sourceUrl` field, which renders the button. The /blog/featured-techleap-climate-report entry is removed from the LEGACY map in src/server.ts.
- IndexNow:
  - Key in public/<key>.txt.
  - The Netlify plugin lives in netlify/plugins/indexnow and uses the onSuccess hook, only when CONTEXT=production.
  - A server route at /api/public/indexnow checks a shared secret, works out which posts were published in the last 24 hours using isPublished, and POSTs to IndexNow.
  - A backend daily schedule calls it.
- Daystar link: edit in src/routes/solutions.hybrid-sites.tsx, with matching i18n keys.
