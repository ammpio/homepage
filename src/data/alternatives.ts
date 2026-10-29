// Neutral platform descriptions for the alternatives and "best platforms" pages.
// Only facts already stated on our /compare pages. Power Factors has no /compare page: keep it neutral, no feature claims.
import type { LinkProps } from "@tanstack/react-router";
export type Alternative = { name: string; description: string; fits: string; to?: LinkProps["to"]; multiBrand?: string; linkLabel?: string };

export const METEOCONTROL: Alternative = {
  name: "Meteocontrol",
  description: "An established, hardware-linked monitoring solution with a long track record in solar.",
  fits: "Solar portfolios that already run on Meteocontrol hardware and want a proven, long-standing setup.",
  to: "/compare/meteocontrol",
  multiBrand: "Hardware-linked: strongest where sites run on Meteocontrol hardware; our comparison rates its hardware independence as partial.",
};

export const POWER_FACTORS: Alternative = {
  name: "Power Factors",
  description: "Renewable asset performance management software.",
  fits: "Teams already using it can keep it and add AMMP AI (Ray) on top.",
  multiBrand: "Renewable asset performance management software; we have not published details of its brand coverage.",
};

export const ALSOENERGY: Alternative = {
  name: "AlsoEnergy PowerTrack",
  description: "Monitoring and reporting for solar and storage portfolios with a widely deployed, standardized feature set.",
  fits: "Portfolios whose requirements fit a standard template.",
  to: "/compare/ammp-vs-alsoenergy",
  multiBrand: "Gateway-focused: data collection centred on its own hardware and dataloggers.",
};

export const QOS: Alternative = {
  name: "QOS Energy",
  description: "A comprehensive asset performance management platform, primarily focused on utility-scale wind and solar projects.",
  fits: "Utility-scale wind and solar operators.",
  to: "/compare/qos-energy",
  multiBrand: "Hardware-independent monitoring, primarily for utility-scale wind and solar projects.",
};

export const BAZEFIELD: Alternative = {
  name: "Bazefield",
  description: "A SCADA and operations management platform supporting solar, wind, storage and hydro, with particular strength in utility-scale projects that need advanced control.",
  fits: "Utility-scale projects that need SCADA-level control.",
  to: "/compare/bazefield",
};

export const UNIVERS: Alternative = {
  name: "Univers (EnOS)",
  description: "One of the world's largest energy IoT platforms, serving major utilities, enterprises and governments with AI-powered optimization and carbon management.",
  fits: "Large utilities, enterprises and governments.",
  to: "/compare/univers",
};

export const PV_OPERATION: Alternative = {
  name: "PV Operation",
  description: "A Brazilian provider focused on distributed generation plants, offering SCADA as a service, a local SCADA option and an operations center.",
  fits: "Distributed generation plants in Brazil that want local SCADA and a staffed operations center.",
  to: "/compare/pv-operation",
  multiBrand: "Supports multi-vendor equipment, delivered through local SCADA and Standard or Full hardware packages.",
};

export const VENDOR_PORTALS: Alternative = {
  name: "Manufacturer portals",
  description: "Each inverter brand's own portal, such as Huawei FusionSolar, Sungrow iSolarCloud and SMA Sunny Portal.",
  fits: "Single-brand portfolios that only need that brand's data.",
  to: "/compare/vendor-portals",
  multiBrand: "Each portal covers its own brand only, so a mixed fleet needs one portal per brand.",
};

export const AMMP: Alternative = {
  name: "AMMP",
  description: "A vendor-agnostic platform for solar, battery, hybrid, wind and genset portfolios: AMMP OS Platform for monitoring and operations, and AMMP AI (Ray), an AI coworker that can also run on top of an existing monitoring stack.",
  fits: "Mixed-brand commercial and industrial portfolios that want one source of truth, reporting and contract tracking, with an AI coworker on top.",
  to: "/product",
  multiBrand: "API-first: 30+ integrations through vendor cloud APIs, with the AMMP Edge datalogger only where needed, in one data model across brands.",
};

export const SELECTION_CRITERIA = [
  { title: "Brand coverage", text: "Does it read every inverter, battery, meter and genset in your portfolio, through cloud APIs or a datalogger?" },
  { title: "KPI consistency", text: "Are performance ratio, availability and yield calculated the same way across every brand?" },
  { title: "Alerting", text: "Can alerts be tuned per site and delivered where your team works, such as Microsoft Teams or Slack?" },
  { title: "Reporting", text: "Can it produce investor, PPA and O&M reports on a schedule, with your branding?" },
  { title: "SLA and contract tracking", text: "Can it check O&M availability, response times and performance guarantees against the contract?" },
  { title: "Data access", text: "Is there an open API, bulk export and an MCP server so your own tools and AI assistants can use the data?" },
];

export const MULTI_BRAND_PLATFORMS: Alternative[] = [AMMP, METEOCONTROL, POWER_FACTORS, ALSOENERGY, QOS, PV_OPERATION, VENDOR_PORTALS];

export const MULTI_BRAND_FAQ = [
  {
    q: "How do I monitor Huawei, SMA and Sungrow inverters in one portal?",
    a: "Use a vendor-neutral monitoring platform that connects each brand through its cloud API or a datalogger, calculates KPIs such as performance ratio and availability the same way for every brand, and routes alerts to where your team works, such as Microsoft Teams or Slack. AMMP is one option: it has 30+ integrations, including Huawei, SMA and Sungrow, and uses the AMMP Edge datalogger for equipment without an API.",
  },
];
