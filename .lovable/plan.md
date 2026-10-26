# Three scheduled blog posts (28 Oct, 4 Nov, 11 Nov 2026)

## Final URLs
| Goes live (08:00 UTC = 09:00 CET) | URL |
|---|---|
| Wed 28 Oct 2026 | https://www.ammp.io/blog/multi-brand-solar-monitoring-checklist |
| Wed 4 Nov 2026 | https://www.ammp.io/blog/rank-solar-alarms-by-revenue-risk |
| Wed 11 Nov 2026 | https://www.ammp.io/blog/solar-investor-reports-with-ai |

## How the scheduling works
Nothing on this site is generated at build time: the blog list, each post page and sitemap.xml are all built when someone requests them. llms.txt and llms-full.txt don't list blog posts at all today, so they need no change (I'll keep it that way). So no scheduled Netlify build is needed.

- Each post gets an exact go-live moment (e.g. 2026-10-28T08:00:00Z).
- One shared check, "is this post live right now?", is used by the blog list, the category counts, the "More from the blog" cards, the post page and the sitemap.
- Before the moment: the post isn't listed anywhere, and its URL returns a real 404 status with "Article not found" and noindex.
- After the moment: it appears everywhere on the next page load, no deploy needed.
- Caveat 1: sitemap.xml is cached for up to 1 hour, so a post can appear in it up to an hour late. Acceptable for Google; tell me if you want that shortened.
- Caveat 2: the post text sits in the site's code bundle, so a technical person reading the code files could see it early. Pages, search and AI crawlers can't. If that matters, I'll load post bodies from the server only (more work).
- This only goes live on www.ammp.io once you publish this change before 28 Oct.

## Each post
- Author: Andreas Lehner, CCO (LinkedIn link added when you send it).
- Text exactly as given, with your H2/H3 structure. Bold lead-ins ("Energy at risk.", the priority formula) stay bold.
- Last line replaced with "Questions about your own portfolio? Write to sales@ammp.io." (email is a link). "www.ammp.io/ray" becomes a link to /ray in posts 2 and 3.
- Subtitle as search description, trimmed to 155 characters where needed.
- Self-referencing canonical (already automatic), og:image and twitter:image set to the cover.
- Full Article details for search engines: headline, description, datePublished = go-live date, dateModified, author, publisher, image, URL.
- Cover image shown at the top of the post and on its blog card, with alt text describing the illustration (I'll write these after looking at the images).
- Category: Insights. Spanish and Portuguese translations added like the other posts.

## Open questions
1. The posts use "C&I" several times. Earlier you decided "C&I" never appears on the site. Keep your text exactly (my default, since you said "exactly"), or replace with "commercial and industrial"?
2. Post 2 mentions "a 2 MWp rooftop" and post 1 names IEC 61724: fine as written, I assume.
3. Spanish/Portuguese translations: wanted, or English only for these three?

## Technical details
- Covers uploaded with lovable-assets (pointer .asset.json), referenced via full CDN URL from assetUrl() so og:image is absolute and works on Netlify.
- BlogPost gains `publishAt` (ISO UTC) and `cover { src, alt }`; `isPublished(post, now = new Date())` + `publishedPosts()` in blog-posts.ts. getBlogPost returns undefined for unpublished posts.
- blog.$slug.tsx gets a loader that throws notFound() for missing/unpublished posts (real 404 status); head() adds noindex fallback.
- Body blocks: new inline "rich paragraph" support for bold and links (sales@ mailto, /ray), plus "subheading" (H3). H2 = post sections per your structure.
- sitemap, blog.index (list + counts), "More from the blog" switch to publishedPosts().
- Tests: one vitest per rule: post hidden at 07:59 UTC on its date, visible at 08:00; sitemap/list exclude unpublished posts.
