# Fix the Google indexing issues

## What the reports show
1. **Old pages from the previous website still get crawled.** Examples: /home/, /downloads/, /news/, /os/, /ammp-edge/, /ammp-products, /oem-solutions/, /data-api/, /white-paper, /ammp-x-daystar-power/, /case-study-ammp-x-solarsaver/, /blog/bright-light-partnership, /blog/featured-techleap-climate-report. They now show "page not found".
2. **The same page appears under several addresses:** ammp.io vs www.ammp.io, http vs https, with and without a trailing slash (/contact/ vs /contact), and product tabs (/product?tab=ai). Google can't tell which one is the real page.
3. **The sitemap lists the wrong domain.** It points Google to ai-cozy-nest.lovable.app instead of ammp.io.
4. **Things this website doesn't control:** public.ammp.io dashboards, sso.ammp.io, data-api.ammp.io, ammplipy.ammp.io, os.ammp.io/admin. Those are separate AMMP systems. Your dev team should add a "noindex" tag to them or block them in their own robots.txt. Also, /?s={search_term_string} comes from the old site. Nothing on the new site creates it, so it will go away over time.

## What I'll change
- **Permanent redirects from old addresses to the closest new page:**
  - /home → /
  - /os, /ammp-products → /product
  - /ammp-edge → /integrations
  - /data-api → /mcp
  - /oem-solutions → /use-cases/asset-managers
  - /ammp-x-daystar-power, /case-study-ammp-x-solarsaver → /case-studies
  - /news, /white-paper, /downloads, and the two missing blog posts → /blog
- **Strip trailing slashes:** /contact/ becomes /contact, and the same for every other page.
- **Tell Google the real address of each page.** Every page gets a tag saying "the real address is https://ammp.io/...". Product tab links point back to /product.
- **Fix the sitemap and robots file** so they use https://ammp.io.

## One thing for you to do
In your domain settings, make www.ammp.io and http:// send visitors to https://ammp.io. Most hosting providers have this as a simple toggle.

## Technical details
- Add the redirects to public/_redirects (301!) for Netlify, plus matching server handlers like the existing support.tsx.
- Add a canonical link in each route head() using a shared SITE_URL = "https://ammp.io". product.tsx uses /product as its canonical.
- Set BASE_URL in sitemap[.]xml.ts and the Sitemap line in robots.txt to https://ammp.io.
