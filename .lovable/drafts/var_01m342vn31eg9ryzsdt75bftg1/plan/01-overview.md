# Animations for the Luminous Glass homepage

Add a layer of motion to the homepage (`/`) that makes it feel alive without changing any content, layout, or colors. Everything stays scroll-friendly and respects reduced-motion settings.

## What you'll see

1. **Gentle entrance reveals** — sections, headlines and cards fade up as they scroll into view, with a slight stagger on card grids (coworkers, modules, results) so they ripple in one after another.
2. **A living hero** — the `#portfolio-ops` workspace module slowly floats up and down, the glow orbs drift, and the coworker's reply appears in a short "typing" sequence (message bubble, then evidence card) the first time it appears.
3. **Ambient energy** — the amber and magenta glow orbs get a slow drifting motion so the background feels warm and alive rather than static.
4. **Playful micro-interactions** — buttons lift slightly on hover, cards already rise on hover; links get a smooth arrow nudge. The "Open work order" button gets a satisfying confirm transition when clicked.
5. **Live status feel** — the pulsing dots on coworker badges stay, joined by a soft shimmer on the evidence progress bar.

## Principles

- **Subtle over showy** — 300–500ms transitions, small distances (8–16px), no parallax gimmicks.
- **Accessible** — a single `prefers-reduced-motion` check disables all entrance and ambient animation.
- **Performance-safe** — pure CSS transforms and opacity; no layout-thrashing scroll listeners (one lightweight IntersectionObserver).
- **No content changes** — copy, sections, links, stats and structure are untouched.
