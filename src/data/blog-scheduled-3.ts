import type { BlogBlock } from "./blog-posts";
import loadSheddingCover from "@/assets/blog-loadshedding-cover.jpg.asset.json";
import { assetUrl } from "@/lib/assets";

export const covers3 = {
  loadShedding: { src: assetUrl(loadSheddingCover), alt: "A monitoring card with a pink battery curve, hatched grid outage blocks and a dashed reference line" },
};

export const loadSheddingBody: BlogBlock[] = [
  { type: "paragraph", text: "Across South Africa, many commercial and industrial (C&I) solar sites now include batteries, and some also have a genset. They are there for two jobs: to cut energy costs, and to keep the lights on during load-shedding. Monitoring that only tracks solar yield misses the second job. This guide covers what to watch on backup sites, which KPIs matter, and what to look for in monitoring software." },
  { type: "heading", text: "Why backup sites need different monitoring" },
  { type: "paragraph", text: "A grid-tied solar site has one main question: is it producing what it should? A backup site has more:" },
  { type: "list", items: [
    "Grid outages: you need to know when the grid was down at each site, and for how long, so you can judge how the system performed during the outage.",
    "Battery state of charge: a battery that starts load-shedding half empty can't deliver the backup it was sized for. Track state of charge before each scheduled outage, not just over the day.",
    "Gensets, where present: check when the genset started, how long it ran, and whether it ran because the battery ran out early.",
    "Communication dropouts: routers and dataloggers often lose power or signal during outages, so the hours you most want to see can be the ones missing from your data.",
  ] },
  { type: "paragraph", text: "For data gaps, check three things: whether missing intervals are flagged rather than shown as zero, how gaps are estimated, and whether estimated values are labelled. AMMP OS runs built-in data quality checks and applies configurable estimation rules. When a site's irradiance sensor is missing, it uses backup satellite irradiance data." },
  { type: "heading", text: "KPIs to track" },
  { type: "list", items: [
    "Availability: whether inverters, batteries and the genset were running when they should have been. Exclude grid-down time where the contract calls for it.",
    "Battery cycling: daily charge and discharge cycles, depth of discharge, and trends that point to early wear.",
    "Backup hours delivered: how many outage hours the system covered at each site, compared with what it was designed for.",
    "Performance ratio (PR): solar output against available irradiance, so you can tell weather from faults.",
  ] },
  { type: "heading", text: "Checking savings and PPA performance when the grid is down part of the day" },
  { type: "paragraph", text: "Savings and PPA billing assume a reference: what the site would have paid, or what it should have produced. Load-shedding complicates both. When the grid is down, a grid-tied inverter without backup capability may shut down too, and some contracts treat that energy differently. Check that your reports separate grid-down hours from normal hours, apply the contract's rules for curtailed or lost energy, and show the customer how the figures were calculated." },
  { type: "rich", parts: [{ a: "See investor and PPA reporting", href: "/solutions/investor-reporting" }] },
  { type: "heading", text: "Checking battery charging and discharging against time-of-use tariffs" },
  { type: "paragraph", text: "Under time-of-use tariffs, the value of a battery depends on when it charges and discharges. A battery that charges from the grid at peak rates, or sits full through the evening peak, loses money even if the hardware is fine. Compare each battery's charge and discharge pattern with the site's actual tariff windows. That requires the right tariff for each site. The AMMP tariff database covers 1,000+ South African tariffs." },
  { type: "heading", text: "What to look for in vendor-neutral monitoring software" },
  { type: "list", items: [
    "Support for many brands: C&I fleets often mix inverter, battery and meter brands. Look for one portal that covers all of them. AMMP has 30+ integrations.",
    "AMMP Edge for equipment without an API: gensets, older meters and some batteries have no cloud API. The AMMP Edge datalogger reads them on site.",
    "Alerting where your team works: alerts can be tuned per site and sent to Microsoft Teams, Slack, email or webhooks.",
    "Reporting: savings, PPA and investor reports built from the same data as operations.",
  ] },
  { type: "rich", parts: [{ a: "See hybrid site monitoring", href: "/solutions/hybrid-sites" }] },
  { type: "heading", text: "Where Ray fits" },
  { type: "paragraph", text: "Ray, the AI coworker on AMMP OS, checks each battery's charging and discharging against the site's time-of-use tariff every day. It flags sites that lost money by charging or discharging in the wrong window, so your team can fix the settings before the next bill." },
  { type: "heading", text: "A short checklist" },
  { type: "list", items: [
    "Can you see grid-down hours for each site?",
    "Do you know each battery's state of charge before each scheduled outage?",
    "Are communication gaps flagged and estimated values labelled?",
    "Do you track availability, battery cycling, backup hours delivered and PR?",
    "Do savings and PPA reports separate grid-down hours?",
    "Are batteries checked against each site's time-of-use tariff?",
    "Are all brands in one portal, with alerts going where your team works?",
  ] },
  { type: "rich", parts: [{ a: "Read more about AMMP in South Africa", href: "/south-africa" }] },
];
