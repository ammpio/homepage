// Criteria, platform lists and FAQs for /compare/best-solar-om-platforms and /compare/best-epc-solar-monitoring-software.
// Competitor wording comes only from alternatives.ts; AMMP claims only from facts already on the site.
import type { FaqItem } from "@/data/faq";
import { AMMP, ALSOENERGY, BAZEFIELD, METEOCONTROL, POWER_FACTORS, PV_OPERATION, QOS, UNIVERS, VENDOR_PORTALS, type Alternative } from "@/data/alternatives";

export const POWER_FACTORS_WITH_RAY: Alternative = {
  ...POWER_FACTORS,
  fits: "Teams already using it can keep it. Ray (AMMP AI) can run on top of Power Factors.",
  to: "/compare/power-factors-alternatives",
  linkLabel: "Power Factors alternatives",
};

export const OM_EPC_PLATFORMS: Alternative[] = [AMMP, METEOCONTROL, POWER_FACTORS_WITH_RAY, ALSOENERGY, QOS, BAZEFIELD, UNIVERS, PV_OPERATION, VENDOR_PORTALS];

export const OM_CRITERIA = [
  { title: "Multi-brand data", text: "Does it read every inverter, battery, meter and genset you maintain, through cloud APIs or a datalogger on site?" },
  { title: "SLA and availability tracking", text: "Can it measure availability and response times against the terms of each O&M contract, with evidence?" },
  { title: "Preventive maintenance support", text: "Does it support scheduled checks and detect faults that keep coming back, so recurring problems get fixed at the root?" },
  { title: "Ticketing and work assignment", text: "Can alerts become tickets that are assigned to a technician, with a due date, and tracked to completion?" },
  { title: "Alert routing", text: "Do alerts reach the right person where they work: Microsoft Teams, Slack, email or webhooks?" },
  { title: "Reporting", text: "Can it produce O&M and client reports on a schedule, from the same data used for alerts?" },
  { title: "Data access and lock-in", text: "Can you take your data with you through an API, an MCP server for AI assistants and bulk exports?" },
];

export const OM_AMMP_FIT = [
  { title: "Multi-brand data", text: "30+ integrations through vendor cloud APIs, with the AMMP Edge datalogger only where needed. AMMP runs on 10,000+ sites in 30+ countries." },
  { title: "SLA and availability", text: "O&M availability, response times and PPA guarantees checked against contract terms." },
  { title: "Ticketing", text: "A board-based ticketing tool built into AMMP OS: turn alerts into tickets, assign people and set due dates." },
  { title: "Alert routing", text: "Alerts in Microsoft Teams, Slack, email and webhooks." },
  { title: "Ray, the AI coworker", text: "Ray checks every site daily and ranks issues by impact." },
  { title: "Data access", text: "API, MCP server and Export Center." },
];

export const OM_FAQ: FaqItem[] = [
  { q: "What should an O&M team look for in a solar monitoring platform?", a: "Multi-brand data through cloud APIs or a datalogger, availability and response-time tracking against contract terms, support for scheduled checks and recurring-fault detection, ticketing with work assignment, alerts in Microsoft Teams, Slack, email or webhooks, scheduled reports, and open data access through an API, an MCP server and exports." },
  { q: "Do I need a CMMS as well as a monitoring platform?", a: "It depends on how you plan work. A monitoring platform detects and prioritises problems; a CMMS or work-order tool plans technicians, parts and visits. Many O&M teams use both. If you do, check that tickets or alerts can pass between them through an API or webhooks, and that both use the same site and asset IDs." },
  { q: "How does AMMP support O&M teams?", a: "AMMP OS Platform covers monitoring, alerting, ticketing and reporting across 30+ integrations, and checks O&M availability, response times and guarantees against contract terms. Ray, the AI coworker, checks every site daily and ranks issues by impact." },
  { q: "Can I export my data from AMMP?", a: "Yes. AMMP provides an API, an MCP server for AI assistants and the Export Center for bulk exports." },
];

export const EPC_CRITERIA = [
  { title: "Multi-brand support", text: "Every inverter and battery brand you install, through cloud APIs or a datalogger on site." },
  { title: "Handover checks", text: "Can you confirm that a new site reports every device correctly before you hand it over?" },
  { title: "Guarantee tracking", text: "Can it track performance guarantees and availability against each contract, with evidence?" },
  { title: "Client access to their own sites", text: "Can clients log in and see their own systems, and only theirs?" },
  { title: "Scheduled client reports", text: "Can client reports go out on a schedule, with your branding on reports?" },
  { title: "Multi-portfolio management", text: "Can you manage many clients' portfolios from one account, with the right access for each?" },
];

export const EPC_AMMP_FIT = [
  { title: "Multi-brand support", text: "30+ integrations, with the AMMP Edge datalogger for equipment without a cloud API." },
  { title: "New sites", text: "AMMP onboards new sites with data quality checks." },
  { title: "Guarantees", text: "Performance guarantees and availability tracked against contract terms." },
  { title: "Client access", text: "The stakeholder portal gives clients real-time access to their own systems." },
  { title: "Client reports", text: "Reports delivered on a schedule in Word, PowerPoint or PDF, with your branding on reports." },
  { title: "Data access", text: "API, MCP server and Export Center." },
];

export const EPC_FAQ: FaqItem[] = [
  { q: "What should an EPC look for in monitoring software?", a: "Support for every brand you install, checks that new sites report every device correctly before handover, performance guarantee tracking, client access to their own sites, scheduled client reports with your branding on reports, and the ability to manage many portfolios from one account." },
  { q: "Can clients see their own sites in AMMP?", a: "Yes. The AMMP stakeholder portal gives clients real-time access to their own systems." },
  { q: "Can AMMP send scheduled reports to clients?", a: "Yes. Reports go out on the schedule you set, in Word, PowerPoint or PDF, with your branding on reports." },
  { q: "Does AMMP work with every inverter brand I install?", a: "AMMP has 30+ integrations and runs on 10,000+ sites in 30+ countries. Equipment without a cloud API can be read on site with the AMMP Edge datalogger." },
];
