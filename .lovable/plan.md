# Make www.ammp.io easy for AI agents and AI search to read

## What the audit found

- **Rendering is already fine.** The server builds every page, so crawlers that skip JavaScript still get the full text: title, headline, all headings and the stats. No prerender tool is needed, and one would conflict with how the site works. After publishing, check the live site as GPTBot and ClaudeBot to make sure Netlify serves the full page.
- **No /llms.txt** exists yet.
- **Structured data:**
  - Organization and WebSite details on every page.
  - Article details on blog posts.
  - FAQPage on /faq.
  - Missing: SoftwareApplication, a LinkedIn link and a sales contact.
- **robots.txt** allows everyone, but names no AI crawlers.
- **Homepage:** one h1 and a clean h2/h3 order. The first screen talks about Ray but doesn't say plainly what AMMP is. There is no FAQ on the homepage.
- **Meta:** every page has its own title, description, canonical and og:url. No share images, which stays that way for now.
- **Inconsistencies found:**
  - "35+ countries" appears in 6 places: the homepage stats, the US page, the Sungrow comparison, the Meet Ray post, and their translations.
  - The Meet Ray post says "Teams first, Slack next". The FAQ says all three channels are live.

## The plan, biggest impact first

1. **/llms.txt and /llms-full.txt**, written from your product framing:
   - The two modules, buyable alone or together: AMMP AI (Ray) and AMMP OS Platform.
   - "AMMP AI (Ray) can run on AMMP OS or on top of an existing monitoring stack such as Meteocontrol or Power Factors."
   - Monitoring, alerting, ticketing, reporting and commercials are capabilities of AMMP OS Platform, not separate products.
   - The MCP server and Data API as add-ons that work with either module. The MCP server is generally available. No endpoint URL.
   - Who it's for: asset managers, O&M teams and reporting teams.
   - Supported technologies and the named integration brands, connected by cloud API or the AMMP Edge datalogger.
   - Ray works in Microsoft Teams, Slack and AMMP OS.
   - Proof points: Daystar Power, SolarSaver and Broadreach.
   - Pricing: an annual subscription per MWp of installed capacity, contact sales@ammp.io. No prices.
   - Links to the key pages.
   - The full version adds the complete FAQ.
2. **Homepage first screen:** add your sentence under the headline, in English, Spanish and Portuguese:
   "AMMP is a vendor-agnostic platform for monitoring and managing solar, battery, hybrid, wind and genset portfolios, with Ray, an AI coworker, working on top of your data."
3. **Homepage FAQ** with 5 questions, in this order:
   - What is AMMP?
   - What is Ray?
   - Which devices and brands do you integrate with?
   - How does Ray avoid making things up?
   - How is AMMP priced?

   The /faq page gets the same wording, so there is one source:
   - "What is AMMP?" is new, written from your framing. It includes the Meteocontrol / Power Factors sentence and says that monitoring, alerting, ticketing, reporting and commercials are capabilities of AMMP OS Platform, not separate products.
   - "Can I monitor multiple equipment brands…" becomes "Which devices and brands do you integrate with?", with the brand list.
   - "How does pricing work?" becomes "How is AMMP priced?": annual subscription per MWp, contact sales.

   All of this is translated, and the homepage and /pricing get FAQPage details.
4. **Structured data:**
   - Organization gets the LinkedIn link (https://www.linkedin.com/company/ammptechnologies) and sales@ammp.io as the sales contact. No phone number.
   - A SoftwareApplication entry for AMMP on the homepage, /product and /pricing, with no "offers" at all (offers without a price cause Search Console errors). Its "description" and "featureList" cover the two modules (AMMP AI and AMMP OS Platform) and the add-ons (MCP server and Data API).
5. **robots.txt:** allow GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Google-Extended, Applebot-Extended and CCBot by name. Keep the general allow rule and the sitemap line.
6. **Fix the facts everywhere:**
   - Change "35+ countries" to "30+ countries" in all 6 places and their translations. Keep 10,000+ sites and 30+ integrations.
   - Change the Meet Ray post's channel lines to "Microsoft Teams, Slack and AMMP OS". All three are live.
7. **Check:** read the raw HTML of the homepage, /faq and /pricing; fetch /llms.txt and /robots.txt; run the structured data through a schema check. After publishing, recheck the live site with an AI-crawler user agent.

Not included: share images and a GW/MWp figure.

## Technical details

- New server routes: `src/routes/llms[.]txt.ts` and `src/routes/llms-full[.]txt.ts`, served as `text/plain` with a 1-hour cache and sitemap set to false. They are built from shared data so they can't drift from the pages.
- The FAQ data moves from `faq.tsx` into a shared module. /faq, the homepage FAQ block and /pricing all use it to build their FAQPage JSON-LD. The homepage block reuses the existing section and accordion styles: no new motion, ink buttons, and headings that follow the headline rules.
- Organization JSON-LD in `__root.tsx` gets `sameAs` and `contactPoint`. SoftwareApplication goes in the leaf `head()` scripts, with no `offers` property. The modules and add-ons go in `description` and `featureList`.
- robots.txt stays a static file in `public/`.
- "35+" is fixed in HomeSections, us.tsx, usMarket.ts, compare.sungrow.tsx, blog-posts.ts and the matching runtime-translation keys and values, so the es/pt lookups keep matching.
