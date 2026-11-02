import type { BlogBlock } from "./blog-posts";
import type { FaqItem } from "./faq";
import underperfCover from "@/assets/blog-underperf-cover.jpg.asset.json";
import prCover from "@/assets/blog-pr-cover.jpg.asset.json";
import inverterCover from "@/assets/blog-inverter-cover.jpg.asset.json";
import aiCover from "@/assets/blog-ai-cover.jpg.asset.json";
import { assetUrl } from "@/lib/assets";

export const covers4 = {
  underperf: { src: assetUrl(underperfCover), alt: "A loss waterfall from expected to actual energy, with bars for data, downtime, inverters and soiling" },
  pr: { src: assetUrl(prCover), alt: "The performance ratio formula with an energy-weighted portfolio figure next to a struck-through simple average" },
  inverter: { src: assetUrl(inverterCover), alt: "A row of inverter bars with one pink inverter well below its neighbours" },
  ai: { src: assetUrl(aiCover), alt: "Inconsistent vendor field names turning into normalised, permissioned data for an AI assistant through an MCP server" },
};

export const underperfBody: BlogBlock[] = [
  { type: "paragraph", text: "When a portfolio comes in below budget, the instinct is to blame the weather or the inverters. Often the answer is less dramatic: the data, or the budget itself. This checklist goes through the causes in the order that usually saves the most time. It uses the loss waterfall as the framework: start from the energy you expected and take away each loss in turn until you reach the energy you actually produced." },
  { type: "heading", text: "How to put a number on each loss" },
  { type: "paragraph", text: "For every cause below, estimate the lost energy in kWh and multiply it by the tariff or PPA price for that site. That turns a technical list into a ranked commercial one, and tells you where to spend time first." },
  { type: "heading", text: "1. Data issues: missing or estimated data, wrong irradiance source" },
  { type: "list", items: [
    "Symptom: a site looks bad (or suspiciously good) for a month, often after a comms outage or a datalogger change.",
    "How to confirm: check data completeness per day, which values were estimated, and where irradiance came from (on-site sensor or satellite). A dirty or misaligned sensor makes a healthy plant look like it's underperforming.",
    "Cost: none in energy, but it can lead you to wrong decisions and wrong reports. Fix this first, or every later step is guesswork.",
  ] },
  { type: "heading", text: "2. Grid and plant downtime" },
  { type: "list", items: [
    "Symptom: zero output during daylight.",
    "How to confirm: check grid voltage. If the grid was down, the plant couldn't export (grid downtime). If the grid was up and the plant produced nothing, it's plant downtime. With no voltage data, the cause is unclear.",
    "Cost: the full expected output for those hours. These are usually the biggest single bars in the waterfall.",
  ] },
  { type: "heading", text: "3. Inverter downtime and underperformance" },
  { type: "list", items: [
    "Symptom: plant output is positive but low. One or a few inverters are behind.",
    "How to confirm: compare each inverter's output, relative to its share of DC capacity, against its neighbours on the same site.",
    "Cost: the share of capacity that is affected, for as long as it lasts. Small per day, large if it goes unnoticed for months.",
  ] },
  { type: "heading", text: "4. Clipping" },
  { type: "list", items: [
    "Symptom: output flattens at the inverter or plant AC limit around midday.",
    "How to confirm: output stays within a couple of percent of AC capacity while irradiance keeps rising.",
    "Cost: usually small and expected by design. It only matters when it's bigger than the simulation assumed.",
  ] },
  { type: "heading", text: "5. Curtailment" },
  { type: "list", items: [
    "Symptom: the whole plant is low, and output doesn't follow irradiance.",
    "How to confirm: check grid operator or customer export limits for the period, and whether the shape of the output stops following the sun.",
    "Cost: depends on the contract. Some curtailment is compensated, so record it separately.",
  ] },
  { type: "heading", text: "6. Soiling" },
  { type: "list", items: [
    "Symptom: the whole plant is low, but output still follows irradiance.",
    "How to confirm: look for a gradual decline that recovers after rain or cleaning.",
    "Cost: grows over time, so compare it with the cost of a cleaning visit.",
  ] },
  { type: "heading", text: "7. Degradation" },
  { type: "list", items: [
    "Symptom: a slow decline from year to year that doesn't recover.",
    "How to confirm: compare weather-corrected performance ratio for the same months over several years.",
    "Cost: small each year, but it compounds. Check it against the module warranty.",
  ] },
  { type: "heading", text: "8. Wrong budget or baseline" },
  { type: "list", items: [
    "Symptom: a site misses budget every month although nothing above explains it.",
    "How to confirm: check the simulation behind the budget: capacity, orientation, shading, irradiance source and start date. Compare actual irradiance with the irradiance the budget assumed.",
    "Cost: nothing physical, but it distorts every report and investor conversation until it's corrected.",
  ] },
  { type: "heading", text: "Making it routine" },
  { type: "rich", parts: [
    "Run this monthly, not only when someone asks. A loss waterfall per site and per portfolio makes the order of causes visible at a glance. Then ",
    { a: "rank the fixes by revenue risk", href: "/blog/rank-solar-alarms-by-revenue-risk" },
    " so the team works on what matters most. AMMP OS classifies losses per timestamp into these categories in the PV Loss Analysis, as part of ",
    { a: "solar monitoring", href: "/solutions/solar-monitoring" },
    ".",
  ] },
];

export const underperfFaq: FaqItem[] = [
  { q: "What is a loss waterfall?", a: "A chart that starts from expected energy and subtracts each loss category, such as downtime, inverter losses, clipping, curtailment and soiling, until it reaches actual production." },
  { q: "Should I check data quality before equipment?", a: "Yes. Missing, estimated or wrongly sourced irradiance data can make healthy sites look like they're underperforming." },
  { q: "How do I tell soiling from curtailment?", a: "With soiling, output still follows irradiance but stays below potential. With curtailment, it stops following irradiance." },
];

export const prBody: BlogBlock[] = [
  { type: "paragraph", text: "Performance ratio (PR) tells you how much of the energy the sun made available a plant actually turned into AC output. It's the most common health number in solar, and also one of the most often miscalculated once you have more than one site." },
  { type: "heading", text: "The formula" },
  { type: "paragraph", text: "Under IEC 61724-1, PR compares the AC energy produced with what the installed DC capacity would produce at the measured irradiance:" },
  { type: "paragraph", text: "PR = E_AC / (P_DC × H_POA / 1,000 W/m²)" },
  { type: "paragraph", text: "E_AC is AC energy, P_DC is installed DC capacity and H_POA is plane-of-array irradiation over the period. Intervals with very low irradiance are usually excluded." },
  { type: "heading", text: "Which irradiance to use" },
  { type: "list", items: [
    "Plane-of-array sensor on site: the most precise option, as long as it's clean, correctly tilted and calibrated.",
    "Satellite irradiance: a useful backup when there's no sensor or it's faulty, but less precise. Treat a PR based on satellite irradiance as indicative, and don't use it to judge small losses.",
  ] },
  { type: "paragraph", text: "Always record which source each PR figure used." },
  { type: "heading", text: "Temperature-corrected PR" },
  { type: "paragraph", text: "Modules produce less when they're hot, so a plain PR drops in summer even on a healthy plant. Weather-corrected PR adjusts for module temperature using the module's temperature coefficient, which makes plants comparable across seasons and climates." },
  { type: "heading", text: "Why vendor-portal PR numbers aren't comparable" },
  { type: "rich", parts: [
    "Each inverter portal may use a different irradiance source, a different low-irradiance cut-off, AC or DC capacity, and with or without temperature correction. Two sites at \"85%\" in two portals may not perform the same at all. For portfolio work, calculate PR yourself in one place, with one method, from the raw data. That is one of the ",
    { a: "questions to ask before you buy multi-brand monitoring", href: "/blog/multi-brand-solar-monitoring-checklist" },
    ".",
  ] },
  { type: "heading", text: "Aggregating to portfolio level" },
  { type: "paragraph", text: "Don't average site PRs. Sum the AC energy of all sites and divide it by the sum of their reference yields (capacity × irradiation / 1,000 W/m²). Then large sites count in proportion to their size." },
  { type: "rich", parts: [{ b: "Worked example (made-up round numbers, for illustration only):" }] },
  { type: "list", items: [
    "Site A: 1,000 kWp, 150 kWh/m² irradiation → reference 150,000 kWh. Produced 120,000 kWh → PR 80%.",
    "Site B: 100 kWp, 150 kWh/m² → reference 15,000 kWh. Produced 13,500 kWh → PR 90%.",
    "Simple average: (80% + 90%) / 2 = 85%, which is misleading.",
    "Energy-weighted: 133,500 / 165,000 = 80.9%, the real portfolio figure.",
  ] },
  { type: "heading", text: "Common mistakes" },
  { type: "list", items: [
    "Mixing sensor and satellite irradiance without labelling them.",
    "Using AC capacity instead of DC capacity.",
    "Including night-time or very low-irradiance intervals.",
    "Averaging site PRs instead of weighting them by energy.",
    "Comparing summer PR with winter PR without temperature correction.",
    "Calculating PR over periods with missing data as if they were complete.",
  ] },
  { type: "rich", parts: [
    "AMMP OS calculates both variants per IEC 61724-1. The method is documented in ",
    { a: "KPI calculations", href: "/product/documentation/kpi-calculations" },
    ".",
  ] },
];

export const prFaq: FaqItem[] = [
  { q: "What is a good performance ratio?", a: "It depends on the technology, climate and method, so compare sites using the same method rather than against a single target." },
  { q: "Should I use weather-corrected PR?", a: "For comparing sites or seasons, yes. It removes the effect of module temperature." },
  { q: "How do I calculate portfolio PR?", a: "Divide the total AC energy by the total reference yield. Don't average site PRs." },
];

export const inverterBody: BlogBlock[] = [
  { type: "paragraph", text: "On a large portfolio, inverter faults rarely announce themselves. One unit drops a few percent, another trips and restarts every afternoon, a third stops reporting. Each is small. Together, and over months, they add up to real lost revenue and many wasted site visits." },
  { type: "heading", text: "Early signals worth watching" },
  { type: "list", items: [
    "Against neighbouring inverters: same site, same weather, same orientation. An inverter that falls behind its neighbours (relative to DC capacity) is the clearest early sign.",
    "Against expected yield: compare output with what irradiance says the inverter should make.",
    "Recurring alarms: the same code every day is a pattern, not noise.",
    "Comms dropouts: an inverter that keeps going offline may have a network problem, or may be about to fail.",
  ] },
  { type: "heading", text: "Group repeat alarms" },
  { type: "paragraph", text: "A hundred alarms from the same inverter are one problem, not a hundred. Group them by device and cause before anyone looks at them, so the team sees a short list of faults instead of a long feed." },
  { type: "heading", text: "Rank by lost revenue" },
  { type: "rich", parts: [
    "Put a number on each fault: lost energy × tariff or PPA price. Fix the expensive ones first. See ",
    { a: "how to rank solar alarms by revenue risk", href: "/blog/rank-solar-alarms-by-revenue-risk" },
    ".",
  ] },
  { type: "heading", text: "Check remotely before you dispatch" },
  { type: "paragraph", text: "Many faults can be confirmed, and some cleared, from a desk: look at the readings, check grid conditions, try a remote reset where the equipment and the O&M contract allow it. A remote check takes minutes. A truck roll to a remote site can take a day." },
  { type: "heading", text: "Give technicians the context before they drive out" },
  { type: "rich", parts: [
    "When a visit is needed, send the evidence with the ticket: which device, since when, how much energy is at stake, what was already tried and which spare parts are likely to be needed. One well-prepared visit beats two guesses. It also builds the record you need for ",
    { a: "O&M SLA and availability tracking", href: "/solutions/om-sla-tracking" },
    ".",
  ] },
  { type: "heading", text: "Where Ray fits" },
  { type: "rich", parts: [
    { a: "Ray", href: "/ray" },
    ", AMMP's AI coworker, checks every site each morning, groups repeat alarms into one fix list, ranks issues by operational and commercial impact and opens tickets with the evidence attached. He works in Microsoft Teams, Slack or AMMP OS. People keep every decision, and Ray doesn't control hardware.",
  ] },
];

export const inverterFaq: FaqItem[] = [
  { q: "What's the earliest sign of an inverter fault?", a: "Usually an inverter falling behind its neighbours on the same site, relative to its capacity." },
  { q: "How do I reduce truck rolls?", a: "Group repeat alarms, rank faults by lost revenue, check and reset remotely where possible, and dispatch with the evidence attached." },
];

export const aiBody: BlogBlock[] = [
  { type: "paragraph", text: "Many asset managers have tried pasting a monitoring export into an AI assistant. Sometimes the answer is excellent, and sometimes it's confidently wrong. The difference is usually the data, not the model." },
  { type: "heading", text: "What works" },
  { type: "list", items: [
    "One-off questions on a single clean export: \"which month was lowest?\", \"chart this against last year\".",
    "Drafting a summary or an email from numbers you've already checked.",
    "Explaining a concept, such as what performance ratio means or how clipping shows up.",
  ] },
  { type: "heading", text: "Where it breaks at portfolio scale" },
  { type: "list", items: [
    "Different names for the same value. One brand's \"Pac\" is another's \"ActivePower\", and units differ (W, kW, kWh). The assistant can't always tell they're the same thing.",
    "Time zones. Exports in UTC, local time and portal time make daily totals drift.",
    "Gaps and backfills. Missing hours, late-arriving data and estimated values look like real readings in a spreadsheet.",
    "Confident answers from gaps. A model asked \"why did site 12 underperform?\" will offer a reason even when the real cause is missing data. It can't tell you what isn't in the file.",
    "Stale snapshots. Yesterday's export doesn't answer today's question.",
    "Access control. Uploading portfolio data to a personal chat account bypasses whoever decides who can see what.",
  ] },
  { type: "heading", text: "How to do it properly" },
  { type: "paragraph", text: "Give the assistant normalised, permissioned live data instead of files. There are two ways:" },
  { type: "rich", parts: [
    { b: "1. Connect your own AI assistant through an MCP server." },
    " The ",
    { a: "AMMP MCP server", href: "/mcp" },
    " uses the open Model Context Protocol. Claude, ChatGPT, Copilot or an agent you build yourself (and other MCP clients that support remote servers) can query live portfolio data in one consistent format, with the same KPI calculations. Permissions follow the user's AMMP access, so nobody sees more than they already can.",
  ] },
  { type: "rich", parts: [
    { b: "2. Use a purpose-built agent." },
    " ",
    { a: "Ray", href: "/ray" },
    ", AMMP's AI coworker, works on the same normalised portfolio data. He checks sites daily, triages alarms and drafts reports, cites the evidence behind every answer and says when the evidence is incomplete instead of guessing.",
  ] },
  { type: "paragraph", text: "You can use either, or both." },
];

export const aiFaq: FaqItem[] = [
  { q: "Can I upload a monitoring export to ChatGPT or Claude?", a: "For one-off questions on a clean export, yes. For portfolio work, normalised live data is more reliable." },
  { q: "What is an MCP server?", a: "A standard way for AI assistants to query a system's data and tools directly, instead of working from uploaded files." },
  { q: "Does the AMMP MCP server respect permissions?", a: "Yes. You sign in with your AMMP account, and your AMMP access controls what the assistant can see." },
];
