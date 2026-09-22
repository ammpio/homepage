# Refine the site-wide Luminous Glass background

## Goal
Make every page follow the homepage’s continuous, open Luminous Glass canvas: page-anchored ambient color that scrolls away naturally, and no grey divider bands between sections.

## Changes
- Change the global amber and magenta glow layer from viewport-fixed to page-positioned, so each glow scrolls away with the content instead of following the viewer.
- Keep the existing subtle drift animation within each glow’s page location.
- Keep the shared page-introduction glow page-anchored as well, so it moves away naturally when its section leaves view.
- Redesign shared content bands to match the index homepage: transparent sections with generous vertical spacing instead of alternating grey fills and horizontal separator lines.
- Remove the hard divider under shared page introductions, allowing the introduction to transition naturally into the next section.
- Preserve borders where they communicate structure inside actual content, including cards, tables, forms, tabs, navigation, and the footer.
- Keep all page content, ordering, links, controls, imagery, and homepage layout unchanged.

## Verification
- Review the homepage and representative product, AI, pricing, integrations, article, contact, and comparison pages while scrolling, confirming the glows leave the viewport with their page positions.
- Check desktop and mobile layouts for seamless section transitions, stationary glows, readable contrast, and no horizontal overflow.
- Confirm reduced-motion behavior and a clean build with no new page errors.
