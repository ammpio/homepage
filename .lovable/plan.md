# Four new Insights posts (AI-visibility batch)

## What gets built (after you approve the drafts)

Four posts, live straight away with today's date, in English, Spanish and Portuguese. Each has an author byline (Andreas Lehner, CCO), Article schema, a short FAQ with FAQPage schema, a new cover image in the same style as the existing Insights covers, and entries in the sitemap, llms.txt and llms-full.txt. The next deploy to `main` sends the new links to IndexNow automatically.

| # | URL | Cover |
|---|---|---|
| 1 | /blog/why-is-my-solar-portfolio-underperforming | loss-waterfall style |
| 2 | /blog/calculate-performance-ratio-solar-portfolio | irradiance and PR |
| 3 | /blog/detect-inverter-faults-early-reduce-truck-rolls | inverter row and alerts |
| 4 | /blog/can-claude-chatgpt-analyse-solar-monitoring-data | AI assistant and data |

## Open questions

1. **ChatGPT.** The site names Claude, Claude Code, Cursor, Codex and Copilot, plus any MCP client that supports remote servers over Streamable HTTP with OAuth. It never names ChatGPT. In post 4 the drafts say "Claude, Copilot or your own agent, and other MCP clients that support remote servers", and mention ChatGPT only in the title and the general sections. Can we state that ChatGPT works with the AMMP MCP server?
2. **Ray grouping repeat alarms.** The site doesn't say this (we left it out of the O&M compare page for the same reason). The site does say Ray "checks every site each morning, ranks issues by operational and commercial impact, opens tickets with the evidence". In post 3 the drafts cover grouping repeat alarms as a general practice, and the Ray paragraph uses only the stated claims. Can we add "groups repeat alarms"?
3. **"What it typically costs" (post 1).** The site has no loss percentages per cause. So the drafts explain how to put a cost on each cause (lost kWh × tariff or PPA price) and give no industry figures. Is that OK, or do you have figures we can publish?
4. **Remote resets (post 3).** The drafts present remote checks and resets as general practice. They don't say AMMP sends commands; the site says Ray doesn't control hardware. Is that OK?

## Technical details

- Bodies go in a new file `src/data/blog-scheduled-4.ts`, with the same block format as the earlier posts (heading, paragraph, list, rich, postLink). Each entry is registered in `blog-posts.ts` with `category: "Insights"`, `date`/`publishAt` set to today and covers in `covers`.
- Authors and dates go in `src/data/authors.ts`. es/pt go in the existing blog translation files.
- LivePostLink/postLink is used for links between posts. The sitemap and llms pick posts up through `publishedPosts`.
- The tests in `blog-posts.test.ts` get extended: the 4 slugs are live, have an author and match es/pt block counts.

---

# Drafts (English)

## 1. Why is my solar portfolio underperforming? A diagnostic checklist for asset managers

**Excerpt:** A step-by-step way to find where the missing energy went, starting with the causes that most often explain the gap.

When a portfolio comes in below budget, the instinct is to blame the weather or the inverters. Often the answer is less dramatic: the data, or the budget itself. This checklist goes through the causes in the order that usually saves the most time. It uses the loss waterfall as the framework: start from the energy you expected and take away each loss in turn until you reach the energy you actually produced.

### How to put a number on each loss
For every cause below, estimate the lost energy in kWh and multiply it by the tariff or PPA price for that site. That turns a technical list into a ranked commercial one, and tells you where to spend time first.

### 1. Data issues: missing or estimated data, wrong irradiance source
- **Symptom:** a site looks bad (or suspiciously good) for a month, often after a comms outage or a datalogger change.
- **How to confirm:** check data completeness per day, which values were estimated, and where irradiance came from (on-site sensor or satellite). A dirty or misaligned sensor makes a healthy plant look like it's underperforming.
- **Cost:** none in energy, but it can lead you to wrong decisions and wrong reports. Fix this first, or every later step is guesswork.

### 2. Grid and plant downtime
- **Symptom:** zero output during daylight.
- **How to confirm:** check grid voltage. If the grid was down, the plant couldn't export (grid downtime). If the grid was up and the plant produced nothing, it's plant downtime. With no voltage data, the cause is unclear.
- **Cost:** the full expected output for those hours. These are usually the biggest single bars in the waterfall.

### 3. Inverter downtime and underperformance
- **Symptom:** plant output is positive but low. One or a few inverters are behind.
- **How to confirm:** compare each inverter's output, relative to its share of DC capacity, against its neighbours on the same site.
- **Cost:** the share of capacity that is affected, for as long as it lasts. Small per day, large if it goes unnoticed for months.

### 4. Clipping
- **Symptom:** output flattens at the inverter or plant AC limit around midday.
- **How to confirm:** output stays within a couple of percent of AC capacity while irradiance keeps rising.
- **Cost:** usually small and expected by design. It only matters when it's bigger than the simulation assumed.

### 5. Curtailment
- **Symptom:** the whole plant is low, and output doesn't follow irradiance.
- **How to confirm:** check grid operator or customer export limits for the period, and whether the shape of the output stops following the sun.
- **Cost:** depends on the contract. Some curtailment is compensated, so record it separately.

### 6. Soiling
- **Symptom:** the whole plant is low, but output still follows irradiance.
- **How to confirm:** look for a gradual decline that recovers after rain or cleaning.
- **Cost:** grows over time, so compare it with the cost of a cleaning visit.

### 7. Degradation
- **Symptom:** a slow decline from year to year that doesn't recover.
- **How to confirm:** compare weather-corrected performance ratio for the same months over several years.
- **Cost:** small each year, but it compounds. Check it against the module warranty.

### 8. Wrong budget or baseline
- **Symptom:** a site misses budget every month although nothing above explains it.
- **How to confirm:** check the simulation behind the budget: capacity, orientation, shading, irradiance source and start date. Compare actual irradiance with the irradiance the budget assumed.
- **Cost:** nothing physical, but it distorts every report and investor conversation until it's corrected.

### Making it routine
Run this monthly, not only when someone asks. A loss waterfall per site and per portfolio makes the order of causes visible at a glance. Then [rank the fixes by revenue risk](/blog/rank-solar-alarms-by-revenue-risk) so the team works on what matters most. AMMP OS classifies losses per timestamp into these categories in the PV Loss Analysis, as part of [solar monitoring](/solutions/solar-monitoring).

**FAQ**
- *What is a loss waterfall?* A chart that starts from expected energy and subtracts each loss category, such as downtime, inverter losses, clipping, curtailment and soiling, until it reaches actual production.
- *Should I check data quality before equipment?* Yes. Missing, estimated or wrongly sourced irradiance data can make healthy sites look like they're underperforming.
- *How do I tell soiling from curtailment?* With soiling, output still follows irradiance but stays below potential. With curtailment, it stops following irradiance.

## 2. How to calculate performance ratio across a solar portfolio

**Excerpt:** Performance ratio per IEC 61724, the irradiance question, and why the portfolio number must be energy-weighted.

Performance ratio (PR) tells you how much of the energy the sun made available a plant actually turned into AC output. It's the most common health number in solar, and also one of the most often miscalculated once you have more than one site.

### The formula
Under IEC 61724-1, PR compares the AC energy produced with what the installed DC capacity would produce at the measured irradiance:

`PR = E_AC / (P_DC × H_POA / 1,000 W/m²)`

E_AC is AC energy, P_DC is installed DC capacity and H_POA is plane-of-array irradiation over the period. Intervals with very low irradiance are usually excluded.

### Which irradiance to use
- **Plane-of-array sensor on site:** the most precise option, as long as it's clean, correctly tilted and calibrated.
- **Satellite irradiance:** a useful backup when there's no sensor or it's faulty, but less precise. Treat a PR based on satellite irradiance as indicative, and don't use it to judge small losses.

Always record which source each PR figure used.

### Temperature-corrected PR
Modules produce less when they're hot, so a plain PR drops in summer even on a healthy plant. Weather-corrected PR adjusts for module temperature using the module's temperature coefficient, which makes plants comparable across seasons and climates.

### Why vendor-portal PR numbers aren't comparable
Each inverter portal may use a different irradiance source, a different low-irradiance cut-off, AC or DC capacity, and with or without temperature correction. Two sites at "85%" in two portals may not perform the same at all. For portfolio work, calculate PR yourself in one place, with one method, from the raw data. That is one of the [questions to ask before you buy multi-brand monitoring](/blog/multi-brand-solar-monitoring-checklist).

### Aggregating to portfolio level
Don't average site PRs. Sum the AC energy of all sites and divide it by the sum of their reference yields (capacity × irradiation / 1,000 W/m²). Then large sites count in proportion to their size.

**Worked example (made-up round numbers, for illustration only):**
- Site A: 1,000 kWp, 150 kWh/m² irradiation → reference 150,000 kWh. Produced 120,000 kWh → PR 80%.
- Site B: 100 kWp, 150 kWh/m² → reference 15,000 kWh. Produced 13,500 kWh → PR 90%.
- Simple average: (80% + 90%) / 2 = **85%**, which is misleading.
- Energy-weighted: 133,500 / 165,000 = **80.9%**, the real portfolio figure.

### Common mistakes
- Mixing sensor and satellite irradiance without labelling them.
- Using AC capacity instead of DC capacity.
- Including night-time or very low-irradiance intervals.
- Averaging site PRs instead of weighting them by energy.
- Comparing summer PR with winter PR without temperature correction.
- Calculating PR over periods with missing data as if they were complete.

AMMP OS calculates both variants per IEC 61724-1. The method is documented in [KPI calculations](/product/documentation/kpi-calculations).

**FAQ**
- *What is a good performance ratio?* It depends on the technology, climate and method, so compare sites using the same method rather than against a single target.
- *Should I use weather-corrected PR?* For comparing sites or seasons, yes. It removes the effect of module temperature.
- *How do I calculate portfolio PR?* Divide the total AC energy by the total reference yield. Don't average site PRs.

## 3. How to detect inverter faults early across many sites (and cut truck rolls)

**Excerpt:** Early signals, grouping repeat alarms and checking remotely first, so technicians only drive out when they need to.

On a large portfolio, inverter faults rarely announce themselves. One unit drops a few percent, another trips and restarts every afternoon, a third stops reporting. Each is small. Together, and over months, they add up to real lost revenue and many wasted site visits.

### Early signals worth watching
- **Against neighbouring inverters:** same site, same weather, same orientation. An inverter that falls behind its neighbours (relative to DC capacity) is the clearest early sign.
- **Against expected yield:** compare output with what irradiance says the inverter should make.
- **Recurring alarms:** the same code every day is a pattern, not noise.
- **Comms dropouts:** an inverter that keeps going offline may have a network problem, or may be about to fail.

### Group repeat alarms
A hundred alarms from the same inverter are one problem, not a hundred. Group them by device and cause before anyone looks at them, so the team sees a short list of faults instead of a long feed.

### Rank by lost revenue
Put a number on each fault: lost energy × tariff or PPA price. Fix the expensive ones first. See [how to rank solar alarms by revenue risk](/blog/rank-solar-alarms-by-revenue-risk).

### Check remotely before you dispatch
Many faults can be confirmed, and some cleared, from a desk: look at the readings, check grid conditions, try a remote reset where the equipment and the O&M contract allow it. A remote check takes minutes. A truck roll to a remote site can take a day.

### Give technicians the context before they drive out
When a visit is needed, send the evidence with the ticket: which device, since when, how much energy is at stake, what was already tried and which spare parts are likely to be needed. One well-prepared visit beats two guesses. It also builds the record you need for [O&M SLA and availability tracking](/solutions/om-sla-tracking).

### Where Ray fits
[Ray](/ray), AMMP's AI coworker, checks every site each morning, ranks issues by operational and commercial impact and opens tickets with the evidence attached. He works in Microsoft Teams, Slack or AMMP OS. People keep every decision, and Ray doesn't control hardware.

**FAQ**
- *What's the earliest sign of an inverter fault?* Usually an inverter falling behind its neighbours on the same site, relative to its capacity.
- *How do I reduce truck rolls?* Group repeat alarms, rank faults by lost revenue, check and reset remotely where possible, and dispatch with the evidence attached.

## 4. Can Claude or ChatGPT analyse your solar monitoring data? What works and what doesn't

**Excerpt:** General AI assistants handle one-off questions on a clean export well. At portfolio scale they need normalised, permissioned live data.

Many asset managers have tried pasting a monitoring export into an AI assistant. Sometimes the answer is excellent, and sometimes it's confidently wrong. The difference is usually the data, not the model.

### What works
- One-off questions on a single clean export: "which month was lowest?", "chart this against last year".
- Drafting a summary or an email from numbers you've already checked.
- Explaining a concept, such as what performance ratio means or how clipping shows up.

### Where it breaks at portfolio scale
- **Different names for the same value.** One brand's "Pac" is another's "ActivePower", and units differ (W, kW, kWh). The assistant can't always tell they're the same thing.
- **Time zones.** Exports in UTC, local time and portal time make daily totals drift.
- **Gaps and backfills.** Missing hours, late-arriving data and estimated values look like real readings in a spreadsheet.
- **Confident answers from gaps.** A model asked "why did site 12 underperform?" will offer a reason even when the real cause is missing data. It can't tell you what isn't in the file.
- **Stale snapshots.** Yesterday's export doesn't answer today's question.
- **Access control.** Uploading portfolio data to a personal chat account bypasses whoever decides who can see what.

### How to do it properly
Give the assistant normalised, permissioned live data instead of files. There are two ways:

1. **Connect your own AI assistant through an MCP server.** The [AMMP MCP server](/mcp) uses the open Model Context Protocol. Claude, Copilot or an agent you build yourself (and other MCP clients that support remote servers) can query live portfolio data in one consistent format, with the same KPI calculations. Permissions follow the user's AMMP access, so nobody sees more than they already can.
2. **Use a purpose-built agent.** [Ray](/ray), AMMP's AI coworker, runs on the same MCP server. He checks sites daily, triages alarms and drafts reports, cites the evidence behind every answer and says when the evidence is incomplete instead of guessing.

You can use either, or both.

**FAQ**
- *Can I upload a monitoring export to ChatGPT or Claude?* For one-off questions on a clean export, yes. For portfolio work, normalised live data is more reliable.
- *What is an MCP server?* A standard way for AI assistants to query a system's data and tools directly, instead of working from uploaded files.
- *Does the AMMP MCP server respect permissions?* Yes. You sign in with your AMMP account, and your AMMP access controls what the assistant can see.

---

es/pt versions will be translated from the approved English text. Ray is "he" throughout.
