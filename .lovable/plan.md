# Make www.ammp.io easy for AI agents and AI search to read

## What the audit found

1. **Rendering: already fine.** The site is not a client-only app. The server builds every page, so the raw HTML of the homepage (about 100 KB) already has the title, the headline, Ray's intro, all section headings and the stats before any JavaScript runs. Prerender tools like react-snap or vite-plugin-prerender aren't needed, and they would clash with how the site is built. The one thing to check is that Netlify forwards page requests and doesn't serve a cached empty shell. I'll fetch the live site with an AI-crawler user agent to confirm this.
2. **llms.txt: missing.** Neither /llms.txt nor /llms-full.txt exists.
3. **Structured data: partly there.**
   - Every page has Organization and WebSite details (www.ammp.io, logo).
   - Blog posts have Article details.
   - /faq already has FAQPage with about 26 questions.
   - Missing: SoftwareApplication, sameAs links (LinkedIn etc.) and a contact point on Organization.
4. **robots.txt: allows everyone (`User-agent: *`).** It names no AI crawlers, but it already points to the sitemap.
5. **Content clarity: mostly good.**
   - The homepage has one h1 ("Put AI to work across your renewable energy portfolio") and 12 h2s and 8 h3s in a sensible order.
   - The first-screen text says what Ray does, but it never says plainly that AMMP is a monitoring and asset-management platform, or which asset types it covers (solar, storage, hybrid).
   - Key numbers (10,000+ sites, 35+ countries) are in text, not images.
   - Partner and integration logos are images. Their names need to be checked as alt text or visible text.
   - The FAQ only lives at /faq (footer link). The homepage has none.
6. **Meta: good.**
   - Every page has its own title, description, og:title, og:description and og:type.
   - Every page has a canonical link and og:url on www.ammp.io.
   - No page has a share image (og:image).

## Plan, biggest impact first

1. **Add /llms.txt and /llms-full.txt.**
   - **/llms.txt:** a short summary covering what AMMP is, who it's for (asset managers, O&M providers, reporting teams), the two modules (AMMP AI with Ray, AMMP OS Platform), the MCP server and Data API add-ons, integrations, the pricing model (per MWp/year, priced on request) and security, with links to key pages.
   - **/llms-full.txt:** adds the full FAQ, product capabilities and the list of integrations.
   - Both are generated from the site's existing content, so they stay in sync.
2. **Spell out the first screen.** Add one plain sentence under the homepage headline, for example: "AMMP is a vendor-agnostic monitoring and asset management platform for solar, storage and hybrid portfolios, with Ray, an AI coworker, on top." The layout and design don't change. It's translated into es/pt-BR, and the wording is yours to approve.
3. **Add SoftwareApplication details** on /, /product and /pricing: name, category (business software), web-based, a short description, and both modules listed as offers without a price, unless you want public prices. Add sameAs and contactPoint to Organization once you send the links.
4. **Name AI crawlers in robots.txt.** Allow GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-User, PerplexityBot, Google-Extended, Applebot-Extended and CCBot by name. Keep the general allow rule and the sitemap line.
5. **Add a short FAQ block to the homepage and pricing page.** It reuses 4–6 questions that already exist on /faq, such as "What is Ray?" and "How does Ray avoid making things up?". Those pages get FAQPage details too. This adds a new section to the homepage, so it only happens if you say yes.
6. **Add image descriptions.** Make sure every partner, integration and customer logo has a text name.
7. **Add share images (optional):** one 1200×630 image per main page. This needs your approval or your own images.
8. **Check after publishing:** fetch the live pages and /llms.txt as GPTBot and ClaudeBot, and check that Netlify returns the full HTML.

## Open questions for you

1. Should prices show publicly in structured data, or stay "contact for pricing"?
2. Which official profiles should be linked (LinkedIn, YouTube, GitHub, Crunchbase, X)?
3. Where does Ray work today? The FAQ says "AMMP OS, Microsoft Teams and Slack", but the Meet Ray post says "Teams first, Slack next". AI tools will repeat whichever one they read, so they should match.
4. Is the MCP server generally available or still in beta, and is the public endpoint mcp.ammp.io?
5. Do you want to opt out of AI training (GPTBot, Google-Extended, CCBot) but stay in AI search (OAI-SearchBot, PerplexityBot, ChatGPT-User)? Or allow everything, as you described?
6. Are the numbers 10,000+ sites, 35+ countries and 30+ integrations still current, and is there a total GW/MWp figure to add?
7. Can a homepage FAQ block be added, and should the extra first-screen sentence go in?
8. Is a support email or sales phone number OK to publish in structured data?

## Technical details

- The site already uses server-side rendering, so no prerender plugin is needed. The Netlify proxy forwards to the server output. Only the cache and user-agent behaviour needs checking with curl.
- llms.txt and llms-full.txt become server routes (`src/routes/llms[.]txt.ts`, `llms-full[.]txt.ts`), built from the existing data files, with `text/plain` and a 1-hour cache. Sitemap flag: false.
- robots.txt stays a static file in `public/`.
- SoftwareApplication JSON-LD goes in the leaf `head()` scripts. Organization stays in `__root`.
- The homepage FAQ reuses the `/faq` data, which moves to a shared module so both pages use one source.
