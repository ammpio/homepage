import type { BlogBlock } from "./blog-posts";
import multibrandCover from "@/assets/blog-multibrand-cover.jpg.asset.json";
import alarmsCover from "@/assets/blog-alarms-cover.jpg.asset.json";
import reportsCover from "@/assets/blog-reports-cover.jpg.asset.json";
import { assetUrl } from "@/lib/assets";

const closing: BlogBlock = { type: "rich", parts: ["Questions about your own portfolio? Write to ", { a: "sales@ammp.io", href: "mailto:sales@ammp.io" }, "."] };

export const checklistBody: BlogBlock[] = [
  { type: "paragraph", text: "Most renewable energy portfolios don't start multi-brand. They become it. One EPC installs Huawei, the next installs SMA, a battery project brings in Victron, and three years later the operations team logs into four vendor portals every morning, each with its own KPIs and its own alarms." },
  { type: "paragraph", text: "At that point a portfolio monitoring platform looks obvious. The hard part is telling a platform that really unifies your fleet from one that shows a nice dashboard in the demo and falls apart on your data. These five questions do that. Ask them before the demo, and ask for the answers in writing." },
  { type: "heading", text: "1. Which of my brands connect by cloud API, and which need hardware on site?" },
  { type: "paragraph", text: "This is the question that decides your rollout cost. Most current inverter brands offer a cloud API: Huawei, SMA, Sungrow, SolarEdge, Fronius, GoodWe and others. Connecting those is a configuration job, usually done in days. Older inverters, gensets, some meters and anything behind a site firewall often need a datalogger on site." },
  { type: "paragraph", text: "Send the vendor your device list by brand and model, and ask for a table back: API or logger, typical setup time, and one-off cost per site. A platform that says \"we integrate with everything\" without that table hasn't looked at your fleet yet." },
  { type: "heading", text: "2. How are KPIs calculated across brands?" },
  { type: "paragraph", text: "Every inverter portal calculates performance ratio, availability and yield its own way. Some use plane-of-array irradiance, some use satellite data, some leave out curtailment and some don't. Put three brands side by side and you're comparing three different definitions." },
  { type: "paragraph", text: "Ask which standard the platform uses (IEC 61724 is the usual reference for PR), where irradiance comes from when a site has no sensor, and whether the method is the same for every brand. If KPIs are only passed through from vendor portals, your portfolio ranking is noise." },
  { type: "heading", text: "3. What happens when a vendor API goes down?" },
  { type: "paragraph", text: "It will. Vendor clouds have outages, rate limits and silent changes to their APIs. The questions that matter: how fast does the platform notice missing data, does it backfill when the API comes back, and is backfilled or estimated data marked as such?" },
  { type: "paragraph", text: "The last point matters most if you bill from this data. An invoice built on estimated values that nobody flagged is a dispute waiting to happen." },
  { type: "heading", text: "4. Can alert rules be set per site, per group and per portfolio?" },
  { type: "paragraph", text: "One threshold across 200 sites gives you one of two outcomes: so many alerts that people stop reading them, or thresholds so loose that real faults slip through. Rooftop sites with shading, ground-mount sites and hybrid sites with gensets need different rules." },
  { type: "paragraph", text: "Ask to see how rules are set at each level, how vendor alarms are filtered or grouped, and how alerts reach people: email, Microsoft Teams, Slack, webhooks into your ticketing tool. Then ask how many alerts a typical site produces per week. The number tells you more than the feature list." },
  { type: "heading", text: "5. Can you get your data out?" },
  { type: "paragraph", text: "Your monitoring data will outlive any one tool. Ask for a documented API, bulk exports in CSV or Parquet, and whether there are per-seat or per-call fees on either. A newer question worth adding: is there an MCP server, so AI assistants such as Claude or Copilot can query your portfolio directly, with the same permissions as your team?" },
  { type: "paragraph", text: "If getting data out is hard or expensive, switching later will be too." },
  { type: "heading", text: "The short version" },
  { type: "paragraph", text: "You're buying three things: coverage of every brand you run, one consistent way of measuring them, and freedom to take your data elsewhere. The five answers above tell you whether you'll get all three." },
  { type: "paragraph", text: "AMMP OS is built around exactly these questions. It connects to 30+ vendor platforms by cloud API or the AMMP Edge datalogger, calculates KPIs the same way across brands, and gives you your data through a Data API and an MCP server." },
  closing,
];

export const alarmsBody: BlogBlock[] = [
  { type: "paragraph", text: "A portfolio of 200 renewable energy sites can produce hundreds of alarms on a bad day. Most O&M teams work through them in one of two ways: oldest first, or by the severity label the inverter vendor attached. Both are cheap to run. Both send crews to the wrong fault surprisingly often." },
  { type: "paragraph", text: "The reason is simple. A vendor's \"critical\" label describes the device, while your losses depend on the site: how much energy is at risk, what that energy is worth, and what the contract says happens if availability drops. Ranking by those three things takes a little more data and saves a lot more money." },
  { type: "heading", text: "The four numbers behind every alarm" },
  { type: "rich", parts: [{ b: "Energy at risk." }, " How many kWh will this fault cost per day if nobody acts? Estimate it from the share of the plant affected, its capacity, and the irradiance forecast. A tripped inverter on a 1 MWp rooftop in summer loses far more than a single failed string in winter."] },
  { type: "rich", parts: [{ b: "Value per kWh." }, " What is that energy worth at this site? Use the PPA rate or the tariff the customer avoids, including time-of-use windows. A kWh lost at 17:00 on a peak tariff can be worth several times a kWh lost at noon."] },
  { type: "rich", parts: [{ b: "Contract exposure." }, " Does this fault push the site toward an availability or performance guarantee? Many renewable energy PPAs carry guaranteed availability with liquidated damages below it. A fault that crosses that line costs the lost energy plus the penalty."] },
  { type: "rich", parts: [{ b: "Time to fix." }, " A remote reset takes minutes. A truck roll to a remote site takes a day and a technician. Quick fixes with real value deserve to move up the list."] },
  { type: "heading", text: "Putting it together" },
  { type: "paragraph", text: "The ranking itself is basic arithmetic:" },
  { type: "rich", parts: [{ b: "Priority = (kWh at risk per day × value per kWh + contract penalty at risk) ÷ time to fix" }] },
  { type: "paragraph", text: "Take two alarms that land on the same morning. The first is a string fault on a 2 MWp rooftop with a 98% availability guarantee, already at 98.4% for the month. The second is a dead weather sensor flagged critical by the vendor. The sensor alarm looks worse in the queue; the string fault is the one losing money and edging toward a penalty, so it goes first. The sensor can wait for the next planned visit." },
  { type: "paragraph", text: "You can run this in a spreadsheet for a dozen sites. Past that, keeping tariffs, contract terms and forecasts current for every site by hand stops being realistic, and the ranking quietly drifts back to oldest first." },
  { type: "heading", text: "Where AI helps" },
  { type: "paragraph", text: "This is a good job for software, because the work is repetitive and the inputs already exist in your monitoring, contract and tariff data. An AI agent can check yesterday's performance across every site before the team logs on, estimate energy and money at risk for each fault, and hand the team a ranked list with the evidence attached." },
  { type: "paragraph", text: "Three rules keep it trustworthy:" },
  { type: "list", items: [
    "Every number in the ranking links to the data behind it, so anyone can check it.",
    "The agent proposes; your team decides what gets fixed and when.",
    "When data is missing or a contract term is unclear, the agent says so instead of guessing.",
  ] },
  { type: "rich", parts: ["That's the job we built Ray, AMMP's AI coworker, to do. Ray checks every site each morning, ranks issues by operational and commercial impact, opens tickets with the evidence, and works in Microsoft Teams, Slack or AMMP OS. Ray can run on AMMP OS or on top of the monitoring stack you already use. More at ", { a: "www.ammp.io/ray", href: "/ray" }, "."] },
  closing,
];

export const reportsBody: BlogBlock[] = [
  { type: "paragraph", text: "The monthly investor report is one of the most expensive documents an asset manager produces. It rarely holds anything new: generation, performance ratio, availability, savings, and a page of commentary on what went wrong. Most of the effort goes into pulling numbers from several tools, pasting them into a template, and checking them twice. Very little goes into the commentary, which is the part investors actually read." },
  { type: "paragraph", text: "That split makes reporting a good fit for AI, as long as you're clear about which parts you hand over." },
  { type: "heading", text: "What to automate" },
  { type: "rich", parts: [{ b: "The data pull." }, " Generation, PR, availability, savings and billing figures per site, from one source of truth. If your monitoring data is already standardised across brands, this step is mostly a query."] },
  { type: "rich", parts: [{ b: "The comparisons." }, " Actuals against budget, against last month and against the same month last year, with every variance above your threshold flagged. This is where manual reporting goes wrong most often, because one wrong cell reference spreads through a whole table."] },
  { type: "rich", parts: [{ b: "The first draft of the commentary." }, " For each flagged variance, the AI drafts a short explanation from the data: which sites, how much energy, which events (downtime, curtailment, soiling, grid outages). Every sentence links to the numbers behind it."] },
  { type: "rich", parts: [{ b: "The formatting." }, " Your Word, PowerPoint or PDF template, filled the same way every month, with charts in your branding."] },
  { type: "heading", text: "What people should keep" },
  { type: "rich", parts: [{ b: "Root causes that aren't in the data." }, " If a site underperformed because a customer disputed an invoice, or a landlord blocked roof access, the data shows the drop but not the reason. Someone who knows the portfolio has to add it."] },
  { type: "rich", parts: [{ b: "Anything forward-looking." }, " Forecasts, guidance, remediation plans and their cost. These are commitments, and a person should make them."] },
  { type: "rich", parts: [{ b: "Sign-off." }, " A named person approves every report before it goes to investors."] },
  { type: "heading", text: "Two rules that make it safe" },
  { type: "paragraph", text: "First, the AI only reports numbers it can trace to source data. If a figure is missing or estimated, the draft says so; it never fills a gap with a plausible guess." },
  { type: "paragraph", text: "Second, every draft has a reviewer. The point is to turn two days of compiling into an hour of checking, with the reviewer's time spent on the commentary instead of the copy-paste." },
  { type: "heading", text: "Where to start" },
  { type: "paragraph", text: "Pick one report, one month and one portfolio. Run the AI draft alongside your usual process, compare the two line by line, and fix what differs. After two or three months you'll know which parts you trust and which still need a person. That's a far better basis for rolling it out than any demo." },
  { type: "rich", parts: ["At AMMP, this is part of what Ray, our AI coworker, does: it pulls the portfolio data from AMMP OS or your existing monitoring stack, drafts the report with every number linked to its source, and delivers it as Word, PowerPoint or PDF for your team to review. More at ", { a: "www.ammp.io/ray", href: "/ray" }, "."] },
  closing,
];

export const covers = {
  multibrand: { src: assetUrl(multibrandCover), alt: "Four separate grey vendor portal panels with an arrow pointing to one unified pink bar chart" },
  alarms: { src: assetUrl(alarmsCover), alt: "A ranked list of four alarms, numbered 1 to 4, with bars and euro signs shrinking from €€€ to none" },
  reports: { src: assetUrl(reportsCover), alt: "A report page with a bar chart, a dotted line linking one bar to a source note, and a pink approval check mark" },
};
