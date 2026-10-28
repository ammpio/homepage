# Plan: publish the load-shedding post and add /use-cases/epcs

## 1. Publish the load-shedding post now

- Set `date`/datePublished, `publishAt` and dateModified to today (2026-10-28), like the other five.
- It then shows on the blog index, sitemap.xml, llms.txt and llms-full.txt automatically. "Meet Ray" stays pinned as featured.
- Update the test that keeps it hidden until 9 Dec so it checks the post is live instead.
- The existing es/pt translations for this post stay as they are. IndexNow picks it up on the next deploy through the sitemap.

### Full post text, for final review (no changes from the approved draft)

**How to monitor solar and battery backup sites through load-shedding: a guide for South African C&I operators**
Excerpt: Monitoring solar and battery backup sites through grid outages: what to track, how to check savings and what to ask monitoring vendors.
Andreas Lehner, CCO · Insights

Across South Africa, many commercial and industrial (C&I) solar sites now include batteries, and some also have a genset. They are there for two jobs: to cut energy costs, and to keep the lights on during load-shedding. Monitoring that only tracks solar yield misses the second job. This guide covers what to watch on backup sites, which KPIs matter, and what to look for in monitoring software.

**Why backup sites need different monitoring**
A grid-tied solar site has one main question: is it producing what it should? A backup site has more:
- Grid outages: you need to know when the grid was down at each site, and for how long, so you can judge how the system performed during the outage.
- Battery state of charge: a battery that starts load-shedding half empty can't deliver the backup it was sized for. Track state of charge before each scheduled outage, not just over the day.
- Gensets, where present: check when the genset started, how long it ran, and whether it ran because the battery ran out early.
- Communication dropouts: routers and dataloggers often lose power or signal during outages, so the hours you most want to see can be the ones missing from your data.

For data gaps, check three things: whether missing intervals are flagged rather than shown as zero, how gaps are estimated, and whether estimated values are labelled. AMMP OS runs built-in data quality checks and applies configurable estimation rules. When a site's irradiance sensor is missing, it uses backup satellite irradiance data.

**KPIs to track**
- Availability: whether inverters, batteries and the genset were running when they should have been. Exclude grid-down time where the contract calls for it.
- Battery cycling: daily charge and discharge cycles, depth of discharge, and trends that point to early wear.
- Backup hours delivered: how many outage hours the system covered at each site, compared with what it was designed for.
- Performance ratio (PR): solar output against available irradiance, so you can tell weather from faults.

**Checking savings and PPA performance when the grid is down part of the day**
Savings and PPA billing assume a reference: what the site would have paid, or what it should have produced. Load-shedding complicates both. When the grid is down, a grid-tied inverter without backup capability may shut down too, and some contracts treat that energy differently. Check that your reports separate grid-down hours from normal hours, apply the contract's rules for curtailed or lost energy, and show the customer how the figures were calculated.
Link: See investor and PPA reporting (/solutions/investor-reporting)

**Checking battery charging and discharging against time-of-use tariffs**
Under time-of-use tariffs, the value of a battery depends on when it charges and discharges. A battery that charges from the grid at peak rates, or sits full through the evening peak, loses money even if the hardware is fine. Compare each battery's charge and discharge pattern with the site's actual tariff windows. That requires the right tariff for each site. The AMMP tariff database covers 1,000+ South African tariffs.

**What to look for in vendor-neutral monitoring software**
- Support for many brands: C&I fleets often mix inverter, battery and meter brands. Look for one portal that covers all of them. AMMP has 30+ integrations.
- AMMP Edge for equipment without an API: gensets, older meters and some batteries have no cloud API. The AMMP Edge datalogger reads them on site.
- Alerting where your team works: alerts can be tuned per site and sent to Microsoft Teams, Slack, email or webhooks.
- Reporting: savings, PPA and investor reports built from the same data as operations.
Link: See hybrid site monitoring (/solutions/hybrid-sites)

**Where Ray fits**
Ray, the AI coworker on AMMP OS, checks each battery's charging and discharging against the site's time-of-use tariff every day. It flags sites that lost money by charging or discharging in the wrong window, so your team can fix the settings before the next bill.

**A short checklist**
- Can you see grid-down hours for each site?
- Do you know each battery's state of charge before each scheduled outage?
- Are communication gaps flagged and estimated values labelled?
- Do you track availability, battery cycling, backup hours delivered and PR?
- Do savings and PPA reports separate grid-down hours?
- Are batteries checked against each site's time-of-use tariff?
- Are all brands in one portal, with alerts going where your team works?
Link: Read more about AMMP in South Africa (/south-africa)

Related cards: AMMP in South Africa, Hybrid sites, Investor and PPA reporting.

## 2. New page /use-cases/epcs — "Monitoring for EPCs and installers"

Same layout and look as the three existing use-case pages (asset managers, O&M providers, reporting teams).

Sections:
1. Hero: "Monitoring for EPCs and installers", for EPCs and ESCOs that build commercial and industrial (C&I) solar and battery systems and stay responsible after handover. Buttons: Contact sales (pink, per the button rules) / Book a demo (/demo).
2. The EPC problem: mixed inverter and battery brands per project, clients expecting proof of performance after commissioning, guarantee and warranty periods that need evidence.
3. What to look for (criteria list): multi-brand support (cloud API or AMMP Edge datalogger, 30+ integrations); commissioning and handover checks (see question 1); performance guarantee and availability tracking; alerts into Microsoft Teams, Slack, email or webhooks; ticketing for your O&M team; client reports and stakeholder portal access with your branding on reports.
4. How AMMP fits: AMMP OS Platform plus Ray (daily triage ranked by commercial impact, guarantee and SLA checks with evidence, drafted client reports). Links to /solutions/om-sla-tracking, /solutions/investor-reporting, /integrations, /ray.
5. FAQ with FAQPage schema: "What should an EPC look for in solar monitoring software?", "Can EPCs give clients access to their own sites?" (stakeholder portal; branding on reports only), "Can AMMP monitor sites with different inverter brands?" (30+ integrations, AMMP Edge).
6. Closing "Talk to our team" block (pink).

Also: add "EPCs and installers" to the header Use cases menu and footer Use cases list; add to ammp-facts PAGES (so llms.txt / llms-full.txt include it) and sitemap.xml. Numbers only 10,000+ sites / 30+ countries / 30+ integrations; no prices, no customer names, no white-label/OEM claims.

Language: English first. I recommend es/pt follow right after approval of the English copy, since every other use-case page is translated and untranslated text would show in English on a Portuguese/Spanish page.

## Open questions

1. Commissioning and handover checks: the site doesn't currently state a specific AMMP commissioning feature. I propose wording it as a criterion only ("check new sites report every device correctly from day one and that the expected yield baseline is set at handover") plus "AMMP onboards new sites with data quality checks", without claiming a dedicated commissioning tool. OK, or do you have product wording?
2. Menu label: "EPCs and installers" OK?
3. Should es/pt for the EPC page be done in the same build, or after you approve the English text?

## Technical details

- Post: edit the entry in `src/data/blog-posts.ts` (date, publishAt) and `src/data/authors.ts` (dateModified); update `src/data/blog-posts.test.ts`.
- New route `src/routes/use-cases.epcs.tsx` using `pageHead()` with FAQPage JSON-LD; FAQ entries in `src/data/faq.ts`.
- Edit `src/components/site/SiteShell.tsx` (menu + footer), `src/data/ammp-facts.ts` (PAGES), `src/routes/sitemap[.]xml.ts` if it isn't driven by PAGES.
- Add a test that /use-cases/epcs is listed in PAGES and the sitemap.
