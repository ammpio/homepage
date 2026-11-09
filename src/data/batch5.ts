// Copy for the November 2026 AI-visibility pages: Solar-Log alternatives, BESS, PPA billing, benchmarking and AI tools.
// Competitor wording only from alternatives.ts or neutral categories; AMMP claims only from facts confirmed on the site.
import type { FaqItem } from "@/data/faq";
import { ALSOENERGY, AMMP, METEOCONTROL, VENDOR_PORTALS, type Alternative } from "@/data/alternatives";

type Feature = { title: string; text: string };

// ---------- /compare/solar-log-alternatives ----------
export const SOLAR_LOG: Alternative = {
  name: "Solar-Log",
  description: "An on-site datalogger and monitoring solution, widely used, with the Solar-Log WEB portal.",
  fits: "Sites built around a Solar-Log datalogger.",
};

export const SOLAR_LOG_OPTIONS: Alternative[] = [AMMP, SOLAR_LOG, METEOCONTROL, ALSOENERGY, VENDOR_PORTALS];

export const SOLAR_LOG_FAQ: FaqItem[] = [
  { q: "What is Solar-Log?", a: "Solar-Log is an on-site datalogger and monitoring solution, widely used, with the Solar-Log WEB portal." },
  { q: "Can AMMP read data from Solar-Log dataloggers?", a: "Solar-Log is one of AMMP's 30+ integrations, so sites with a Solar-Log datalogger can be monitored in AMMP alongside other brands." },
  { q: "What should a multi-site portfolio look for in a Solar-Log alternative?", a: "Coverage of every brand in the portfolio, KPIs calculated the same way for every site, alerts that reach the team in Microsoft Teams, Slack, email or webhooks, scheduled reports, and data access through an API, an MCP server and exports." },
];

// ---------- /compare/best-bess-monitoring-software ----------
export const BESS_CRITERIA: Feature[] = [
  { title: "State of charge and charging", text: "Does it show each battery's state of charge, charging and discharging, per site and across the portfolio?" },
  { title: "Battery and inverter brands", text: "Does it connect the battery and inverter brands you run, through cloud APIs or a datalogger on site?" },
  { title: "Solar, battery and genset in one view", text: "Can you see solar, battery and diesel genset on the same site in one view, instead of one portal per device?" },
  { title: "Time-of-use and tariff checks", text: "Can it check charging and discharging against the site's time-of-use tariff, so you see sites that charge or discharge in the wrong window?" },
  { title: "Alert routing", text: "Do battery alerts reach the right person where they work: Microsoft Teams, Slack, email or webhooks?" },
  { title: "Reporting", text: "Can battery performance go into scheduled client and investor reports from the same data?" },
];

export const BESS_OPTIONS: Alternative[] = [
  AMMP,
  {
    name: "Battery and inverter vendor portals",
    description: "Each battery or inverter brand's own portal, such as Victron VRM or Huawei FusionSolar.",
    fits: "Single-brand portfolios that only need that brand's data.",
    to: "/compare/vendor-portals",
    linkLabel: "AMMP vs Manufacturer Portals",
  },
  {
    name: "In-house dashboards",
    description: "Dashboards your own team builds on top of exported or API data.",
    fits: "Teams with developers who want to build and maintain their own tools.",
    to: "/compare/in-house-systems",
    linkLabel: "AMMP vs In-House Systems",
  },
];

export const BESS_AMMP_FIT: Feature[] = [
  { title: "Battery analytics dashboards", text: "State of charge, charging and discharging for every battery, in battery analytics dashboards." },
  { title: "Battery brands on /integrations", text: "Victron, Huawei, AlphaESS, APSystems, FreedomWon, Ingeteam, Ageto and SolarMD, among 30+ integrations." },
  { title: "Hybrid sites in one view", text: "Solar, battery, genset and mini-grid on one site, with the AMMP Edge datalogger where there is no cloud API." },
  { title: "Time-of-use battery checks", text: "Ray checks each battery's charging and discharging against the site's time-of-use tariff and flags sites that lost money to the wrong window." },
  { title: "Alerts where you work", text: "Alerts go to Microsoft Teams, Slack, email or webhooks." },
  { title: "Reports from the same data", text: "Scheduled reports in Word, PowerPoint or PDF, with your branding on reports." },
];

export const BESS_FAQ: FaqItem[] = [
  { q: "What is BESS monitoring software?", a: "Software that collects data from battery energy storage systems and shows state of charge, charging and discharging, alerts and reports, ideally next to the solar and genset data from the same site." },
  { q: "Which battery brands does AMMP support?", a: "Battery integrations listed on the AMMP integrations page include Victron, Huawei, AlphaESS, APSystems, FreedomWon, Ingeteam, Ageto and SolarMD." },
  { q: "Can AMMP check batteries against time-of-use tariffs?", a: "Yes. Ray checks each battery's charging and discharging against the site's time-of-use tariff and flags sites that lost money to the wrong window." },
];

// ---------- /solutions/ppa-billing ----------
export const PPA_FEATURES: Feature[] = [
  { title: "Billing-grade savings and invoices", text: "Savings and PPA invoices calculated from meter, tariff and contract data, ready for the off-taker." },
  { title: "Tariff database", text: "Grid and PPA tariffs, fixed and time-of-use, including demand charges. In South Africa alone the database covers 1,000+ tariffs." },
  { title: "Every tariff and contract", text: "All grid tariff structures are supported and compatible with all contractual arrangements." },
  { title: "Monthly data freeze", text: "Data for the billing month is frozen, so an invoice never changes after it is sent." },
  { title: "Estimation rules and data-quality flags", text: "Built-in data quality checks, configurable estimation rules, and backup satellite irradiance data when a site sensor is missing. Estimated values are flagged." },
  { title: "Scheduled delivery with your branding", text: "Billing and savings reports go out automatically on the schedule you set, with your branding on reports." },
];

export const PPA_FAQ: FaqItem[] = [
  { q: "How does AMMP calculate PPA invoices?", a: "From meter data, the tariff assigned to each site and the contract terms. All grid tariff structures are supported and compatible with all contractual arrangements." },
  { q: "What happens when meter data is missing?", a: "AMMP OS uses built-in data quality checks, configurable estimation rules, and backup satellite irradiance data when a site sensor is missing. Estimated values are flagged in the report." },
  { q: "Can an invoice change after it is sent?", a: "No. A monthly data freeze locks the billing month's data, so the invoice and its backup stay the same." },
];

// ---------- /compare/best-ppa-billing-software ----------
export const PPA_CRITERIA: Feature[] = [
  { title: "Tariff coverage", text: "Does it handle every grid tariff structure and contract type in your portfolio, including time-of-use and demand charges?" },
  { title: "Metered, auditable numbers", text: "Can every invoice line be traced back to meter data, the tariff and the contract?" },
  { title: "Data quality handling", text: "How does it handle missing data, and does the invoice say which values were estimated?" },
  { title: "Billing period lock", text: "Is the billing month frozen once invoiced, so numbers don't change afterwards?" },
  { title: "Client-facing reports", text: "Can savings and invoices go to clients on a schedule, with your branding on reports?" },
  { title: "Data access", text: "Can you take the data with you through an API, an MCP server and exports?" },
];

export const PPA_OPTIONS: Alternative[] = [
  { ...AMMP, fits: "C&I portfolios that want billing, savings and performance reports from the same data as monitoring.", to: "/solutions/ppa-billing", linkLabel: "PPA billing with AMMP" },
  {
    name: "Spreadsheets and ERP billing",
    description: "Meter readings exported from monitoring and invoiced in spreadsheets or an ERP system.",
    fits: "Small portfolios with simple tariffs and a team that maintains the workbook.",
  },
  VENDOR_PORTALS,
];

export const PPA_COMPARE_FAQ: FaqItem[] = [
  { q: "What is PPA billing software?", a: "Software that turns meter data, tariffs and contract terms into PPA invoices and savings reports for each off-taker." },
  { q: "What should C&I solar PPA billing software include?", a: "Coverage of every tariff and contract type, invoices traceable to meter data, clear handling of estimated values, a locked billing period, scheduled client reports and open data access." },
];

// ---------- /solutions/portfolio-benchmarking ----------
export const BENCH_FEATURES: Feature[] = [
  { title: "One data model across brands", text: "30+ integrations land in one consistent model, so an inverter from one brand can be compared with its neighbour from another." },
  { title: "Performance ratio per IEC 61724", text: "PR calculated according to IEC 61724-1, weather-corrected or not, the same way for every site." },
  { title: "Availability", text: "Availability as a named KPI alongside PR and loss waterfalls." },
  { title: "Loss waterfall", text: "Every timestamp is classified by loss type, shown in waterfall and Sankey charts." },
  { title: "Dashboards at every level", text: "Portfolio, sub-portfolio, site and device dashboards." },
  { title: "Energy-weighted aggregation", text: "Portfolio KPIs are energy-weighted, so a small site can't distort the portfolio figure." },
];

export const BENCH_FAQ: FaqItem[] = [
  { q: "How do I compare solar sites with different inverter brands?", a: "Bring every brand into one data model and calculate KPIs such as performance ratio and availability the same way for every site. AMMP has 30+ integrations and calculates PR according to IEC 61724-1." },
  { q: "Why should portfolio PR be energy-weighted?", a: "A simple average treats a small site the same as a large one. An energy-weighted figure reflects how much energy the portfolio actually produced against what it could have." },
];

// ---------- /compare/best-ai-tools-solar-asset-managers ----------
export const AI_CATEGORIES: Alternative[] = [
  {
    name: "AI agents in operations",
    description: "An AI coworker that works on live portfolio data every day, such as Ray (AMMP AI). Ray checks every site each morning, groups repeat alarms and opens tickets. People decide; Ray doesn't control hardware.",
    fits: "Teams that want daily checks and prepared work, with the decision kept by people.",
    to: "/ray",
    linkLabel: "Meet Ray",
  },
  {
    name: "AI features inside monitoring platforms",
    description: "AI functions built into a monitoring platform, working on that platform's own data.",
    fits: "Teams whose whole portfolio already runs on one platform.",
  },
  {
    name: "General assistants via MCP",
    description: "General AI assistants such as Claude and ChatGPT, connected to portfolio data through an MCP server.",
    fits: "Analysts who want to ask their own questions in the assistant they already use.",
    to: "/mcp",
    linkLabel: "About the MCP server",
  },
  {
    name: "Analytics and forecasting tools",
    description: "Separate tools for analysis, modelling or forecasting, fed with exported data.",
    fits: "Specialist analysis that sits outside daily operations.",
  },
];

export const AI_CRITERIA: Feature[] = [
  { title: "Works on live portfolio data", text: "Does it read current data from every site and brand, or only an export from last month?" },
  { title: "Evidence per finding", text: "Does every answer show its sources, so you can check the working before you act?" },
  { title: "Human approval", text: "Do people approve tickets, reports and messages before anything goes out?" },
  { title: "Permissions", text: "Does it only see what the person asking is allowed to see?" },
  { title: "Where it runs", text: "Does it work where your team already works: Microsoft Teams, Slack or the monitoring platform?" },
];

export const AI_AMMP_FIT: Feature[] = [
  { title: "Live data from 10,000+ sites", text: "Ray sits on AMMP's vendor-agnostic data layer, with telemetry from 10,000+ sites in 30+ countries." },
  { title: "Sources on every answer", text: "Every answer shows its sources, so you can check the working before you act on it." },
  { title: "People decide", text: "Ray investigates, prioritises and prepares the work. Your team stays in charge of the decisions." },
  { title: "Same permissions as AMMP OS", text: "Ray only sees what the person asking is allowed to see." },
  { title: "Teams, Slack and AMMP OS", text: "Ray works in Microsoft Teams, Slack and AMMP OS. Claude and ChatGPT can connect through the AMMP MCP server." },
];

export const AI_FAQ: FaqItem[] = [
  { q: "What is the best AI tool for solar asset managers?", a: "It depends on the job. AI agents such as Ray handle daily checks and prepared work, general assistants such as Claude and ChatGPT answer ad-hoc questions through an MCP server, and analytics tools cover specialist modelling. Check each against live data, evidence, human approval, permissions and where it runs." },
  { q: "Can ChatGPT or Claude read my solar monitoring data?", a: "Yes, through an MCP server. The AMMP MCP server gives assistants such as Claude and ChatGPT permissioned access to normalised portfolio data." },
  { q: "Does Ray control my inverters or batteries?", a: "No. Ray doesn't control hardware. He checks sites, groups repeat alarms and opens tickets, and people decide what happens next." },
];
