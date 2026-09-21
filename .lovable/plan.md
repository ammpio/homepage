# Unify the homepage around white and AMMP pink

## Visual changes
- Remove the patterned/grid background treatments from the homepage and use clean white section backgrounds instead.
- Convert the dark “Shared by design” band and the dark closing call-to-action band to white, retaining separation through thin borders and spacing.
- Replace green/teal accents on the homepage—status labels, icons, evidence highlights, progress indicators, and numbered details—with the existing AMMP pink primary color.
- Keep neutral supporting surfaces in subtle cool gray so cards, dashboards, and section boundaries remain easy to scan without competing with pink.
- Preserve the existing dashboard/product screenshots; only decorative section backgrounds and color treatments will change.

## Scope
- Keep all homepage content, order, links, imagery, and interactions unchanged.
- Limit the visual edits to the homepage and its shared closing call-to-action styling, ensuring that reused call-to-action sections remain visually consistent on supporting pages.
- Check desktop and mobile presentation for contrast, hierarchy, and unintended dark or green remnants.

## Technical details
- Update homepage utility classes and the shared call-to-action presentation.
- Retire homepage use of the `signal` green role in favor of the existing semantic pink primary role.
- Remove homepage use of the decorative `technical-grid` background without deleting unrelated styling that other pages may still use.
- Verify the live page, navigation, interactive homepage controls, and current build diagnostics after the changes.
