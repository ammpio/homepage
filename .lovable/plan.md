# Fix the unstyled site on www.ammp.io (Netlify)

## What's wrong
The page text loads, but none of the design files do: the stylesheet, the logo and the other images. That's why the page looks like plain text. The Lovable-hosted copy of the site still looks normal.

The cause is one of our own redirect rules. To remove trailing slashes from page addresses, we added three rules, such as "/a/b/ → /a/b". Netlify ignores the trailing slash when it matches a rule. So the rule also matches a file like /assets/styles.css and redirects it to the same address. The browser loops until it gives up. Tested live: /assets/styles-…css and /assets/ammp-logo-….png each redirect to themselves 50+ times.

## Fix
1. Remove the three trailing-slash rules (`/:a/`, `/:a/:b/`, `/:a/:b/:c/`) from the Netlify redirect file.
2. Keep everything else unchanged:
   - the domain rules sending visitors to www.ammp.io
   - the old-page redirects
   - /support and the image download links
   - the proxy rules
3. Duplicate addresses with a trailing slash, such as /contact/, stay covered. Every page already tells Google its one real address, without the slash. Netlify's own setting can also strip trailing slashes safely.

## After you publish
- Check that www.ammp.io loads with the full design.
- Confirm that /assets/… files return 200, not a redirect loop.
- Confirm that /home and /os still redirect.

## Technical details
- File: `public/_redirects`. Delete lines 40–42.
- Netlify matches redirect rules regardless of trailing slash, and `301!` forces the rule even when the file exists. So `/:a/:b/` → `/:a/:b` matched `/assets/<file>` and redirected it to itself.
