# Make www.ammp.io one consistent deployment

Your diagnosis is right. `public/_redirects` sends every `/_serverFn/*`, `/_server*` and `/__l5e/*` request to ai-cozy-nest.lovable.app, so any loader or form call made **after** the first page load runs the last Lovable-published build.

## 1. Server functions and server routes

| Name (file) | What it does | Used on live site | Needs |
|---|---|---|---|
| `getDocsIndex` (lib/docs.functions.ts) | Lists current docs pages. Called by the **root loader on every page** (Documentation menu link) and by the docs index | Yes, on every client-side navigation | None (reads bundled markdown) |
| `getDocPage` (lib/docs.functions.ts) | Loads one docs page + sidebar/TOC | Yes | None |
| `submitContact` (lib/contact.functions.ts) | Checks Turnstile, saves to `contact_submissions`, emails sales@ammp.io | Yes, contact form | `TURNSTILE_SECRET_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `LOVABLE_API_KEY`, `LOVABLE_SEND_URL` (email) |
| `subscribeNewsletter` (lib/newsletter.functions.ts) | Adds email to Brevo list via the Lovable connector gateway | Yes, footer form | `LOVABLE_API_KEY`, `BREVO_API_KEY` (connector key), optional `BREVO_LIST_ID` |
| `/sitemap.xml`, `/llms.txt`, `/llms-full.txt` | Generated text files | Yes, rendered by Netlify itself (path not proxied) | None |
| `/product/documentation/{slug}.md` | Raw markdown | Yes, Netlify | None |
| `/support`, `/unipi-image`, `/stratopi-image` | Redirect handlers (also duplicated in `_redirects`) | `_redirects` wins on Netlify | None |
| `/api/public/indexnow-deploy` | Pings IndexNow after a Netlify deploy | Yes, Netlify webhook (not proxied) | `INDEXNOW_DEPLOY_TOKEN` |
| `/api/public/indexnow-scheduled` | Daily ping for newly live posts | Called by the backend schedule — at the **Lovable** URL | `LOVABLE_CRON_SECRET` (+ `_PREVIOUS`) |
| `/lovable/email/transactional/preview` | Email template preview for Lovable tooling | No (tooling only) | `LOVABLE_API_KEY` |

## 2. Why the proxy exists; what `/__l5e/*` is

Added in commit `7411ec0` (7 Oct 2026, one change to `_redirects` only, no note in AGENTS.md). The evident reason: the contact and newsletter forms need secrets that live only in Lovable Cloud (service-role key, Lovable API key, Brevo connector key), so proxying let them work on Netlify without copying secrets. `/__l5e/*` is Lovable's media/asset CDN path (uploaded images, hero video). AGENTS.md already notes media now use the full Lovable CDN address via `assetUrl()`, so that proxy line is a fallback for any remaining relative `/__l5e/` URLs.

## 3. Making Netlify serve its own functions

- **Docs:** need no secrets — fixed by point 4, no proxy needed.
- **Lovable-only blockers:** `SUPABASE_SERVICE_ROLE_KEY` and `LOVABLE_API_KEY` cannot be exported from Lovable Cloud, and the Brevo/email sends go through Lovable's gateway. So `submitContact` and `subscribeNewsletter` cannot simply run on Netlify with copied env vars.
- **Recommended approach:** move those two to explicit server routes on the Lovable host (`/api/public/contact`, `/api/public/newsletter`, each validating input + Turnstile, CORS limited to www.ammp.io), and have the forms post to that full URL. Then remove all four proxy lines. Netlify then needs only `INDEXNOW_DEPLOY_TOKEN` (already used) and `SUPABASE_URL` / `SUPABASE_PUBLISHABLE_KEY` (public values; the root loader imports nothing that needs them, but set them to be safe). `TURNSTILE_SECRET_KEY` stays on Lovable.
- Trade-off to accept: the form backend still deploys from Lovable publish, but it is a small, stable, explicit API rather than every function silently.
- Alternative (fully Netlify): anon-insert RLS policy for contact submissions + your own Brevo and email-provider keys in Netlify. More setup, removes the Lovable dependency.

## 4. Docs loader

A server function is not needed. Plan: the docs loaders and root `hasDocumentation` use `createIsomorphicFn` — on the server they read the markdown directly (dehydrated into the page on first load); on client navigation they `fetch` a same-origin JSON server route (`/product/documentation/index.json`, `/product/documentation/{slug}.json`) that Netlify serves itself, like the existing `.md` route. Content stays out of the client bundle and never touches `/_serverFn`. For the root menu flag, compute it at build time instead (a constant from the bundled docs metadata, titles/status only) so no call happens on every navigation.

## 5. `public/_headers`

Netlify merges all matching rules, and for the same header it joins values, so `/assets/*` would get `public, max-age=0, must-revalidate, public, max-age=31536000, immutable` — conflicting. Netlify already sends `max-age=0, must-revalidate` for HTML by default, and the stale page was the proxy, not caching. Plan: delete the `/*` rule, keep only the `/assets/*` rule (or delete the file); update the AGENTS.md caching line.

## 6. Branch

This Lovable project commits to **`main`** (origin/HEAD → main; latest `37b15d4`, 15:04 today; `dev` at `f67094b`, 12:32). Since www.ammp.io shows today's later changes, Netlify appears to build `main`. Once you confirm in Netlify (Site configuration → Build & deploy → Production branch):
- If `main`: rewrite the AGENTS.md branch rule (main = production; agents PR into main); docs-check already runs on `main` PRs — optionally drop `dev`.
- If `dev`: reconnect Lovable's GitHub sync to `dev` (or merge `main` → `dev`); AGENTS.md and workflow stay.

## Order of steps

1. You confirm Netlify's production branch; I fix AGENTS.md accordingly.
2. Fix `_headers` (remove `/*`).
3. Docs: build-time menu flag + isomorphic loaders + JSON routes; tests updated.
4. Contact/newsletter: explicit `/api/public/*` routes on Lovable, forms call them; publish Lovable once.
5. Point the IndexNow daily schedule at www.ammp.io.
6. Remove the four proxy lines from `_redirects`; verify forms, docs navigation and media on www.ammp.io in a clean browser.
