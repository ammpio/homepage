# AI-visibility audit fixes (Part 2)

## Decisions from your answers
- Authors: Andreas Lehner (CCO) and Svet Bajlekov (CEO and co-founder). Proposed split below. Change any you like.
- Press posts ("Featured in…", SET100, ISO certificate, customer announcements) are credited to "AMMP" as the organisation, with no personal byline.
- "Last updated" uses real dates only: the date a post was actually last edited. Posts never edited since publishing show the published date only, with no separate "Last updated" line.
- Posts without a cover image get no image in their search details.

## Proposed author split
Svet Bajlekov: Meet Ray; Introducing AMMP OS; The Counter-Intuitive Path to Cyber-Secure Infrastructure; Why Renewable Energy Data Is Still Flowing the Wrong Way; Decentralized Energy Systems vs Software.

Andreas Lehner: Introducing the AMMP MCP server; 4 Hidden Costs of Fragmented Monitoring; Battery Monitoring Cheat Sheet; Case Study: Battery Analytics in African Solar Projects; Solar Irradiance Research Paper; 8 Things to Look Out For When Selecting a Monitoring Solution; How to Choose Multi-Brand Solar Monitoring (new guide).

AMMP (organisation): SPS Africa, Jaltech, Sawa Energy, Energea, Empower New Energy, Broadreach, Bright Light, Forest Energy announcements; ISO/IEC 27001 certification; Featured in Foresight Media, Sifted, ESI Africa, TechLeap; SET100 List.

## What gets built
1. Complete article details for search engines on every post: headline, description, image (only where a cover exists), published date, last-updated date, author (named person or AMMP), publisher linked to the existing company entry, and the page it belongs to.
2. Visible "Published" and "Last updated" under each post title; a "Last updated" line near the bottom of /product, /pricing and /faq. Same dates feed the visible text and search details. Translated into Spanish and Portuguese.
3. Bylines with name, role and LinkedIn link for Andreas and Svet.
4. Page weight: measure the 10 largest files on /, /ray and /product, then convert images to WebP/AVIF at display size, lazy-load images below the first screen, and set videos to not download until played (with a poster). Report before/after sizes.
5. No review details.
6. After you publish: check http/https and ammp.io/www redirects to https://www.ammp.io and that every sitemap page loads.

## Real last-updated dates
- Posts edited recently (Meet Ray placeholder fix, "30+ countries" fix, MCP and SPS date fixes, the guide cross-link): dated from when those edits were made.
- /product, /pricing, /faq: dated from their most recent content edit.

## Still needed from you
- LinkedIn profile links for Andreas Lehner and Svet Bajlekov.

## Technical details
- BlogPost gains authorId (andreas | svet | org) and optional updated; new src/data/authors.ts holds name, jobTitle, LinkedIn url. Page dates in one small module read by head() and the visible line.
- Article JSON-LD in src/routes/blog.$slug.tsx: publisher { "@id": "https://www.ammp.io/#organization" } (Organization in __root gains that @id); author Person with url to LinkedIn, or the Organization @id for org posts; dateModified falls back to datePublished; image omitted when no cover.
- Asset work via assetUrl() CDN files; loading="lazy" below the fold; video preload="none" + poster; HeroVideo behaviour otherwise unchanged, no new motion.
