# Blog guide: How to Choose Multi-Brand Solar Monitoring

## What gets built
A new Insights blog post for commercial solar asset owners and operations leaders, around 1,800–2,200 words, written only from facts already on the site (approved numbers: 10,000+ sites, 30+ countries, 30+ integrations; no prices).

- Title: "How to Choose Multi-Brand Solar Monitoring"
- Search title: "Commercial Solar Portfolio Monitoring Software: Buyer's Guide" (under 60 characters)
- Search description: 140–155 characters, includes the primary keyword
- Address: /blog/commercial-solar-portfolio-monitoring-software

## Outline
1. Short answer up front (2–3 sentences answering "what should I look for?", easy for AI search to quote)
2. Why multi-brand portfolios outgrow vendor portals
3. Checklist: what to look for
   - Vendor-agnostic data (inverters, meters, batteries, gensets, cloud API or AMMP Edge)
   - Photovoltaic performance monitoring against expected production
   - Alerts that are ranked, not just listed
   - O&M workflows: ticketing linked to alerts
   - Reporting and commercials (availability, guarantees)
   - Data access: Data API and MCP server
   - Security (ISO 27001)
   - AI on top of the data (Ray, in Teams, Slack and AMMP OS; can also run on Meteocontrol or Power Factors)
4. Questions to ask vendors (a list buyers can copy)
5. How AMMP approaches it (short, factual, links to /product, /integrations, /ray, /case-studies)
6. Closing call to action: Talk to our team (/contact)

Secondary keywords get used naturally in headings and body, never stuffed.

## Also
- Spanish and Portuguese translations of the post.
- Links to it from the existing "monitoring solution selection guide" post and the FAQ page's integrations answer, so it isn't orphaned.
- Article details for search engines come automatically from the blog template; the sitemap picks it up.

## Open points
- The site removed "C&I" wording from live pages earlier. I plan to say "commercial and industrial solar" in full once and "commercial solar" elsewhere, never "C&I". Tell me if you'd rather use C&I.
- There is already a 2024-style "monitoring solution selection guide" post. I'll keep it and link across; say if you'd rather replace it.
- Author name and publish date: I'll use "AMMP team" and today's date unless you give me others.

## Technical details
New entry in src/data/blog-posts.ts (category Insights, seoTitle set, body blocks: heading/paragraph/list/cta), es/pt strings in the runtime translation dictionaries, cross-links added to the existing guide post and src/data/faq.ts. No new components or motion.

---

# Part 2: AI-visibility audit fixes (after the guide and Wikidata change)

## 1. Complete Article details on every blog post
Each post tells search engines: headline, description (the excerpt), image, published date, last-updated date, author, publisher (pointing to the existing company entry) and the page it belongs to. Today posts only carry headline, published date and a generic "AMMP" author.

## 2. Visible dates from one source
- Blog posts show "Published" and "Last updated" under the title.
- /product, /pricing and /faq show a small "Last updated" line near the bottom.
- The same dates feed both the visible text and the search-engine details, so they can't drift. Translated into Spanish and Portuguese.

## 3. Author bylines
Each post shows author name, role and a LinkedIn link, and the author becomes a named person in the search details. None of the 25 posts names an author today, so I need you to assign one per post (see questions).

## 4. Page weight
First step is measuring: list the 10 largest files on /, /ray and /product with sizes. Then: images converted to WebP/AVIF at their real display size, images below the first screen load only when scrolled to, videos don't download until played and show a poster image instead. I'll report before/after sizes per file.

## 5. Review details
Not added.

## 6. After you publish
Check that http://ammp.io, https://ammp.io and http://www.ammp.io each send a single permanent redirect to https://www.ammp.io, and that every page in the sitemap loads normally over https.

## Questions for Part 2
1. Author per post (A = Andreas Lehner, CCO; S = Svet Bajlekov, CEO and co-founder; H = Hendrik Broering, CPO and co-founder; or another name):
   - Meet Ray, your portfolio's newest coworker (2026-10-06)
   - Introducing the AMMP MCP server (2026-06-10)
   - SPS Africa chooses AMMP OS (2026-03-18)
   - Jaltech chooses AMMP OS (2025-02-04)
   - Sawa Energy chooses AMMP OS (2025-01-21)
   - Energea chooses AMMP OS (2024-12-10)
   - Empower New Energy chooses AMMP OS (2024-11-05)
   - Broadreach Energy chooses AMMP OS (2024-10-08)
   - Bright Light chooses AMMP OS (2024-09-12)
   - AMMP Achieves ISO/IEC 27001:2022 Certification (2024-09-10)
   - Forest Energy chooses AMMP OS (2024-08-14)
   - Introducing AMMP OS (2024-06-03)
   - 4 Hidden Costs of Fragmented Monitoring (2024-05-20)
   - Battery Monitoring Cheat Sheet (2023-11-06)
   - Featured in Foresight Media (2023-03-14)
   - Featured in Sifted (2022-11-02)
   - Featured in ESI Africa (2022-06-21)
   - Case Study: Battery Analytics in African C&I Solar Projects (2022-05-17)
   - Featured in TechLeap Climate Report (2022-01-19)
   - AMMP Named in SET100 List 2021 (2021-11-30)
   - Solar Irradiance Research Paper (2021-09-14)
   - Decentralized Energy Systems vs Software (2021-08-02)
   - The Counter-Intuitive Path to Cyber-Secure Infrastructure (2021-06-15)
   - Why Renewable Energy Data Is Still Flowing the Wrong Way (2021-04-08)
   - 8 Things to Look Out For When Selecting a Monitoring Solution (2021-02-11)
   - New guide: How to Choose Multi-Brand Solar Monitoring
2. LinkedIn URLs for each author.
3. "Last updated" dates: should I use today's date for pages I don't have a real date for, or do you have dates (especially for older posts, where "last updated" would otherwise equal "published")?
4. Article image: most posts have no cover image. Use one shared AMMP image for those, or leave image out on posts without one?
5. Press posts ("Featured in…", SET100): should they get a personal author, or "AMMP" as the organisation?

## Technical details (Part 2)
- BlogPost type gains authorId and updated; a new src/data/authors.ts holds name, jobTitle, LinkedIn url. Page "last updated" dates live in one small module read by both head() and the visible line.
- Article JSON-LD in src/routes/blog.$slug.tsx: publisher as { "@id": "https://www.ammp.io/#organization" } (Organization in __root gains that @id), mainEntityOfPage = canonical URL, image absolute only.
- Asset audit via curl/Playwright against the preview; conversions via assetUrl() CDN files; loading="lazy" below the fold; video preload="none" + poster, keeping HeroVideo behavior unchanged otherwise (no new motion).
