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
- All public UI copy uses the shared i18n dictionaries with US English fallback; language choice is persisted client-side — why: one maintainable source for English, Brazilian Portuguese, and Spanish.
- Media links use full Lovable CDN address via src/lib/assets.ts assetUrl() — why: /__l5e paths only resolve on Lovable hosting, not Netlify.
- Canonical origin is https://www.ammp.io: canonical/og:url are set once in __root head from the path; sitemap and blog use the same origin — why: one indexed domain.
- FAQ copy lives in src/data/faq.ts and product facts for llms.txt/SoftwareApplication JSON-LD in src/data/ammp-facts.ts; /faq, home, /pricing, /llms.txt and /llms-full.txt read from them — why: one source so pages, schema and AI-facing text never drift.
- Blog bylines, real last-updated dates and page "Last updated" dates live in src/data/authors.ts; blog Article JSON-LD and visible dates both read it — why: dates and authors never drift between page and schema.
