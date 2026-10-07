## Fix: Product page tabs show stale or repeated content

**Problem:** Clicking a tab (Monitoring, Ticketing, ...) highlights it, but the content below doesn't change or shows another tab's text.

**Likely cause:** Every tab uses the same layout blocks, so the page reuses them and just swaps the words. The automatic translation layer rewrites those words on the page, and after that rewrite the swap no longer lands, so the old text stays visible.

**Fix:** Rebuild the content area from scratch every time a tab changes, so no old text is left behind. This doesn't change anything you see except that the right content appears.

**Check:** Click through all eight tabs in English, Portuguese and Spanish and confirm each one shows its own content.

### Technical details
- `src/routes/product.tsx`: add `key={active}` to the `#category-content` wrapper so React remounts the panel on every tab change, instead of reconciling shared SplitFeature nodes that AutoTranslate may have replaced.
