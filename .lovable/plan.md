# Product documentation at /product/documentation

## What you get
- A documentation home at /product/documentation with categories and page cards, plus a search box that filters by title and description.
- One page per doc at /product/documentation/<slug> with a left menu grouped by category, an "On this page" list built from H2/H3 headings, a breadcrumb (Product > Documentation > Category > Page) and a "Last updated" date.
- A plain-markdown copy of every page at /product/documentation/<slug>.md, for AI tools and Ray.
- Docs listed in the sitemap and in /llms.txt (and /llms-full.txt, which includes the full page text).
- "Documentation" added to the Product menu in the header and to the footer Platform column.
- Spanish and Portuguese visitors see a small note: "This documentation is available in English only." (that note is the only translated text).
- Three placeholder pages, clearly marked as placeholder text.

## File structure
```text
content/docs/
  getting-started/
    getting-started-with-ammp-os.md
  modules/
    alerting.md
    ticketing.md
  images/
    README.md              (how to add images)
src/lib/docs.ts            loads, parses, filters and sorts docs
src/lib/docs-markdown.ts   markdown -> HTML (+ headings for the TOC)
src/components/docs/       DocsLayout, DocsSidebar, DocsToc, DocsSearch, EnglishOnlyNote
src/routes/product_.documentation.tsx         layout (Outlet)
src/routes/product_.documentation.index.tsx   /product/documentation
src/routes/product_.documentation.$slug.tsx   /product/documentation/<slug>
src/routes/product_.documentation.$slug[.]md.ts   raw markdown (server route)
```

Frontmatter example:
```text
---
title: Alerting
description: How AMMP OS raises, groups and routes alerts.
category: Modules
order: 10
updated: 2026-10-27
status: current        # current | draft
---
```
- Slug = file name (must be unique across all folders). Category order comes from a small list in `content/docs/_categories.yml` (name + order); unknown categories sort last.
- Draft pages: not listed, not in sitemap or llms.txt, and their URLs (including .md) return "not found".
- Invalid frontmatter (missing field, bad status or date) fails the build with a clear message, so an agent's broken PR is caught in CI.

## Markdown rendering
- Files are bundled at build time with Vite `import.meta.glob("/content/docs/**/*.md", { query: "?raw", eager: true })`. No file system reads at runtime, which matters because the server runs on a worker, not Node.
- Dependencies to add: `gray-matter`-free approach using `front-matter` (small, worker-safe) or a tiny YAML parse with `yaml`; `marked` for markdown (GitHub tables, fenced code), `marked-gfm-heading-id` for heading anchors, and `sanitize-html` is not needed since content is our own repo.
- Callouts use GitHub syntax so they also render on GitHub during PR review:
  `> [!NOTE]`, `> [!WARNING]` (also TIP, IMPORTANT). A small marked extension turns them into styled boxes.
- Links between docs: write `[Ticketing](./ticketing.md)` or `(../modules/ticketing.md)`; the renderer rewrites them to `/product/documentation/ticketing` (works on GitHub too). External links open in a new tab.
- Code blocks: plain styled `<pre>` (no syntax highlighter for now, keeps pages light). Can add one later.
- HTML is rendered on the server, so search engines and AI crawlers get full text.

## Images (Netlify-safe)
- Agents put images in `content/docs/images/` and reference them as `![alt](./images/foo.png)` (also previews on GitHub).
- The renderer resolves them through Vite's `import.meta.glob("/content/docs/images/*", { query: "?url", eager: true })`, so each image is emitted as a hashed file in the normal build output and served by whatever host serves the site (Netlify or Lovable). No Lovable CDN dependency, so the AGENTS.md CDN rule (which is about uploaded assets) doesn't apply; I'll note this exception in AGENTS.md.
- A missing image fails the build.

## Routes and the /product conflict
- `src/routes/product.tsx` is a full page with no Outlet, so `product.documentation.tsx` would show the product page instead. Using `product_.documentation...` escapes it: URL stays /product/documentation, it renders standalone inside the normal site shell (header/footer from __root). This is the right option.
- Each page's head(): title "<Page> | AMMP Documentation", description from frontmatter, og tags, built via `pageHead()`; canonical/og:url are already set in __root from the path on https://www.ammp.io. Article-style WebPage JSON-LD with dateModified from `updated`, plus BreadcrumbList.
- Search: client-side filter over an in-page list of {title, description, category, slug} (no extra library). On the index and in the sidebar.

## Machine-readable access
- `/product/documentation/<slug>.md` returns the original markdown (frontmatter kept) as `text/markdown; charset=utf-8`. Each HTML page links to it ("View as markdown") and adds `<link rel="alternate" type="text/markdown">`.
- Sitemap: index route uses `staticData.sitemap: true`; the slug route gets a dynamic entry in `sitemap[.]xml.ts` next to blog posts, using `updated` as lastmod.
- `/llms.txt`: new "Documentation" section listing every current page (title, URL, description). `/llms-full.txt`: also includes each page's markdown body.

## Look
- Same shell, Inter, porcelain/glass styling, dark ink buttons; pink stays reserved for sales CTAs per existing rules (links/active sidebar item use the existing accent tokens). Prose styles added as a `.docs-prose` block in styles.css using existing tokens. No new animations.

## /support later
Today: `public/_redirects` lines 8-9 and `src/routes/support.tsx` point to Atlassian. Later change is one target swap: replace the Atlassian URL with `/product/documentation` on both `_redirects` lines (and the same value in `support.tsx`, which serves the redirect on Lovable hosting).

## AGENTS.md section (summary)
- Docs content lives only in `content/docs/**/*.md` and `content/docs/images/`; agents edit only those (plus `_categories.yml` when adding a category).
- Frontmatter fields and allowed values (as above); slug = file name, unique, lowercase-hyphen.
- New page: add a .md file in the category folder, set `status: draft` until ready. New category: add it to `_categories.yml` and create a folder.
- Use GitHub callouts and relative .md links; never edit TSX or i18n for docs.

## Things that could conflict
- Header nav types: the Product menu links must be valid typed routes; the route files are created in the same change.
- Language: docs text is outside i18n, which is intentional; the English-only note is the single translated string. The runtime translator must skip docs prose so it isn't partly auto-translated — I'll mark the docs content area as excluded.
- `.md` URL: the dot route `$slug[.]md` must be checked against the `$slug` page route so they don't capture each other; verified in testing.
- Bundle size: all docs are bundled into the server build; fine for hundreds of pages. The sidebar only ships titles/slugs to the browser, not full content.
- `/product/documentation` must also be added to ammp-facts PAGES (per existing convention).

## Verification
- Small tests in the existing test setup: drafts excluded, sorting by category/order, internal link rewriting, invalid frontmatter rejected.
- Browser check: index, a page with TOC/sidebar, search, the .md URL, Portuguese note, sitemap and llms.txt entries.
