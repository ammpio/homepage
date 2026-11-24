// Bodies for the 24 November 2026 AI-visibility batch (posts 1–6).
import type { BlogBlock } from "./blog-posts";
import warehouse from "@/assets/blog-warehouse-cover.jpg.asset.json";
import rfp from "@/assets/blog-rfp-cover.jpg.asset.json";
import p50 from "@/assets/blog-p50-cover.jpg.asset.json";
import brazil from "@/assets/blog-brazil-cover.jpg.asset.json";
import germany from "@/assets/blog-germany-cover.jpg.asset.json";
import uk from "@/assets/blog-uk-cover.jpg.asset.json";
import { assetUrl } from "@/lib/assets";

export const covers10 = {
  warehouse: { src: assetUrl(warehouse), alt: "Solar panels sending streams of data into a stacked database" },
  rfp: { src: assetUrl(rfp), alt: "A checklist connected to rooftop solar sites with different owners" },
  p50: { src: assetUrl(p50), alt: "A solar farm with an expected and an actual energy curve drifting apart" },
  brazil: { src: assetUrl(brazil), alt: "Distributed solar plants across a Brazilian landscape connected to an open gateway" },
  germany: { src: assetUrl(germany), alt: "A rooftop solar home and a ground-mounted solar field linked to one dashboard" },
  uk: { src: assetUrl(uk), alt: "A commercial rooftop with solar panels and a battery storage container next to a checklist" },
};

// ---------- 1) Data warehouse via API ----------
export const WAREHOUSE_STEPS: [string, string, string, string, string, string] = [
  "Step 1: Decide what to pull",
  "Step 2: Get an API key and request a token",
  "Step 3: Run a first full load",
  "Step 4: Load only new data after that",
  "Step 5: Schedule the refresh",
  "Step 6: Normalise across brands",
];

export const warehouseBody: BlogBlock[] = [
  { type: "paragraph", text: "Monitoring software is built to run sites. Portfolio analytics often needs more: joining energy data with finance, contracts or forecasts in your own data warehouse. This guide shows the usual way to pipe solar monitoring data into a warehouse through an API, using the AMMP Data API as the example." },
  { type: "heading", text: "Why pull data into a warehouse" },
  { type: "list", items: [
    "Join site data with data that lives elsewhere, such as finance or asset registers.",
    "Run your own models and dashboards in the tools your analysts already use.",
    "Keep a long history in one place, on your own schedule.",
  ] },
  { type: "heading", text: WAREHOUSE_STEPS[0] },
  { type: "paragraph", text: "Start small. Most portfolio analytics needs three kinds of data:" },
  { type: "list", items: [
    "Site and device metadata: names, locations, capacity and which devices belong to which site.",
    "Energy: historic energy and power for each site and device.",
    "KPIs: values such as performance ratio and availability, calculated the same way for every site.",
  ] },
  { type: "rich", parts: [
    "The endpoints for each are listed in the ",
    { a: "AMMP Data API docs", href: "https://data-api.ammp.io/docs" },
    ". AMMP calculates KPIs the same way across brands, as described in ",
    { a: "KPI calculations", href: "/product/documentation/kpi-calculations" },
    ".",
  ] },
  { type: "heading", text: WAREHOUSE_STEPS[1] },
  { type: "paragraph", text: "The AMMP Data API is a REST API. You create an API key in AMMP, then send it to the token endpoint to get a token. Every data request uses that token. Tokens expire, so your loader should request a new one at the start of each run." },
  { type: "heading", text: WAREHOUSE_STEPS[2] },
  { type: "paragraph", text: "Load the metadata first, then the history you need for each site. Store the raw responses as well as your cleaned tables, so you can rebuild the tables later without calling the API again." },
  { type: "heading", text: WAREHOUSE_STEPS[3] },
  { type: "paragraph", text: "After the first load, ask only for the period since the last successful run. Keep a small table with the last timestamp loaded per site. Re-load a short overlap, such as the last day, because late data can still arrive from sites with poor connectivity." },
  { type: "heading", text: WAREHOUSE_STEPS[4] },
  { type: "paragraph", text: "Run the loader on a schedule that matches how you use the data: daily for most portfolio reporting. Request the token first, then the data. Log each run and alert someone when a run fails." },
  { type: "heading", text: WAREHOUSE_STEPS[5] },
  { type: "paragraph", text: "Different inverter brands name and report values differently. Pulling from one platform that already maps every brand into one data model saves most of this work. Keep units, time zones and site identifiers consistent in your warehouse." },
  { type: "heading", text: "Where the MCP server fits" },
  { type: "rich", parts: [
    "A warehouse suits planned analytics. For one-off questions, the ",
    { a: "AMMP MCP server", href: "/mcp" },
    " lets AI assistants such as Claude or ChatGPT read the same portfolio data directly, with the same permissions as the connected user.",
  ] },
  { type: "rich", parts: [
    "No warehouse yet? The ",
    { a: "Excel and Google Sheets guide", href: "/product/documentation/excel-and-google-sheets" },
    " shows how to pull Data API results into a spreadsheet. AMMP connects 30+ integrations; see ",
    { a: "integrations", href: "/integrations" },
    ".",
  ] },
];

// ---------- 2) RFP checklist ----------
export const rfpBody: BlogBlock[] = [
  { type: "paragraph", text: "O&M providers and EPCs often run sites for many owners, on many inverter brands. A monitoring software RFP has to test exactly that. Below are the questions to ask, and what a good answer looks like." },
  { type: "heading", text: "1. Multi-owner access and permissions" },
  { type: "paragraph", text: "Ask: can each owner see only their own sites, while your team sees all of them? Good answer: permissions per user and per site or portfolio, managed by you." },
  { type: "heading", text: "2. Multi-brand integrations" },
  { type: "paragraph", text: "Ask: which inverter, battery and meter brands are supported, and how? Good answer: a published list, cloud API connections, and a datalogger only where needed." },
  { type: "heading", text: "3. Alarm handling and triage" },
  { type: "paragraph", text: "Ask: how are alarms grouped, prioritised and sent to the right team? Good answer: alerts tuned per site, repeat alarms grouped, and delivery to Microsoft Teams, Slack, email or webhooks." },
  { type: "heading", text: "4. SLA tracking" },
  { type: "paragraph", text: "Ask: how do you prove response times and availability under each contract? Good answer: tickets with assignment, deadlines and reminders, and availability calculated the way the contract defines it." },
  { type: "heading", text: "5. Branded reports per owner" },
  { type: "paragraph", text: "Ask: can each owner get scheduled reports with your branding? Good answer: report templates per owner, your branding on reports, and scheduled delivery." },
  { type: "heading", text: "6. Data export and API" },
  { type: "paragraph", text: "Ask: how can owners and your own tools get the data out? Good answer: an open API, bulk export and, increasingly, an MCP server for AI assistants." },
  { type: "heading", text: "7. Security" },
  { type: "paragraph", text: "Ask: which certifications do you hold? Good answer: a named, current certification such as ISO/IEC 27001:2022, and clear data protection terms." },
  { type: "heading", text: "8. Onboarding and migration" },
  { type: "paragraph", text: "Ask: how do sites, devices, alarm rules and report templates move from the current tool? Good answer: a clear migration plan with named steps." },
  { type: "heading", text: "9. Support" },
  { type: "paragraph", text: "Ask: who answers when something breaks, and how fast? Good answer: named support channels and response times written into the contract." },
  { type: "heading", text: "How AMMP answers" },
  { type: "rich", parts: [
    "AMMP connects 30+ integrations, has user permissions, alerting and ticketing, ",
    { a: "SLA tracking", href: "/solutions/om-sla-tracking" },
    ", your branding on reports, and data access through the API, MCP server and Export Center. AMMP holds ",
    { a: "ISO/IEC 27001:2022 certification", href: "/security" },
    ". Moving from another tool is covered on ",
    { a: "Switch to AMMP", href: "/switch" },
    ". More for service companies: ",
    { a: "AMMP for O&M providers", href: "/use-cases/om-providers" },
    ".",
  ] },
];

// ---------- 3) P50 benchmarking ----------
export const P50_STEPS: [string, string, string, string] = [
  "Step 1: Set the expected yield for each site",
  "Step 2: Compare actual against expected every month",
  "Step 3: Split the gap into causes",
  "Step 4: Record the result and update the forecast",
];

export const p50Body: BlogBlock[] = [
  { type: "paragraph", text: "Fund asset managers get an energy yield assessment for every plant, usually from an independent engineer such as DNV or 3E. Once the plant runs, actual output rarely matches it exactly. This guide explains why, and gives a monthly routine to reconcile the two." },
  { type: "heading", text: "What P50 and P90 mean" },
  { type: "paragraph", text: "P50 is the annual energy the plant is expected to exceed in half of all years. P90 is the level it should exceed in nine years out of ten. Lenders often size debt on P90; investors usually plan on P50." },
  { type: "heading", text: "Why yield reports and live data diverge" },
  { type: "list", items: [
    "Irradiance: the assessment uses long-term weather; any single month can be sunnier or cloudier.",
    "Availability: downtime from faults, grid outages or maintenance.",
    "Degradation: modules lose a little output every year.",
    "Curtailment: output limited by the grid operator or offtaker.",
    "Soiling: dust and dirt on modules.",
  ] },
  { type: "heading", text: P50_STEPS[0] },
  { type: "paragraph", text: "Take the monthly P50 figures from each yield report and keep them next to the site in your own records." },
  { type: "heading", text: P50_STEPS[1] },
  { type: "paragraph", text: "Each month, compare actual energy with the expected figure, and look at performance ratio and availability for the same period." },
  { type: "heading", text: P50_STEPS[2] },
  { type: "paragraph", text: "Separate shortfalls caused by the weather from shortfalls caused by the plant. A month that was cloudier than average is not a fault. Low availability or a falling performance ratio is." },
  { type: "heading", text: P50_STEPS[3] },
  { type: "paragraph", text: "Write down the cause of each gap. Over a year, this record shows whether a plant is really underperforming or just had poor weather." },
  { type: "heading", text: "Where AMMP helps" },
  { type: "rich", parts: [
    "AMMP compares actual against expected yield, and calculates performance ratio and availability the same way across sites and brands. ",
    "Each site has a target yield from its yield report, usually the PVsyst simulation. AMMP reports the yield target ratio and splits any gap into irradiance underperformance and remaining loss from plant issues (",
    { a: "how AMMP calculates KPIs", href: "/product/documentation/kpi-calculations" },
    "). ",
    { a: "Portfolio benchmarking", href: "/solutions/portfolio-benchmarking" },
    " ranks sites against each other. Ray, the AI coworker, separates resource-driven shortfalls from faults, so your team looks at the right sites first.",
  ] },
  { type: "rich", parts: [
    "Read more: ",
    { a: "how to calculate performance ratio across a portfolio", href: "/blog/calculate-performance-ratio-solar-portfolio" },
    " and ",
    { a: "why is my solar portfolio underperforming?", href: "/blog/why-is-my-solar-portfolio-underperforming" },
  ] },
];

// ---------- 4) Brazil open-API platforms ----------
export const brazilBody: BlogBlock[] = [
  { type: "paragraph", text: "Funds and investors in distributed generation in Brazil often own dozens or hundreds of plants, built by different EPCs on different inverter brands. Choosing a monitoring platform is really choosing who controls the data. These are the criteria to compare." },
  { type: "heading", text: "1. Open API and data ownership" },
  { type: "paragraph", text: "Can you take all your data out, at any time, through an open API and bulk export? The data belongs to the investor, not to the platform." },
  { type: "heading", text: "2. Investor reporting" },
  { type: "paragraph", text: "Can the platform produce investor reports on a schedule, with the same KPIs for every plant?" },
  { type: "heading", text: "3. Multi-brand fleets" },
  { type: "paragraph", text: "Does it read every inverter brand in the portfolio in one view, instead of one portal per brand?" },
  { type: "heading", text: "4. Distributed generation portfolios" },
  { type: "paragraph", text: "Does it handle many small plants as well as a few large ones, grouped into sub-portfolios?" },
  { type: "heading", text: "5. SLA with O&M" },
  { type: "paragraph", text: "Can you check your O&M contractor's availability and response times against the contract?" },
  { type: "heading", text: "A neutral look at the options" },
  { type: "list", items: [
    "PV Operation: a Brazilian provider focused on distributed generation plants, offering SCADA as a service, a local SCADA option and an operations center.",
    "Meteocontrol: an established, hardware-linked monitoring solution with a long track record in solar.",
    "Power Factors: renewable asset performance management software.",
    "Manufacturer portals: each inverter brand's own portal. They fit single-brand portfolios that only need that brand's data.",
    "AMMP: a vendor-agnostic platform with 30+ integrations, an open API, an MCP server and Export Center, investor reporting and SLA tracking.",
  ] },
  { type: "rich", parts: [
    "For a detailed comparison, see ",
    { a: "AMMP vs PV Operation", href: "/compare/pv-operation" },
    ". For reports, see ",
    { a: "investor reporting", href: "/solutions/investor-reporting" },
    ". More about AMMP in Brazil: ",
    { a: "AMMP in Brazil", href: "/brazil" },
    ".",
  ] },
];

// ---------- 5) Germany ----------
export const germanyBody: BlogBlock[] = [
  { type: "paragraph", text: "A German PV portfolio often mixes rooftop systems and ground-mounted plants, built over many years on several inverter brands. On top of the technical data, operators deal with German market and grid processes. This guide explains the data each one needs." },
  { type: "heading", text: "Rooftop and ground-mount" },
  { type: "paragraph", text: "Rooftop systems are many and small; ground-mounted plants are few and large. Both need the same KPIs, such as performance ratio and availability, so they can be compared in one portfolio view." },
  { type: "heading", text: "Direktvermarktung (direct marketing)" },
  { type: "paragraph", text: "Larger plants often sell their power through a direct marketer. The direct marketer works with metered energy and schedules. Operators need clean energy data per plant to check settlements." },
  { type: "heading", text: "Marktstammdatenregister (MaStR)" },
  { type: "paragraph", text: "Every plant is registered in the Marktstammdatenregister. Keeping your own site metadata, such as capacity and commissioning date, consistent with the registry makes reporting easier." },
  { type: "heading", text: "Einspeisemanagement and Redispatch" },
  { type: "paragraph", text: "Grid operators can reduce a plant's output. Operators need to see when that happened, so curtailed energy is not mistaken for a fault." },
  { type: "heading", text: "Many brands, one view" },
  { type: "list", items: [
    "Read every inverter brand in one platform, not one portal per brand.",
    "Group sites into portfolio dashboards by owner, region or type.",
    "Produce reports on a schedule.",
    "Export the data through an API for your own tools.",
  ] },
  { type: "rich", parts: [
    "AMMP covers multi-brand integration, portfolio dashboards, reporting and Data API export. See ",
    { a: "integrations", href: "/integrations" },
    " and the ",
    { a: "multi-brand monitoring checklist", href: "/blog/multi-brand-solar-monitoring-checklist" },
    ".",
  ] },
];

// ---------- 6) UK checklist ----------
export const UK_STEPS: [string, string, string, string, string] = [
  "Step 1: Check brand and battery coverage",
  "Step 2: Check multi-client access",
  "Step 3: Check alerting",
  "Step 4: Check investor reporting",
  "Step 5: Check data access and security",
];

export const ukBody: BlogBlock[] = [
  { type: "paragraph", text: "UK portfolios often combine commercial rooftop solar, battery storage and many client sites run by one installer or O&M company. Use this checklist to evaluate monitoring platforms for that mix." },
  { type: "heading", text: UK_STEPS[0] },
  { type: "list", items: [
    "Are all your inverter and battery brands supported in one view?",
    "Can you see battery state of charge and charge and discharge patterns per site?",
    "Is a datalogger needed, or does it connect through cloud APIs?",
  ] },
  { type: "heading", text: UK_STEPS[1] },
  { type: "list", items: [
    "Can each client see only their own sites?",
    "Can you group sites by client and by portfolio?",
  ] },
  { type: "heading", text: UK_STEPS[2] },
  { type: "list", items: [
    "Can alerts be tuned per site?",
    "Do alerts reach Microsoft Teams, Slack, email or webhooks?",
    "Are repeat alarms grouped, so the team is not flooded?",
  ] },
  { type: "heading", text: UK_STEPS[3] },
  { type: "list", items: [
    "Can it send investor reports on a schedule, with your branding?",
    "Are KPIs calculated the same way for every site?",
  ] },
  { type: "heading", text: UK_STEPS[4] },
  { type: "list", items: [
    "Is there an open API, bulk export and an MCP server?",
    "Which security certification does the vendor hold?",
  ] },
  { type: "rich", parts: [
    "AMMP answers yes to these questions, with 30+ integrations, alerts to Microsoft Teams, Slack, email or webhooks, scheduled reports and ISO/IEC 27001:2022 certification. For batteries, see the ",
    { a: "BESS monitoring software comparison", href: "/compare/best-bess-monitoring-software" },
    ". For brands, see the ",
    { a: "multi-brand monitoring checklist", href: "/blog/multi-brand-solar-monitoring-checklist" },
    ".",
  ] },
];
