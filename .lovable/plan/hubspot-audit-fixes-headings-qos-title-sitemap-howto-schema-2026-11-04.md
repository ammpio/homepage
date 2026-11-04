# HubSpot audit fixes: headings, QOS title, sitemap, HowTo schema

## 1. Heading order (en/es/pt, same look)
- **/mcp**: the four feature cards right after the H2 use `<h4>`. Change them to `<h3>` and keep the same classes, so they look the same.
- **/pricing**: the module cards use `<h3>` before the first `<h2>`, and the billing cards ("Per MWp/Year billing", "Volume & multi-bundle discounts", "Contract flexibility") are also `<h3>`. Fix: make the hero-level module names `<h2>`. If the billing cards have no section H2 above them, add a visually hidden H2 ("How billing works", translated into es/pt). That way the order is H1 → H2 → H3 with no skipped level, and nothing visible changes. Only if the visible order still skips a level after that will I add a visible H2.
- **New test** (`src/lib/heading-order.test.ts`, runs against SSR like the i18n tests): fetches every URL in `/sitemap.xml` (en/es/pt) without JavaScript, reads the h1–h6 in document order, and fails if any heading is more than one level deeper than the one before, or if a page doesn't have exactly one H1. Any other pages it finds will be fixed in the same build and listed in the report.

## 2. QOS Energy title (es/pt)
The page head uses the literal "AMMP vs QOS Energy — AMMP" title and og:title, which have no es/pt entry, so they stay English. I'll add the translations the same way the other compare pages are titled (for example "AMMP vs QOS Energy — AMMP" becomes the es/pt compare pattern such as "AMMP frente a QOS Energy" / "AMMP vs. QOS Energy: comparação"), matching the wording of the sibling compare pages. I'll also check that the meta description and og:description have es/pt entries. A no-JS check on /es and /pt confirms all four tags.

## 3. Sitemap redirect
- `featured-techleap-climate-report` is still a live post in `blog-posts.ts`, but `public/_redirects` sends it to /blog with a 301. I'll take it out of the sitemap (and its es/pt alternates, plus llms.txt, the blog listings and IndexNow) by marking it as redirected/unlisted in the blog data, so every listing reads the same rule. The 301 stays as it is.
- **New test**: every `<loc>` and hreflang alternate in the sitemap must return 200 with no redirect (fetch with `redirect: "manual"`). It also cross-checks that no sitemap path matches a source path in `public/_redirects`, because the local server doesn't apply Netlify redirects.

## 4. HowTo JSON-LD (en/es/pt)
I'll add a `howTo` field to the post data. It holds `name`, plus `steps[]`, and each step points at a visible heading (by its text/anchor) and uses the first sentence of that section as the step text. The step name is exactly the heading as shown, translated by the same dictionary as the page, so es/pt match their visible headings. The schema is output alongside the existing Article (and FAQ) JSON-LD. No new claims, no Product/Offer, no price, cost or time fields.

Posts:
- calculate-performance-ratio-solar-portfolio
- detect-inverter-faults-early-reduce-truck-rolls
- track-solar-ppa-performance-guarantees
- monitor-solar-battery-backup-load-shedding-south-africa
- why-is-my-solar-portfolio-underperforming
- multi-brand-solar-monitoring-checklist
- **Proposed addition:** monitoring-solution-selection-guide (8 numbered steps, "1. Understanding Your Priorities" to "8. Good Customer Support")

Checked and not included: fragmented-monitoring-costs (a numbered list of problems, not instructions), automated-ppa-billing-solar, rank-solar-alarms-by-revenue-risk, solar-investor-reports-with-ai, can-claude-chatgpt-analyse-solar-monitoring-data (explainers, not step-by-step). If any of the six required posts turns out not to have step-style headings, I'll use its existing numbered or step sections and list the step names in the report.

**Test**: for each listed post in each language, the HowTo step names must match the post's visible H2/H3 text, and there must be no Offer/Product schema.

## Order
1. Headings → 2. QOS translations → 3. Sitemap exclusion → 4. HowTo → run all tests (i18n SSR, bundle budget, new heading/sitemap/HowTo tests) → report step names per post for review. Changes go live on the next `main` deploy.

## Question
- Should monitoring-solution-selection-guide get HowTo schema too?
