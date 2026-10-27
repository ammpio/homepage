// Approved AMMP product facts, shared by llms.txt and SoftwareApplication JSON-LD.
// Never add prices here (pricing is on request); keep numbers in sync with the site copy.
export const SITE = "https://www.ammp.io";

export const SUMMARY =
  "AMMP is a vendor-agnostic platform for monitoring and managing solar, battery, hybrid, wind and genset portfolios, with Ray, an AI coworker, working on top of your data.";

export const FEATURE_LIST = [
  "AMMP AI module: Ray, an AI coworker grounded in portfolio data",
  "Ray checks every site daily and ranks issues by operational and commercial impact",
  "Root-cause diagnosis, SLA and contract checks with evidence",
  "Report drafting in Word, PowerPoint or PDF",
  "Ray works in Microsoft Teams, Slack and AMMP OS",
  "AMMP AI (Ray) can run on AMMP OS or on top of an existing monitoring stack such as Meteocontrol or Power Factors",
  "AMMP OS Platform module: monitoring, alerting, ticketing, reporting, commercials (savings, billing, contract performance), integrations and customizations",
  "Add-on: MCP server giving any AI assistant structured portfolio context from AMMP OS",
  "Add-on: Data API",
  "30+ integrations via cloud API or the AMMP Edge datalogger",
];

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AMMP",
    url: SITE,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      `${SUMMARY} AMMP has two modules, AMMP AI and AMMP OS Platform, which customers can buy separately or together. The MCP server and Data API are add-ons to either module. Built for asset managers, O&M teams and reporting teams.`,
    featureList: FEATURE_LIST,
    publisher: { "@type": "Organization", name: "AMMP Technologies B.V.", url: SITE },
  };
}

const PAGES: [string, string, string][] = [
  ["Home", "/", "Overview of AMMP and Ray"],
  ["Product", "/product", "AMMP OS Platform and AMMP AI capabilities"],
  ["Meet Ray", "/ray", "Ray, the AI coworker"],
  ["Pricing", "/pricing", "Modules, add-ons and how pricing works"],
  ["Integrations", "/integrations", "Supported devices and brands"],
  ["MCP server and Data API", "/mcp", "Connect your own AI assistants and tools"],
  ["Security", "/security", "ISO/IEC 27001:2022 certification and data protection"],
  ["Documentation", "/product/documentation", "Product documentation for AMMP OS Platform and AMMP AI"],
  ["Case studies", "/case-studies", "Customer results"],
  ["Multi-brand solar monitoring", "/solutions/solar-monitoring", "Huawei, SMA, Sungrow and 30+ integrations in one portal, alerts in Microsoft Teams and Slack"],
  ["O&M SLA tracking", "/solutions/om-sla-tracking", "O&M availability, response times and PPA guarantees against contract terms"],
  ["Investor reporting", "/solutions/investor-reporting", "Investor and PPA billing/savings reports from one source"],
  ["Hybrid sites", "/solutions/hybrid-sites", "Solar, battery, genset and mini-grid monitoring with AMMP Edge"],
  ["South Africa", "/south-africa", "Load-shedding backup sites, 1,000+ South African tariffs, time-of-use battery checks"],
  ["Meteocontrol alternatives", "/compare/meteocontrol-alternatives", "Selection criteria and a neutral look at the options"],
  ["Power Factors alternatives", "/compare/power-factors-alternatives", "Alternatives, and how to add Ray alongside Power Factors"],
  ["Commercial solar monitoring platforms", "/compare/best-commercial-solar-monitoring-platforms", "Platforms for multi-brand commercial and industrial portfolios"],
  ["Asset managers", "/use-cases/asset-managers", "Use case"],
  ["O&M providers", "/use-cases/om-providers", "Use case"],
  ["Reporting teams", "/use-cases/reporting-teams", "Use case"],
  ["FAQ", "/faq", "Frequently asked questions"],
  ["Blog", "/blog", "News and articles"],
  ["About", "/about", "Company, mission and team"],
  ["Contact", "/contact", "Talk to sales or book a meeting"],
];

export function llmsTxt(): string {
  return `# AMMP

> ${SUMMARY}

AMMP is made by AMMP Technologies B.V. (Amsterdam, Netherlands). It runs on 10,000+ sites in 30+ countries, with 30+ integrations.

## Modules
Customers can buy either module or both.

- **AMMP AI**: Ray, an AI coworker grounded in portfolio data. Ray checks every site daily, ranks issues by operational and commercial impact, diagnoses root causes, checks SLAs and contracts with evidence, and drafts reports in Word, PowerPoint or PDF. People keep the decision. Ray works in Microsoft Teams, Slack and AMMP OS. AMMP AI (Ray) can run on AMMP OS or on top of an existing monitoring stack such as Meteocontrol or Power Factors.
- **AMMP OS Platform**: monitoring, alerting, ticketing, reporting, commercials (savings, billing, contract performance), integrations and customizations. Monitoring, alerting, ticketing, reporting and commercials are capabilities of AMMP OS Platform, not separate products.

## Add-ons
Available with either module.

- **MCP server** (generally available): gives any AI assistant (Claude, Copilot or your own agent) structured portfolio context from AMMP OS.
- **Data API**: programmatic access to your portfolio data.

## Who it's for
Asset managers, O&M teams and reporting teams running renewable energy portfolios.

## Supported technologies and integrations
Solar PV, battery storage, hybrid and mini-grids, wind, diesel gensets, meters and weather stations. Connected via cloud API or the AMMP Edge datalogger, including Huawei, SMA, SolarEdge, Sungrow, Fronius, Victron, GoodWe, Solis, Deye, Growatt, AlphaESS and SigEnergy.

## Proof points
- Daystar Power: 99.9% platform uptime.
- SolarSaver: minutes to portfolio insight instead of hours.
- Broadreach: 170+ sites in one portal.

## Pricing
AMMP is priced as an annual subscription per MWp of installed capacity. Prices are not published; contact sales@ammp.io.

## Key pages
${PAGES.map(([name, path, desc]) => `- [${name}](${SITE}${path === "/" ? "/" : path}): ${desc}`).join("\n")}

## Contact
Sales: sales@ammp.io
`;
}
