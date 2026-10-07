# Add full-site language support

## Goal
Add the same compact header language selector used on the earlier AMMP Homepage, with:
- US English
- Brazilian Portuguese
- Spanish

Translate every public-facing page and article while keeping the current layout, routes, imagery, videos, links, and English wording intact.

## Implementation
1. **Language foundation**
   - Add a shared language provider and typed translation dictionaries for `en`, `pt-BR`, and `es`.
   - Keep US English as the safe server-rendered default, detect Portuguese or Spanish on first browser visit, and remember the visitor’s explicit choice locally.
   - Update the document language when the selection changes and fall back to English if any key is missing.

2. **Header selector**
   - Recreate the previous globe-and-flag selector in the desktop header and mobile menu, adapted to the current Luminous Glass styling.
   - Show the full labels “US English,” “Português (Brasil),” and “Español” in the menu.
   - Preserve the visitor’s current page and state when switching languages.

3. **Translate shared site content**
   - Localize the header, dropdowns, footer, closing calls to action, buttons, forms, validation messages, video/chapter labels, comparison-table labels, and reusable section components.
   - Keep brand names, product names, customer names, technical acronyms, legal document names, and URLs unchanged where translation would be inaccurate.

4. **Translate all public pages**
   - Cover the homepage, Product/AMMP OS, AMMP AI/Ray, MCP, integrations, pricing, demo, three use cases, tailored solutions, case studies, switch, security, about, careers, contact, FAQ, privacy, terms, Brazil and US market pages.
   - Cover every published comparison page and all public blog listing/article content, including categories, dates, read-time labels, embedded conversations, and related-content cards.
   - Leave internal concept/experimental draft routes in English, as selected.

5. **Localized page metadata**
   - Provide translated titles, descriptions, Open Graph text, and Twitter text for each public route through the existing route metadata system.
   - Keep canonical URLs self-referencing and unchanged because language selection stays on the same route, matching the earlier site’s behavior.

6. **Quality checks**
   - Audit each language for untranslated English strings, missing keys, clipped navigation, long Portuguese/Spanish labels, and mobile menu overflow.
   - Verify representative desktop and mobile flows across the homepage, Product, Pricing, a use-case page, a comparison, Blog, Contact, Privacy, and Terms.
   - Confirm language choice persists across navigation and reloads, forms remain usable, metadata is complete, and the site builds without errors.

## Technical notes
- Translation dictionaries will be split by domain (common navigation, home, product, AI, pricing, use cases, comparisons, company/legal, blog) so the large content set stays maintainable.
- The current project has no language framework; the previous AMMP project provides the selector/provider pattern and some translations, but current copy will be translated from this site rather than blindly copied because the content has changed substantially.
- A project architecture rule will document the single translation source and English fallback behavior.
