import type { BlogBlock } from "./blog-posts";
import type { FaqItem } from "./faq";
import slaCover from "@/assets/blog-sla-audit-cover.jpg.asset.json";
import { assetUrl } from "@/lib/assets";

export const covers6 = {
  sla: { src: assetUrl(slaCover), alt: "A contract checklist, monthly availability bars against a dashed contract threshold with one bar below it, and a stopwatch for response time" },
};

export const slaAuditBody: BlogBlock[] = [
  { type: "paragraph", text: "An O&M contract only protects you if you can show, with data, whether the contractor met it. This guide walks through an SLA audit in seven steps: from the contract terms to the evidence you put in front of the contractor." },
  { type: "heading", text: "Step 1: Read the contract terms" },
  { type: "paragraph", text: "Before you touch any data, write down exactly what the contract promises. Most disputes come from two sides calculating different things." },
  { type: "list", items: [
    "Availability definition: time-based or energy-based, per inverter or per site, and over which period.",
    "Exclusions: grid outages, force majeure, planned maintenance and other events that don't count against the contractor.",
    "Response and repair times: when the clock starts, when it stops, and whether nights and weekends count.",
    "Liquidated damages: the threshold below which they apply and how they are calculated.",
  ] },
  { type: "heading", text: "Step 2: Pick the data sources" },
  { type: "paragraph", text: "Agree which data counts as the record: inverter and meter data for availability, irradiance for exclusions such as night-time, and ticket history for response and repair times. Using the same sources every month keeps the audit repeatable." },
  { type: "heading", text: "Step 3: Calculate availability the way the contract defines it" },
  { type: "rich", parts: [
    "Calculate availability with the contract's formula, not your platform's default. Apply the exclusions from step 1 and keep the calculation per period, so a single bad month is visible. For consistent definitions across sites, see the ",
    { a: "KPI calculations in the AMMP documentation", href: "/product/documentation" },
    ".",
  ] },
  { type: "heading", text: "Step 4: Measure response and repair times from ticket timestamps" },
  { type: "paragraph", text: "For each fault, take the time the fault started, the time the ticket was created, when the contractor responded and when the fault was fixed. Compare each interval with the contract. In AMMP, tickets carry assignments, deadlines and reminders, so the team can see who owns each fault and when it is due." },
  { type: "heading", text: "Step 5: Handle data gaps" },
  { type: "paragraph", text: "Missing data is not the same as downtime. Decide with the contractor how gaps are treated before you calculate. AMMP OS uses built-in data quality checks, configurable estimation rules, and backup satellite irradiance data when a site sensor is missing, so gaps are flagged instead of silently counted." },
  { type: "heading", text: "Step 6: Assemble the evidence" },
  { type: "list", items: [
    "The availability figure per period, with the formula and exclusions applied.",
    "The list of faults with their response and repair times against the contract.",
    "The data behind each number, exported through Export Center or the API.",
  ] },
  { type: "heading", text: "Step 7: Review with the contractor" },
  { type: "paragraph", text: "Share the evidence before the review meeting, so the contractor can check the same numbers. Agree on the exclusions first, then the figures, then any liquidated damages. A shared, repeatable calculation turns a dispute into a review." },
  { type: "heading", text: "Where Ray fits" },
  { type: "rich", parts: [
    { a: "Ray", href: "/ray" },
    ", the AI coworker in AMMP AI, measures performance against the contract terms and drafts the claim with the evidence behind each number. A named person on your team reviews and approves it before anything goes to the contractor. More on this in ",
    { a: "O&M SLA tracking", href: "/solutions/om-sla-tracking" },
    ".",
  ] },
  { type: "postLink", label: "Read: how to track solar PPA performance guarantees", slug: "track-solar-ppa-performance-guarantees" },
  { type: "cta", label: "Talk to our team", to: "/contact" },
];

export const slaAuditFaq: FaqItem[] = [
  { q: "How do I check whether my O&M contractor meets the SLA?", a: "Read the contract's availability definition, exclusions, response and repair times and liquidated damages, then calculate availability with that formula, measure response and repair times from ticket timestamps, and share the evidence with the contractor." },
  { q: "What is the difference between response time and repair time?", a: "Response time runs from the fault or ticket to the contractor's first action; repair time runs until the fault is fixed. The contract defines when each clock starts and stops." },
  { q: "How should data gaps be treated in an SLA audit?", a: "Agree with the contractor before you calculate. Missing data is not the same as downtime, so flag gaps and handle them by an agreed rule instead of counting them silently." },
  { q: "Can AMMP draft an SLA claim?", a: "Yes. Ray measures performance against the contract terms and drafts the claim with evidence. A named person on your team approves it before it is sent." },
];
