# Homepage in Google and AI search: review and fixes

## What's in good shape (checked on the live www.ammp.io)
- One clear address: ammp.io redirects permanently to www.ammp.io, and the homepage points to itself as the main version.
- Search engines get the full page without needing JavaScript: title, description, one main heading, and sharing tags.
- Spanish and Portuguese versions are linked to each other for Google.
- Structured data covers the organisation, website, software product and FAQ.
- AI crawlers are explicitly allowed in the site's crawler rules (ChatGPT, Claude, Perplexity), and llms.txt exists.

## What's off
1. **The homepage title and description never say what AMMP is in search terms.** "Put AI to work across your renewable energy portfolio" and "Meet Ray…" don't include the phrases buyers type: "solar monitoring", "asset management", "renewable energy". Google and AI answers lean heavily on the title and opening text.
2. **Almost no search visibility yet.** Semrush (US market) estimates 8 keywords and about 140 visits a month, mostly the brand name "ammp" and an old ISO 27001 post. The brand search ranks the login portal (os.ammp.io) at position 14, above the marketing site.
3. **No Google Search Console link.** I can't see real indexing status, clicks or Google-reported errors, so those are unknown, not a known problem.
4. **The site's automated SEO check results are a month old** (from before the language and speed work).

## What you could realistically rank for (Semrush, US market; difficulty is an estimate)

| Search phrase | Monthly searches | Difficulty | Best page |
|---|---|---|---|
| renewable energy asset management software | ~390 | Low (15) | Homepage |
| solar asset management software | ~260 | Low (9) | Homepage / asset managers page |
| solar monitoring software | ~170 | Low (28) | /compare/best-commercial-solar-monitoring-platforms |
| solar performance monitoring | ~90 | Low (25) | /product |
| pv monitoring software | ~40 | Low (26) | /product |
| ammp (brand) | ~720 | — | Homepage (currently not on page 1) |

These are small, specialist audiences, but the buyer intent is high and the competition is low. Your best near-term targets are the brand name plus the two "asset management software" phrases.

## Fixes (with your approval)
1. **Homepage title and description**, keeping Ray front and centre. The page headline stays as it is.
   - Title: "AMMP — Solar and renewable energy asset management software with AI"
   - Description: "Monitor, analyse and report on solar and battery portfolios across 30+ integrations. Ray, AMMP's AI coworker, checks performance, triages alarms and drafts reports."
   - Matching Spanish and Portuguese versions. The structured data description picks up the same wording.
2. **One plain sentence near the top of the homepage**, under the headline, stating what AMMP is: "AMMP is asset management and monitoring software for solar and storage portfolios, used on 10,000+ sites in 30+ countries." This also helps AI answers quote AMMP correctly. Visible wording, so I need your OK.
3. **Brand ranking:** add the homepage and main pages to the Organization's `sameAs` profile links (LinkedIn company page and any others you confirm), so Google ties the brand "AMMP" to www.ammp.io. Also check that os.ammp.io isn't meant to be found in search. If it's only a login, a "don't index" tag there would stop it outranking the site. That's a separate app, so it would be your team's call.
4. **Re-run the site's automated SEO checks** after the changes, and fix anything they flag.

## Recommended, needs you
- Connect Google Search Console so I can confirm indexing and track these phrases with real data.

## Technical notes
- Head text lives in `src/routes/index.tsx`; es/pt titles go in the dictionaries. Run the SSR language tests afterwards.
- Facts used: only 10,000+ sites, 30+ countries, 30+ integrations. No prices.
