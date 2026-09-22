# Flatten the Book-a-meeting embed and widen its box

## Problem
On /contact the HubSpot calendar sits inside its own glass card (`glass-strong rounded-2xl p-2`), which itself sits inside the "Book a meeting" glass card — a box inside a box. The user wants the calendar embedded directly into the outer box with no inner card, and the overall book-a-meeting box a bit wider.

## Changes

### 1. `src/components/site/BookMeeting.tsx` — strip the embed's own chrome
- Keep the HubSpot script loading, the `meetings-iframe-container` class and `data-src` (the script needs them).
- Remove `glass-strong`, `rounded-2xl`, `p-2`, and the min-height padding treatment from the container so the calendar renders as a plain, borderless element that fills whatever box it is placed in.

### 2. `src/routes/contact.tsx` — embed directly in the outer box, widen it
- The "Book a meeting" glass card stays (heading + short intro), but `BookMeeting` now sits directly inside it with no intermediate card styling.
- Widen the meeting column: change the two-column grid from equal `lg:grid-cols-2` to a wider right column (e.g. `lg:grid-cols-[1fr_1.15fr]`), keeping the left column (message form + contact info) as is.

### 3. `src/routes/demo.tsx` — keep behavior consistent
- The demo page places `BookMeeting` in a plain `max-w-3xl` container; with the chrome removed it simply fills that container with no card. No layout change needed beyond verifying it still looks right.

## Verification
- Playwright on /contact (desktop 1280 + mobile 390): the calendar renders directly inside the book-a-meeting box with no nested card visible; the box is visibly wider; no horizontal overflow.
- Check /demo renders the calendar cleanly.
- Build log shows no errors.
