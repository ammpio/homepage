# Add motion to the Luminous Glass homepage

## Goal
Make the homepage feel more alive and engaging while preserving every section, word, statistic, link, and coworker detail.

## Motion design
- Add gentle, independent drift to the amber and magenta ambient glows so the porcelain canvas feels luminous rather than static.
- Introduce sections and key glass surfaces as they enter the viewport with a short fade-and-rise; stagger repeated cards for a polished rhythm.
- Give the hero a composed opening sequence: status label, headline, copy, actions, then the floating `#portfolio-ops` workspace.
- Add subtle depth to the workspace and central AMMP AI diagram, including restrained connector motion and existing coworker status pulses.
- Improve meaningful feedback on “Open work order” so the completed state settles in with a small confirmation transition.
- Refine card and link motion with slight lift, icon movement, border/shadow response, and no layout shift.
- Let result values animate into view once, while keeping the exact displayed statistics unchanged.

## Accessibility and performance
- Use CSS transforms and opacity for smooth rendering; avoid heavy animation libraries.
- Trigger viewport effects once so scrolling remains calm and predictable.
- Disable all nonessential motion under `prefers-reduced-motion`, with content immediately visible and controls fully usable.
- Keep animations restrained on mobile and verify that nothing overlaps or clips.

## Technical details
- Add a small homepage-only viewport reveal helper using `IntersectionObserver`.
- Extend the Luminous Glass utilities and keyframes in the shared stylesheet.
- Apply motion classes and stagger values only within the homepage; no other pages or content will change.
- Verify desktop and mobile layouts, reduced-motion behavior, the work-order interaction, and a clean preview with no runtime errors.
