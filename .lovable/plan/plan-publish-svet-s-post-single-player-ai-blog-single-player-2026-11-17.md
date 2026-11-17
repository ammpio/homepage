# Plan: publish Svet's post "Single-player AI" (/blog/single-player-ai-teams)

## What you get
- A new post at /blog/single-player-ai-teams, plus Spanish at /es/blog/single-player-ai-teams and Portuguese at /pt/blog/single-player-ai-teams. It goes live with the next deploy, with no scheduled publish time.
- The author is Svet Bajlekov, CEO & Co-Founder, with his LinkedIn link in the byline, the author box and the Article schema.
- There is no FAQ section and no FAQPage schema.
- The post appears in the blog list, the sitemap with hreflang for en/es/pt, llms.txt, /es/llms.txt, /pt/llms.txt and llms-full.txt.
- IndexNow fires as usual when the production deploy runs.

## Text
- The English text is used word for word, including Svet's hyphens, en dashes, curly quotes and ellipsis.
- The headings are exactly "Multiplayer AI" and "Where to start", and the four habits are a bullet list.
- These are the only additions:
  - "Ray, our AI coworker" links to /ray.
  - "Microsoft Teams or Slack channels" links to /blog/solar-battery-alerts-microsoft-teams-slack.
  - One closing line: "More on Ray: /ray", with /ray linked.
- The title and the meta description/excerpt are exactly as you supplied them.
- Spanish and Portuguese (pt-BR) are faithful translations in a natural register.
  - "single-player AI" and "multiplayer AI" stay in English.
  - On first use, each gets a short gloss in brackets. For example: "single-player AI" (IA usada en solitario) / (IA usada sozinho).

## Category
- **Insights.** The other AI/Ray thought pieces use it: the podcast post with Svet, "Can Claude/ChatGPT analyse solar monitoring data" and the Teams/Slack alerts post. Only the "Meet Ray" launch announcement is in Product.

## Header image
- I'll reuse the existing AI cover image (blog-ai-cover) from the Claude/ChatGPT post.
- The podcast cover is specific to that episode, so it fits less well.
- No new image.

## Deploy
- Confirmed: production is www.ammp.io, deployed by Netlify from `main`. This project commits to `main`.
- So the post is live after the next deploy from `main`, and IndexNow is sent by the deploy hook.

## Files I'll touch
- `src/data/blog-scheduled-8.ts` (new): the post body blocks with the two links and the closing line, plus the cover export pointing to the existing AI cover image.
- `src/data/blog-posts.ts`: new entry with the slug, title, excerpt, category "Insights", today's date, cover and body. It has no `publishAt` and no `faq`.
- `src/data/authors.ts`: add `"single-player-ai-teams": "svet"` to POST_AUTHOR, plus a last-updated date if the other posts have one.
- `src/data/blog-schedule.ts`: add the slug entry if the sync test requires it. This file mirrors blog-posts.ts.
- `src/i18n/blog-single-player-translations.ts` (new): es and pt-BR dictionaries for the title, excerpt, headings, paragraphs and bullets.
- `src/i18n/dictionaries.ts`: register the new dictionary, loaded on demand like the others.

Sitemap, hreflang, llms.txt, llms-full.txt and the Article schema already read from these files. I don't plan to change them.

## Checks after building
- Run the i18n and lib tests: `SSR_BASE_URL=http://localhost:8080 bunx vitest run src/i18n src/lib`. These cover localized pages without JavaScript, sitemap URLs returning 200 and the author/date sync.
- Load each of the three URLs. On each one, check:
  - Svet's byline, no FAQ block, both links and the closing line.
  - The Article JSON-LD author and no FAQPage.
  - The hreflang tags.
- Confirm the slug appears in /sitemap.xml, /llms.txt, /es/llms.txt, /pt/llms.txt and /llms-full.txt.
- Diff the rendered English text against the supplied text to confirm it matches word for word, punctuation included.
