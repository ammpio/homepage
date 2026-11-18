// Copy for the 18 November 2026 AEO batch: backup-power monitoring, Power Factors alternatives (South Africa), PPA guarantee exceptions guide.
// Competitor wording only from alternatives.ts and existing /compare pages; AMMP claims only from facts already on the site.
import type { FaqItem } from "@/data/faq";
import { ALSOENERGY, AMMP, BAZEFIELD, METEOCONTROL, POWER_FACTORS, QOS, UNIVERS, VENDOR_PORTALS, type Alternative } from "@/data/alternatives";
import { HUAWEI_FUSIONSOLAR } from "@/data/batch6";

type Feature = { title: string; text: string };

// ---------- /solutions/backup-power-monitoring ----------
export const BACKUP_FAQ: FaqItem[] = [
  { q: "How do I monitor solar and battery backup systems across a South African branch network?", a: "Bring every branch into one vendor-neutral platform that reads each inverter and battery brand, checks battery state of charge before each scheduled outage, sends alerts to Microsoft Teams or Slack, and reports savings with the right South African tariff for each site. AMMP does this with 30+ integrations and 1,000+ South African tariffs." },
  { q: "Which brands does AMMP connect at branch sites?", a: "Huawei, SMA, Sungrow, Victron, Deye and more, through cloud API or the AMMP Edge datalogger." },
  { q: "How will I know a branch's backup isn't ready?", a: "Alerts cover common conditions such as communication failures, battery state of charge and PV generation performance. They go to Microsoft Teams, Slack, email or webhooks." },
  { q: "What does Ray do for a branch network?", a: "Ray checks every site each morning, groups repeat alarms and opens tickets. People decide; Ray doesn't control hardware." },
  { q: "Can AMMP report savings per branch?", a: "Yes. Savings use the AMMP tariff database of 1,000+ South African tariffs, and Ray checks each battery's charging and discharging against the site's time-of-use tariff." },
];

// ---------- /compare/power-factors-alternatives-south-africa ----------
export const PFSA_CRITERIA: Feature[] = [
  { title: "Load shedding and backup", text: "Can you see whether batteries and backup systems carry each site through load-shedding as designed, and track state of charge before each scheduled outage?" },
  { title: "Multi-brand fleets", text: "Does it read Huawei, SMA, Sungrow, Victron, Deye and the other brands in your fleet in one view, instead of one portal per brand?" },
  { title: "SLA tracking with O&M contractors", text: "Can it check O&M availability, response times and performance guarantees against the contract?" },
  { title: "Investor reporting", text: "Can it produce investor, PPA and O&M reports on a schedule, with your branding?" },
  { title: "Local tariffs", text: "Are savings and billing calculated with the right South African tariff for each site, including time-of-use?" },
];

export const PFSA_OPTIONS: Alternative[] = [
  { ...AMMP, fits: "Mixed-brand South African portfolios, including load-shedding backup sites, with 1,000+ South African tariffs and Ray working on top." },
  { ...POWER_FACTORS, to: "/compare/power-factors-alternatives", linkLabel: "Power Factors alternatives" },
  HUAWEI_FUSIONSOLAR,
  METEOCONTROL,
  ALSOENERGY,
  QOS,
  BAZEFIELD,
  UNIVERS,
  VENDOR_PORTALS,
];

export const PFSA_FAQ: FaqItem[] = [
  { q: "What are the alternatives to Power Factors in South Africa?", a: "Multi-brand platforms such as AMMP, Meteocontrol, AlsoEnergy, QOS Energy, Bazefield and Univers, and manufacturer portals such as Huawei FusionSolar for single-brand fleets. Teams already using Power Factors can also keep it and add AMMP AI (Ray) on top." },
  { q: "What should South African solar and battery portfolios look for?", a: "Backup readiness through load-shedding, one view across brands, SLA tracking with O&M contractors, scheduled investor reports, and savings calculated with local tariffs." },
  { q: "Does AMMP support South African tariffs?", a: "Yes. The AMMP tariff database covers 1,000+ South African tariff structures, so savings and billing use the right rates." },
  { q: "What do I need to map when moving to AMMP?", a: "Sites, devices, alarm rules and report templates. The switch page explains how the move works." },
];

export const PFSA_SWITCH_MAP: Feature[] = [
  { title: "Sites", text: "Every site, and how your portfolio is grouped into sub-portfolios." },
  { title: "Devices", text: "Inverters, batteries and meters, connected through cloud API or the AMMP Edge datalogger." },
  { title: "Alarm rules", text: "Which conditions alert whom, and where: Microsoft Teams, Slack, email or webhooks." },
  { title: "Report templates", text: "Investor, PPA and O&M reports, with your branding on reports." },
];

// ---------- /blog/solar-ppa-guarantee-exceptions ----------
export const PPA_EXCEPTIONS_FAQ: FaqItem[] = [
  { q: "What counts as an exception to a solar PPA performance guarantee?", a: "Whatever the contract defines. Common examples are grid outages, curtailment, offtaker load limits, data gaps and force majeure as the contract defines it." },
  { q: "When should an exception be documented?", a: "At the time it happens, with the data that shows it, and agreed with the offtaker before the month closes." },
  { q: "Does AMMP classify exceptions automatically?", a: "No. Your team decides what counts as an exception under the contract. AMMP provides billing-grade data, a monthly data freeze, the availability KPI and scheduled reports, and Ray flags data gaps and says when data is missing." },
];
