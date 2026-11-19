# Bring the flyer content onto /ssd26-partners

Only /ssd26-partners changes. It stays noindex, out of the menu, sitemap and llms.txt, English only, with UTM capture, Hendrik's card and the stand strip. Headlines stay unbolded with no pink words.

## Changes, top to bottom

1. **Hero** (matches the flyer's front page)
   - Eyebrow: "For hardware & platform makers"
   - Headline: "AI is reshaping monitoring. We help OEMs bring it to their users."
   - The current flow graphic (devices → cloud → Ray → customers) and the "Become a pilot partner" button stay.

2. **New section: "Ray doesn't wait to be asked."**
   - Intro: "It spots the issue, does the work, and answers when asked."
   - Four rows, each pairing an event with its result: Inverter 4 tripped → Ticket opened · Monthly report due → Draft ready · Yield below budget → Cause found · Why is my yield down? → Answered.
   - This replaces the "What your customers get" cards, which say the same thing.

3. **New numbers row** (taken from the flyer): **10,000+** sites already run on AMMP · **1** API connection to your cloud · **0** AI engineers to hire.
   - This replaces the "Why partner with AMMP" cards. The ISO 27001 point stays in the FAQ.

4. **New section: "We help OEMs bring AI to their users"**, with three cards: Embedded AI agents, MCP servers, AI strategy. Each card gets a one-line description made from wording already on the site.

5. "Who Ray helps at your customers", "Works with your devices…", Questions, the pilot form and the stand strip all stay as they are. The pilot section keeps the title "Pilot partners for 2027", which matches the flyer.

## Wording to check
- **"AI strategy"**: the site doesn't offer this as a service anywhere. I'll show the label with no description unless you send me a line for it.
- **"Draft ready"** for monthly reports: this matches the existing wording, "reports drafted from live data".
- **"1 API connection" and "0 AI engineers"**: these match "Connects through your cloud API" and "No in-house AI team needed", which are already on the page.

## Technical details
- Edit only src/routes/ssd26-partners.tsx. Build the event→result rows and the numbers row inline using the existing glass card styles and the SectionTitle and IconCards components.
- Remove the unused `why` and `uses` arrays and any icons they leave unused.
- Check the page at phone (390) and desktop widths.
