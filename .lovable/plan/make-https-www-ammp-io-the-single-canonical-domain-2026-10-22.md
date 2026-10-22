# Make https://www.ammp.io the single canonical domain

## What changes
1. **Canonical tags** — every page points to `https://www.ammp.io` + its path (no trailing slash except `/`, no query string). Done once in the shared page head so all ~60 pages get it automatically, using the site's existing head system (react-helmet-async is not used in this stack and would conflict).
2. **og:url** — set to the same canonical URL on every page. Blog share images become absolute `https://www.ammp.io/...` URLs.
3. **Sitemap** — the existing auto-generated `/sitemap.xml` switches every `<loc>` to `https://www.ammp.io`. It already lists all public pages and blog posts and excludes beta/preview/redirect pages; no static file needed (a static file would go stale).
4. **robots.txt** — replaced with exactly:
   ```text
   User-agent: *
   Allow: /
   Sitemap: https://www.ammp.io/sitemap.xml
   ```
5. **Netlify redirects** — add the three domain rules at the very top of `public/_redirects` (ammp.io, beta.ammp.io, ammp-homepage.netlify.app → www, 301!). Existing old-page, trailing-slash and support redirects stay below them.
   - **The `/* /index.html 200` fallback will not be added.** This site renders pages on the server, not as a single-page app; there is no index.html for Netlify to fall back to, so that rule would turn every page into a blank/404. Routing already works without it.
6. **Hardcoded URLs** — switch the three absolute site links (shared head, blog articles, sitemap) to `https://www.ammp.io`. Left alone: email addresses, notify.ammp.io sender, mcp.ammp.io / app / os subdomains, the "ammp.io" wording in the privacy text, and the analytics host list (already includes both).
7. **Structured data** — blog Article JSON-LD gets `url`/`mainEntityOfPage` on www and publisher `url: https://www.ammp.io`. Add a sitewide Organization + WebSite JSON-LD with `url: https://www.ammp.io` (none exists today).

## Files to change
- `src/routes/__root.tsx` — canonical + og:url on www, Organization/WebSite JSON-LD
- `src/routes/blog.$slug.tsx` — SITE constant to www, publisher url
- `src/routes/sitemap[.]xml.ts` — BASE_URL to www
- `public/robots.txt` — replaced as above
- `public/_redirects` — domain rules prepended
- `AGENTS.md` — one rule: canonical origin is https://www.ammp.io

## Verify
Load a few pages (home, a blog post, /contact) and confirm canonical/og:url values; fetch /sitemap.xml and /robots.txt. Changes reach ammp.io after publishing (and the Netlify domain redirects only take effect on Netlify).
