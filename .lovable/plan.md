# Homepage search wording

## What changes
1. Homepage title (Google and share previews): "AMMP — Solar and renewable energy asset management software with AI"
2. Homepage description: "Monitor and manage solar and storage portfolios in one place. 30+ integrations, 10,000+ sites in 30+ countries, and Ray, your AI coworker."
3. One plain sentence under the homepage headline: "AMMP is asset management and monitoring software for solar and storage portfolios, used on 10,000+ sites in 30+ countries." Headline itself stays as is.
4. Spanish and Portuguese versions of all three, flagged for native review.

## Not changed
- Brand links for Google: the LinkedIn company page is already linked. No other profiles are added until you send them.
- No prices, no new numbers, no other pages, no new motion.

## Technical details
- `src/routes/index.tsx` head: title, description, og:title, og:description.
- `src/components/site/HomeSections.tsx`: intro paragraph under the H1 (shared by / and /ray; it will show on both).
- es/pt entries in the runtime dictionaries; run `SSR_BASE_URL=http://localhost:8080 bunx vitest run src/i18n` and check /, /es and /pt without JavaScript.
- Goes live on the next `main` deploy.
