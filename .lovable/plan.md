# Localized, crawlable URLs for Spanish and Portuguese

## Findings: how translation works today

- **Client-side only.** The language lives in browser storage (`ammp-lang`). There is no URL prefix, query parameter or cookie.
- **The server always renders English.** `<html lang="en">`, English title, description, Open Graph tags, JSON-LD and canonical. After the page loads in the browser, the stored language (or the browser language, on a first visit) is applied.
- **Two translation mechanisms:**
  1. A `t(key)` dictionary (about 6,400 lines in `src/i18n/translations/*`) used by components.
  2. An "auto-translate" pass (about 6,300 lines) that runs after load and swaps visible English text, word for word, for Spanish or Portuguese. Most blog posts, docs, newer compare pages and the EPC page are translated this way.
- **What a crawler gets** (no JavaScript, no cookies): English for every page, whatever language it asks for. Crawlers that run JavaScript but have no stored choice also get English, unless the browser language they report is es or pt. In that case the text changes but the head tags stay English. No es/pt URL exists, so nothing can be indexed separately. The sitemap and llms files are English only, which confirms what you saw.
- **Auto-detection by browser language exists today** (first visit only, stored). Under the new setup this goes away (see below).

## Recommendation: `/pt/` rather than `/pt-br/`

Use **`/pt/…`** in the URL and `hreflang="pt-BR"` / `lang="pt-BR"` in the markup. The URL is shorter and matches the existing internal code `pt`. If a European Portuguese version comes later it can be `/pt-pt/` without moving anything. Search engines read the region from hreflang, not from the path. If you'd rather the URL shows the region explicitly, `/pt-br/` is a one-line change before launch, but not after.

## URL patterns

Every translated page gets three URLs:

```text
English (x-default)        Spanish                   Portuguese (Brazil)
/                          /es                       /pt
/product                   /es/product               /pt/product
/ray, /ai, /mcp            /es/ray …                 /pt/ray …
/pricing /about /contact   /es/pricing …             /pt/pricing …
/demo /faq /security       /es/demo …                /pt/demo …
/integrations /careers     /es/integrations …        /pt/integrations …
/customization /switch     /es/switch …              /pt/switch …
/case-studies              /es/case-studies          /pt/case-studies
/solutions/*  (4 pages)    /es/solutions/*           /pt/solutions/*
/use-cases/*  (4 pages)    /es/use-cases/*           /pt/use-cases/*
/compare/*    (27 pages)   /es/compare/*             /pt/compare/*
/us /brazil /south-africa  /es/…                     /pt/…   (only if translated)
/blog                      /es/blog                  /pt/blog
/blog/$slug                /es/blog/$slug            /pt/blog/$slug   (only fully translated posts)
/product/documentation     /es/product/documentation /pt/product/documentation
/product/documentation/$slug  /es/…/$slug            /pt/…/$slug
/privacy /terms            /es/…  /pt/…  only if a full translation exists
/llms.txt                  /es/llms.txt              /pt/llms.txt
```

Slugs stay English in every language (`/es/compare/sungrow`, not `/es/comparar/...`). This keeps the change mechanical, every old link still maps 1:1, and you can localize slugs later if you want.

**Not localized:** `/beta`, `/trial`, `/stratopi-image`, `/unipi-image`, `/support` (redirects), raw `.md`/`.json` docs endpoints (stay English), `/api/*`, `/sitemap.xml`, `/llms-full.txt`.

## What each localized page contains (server HTML)

- `<html lang="es">` / `lang="pt-BR"` (English pages become `lang="en"`).
- Full translated body text, title, meta description, og:title/og:description, `og:locale` (+ `og:locale:alternate`), and JSON-LD (FAQPage, Article, WebPage, SoftwareApplication) in that language.
- Self-referencing canonical (`https://www.ammp.io/es/pricing` → itself) and matching `og:url`.
- hreflang alternates: `en`, `es`, `pt-BR`, `x-default` → English. These are only emitted for languages where the page really exists (for example, a blog post with no Spanish version has no `es` alternate).
- Internal links on a localized page point to the same language.

## Language switcher and visitor choice

- The EN / ES / PT-BR switcher becomes links to the equivalent URL of the current page. If that page has no translation, it links to the localized home page and shows a short note.
- The choice is the URL. Links inside the site keep the prefix, so the visitor stays in their language while navigating. The stored preference is kept only for the banner below.
- **No auto-redirect.** Today's browser-language auto-switch is removed. Instead, an English page shows a small dismissible banner ("Esta página está disponible en español") when the browser language or stored choice is es/pt and a translation exists. Visitors who had picked es/pt before land on English URLs and see the banner, not a silent switch. The banner uses existing styles; no new animation.

## Blog posts and case studies

- A post gets `/es/blog/$slug` / `/pt/blog/$slug` only when it has a full translation. A new test checks that every paragraph, heading and FAQ of the post has an es/pt entry, so a partially translated post can't produce a mixed-language page.
- Posts without a translation: no localized URL (404), not listed on `/es/blog`, not in the sitemap and no hreflang for that language. No English content under `/es/` or `/pt/`.
- Case studies follow the same rule. They are currently one page (`/case-studies`), so they are localized as one page.
- Scheduled posts keep the existing publish-time check in every language.

## Sitemap

Keep one `/sitemap.xml` (about 230 URLs after the change, far below limits). Each URL has `xhtml:link` alternates for every language it exists in, plus x-default. This is simpler than a sitemap index and is what Google documents first. Language versions are built from the same "is this page translated?" check the pages use, so the sitemap can never list a page that 404s.

## llms.txt: recommendation

**Separate files: `/es/llms.txt` and `/pt/llms.txt`**, each in its own language and listing the localized key pages. The English `/llms.txt` gets one short "Other languages" section linking to them. Reasons: each file stays clean and single-language for the model reading it, and the English file doesn't grow 3×. `/llms-full.txt` stays English. Product facts come from the same source as today, so the three files can't drift.

## IndexNow

The production-deploy webhook from `main` already submits sitemap URLs. Because it reads the sitemap, all new `/es/` and `/pt/` URLs are submitted on the next production deploy with no extra setup. Netlify's "Deploy succeeded" webhook still needs to be confirmed on your side, as noted before.

## Redirects and old URLs

- Every existing URL keeps working and stays English. Nothing is renamed.
- `public/_redirects` rules are unchanged. `/es` and `/pt` don't clash with any existing rule (checked).
- Requests like `/es/beta` or `/pt/blog/untranslated-post` return a proper 404, not a redirect to English.

## Tests to add

1. For a sample of pages (home, pricing, one solution, one compare, one use case, blog index, one translated post, one docs page): `/es/…` and `/pt/…` return 200 with Spanish/Portuguese text, title and description in the server HTML (no JavaScript).
2. `lang` attribute is `es` / `pt-BR` / `en`.
3. Canonical is self-referencing for each language. hreflang lists en, es, pt-BR and x-default with correct absolute URLs, and leaves out languages that don't exist.
4. Every localized URL is in sitemap.xml with alternates, and every sitemap URL returns 200.
5. An untranslated blog post has no `/es/` or `/pt/` URL and isn't in the sitemap for those languages.
6. Internal links on an `/es/` page point to `/es/…` (except intentional English-only targets such as raw docs).
7. The translation completeness check from the blog section.

## Risks

- **Size of the job.** Around 60 pages and their head metadata are hardcoded in English today, and roughly half the Spanish/Portuguese text is applied by the after-load text swap. Both have to run on the server now. I'd do it in two steps inside one build: (a) the language prefix, head, hreflang, sitemap and switcher; (b) move the after-load text swap to server rendering, using the same dictionaries, so existing translations are reused rather than rewritten.
- **Gaps become visible.** Untranslated strings currently fall back silently to English. On a crawlable `/es/` page, mixed text is an SEO and quality problem. The build includes a report of missing strings per page. Pages with gaps are either filled using existing wording or kept out of the localized set until translated (your call per page; see question 2).
- **Page head translations.** Most titles, meta descriptions and FAQ/JSON-LD text have no es/pt version today. They will need new translations (about 60 pages × 2 languages). These are new text, not existing site copy, so you'll want to review them.
- **Legal pages.** Machine-quality translations of privacy/terms are risky; they stay English-only unless you provide translations.
- **Duplicate-content risk is low**: canonicals and hreflang are reciprocal, and English stays x-default.
- **Analytics and trackers** (Obert, Lemlist) see new paths. Reports grouped by path will split by language.
- **Lovable-hosted preview** (`ai-cozy-nest.lovable.app`) keeps serving older builds through the server-function proxy. That doesn't affect these pages, because localized pages render directly on Netlify.

## Order of steps

1. Shared language-from-URL helper, and English, Spanish and Portuguese route trees reusing the same page components.
2. Server-side language: `lang` attribute, dictionary and text translation applied during server render, removal of the browser-language auto-switch.
3. Translated head/JSON-LD per page, plus self canonical, hreflang and `og:locale`.
4. Language-aware internal links and switcher; suggestion banner.
5. Blog/case-study/docs translation completeness gate.
6. Sitemap alternates, `/es/llms.txt`, `/pt/llms.txt`, "Other languages" section.
7. Tests, then a browser and no-JavaScript fetch check of sample pages in all three languages.
8. AGENTS.md rule for localized routes; IndexNow picks up new URLs on the next `main` deploy.

## Open questions

1. `/pt/` (recommended) or `/pt-br/`?
2. Pages with untranslated strings: should I fill the gaps (new translations, flagged for your review) or leave those pages English-only until they're translated?
3. New es/pt titles, meta descriptions and FAQ answers for about 60 pages: OK for me to write them from the existing translated body text, with a list for you to review?
4. Privacy and terms: English-only (recommended)?
5. Is the dismissible suggestion banner wanted, or should only the switcher be offered?

## Technical details

- Routing: an optional `{-$locale}` prefix segment (TanStack optional path params) wrapping the existing routes, so one component tree serves `/`, `/es`, `/pt`. Only `es` and `pt` are valid values, so anything else is a 404. The alternative of duplicating route files is avoided.
- `LanguageProvider` gets its initial language from the route param, so the server and the first client render match (keeps the existing hydration rule). `localStorage` is used only for the banner.
- AutoTranslate dictionaries become a pure `translateText(lang, s)` used at render time through a `<T>` wrapper or a text-transform in the shared section components. The browser-side MutationObserver stays as a safety net for client-only content.
- `pageHead()` takes `locale` and returns per-language meta, canonical, hreflang links and JSON-LD. The root `head()` stops setting canonical/og:url for localized paths and derives them from the locale-aware path.
- `src/lib/sitemap.ts` emits `xhtml:link` alternates. A `localizedPaths()` helper is shared by the sitemap, hreflang, llms files and tests.
