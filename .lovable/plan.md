# Author credentials and page weight

## Findings

**Authors.** Every blog byline and its schema already come from one place: the author list. It has Andreas (CCO) and Svet, with Svet's role written as "CEO and co-founder". Neither has a LinkedIn link yet, so bylines show as plain text and the schema has no `sameAs`. The post page and its schema already pick up a link as soon as one is added. Six posts, including Meet Ray, are already credited to Svet, so his details will show on live posts straight away.

**Page weight (confirmed by reading the code; I haven't measured the bundle yet).**
- `jsx-runtime-*.js` (~1.4 MB): our custom translation step is part of the code that draws every page. It loads `translate.ts`, which imports **every** Spanish and Portuguese dictionary (about 1.9 MB of source: runtime, docs, blog, EPC, compare, product and gap translations). So every visitor, English ones included, downloads all translations for both languages.
- `index-*.js` (~1.3 MB): the shared entry code. Likely contents are the root layout (site header and footer, language provider, AutoTranslate), the docs index loader, React, router, Query and Radix, plus anything the header imports eagerly. Blog post content is about 300 KB of source in `src/data/blog-*.ts`, and it probably reaches the entry through the header or footer, listings, or `LivePostLink`. The first build step will confirm this.
- Compression is already on: www.ammp.io returns `content-encoding: br` from Netlify. Nothing to change there (and the app must never compress responses itself).
- Each route's own code is already split out automatically, so the problem is what the shared code pulls in, not missing splitting.

## Plan

### 1. Author credentials
- `src/data/authors.ts`: add `linkedin` (and `url`) for both authors, and set Svet's `jobTitle` to "CEO & Co-Founder". The model already supports name, jobTitle and link.
- Article JSON-LD: Person gets `url` plus `sameAs: [linkedin]`. All languages use this one source, so en/es/pt are covered.
- Byline: a link with `rel="author noopener"` and `target="_blank"`. The name stays untranslated; the role is translated as it is today.
- Author block: I recommend it. It's a small card at the end of each post with name, role, one line and a LinkedIn link. It strengthens credentials for search engines and AI tools at little cost. Proposed lines, written only from existing site facts, need your approval:
  - Andreas: "Andreas leads commercial work at AMMP, helping asset owners and O&M teams monitor solar and storage portfolios."
  - Svet: "Svet co-founded AMMP and leads the company's product and strategy." (Please confirm or supply wording.)
  - I'll add es/pt translations for both lines.

### 2. Page weight
1. **Measure first.** Run a production build with a bundle report (rollup-plugin-visualizer, dev-only). Record the size before compression and with Brotli/gzip for the JS and HTML of `/`, `/ray`, `/pricing` and `/blog/meet-ray`. The same script runs again afterwards.
2. **Translations by language.** Split the dictionaries into an `es` module and a `pt` module.
   - Server: keep loading them in full, so the server-rendered HTML stays fully translated.
   - Browser: load only the current language's dictionary before the page takes over, so English visitors download none of it.
   - The JSX runtime will take its dictionary from a small registry instead of importing it directly. If the dictionary isn't ready yet, it keeps the text the server sent.
   - Possible later step: split by page area (docs, blog, product) as well.
3. **Blog content out of shared code.** Keep a light index (slug, title, date, cover, publishAt) for listings, `LivePostLink`, the sitemap and llms. Full post bodies and translations load only in the post page's own loader, which runs on the server, so the HTML stays complete.
4. **Shared layout audit.** Move anything heavy that the header or footer imports out of the shared code: the docs index (only the "has current docs" flag is needed), data files and big icon sets. Check icon imports are named imports, not whole-library imports.
5. **Lazy-load media below the first screen.** Use client-only lazy loading for the hero video player and any carousels or charts that sit below the first screen. Text stays in the server HTML; only the player code is deferred.
6. **Don't change:** compression and the `/assets/*` cache rule.
7. **Tests:**
   - The existing SSR language tests must stay green; they check translated HTML without JavaScript.
   - Add a check that the English homepage's script list contains no Spanish or Portuguese dictionary chunk.
   - Add a size budget test that fails if the shared entry grows past a set limit.

### Order
1. Authors.
2. Measure.
3. Translations split.
4. Blog index split.
5. Shared layout audit.
6. Lazy media.
7. Measure again and report before/after per page.

## Risks
- If the browser's dictionary arrives late, a page could briefly show English after it takes over. To prevent this, the page waits for the dictionary to load before it takes over.
- Changes to the blog data must keep the scheduled-publishing gate (`isPublished`) on every path.

## Questions
1. Approve the author block and the two one-line bios (or send Svet's wording)?
2. Should Svet's role read "CEO & Co-Founder" exactly in es/pt too, or be translated ("CEO y cofundador" / "CEO e cofundador")?
