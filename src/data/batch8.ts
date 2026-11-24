// FAQs and comparison data for the 24 November 2026 AI-visibility batch.
import type { FaqItem } from "./faq";
import { AMMP, BAZEFIELD, DNV, GREENPOWERMONITOR, METEOCONTROL, POWER_FACTORS, QOS, THREE_E, VENDOR_PORTALS, type Alternative } from "./alternatives";

export const WAREHOUSE_FAQ: FaqItem[] = [
  { q: "Does AMMP have an API for solar monitoring data?", a: "Yes. The AMMP Data API is a REST API. You create an API key, request a token from the token endpoint, then call the data endpoints listed in the Data API docs." },
  { q: "How often should I load data into my warehouse?", a: "Daily suits most portfolio reporting. Load only new data after the first full load, with a short overlap for late data." },
  { q: "When should I use the MCP server instead?", a: "Use the MCP server for one-off questions from AI assistants such as Claude or ChatGPT. Use the warehouse for planned analytics and long history." },
];

export const RFP_FAQ: FaqItem[] = [
  { q: "What should an O&M provider ask in a monitoring software RFP?", a: "Ask about multi-owner access, multi-brand integrations, alarm handling, SLA tracking, branded reports per owner, data export and API, security, onboarding and migration, and support." },
  { q: "Does AMMP support reports with my company's branding?", a: "Yes. AMMP puts your branding on reports." },
  { q: "Which security certification does AMMP hold?", a: "AMMP holds ISO/IEC 27001:2022 certification." },
];

export const P50_FAQ: FaqItem[] = [
  { q: "What is the difference between P50 and P90?", a: "P50 is the annual energy a plant is expected to exceed in half of all years. P90 is the level it should exceed in nine years out of ten." },
  { q: "Why does my plant produce less than the P50 estimate?", a: "Common reasons are lower irradiance than the long-term average, downtime, degradation, curtailment and soiling. Separate weather-driven shortfalls from plant faults before acting." },
  { q: "Does AMMP import P50 budgets from yield reports?", a: "Yes. Each site has a target yield, usually taken from the PVsyst simulation in the yield report, set under Target Yield at daily or monthly resolution. AMMP then reports the yield target ratio (actual energy ÷ target yield) and splits the gap into irradiance underperformance (actual irradiance vs the simulation) and remaining loss (plant issues)." },
];

export const BRAZIL_FAQ: FaqItem[] = [
  { q: "Why does an open API matter for investors in distributed generation?", a: "An open API and bulk export mean the investor can take all its data out at any time, whatever platform or O&M contractor runs the plants." },
  { q: "Does AMMP have an open API?", a: "Yes. AMMP gives access to data through the API, MCP server and Export Center." },
  { q: "How does AMMP compare to PV Operation?", a: "PV Operation is a Brazilian provider focused on distributed generation plants, with SCADA as a service, a local SCADA option and an operations center. AMMP is a vendor-agnostic cloud platform. See the full comparison on AMMP vs PV Operation." },
];

export const GERMANY_FAQ: FaqItem[] = [
  { q: "Can I monitor several inverter brands in one view in Germany?", a: "Yes. A vendor-neutral platform such as AMMP reads each brand through its cloud API or a datalogger, with 30+ integrations." },
  { q: "What data does direct marketing need?", a: "Metered energy and schedules per plant. Clean energy data per plant helps operators check settlements with their direct marketer." },
  { q: "Why do I need to see curtailment?", a: "So energy lost to Einspeisemanagement or Redispatch is not mistaken for a fault on the plant." },
];

export const UK_FAQ: FaqItem[] = [
  { q: "What should a UK installer look for in a monitoring platform?", a: "One view across inverter and battery brands, access per client, tuned alerts, scheduled investor reports, an open API and a named security certification." },
  { q: "Does AMMP monitor battery storage?", a: "Yes. AMMP supports battery storage and hybrid systems, and Ray checks each battery's charging and discharging against the site's time-of-use tariff." },
  { q: "Where do AMMP alerts go?", a: "To Microsoft Teams, Slack, email or webhooks." },
];

// ---------- /compare/best-renewable-portfolio-management-software-europe ----------
export const EUROPE_CRITERIA = [
  { title: "Brand coverage", text: "Does it read every inverter, battery, meter and genset in your portfolio, through cloud APIs or a datalogger?" },
  { title: "KPI consistency", text: "Are performance ratio, availability and yield calculated the same way across every brand?" },
  { title: "Portfolio views", text: "Can you see sites, sub-portfolios and the whole portfolio in one place, across countries?" },
  { title: "Reporting", text: "Can it produce investor, PPA and O&M reports on a schedule, with your branding?" },
  { title: "SLA and contract tracking", text: "Can it check O&M availability, response times and performance guarantees against the contract?" },
  { title: "Data access", text: "Is there an open API, bulk export and an MCP server so your own tools and AI assistants can use the data?" },
];
export const EUROPE_OPTIONS: Alternative[] = [AMMP, POWER_FACTORS, METEOCONTROL, BAZEFIELD, THREE_E, DNV, GREENPOWERMONITOR];
export const EUROPE_FAQ: FaqItem[] = [
  { q: "What is renewable portfolio management software?", a: "Software that brings monitoring, KPIs, reporting and contract tracking for many renewable sites into one place." },
  { q: "Which platforms are used in Europe?", a: "Options include Power Factors, Meteocontrol, Bazefield, 3E, DNV, GreenPowerMonitor and AMMP. The right one depends on your portfolio and brands." },
  { q: "How big is AMMP?", a: "AMMP runs on 10,000+ sites in 30+ countries, with 30+ integrations." },
];

// ---------- /compare/solar-wind-battery-single-platform ----------
export const MIXED_CRITERIA = [
  { title: "Technology coverage", text: "Does it support every technology you own, such as solar, wind and battery storage, in one data model?" },
  { title: "Brand coverage", text: "Does it read every brand in the portfolio, through cloud APIs or a datalogger?" },
  { title: "Comparable KPIs", text: "Are availability and other KPIs calculated the same way for every site, so you can compare them?" },
  { title: "One portfolio view", text: "Can you see every site, whatever the technology, in one portfolio dashboard?" },
  { title: "Reporting", text: "Can it produce investor, PPA and O&M reports on a schedule?" },
  { title: "Data access", text: "Is there an open API, bulk export and an MCP server?" },
];
export const MIXED_OPTIONS: Alternative[] = [AMMP, BAZEFIELD, QOS, POWER_FACTORS, VENDOR_PORTALS];
export const MIXED_FAQ: FaqItem[] = [
  { q: "Can one platform monitor solar, wind and batteries?", a: "Yes, several platforms cover more than one technology. Check that each technology you own is supported in one data model, with the same KPIs." },
  { q: "Does AMMP support wind?", a: "Yes. AMMP is a vendor-agnostic platform for monitoring and managing solar, battery, hybrid, wind and genset portfolios." },
  { q: "What else does AMMP support?", a: "Solar PV, battery storage, hybrid systems and mini-grids, wind, diesel gensets, meters and weather stations." },
];
