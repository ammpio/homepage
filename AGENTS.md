<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Homepage sections live in src/components/site/HomeSections.tsx and are reused by / and /ray; the shared HeroVideo (RaySections) is the only hero video player — why: one source for the team-approved layout.
- All public UI copy uses shared i18n dictionaries with US English fallback; persisted language is read after hydration, and code/pre content stays untranslated — why: server and first client render must match and code must remain usable.
- Media links use full Lovable CDN address via src/lib/assets.ts assetUrl() — why: /__l5e paths only resolve on Lovable hosting, not Netlify.
- Canonical origin is https://www.ammp.io: canonical/og:url are set once in __root head from the path; sitemap and blog use the same origin — why: one indexed domain.
- FAQ copy lives in src/data/faq.ts and product facts for llms.txt/SoftwareApplication JSON-LD in src/data/ammp-facts.ts; /faq, home, /pricing, /llms.txt and /llms-full.txt read from them — why: one source so pages, schema and AI-facing text never drift.
- Blog bylines, real last-updated dates and page "Last updated" dates live in src/data/authors.ts; blog Article JSON-LD and visible dates both read it — why: dates and authors never drift between page and schema.
- Scheduled blog posts carry publishAt (ISO UTC); every listing, the sitemap and the post route (loader notFound) go through isPublished/publishedPosts/getBlogPost in src/data/blog-posts.ts — why: posts go live at request time without a deploy and never leak early.
- New content pages build head() with src/lib/page-head.ts pageHead() (WebPage + optional FAQPage JSON-LD) and are listed in ammp-facts.ts PAGES — why: schema and llms.txt stay consistent.
- Competitor descriptions for alternatives/comparison pages live in src/data/alternatives.ts — why: one neutral source reused across pages.
- Links to scheduled blog posts use LivePostLink, which renders nothing until the post is live — why: no early leaks of scheduled posts.
- IndexNow: key lives in src/lib/indexnow.ts and public/<key>.txt; a daily backend schedule calls /api/public/indexnow-scheduled for newly live posts, and Netlify's deploy webhook calls /api/public/indexnow-deploy — why: the site is request-rendered, so posts go live without a deploy.
- Netlify caching lives in public/_headers with only an /assets/* rule (fingerprinted, cached long-term); HTML relies on Netlify's default revalidation — why: Netlify merges matching rules, so a /* rule would send conflicting Cache-Control on assets.
- Product docs are markdown in content/docs/** rendered at /product/documentation via src/lib/docs-core.ts (pure, tested) and src/lib/docs.server.ts (Vite globs; images are bundled build assets so they work on any host). Only current pages enable documentation navigation and discovery; an empty index is noindex — why: drafts must never be promoted as published documentation.

## Product documentation (content/docs) — rules for agents
- Docs content lives only in `content/docs/**/*.md`; images live in `content/docs/images/`. Documentation-content agents edit only files under `content/docs/**`, never TSX, `src/data` or i18n dictionaries. Markdown source and raw .md endpoints stay English; rendered documentation uses the site's runtime translation, except code blocks and inline code.
- Branches: `dev` is the production branch; Netlify automatically deploys every commit to `dev` to www.ammp.io. `main` is an archive that only receives PRs from `dev`. Agents open PRs into `dev`, never push directly to `dev` or `main`, and the "Docs check" workflow must pass before merging — why: every merged change goes live automatically.
- One page per file; the file name is the URL slug (`content/docs/modules/alerting.md` → `/product/documentation/alerting`, raw markdown at `/product/documentation/alerting.md`). File names are lowercase-hyphen and unique across all folders.
- Frontmatter (all required):
  - `title`: text, used as the H1 (do not add an H1 in the body; start sections at `##`).
  - `description`: text, max 160 characters (meta description, cards, llms.txt).
  - `category`: text, must match a `name` in `content/docs/_categories.yml`.
  - `order`: number, sort order within the category.
  - `updated`: date `YYYY-MM-DD`, set to the date of your change.
  - `status`: `current` (published) or `draft` (not rendered, listed, or in sitemap/llms.txt).
- Add a page: create the `.md` file in its category folder with the frontmatter above; use `status: draft` until it is ready.
- Add a category: add `- name: <Name>` with an `order` to `content/docs/_categories.yml` and create a matching folder.
- Markdown: GitHub-flavoured (tables, fenced code). Callouts: `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]`. Link other docs with relative paths (`./ticketing.md`, `../modules/alerting.md#settings`). Images: `![alt text](../images/file.png)`, always with alt text.
- Check locally with `bunx vitest run src/lib/docs.test.ts`.
- Docs loaders use src/lib/docs-data.ts (createIsomorphicFn): server reads bundled markdown, client navigation fetches /product/documentation/index.json and /{slug}.json — why: docs must not depend on /_serverFn, which Netlify proxies to Lovable hosting.
