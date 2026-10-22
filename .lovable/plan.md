# Fix the FAQ page description for Bing

## What I found
- The FAQ page's description is currently 124 characters, which is inside Bing's 25–160 range. Bing most likely flagged an older version of the page, or one it fetched before the last publish.
- The current wording also has a grammar slip ("how AI coworker build on that data") and doesn't name Ray, so it's worth rewriting anyway.

## Change
- New FAQ description (about 150 characters):
  "Answers to common questions about AMMP: what AMMP OS Platform and Ray do, integrations, pricing, security, reporting and switching from another platform."
- Matching share description: "Common questions about AMMP OS Platform and Ray, your AI coworker: integrations, pricing, security and getting started."
- Translate both into Spanish and Portuguese, keeping each under 160 characters.
- Check every other page's description is also between 25 and 160 characters, and shorten any that aren't.

## After publishing
- In Bing Webmaster Tools, open the FAQ page with URL Inspection and request a recrawl so the warning clears.

## Technical details
- Edit `head()` meta in `src/routes/faq.tsx` and the matching keys in `src/i18n/runtime-translations.ts`.
- Verify with a fetch of the raw HTML for /faq and a length check across all route descriptions.
