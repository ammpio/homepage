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
