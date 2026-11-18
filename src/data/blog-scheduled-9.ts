import type { BlogBlock } from "./blog-posts";
import cover from "@/assets/blog-ppa-exceptions-cover.jpg.asset.json";
import { assetUrl } from "@/lib/assets";

export const covers9 = {
  ppaExceptions: { src: assetUrl(cover), alt: "A row of solar panels next to a monthly calendar with a few days marked and a clipped document with charts as evidence" },
};

export const PPA_EXCEPTIONS_STEPS = [
  "Step 1: List the exceptions your contract allows",
  "Step 2: Capture evidence when it happens",
  "Step 3: Run a monthly exceptions routine",
  "Step 4: Keep it consistent across sites and brands",
];

export const ppaExceptionsBody: BlogBlock[] = [
  { type: "paragraph", text: "A PPA performance guarantee is only as strong as the record of what happened on site. When output falls short, the first question from the offtaker is whether the shortfall was an exception the contract allows. This guide shows how to document exceptions as they happen and track them the same way across a portfolio." },
  { type: "heading", text: PPA_EXCEPTIONS_STEPS[0] },
  { type: "paragraph", text: "The contract decides what counts. Write down each exception it names, how it is measured and who has to agree. Typical examples:" },
  { type: "list", items: [
    "Grid outages: the grid was down, so the site could not export or supply the load.",
    "Curtailment: output was limited on purpose, for example by the grid operator or the offtaker.",
    "Offtaker load limits: the offtaker could not take the energy the site could produce.",
    "Data gaps: meter or inverter data is missing for part of the period.",
    "Force majeure, as the contract defines it.",
  ] },
  { type: "heading", text: PPA_EXCEPTIONS_STEPS[1] },
  { type: "paragraph", text: "An exception you document weeks later is hard to defend. Record each one when it happens: the site, the start and end time, the data that shows it, and the energy affected. Months later, nobody remembers which afternoon the grid went down." },
  { type: "heading", text: PPA_EXCEPTIONS_STEPS[2] },
  { type: "paragraph", text: "Use the same routine every month:" },
  { type: "list", items: [
    "Flag: go through each site and mark the periods that may be exceptions.",
    "Attach data: add the meter, inverter and availability data for each period.",
    "Agree: send the list to the offtaker and agree it before the month closes.",
  ] },
  { type: "paragraph", text: "AMMP supports this with billing-grade PPA data, a monthly data freeze and scheduled report delivery. The availability KPI shows when the site itself was down." },
  { type: "heading", text: PPA_EXCEPTIONS_STEPS[3] },
  { type: "paragraph", text: "Across a portfolio, the same exception has to be measured the same way on every site, whatever the inverter brand. Use one data model and one availability definition for all sites, and the right tariff for each. AMMP supports all grid tariff structures and is compatible with all contractual arrangements." },
  { type: "paragraph", text: "Ray, the AI coworker in AMMP AI, flags data gaps and says when data is missing instead of guessing. Your team still decides what counts as an exception under the contract." },
  { type: "rich", parts: [
    "For the guarantee itself, read ",
    { a: "how to track solar PPA performance guarantees", href: "/blog/track-solar-ppa-performance-guarantees" },
    ". For invoicing, see ",
    { a: "automated PPA billing for solar", href: "/blog/automated-ppa-billing-solar" },
    " and the ",
    { a: "PPA billing software comparison", href: "/compare/best-ppa-billing-software" },
    ".",
  ] },
];
