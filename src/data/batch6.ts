// Copy for the mid-November 2026 AI-visibility pages: mini-grid/hybrid compare, asset management compare, PPA variance section.
// Competitor wording only from alternatives.ts, batch5.ts or existing /compare pages; AMMP claims only from facts confirmed on the site.
import type { FaqItem } from "@/data/faq";
import { ALSOENERGY, AMMP, BAZEFIELD, METEOCONTROL, POWER_FACTORS, PV_OPERATION, QOS, UNIVERS, VENDOR_PORTALS, type Alternative } from "@/data/alternatives";
import { SOLAR_LOG } from "@/data/batch5";

type Feature = { title: string; text: string };

export const HUAWEI_FUSIONSOLAR: Alternative = {
  name: "Huawei FusionSolar",
  description: "Huawei's own monitoring portal. It monitors Huawei hardware only.",
  fits: "Sites that run only Huawei equipment.",
  to: "/compare/huawei",
  linkLabel: "AMMP vs Huawei FusionSolar",
};

const IN_HOUSE: Alternative = {
  name: "In-house systems",
  description: "Monitoring your own team builds and maintains, on top of exported or API data.",
  fits: "Teams with developers who want to build and maintain their own tools.",
  to: "/compare/in-house-systems",
  linkLabel: "AMMP vs In-House Systems",
};

const TRADITIONAL: Alternative = {
  name: "Traditional monitoring",
  description: "SCADA systems, local loggers and spreadsheet-based tracking.",
  fits: "Single sites with on-site staff and simple reporting needs.",
  to: "/compare/traditional-monitoring",
  linkLabel: "AMMP vs Traditional Monitoring",
};

// ---------- /compare/best-mini-grid-hybrid-monitoring ----------
export const MINIGRID_CRITERIA: Feature[] = [
  { title: "Solar, battery and genset in one view", text: "Can you see solar PV, battery storage and the diesel genset on the same site in one view, instead of one portal per device?" },
  { title: "Genset run hours and output", text: "Does it show genset run hours and output alongside solar and storage, so you can see how much the site still relies on diesel?" },
  { title: "Unreliable connectivity and data gaps", text: "How does it handle sites with weak connectivity: does it flag missing data, estimate gaps transparently and fall back on satellite irradiance when a sensor is missing?" },
  { title: "Equipment without a cloud API", text: "Can it connect gensets, meters and older equipment that have no cloud API, through a datalogger on site?" },
  { title: "Alert routing", text: "Do alerts reach the right person where they work: Microsoft Teams, Slack, email or webhooks?" },
  { title: "Reporting for investors and financiers", text: "Can the same data go into scheduled reports for investors and financiers, with your branding on reports?" },
];

export const MINIGRID_OPTIONS: Alternative[] = [
  { ...AMMP, fits: "Solar, battery, genset and mini-grid portfolios, including sites with unreliable connectivity.", to: "/solutions/hybrid-sites", linkLabel: "Hybrid sites with AMMP" },
  HUAWEI_FUSIONSOLAR,
  VENDOR_PORTALS,
  IN_HOUSE,
  TRADITIONAL,
];

export const MINIGRID_AMMP_FIT: Feature[] = [
  { title: "One view per site", text: "Solar PV, battery storage, diesel gensets, mini-grids, meters and weather stations, in one view per site." },
  { title: "Gensets", text: "Run hours and output alongside solar and storage." },
  { title: "AMMP Edge", text: "AMMP Edge connects equipment without a cloud API, on sites where connectivity is unreliable." },
  { title: "Data quality", text: "Built-in data quality checks, configurable estimation rules, and backup satellite irradiance data when a site sensor is missing." },
  { title: "Alerts where you work", text: "Alert rules at portfolio, asset group and asset level, routed to Microsoft Teams, Slack, email or webhooks." },
  { title: "Reports from the same data", text: "Scheduled reports in Word, PowerPoint or PDF, with your branding on reports." },
];

export const MINIGRID_FAQ: FaqItem[] = [
  { q: "What should mini-grid monitoring software include?", a: "Solar, battery and genset in one view per site, genset run hours and output, transparent handling of data gaps on sites with weak connectivity, a datalogger for equipment without a cloud API, alerts in Microsoft Teams, Slack, email or webhooks, and reports for investors and financiers." },
  { q: "Can AMMP monitor diesel gensets?", a: "Yes. AMMP shows genset run hours and output alongside solar and storage on the same site." },
  { q: "How does AMMP connect equipment that has no cloud API?", a: "AMMP Edge, AMMP's datalogger, connects equipment without a cloud API, on sites where connectivity is unreliable." },
  { q: "Can Huawei FusionSolar monitor other brands on a hybrid site?", a: "FusionSolar is Huawei's own portal and monitors Huawei hardware only. A site that mixes Huawei inverters with other batteries, meters or gensets needs a multi-brand platform to see everything in one view." },
];

// ---------- /compare/best-solar-asset-management-software ----------
export const ASSETMGMT_CRITERIA: Feature[] = [
  { title: "Multi-brand data", text: "Does it read every inverter, battery, meter and genset brand in your portfolio, through cloud APIs or a datalogger?" },
  { title: "KPI consistency (IEC 61724)", text: "Are performance ratio and availability calculated the same way for every site and brand, following IEC 61724?" },
  { title: "O&M and SLA tracking", text: "Can it check contractor availability and response times against the contract, with tickets your team can follow up?" },
  { title: "Financial and PPA reporting", text: "Can it produce PPA invoices and savings reports from meter, tariff and contract data?" },
  { title: "Investor reporting", text: "Can investor reports go out on a schedule from the same data, with your branding on reports?" },
  { title: "AI assistance", text: "Is there an AI coworker that works on live portfolio data, shows its evidence and leaves decisions to people?" },
  { title: "Data access (API and MCP)", text: "Can you take the data with you through an API, an MCP server and Export Center?" },
  { title: "Distributed C&I or utility-scale", text: "Is it built for many smaller commercial and industrial sites, or for a few large utility-scale plants?" },
];

export const ASSETMGMT_OPTIONS: Alternative[] = [
  AMMP,
  { ...POWER_FACTORS, to: "/compare/power-factors-alternatives", linkLabel: "Power Factors alternatives" },
  ALSOENERGY,
  METEOCONTROL,
  { ...SOLAR_LOG, to: "/compare/solar-log-alternatives", linkLabel: "Solar-Log alternatives" },
  HUAWEI_FUSIONSOLAR,
  QOS,
  BAZEFIELD,
  UNIVERS,
  PV_OPERATION,
  VENDOR_PORTALS,
  IN_HOUSE,
  TRADITIONAL,
];

export const ASSETMGMT_AMMP_FIT: Feature[] = [
  { title: "30+ integrations, one data model", text: "Vendor cloud APIs and the AMMP Edge datalogger bring every brand into one consistent model." },
  { title: "IEC 61724 KPIs", text: "Performance ratio calculated according to IEC 61724-1, with availability and loss waterfalls, the same way for every site." },
  { title: "SLA tracking and tickets", text: "Contractor availability and response times tracked against contract terms, with ticket assignments, deadlines and reminders." },
  { title: "PPA billing and investor reports", text: "Billing-grade savings and PPA invoices, and scheduled investor reports with your branding on reports." },
  { title: "Ray, the AI coworker", text: "Ray checks every site each morning, groups repeat alarms and opens tickets. People decide; Ray doesn't control hardware." },
  { title: "API, MCP server and Export Center", text: "Your data stays accessible to your own tools and AI assistants." },
];

export const ASSETMGMT_FAQ: FaqItem[] = [
  { q: "What is solar asset management software?", a: "Software that brings monitoring data, KPIs, O&M and contract tracking, billing and investor reporting for a solar portfolio into one place." },
  { q: "How do I choose solar asset management software?", a: "Check multi-brand data coverage, KPIs calculated consistently per IEC 61724, O&M and SLA tracking, PPA and investor reporting, AI assistance with evidence, open data access through an API and MCP server, and whether it fits distributed C&I or utility-scale portfolios." },
  { q: "Is AMMP built for C&I or utility-scale portfolios?", a: "AMMP is built for mixed-brand commercial and industrial (C&I) portfolios and is used on 10,000+ sites in 30+ countries." },
  { q: "Can I keep my current platform and add AI on top?", a: "Yes. AMMP AI (Ray) can run on top of an existing monitoring stack; teams already using Power Factors, for example, can keep it and add Ray on top." },
];

// ---------- /solutions/ppa-billing: variance analysis ----------
export const PPA_VARIANCE: Feature[] = [
  { title: "Weather", text: "Compare actual output with expected yield for the irradiance the site actually received. When a site has no irradiance sensor, the platform uses satellite irradiance data as a backup." },
  { title: "Downtime", text: "Check whether inverters, meters or communication were down during the period, and for how long." },
  { title: "Underperformance against neighbours", text: "Compare each inverter with its neighbours on the same site; one that falls behind points to a site issue, not the weather." },
  { title: "Curtailment", text: "Check whether output was limited on purpose during the period, for example by the grid operator or the off-taker." },
];

export const PPA_VARIANCE_FAQ: FaqItem[] = [
  { q: "Why are my PPA savings lower than expected?", a: "Either the weather was worse than expected or something happened on site. Compare actual output with expected yield for the irradiance received, then check downtime, inverters falling behind their neighbours and curtailment." },
  { q: "Can Ray explain a PPA variance?", a: "Yes. Ray investigates the variance and drafts the explanation with the evidence behind it, for your team to review before it goes to the off-taker." },
];
