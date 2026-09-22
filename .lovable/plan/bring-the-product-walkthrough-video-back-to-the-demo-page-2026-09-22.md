# Bring the product walkthrough video back to the demo page

Restore the original AMMP product walkthrough video with clickable chapters at the top of the "Interactive Demo" tab on `/demo`, above the existing six feature cards and the access note.

## What the user will see

- A large video player with the original thumbnail and a big pink play button.
- On play: custom controls (play/pause, mute, time, fullscreen) and a seek bar with small tick marks at each chapter.
- Under the player, a row of chapter buttons — Intro, Monitoring Dashboards, Alerts Center, Ticketing, Data Management / Admin, Tariffs Management, Historic Data / Reporting, Stakeholder Portal, Energy Savings Hub, Billing Integration, Automation / AI, Outro — each jumping straight to that point; the current chapter is highlighted in pink.
- Everything already on the tab stays exactly as it is; the other two tabs and the booking section are untouched.

## Technical notes

- Add the `@vimeo/player` dependency.
- Port `src/components/demo/VimeoPlayer.tsx` from the AMMP Homepage project unchanged in behaviour (chapter ticks, chapter nav, custom controls), styled with the current design tokens (`border-border`, `bg-card`, `bg-primary`).
- Copy `src/assets/demo-video-thumbnail.jpg` from the source snapshot as the poster.
- Video id `1201387112`, title "AMMP OS product walkthrough", chapter times copied verbatim from the source `DEMO_CHAPTERS`.
- Render it in `src/routes/demo.tsx` inside the `interactive` tab, in a `max-w-3xl mx-auto` wrapper above the `FeatureGrid`.
- The player is browser-only: mount the Vimeo iframe in `useEffect` so SSR stays clean.
