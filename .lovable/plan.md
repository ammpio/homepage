# Pre-build every public page as static HTML (SSG)

## Why not the uploaded guide as written
The guide is for a different setup: a plain single-page app with `index.html`, `src/App.tsx`, `src/pages`, React Router and a `prerender.js` script. This site has none of those. It uses a framework that already server-renders every page and has built-in static generation. Following the guide line by line would break the site. So the plan gets you the same result (fully rendered HTML for every page, generated at build time) using the supported route, with no manual `package.json` edits.

## What changes
- Every public marketing page is generated as finished HTML during the build: home, Ray, product, pricing, about, contact, demo, use cases, integrations, security, careers, case studies, all comparison pages, blog index, every blog article, legal pages and the rest.
- `/ai` stays a permanent redirect to `/ray`. It is not generated as a page.
- Search engines and link previews get full content right away, and pages load faster.
- Pages stay interactive after loading: language switching, tabs, videos and search all keep working.

## Caveats
- The static HTML is in English, the default. Spanish and Portuguese visitors still switch language in the browser, the same way they do today.
- New blog posts appear in the generated pages automatically on the next publish.

## Package.json
No changes needed. The existing `build` script already runs static generation once it is turned on. You don't have to replace any scripts by hand.

## Technical details
- `vite.config.ts`: keep `server: { entry: "server" }`, then add `prerender: { enabled: true, autoStaticPathsDiscovery: false }` and an explicit `pages` list. Build the list from the route files, minus `/ai`, plus one `/blog/<slug>` entry per post in `src/data/blog-posts.ts`. Draft and concept routes (`/concept`, `/editorial`, `/human`) are left out unless you want them.
- The config version (2.25.2) already supports this (2.20.0 or newer is required).
- No `public/index.html`, so nothing collides.
- QueryClient sets no explicit `gcTime`, so no timers should keep the build from finishing. Check that the build exits cleanly.
- Check the build output for one `index.html` per listed route.
