# Merge the AMMP website around the AI narrative

## Goal
Build a complete, light and modern AMMP website using **AMMP Homepage** as the site-wide source of truth, while reshaping the homepage and relevant supporting pages around AI coworkers. The supplied screenshots remain visual references; the implementation will reuse the original source components and assets where available rather than embedding screenshots.

## Homepage
Assemble one continuous page in this order:

1. **Site navigation from AMMP Homepage**
   - Retain its broader navigation structure, dropdown destinations, language behavior, sign-in, and demo actions.
   - Apply the cleaner visual treatment used across the selected references and provide a compact mobile menu.

2. **“Put AI to work across your renewable energy portfolio” opening**
   - Port the opening section from **AMMP AI Co-Pilots**, including the technical grid, AI workspace conversation, calls to action, and portfolio scale figures.
   - Keep the opening in light mode and align its typography, spacing, pink accent, and controls with the wider AMMP site.

3. **“Your team, plus a few more”**
   - Port the Ray and Proactive QA cards from **AMMP Home A**.
   - Preserve the concise two-card structure and permissions note.

4. **“Proactive when you don’t ask. On demand when you do.”**
   - Port the two-sided coworker demonstration from **AMMP AI Co-Pilots**.
   - Retain the proactive triage and evidence-backed question/answer examples.

5. **“03 · Shared by design”**
   - Port the split editorial layout and the Asset managers, O&M teams, and Reporting teams outcomes from **AMMP AI Co-Pilots**.

6. **AI context and operating foundation**
   - Port **“AMMP AI has the context to be useful”** from **v2 AMMP Homepage**, including the data-to-AI-to-tools flow.
   - Follow it with **“AI can only work with what it understands”**, retaining its feature selector and real AMMP product imagery.

7. **One platform, two ways to work**
   - Merge **“A screen when you’re watching. A coworker when you’re not.”** with **“AMMP OS is still all here.”**
   - Lead with the paired AMMP OS/Ray product views, then surface the nine platform capabilities beneath them without repeating the same message.

8. **Proof and close**
   - Port **“Results already delivered across live portfolios”**, with the original customer proof points and links.
   - End with **“Put your portfolio data to work”**, retaining the demo and contact actions.

## Full website migration
- Recreate the broader route set from **AMMP Homepage** in the current TanStack site, preserving established public URLs where practical:
  - Product, integrations, pricing, demo, contact, about, security, customization, FAQ, careers, regional pages, privacy, and terms.
  - Asset-manager, O&M-provider, energy-asset-management, and solar-monitoring pages.
  - Case studies, blog index and articles, comparison pages, and existing redirects.
- Use the AMMP Homepage navigation and footer consistently across every page.
- Keep each page’s useful product detail and search intent, but update dated positioning so AI coworkers sit on top of AMMP OS rather than appearing as a separate product or replacement.
- Preserve existing calls to action and external destinations unless a source route provides a stronger internal destination.

## Visual system
- Establish a shared light-first AMMP system: crisp white and cool off-white surfaces, near-black text, vivid AMMP pink actions, restrained teal status accents, thin gray rules, and subtle technical grid patterns.
- Use the type hierarchy and compact radii shown in the selected references; avoid oversized cards, heavy shadows, decorative gradients, and generic AI imagery.
- Reuse real dashboards, charts, logos, and other source assets from the referenced AMMP projects. Keep all images sharp, inspectable, and responsive.
- Add only restrained entrance or state transitions, with reduced-motion support.

## Technical implementation
- Build shared navigation, footer, page frame, buttons, section headings, and reusable marketing patterns before composing routes.
- Translate the source projects into the current TanStack routing structure rather than copying their older router setup.
- Keep each destination as a real route with route-specific title, description, Open Graph title/description, canonical information where applicable, and appropriate social metadata.
- Keep the work frontend-only; forms and sign-in actions will retain their existing external destinations unless the source implementation already supplies working behavior.
- Ensure desktop, tablet, and mobile layouts remain readable, with no overlaps and with keyboard-accessible menus and controls.

## Validation
- Check every navigation and footer destination, homepage call to action, mobile menu, and interactive product selector.
- Review the merged homepage at desktop and mobile sizes against the supplied references.
- Verify all migrated routes render, metadata is unique, assets load, and there are no build, runtime, console, or broken-link errors.
