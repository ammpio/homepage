import type { BlogBlock } from "./blog-posts";
import type { FaqItem } from "./faq";

export const teamsAlertsBody: BlogBlock[] = [
  { type: "paragraph", text: "Alerts that land in a separate portal get missed. Most asset and O&M teams already spend their day in Microsoft Teams or Slack, so that is where a communication failure, a low battery or an inverter trip should show up. This guide shows how to set it up with AMMP, in four steps." },
  { type: "heading", text: "Why route alerts into Teams or Slack" },
  { type: "list", items: [
    "The right person sees the alert in minutes, on desktop or phone, without logging in to another tool.",
    "The team can discuss an alert in the same thread and agree who acts on it.",
    "Fewer portals to check every morning, especially with several inverter and battery brands in the portfolio.",
  ] },
  { type: "heading", text: "Step 1: Decide which alerts matter" },
  { type: "paragraph", text: "Start with the alerts your team will act on, not every alarm a device can send. In AMMP, alert rules can be set at portfolio, asset group and asset level, and alerts can be based on KPIs; custom KPI alerts are set up with our team (support@ammp.io)." },
  { type: "list", items: [
    "Standard Alerts are available to every AMMP customer and cover common conditions such as communication failures, battery state of charge and PV generation performance.",
    "Suppression rules hide alerts you don't need to act on, such as expected alerts during planned maintenance or noisy, low-value vendor alerts. They can cover the whole portfolio or specific assets or asset groups.",
    "Suppressed alerts aren't deleted; they're only filtered out of the Active Alerts view.",
  ] },
  { type: "heading", text: "Step 2: Choose where alerts go" },
  { type: "paragraph", text: "AMMP can route alert notifications to Microsoft Teams, Slack, email or webhooks. Each notification shows the alert name, its state, the site, the parameter and its value, and the date and time. A red marker means the alert has just been triggered; a green one means the condition has cleared." },
  { type: "list", items: [
    "Microsoft Teams or Slack: one channel per portfolio, region or team works well.",
    "Email: for people who don't use a chat tool.",
    "Webhooks: to pass alerts on to your own systems.",
  ] },
  { type: "heading", text: "Step 3: Allow shared channels in Microsoft Teams" },
  { type: "rich", parts: [
    "If your Teams channel is shared with AMMP, your Microsoft 365 admin first needs to allow shared channels with AMMP. The documentation explains both options, Open mode in the Teams admin center or AMMP-only access in Microsoft Entra: ",
    { a: "Enabling Microsoft Teams shared channels with AMMP", href: "/product/documentation/microsoft-teams-shared-channels" },
    ".",
  ] },
  { type: "heading", text: "Step 4: Let Ray post findings with evidence" },
  { type: "rich", parts: [
    "Alerts tell you something happened. ",
    { a: "Ray", href: "/ray" },
    ", the AI coworker in AMMP AI, works in Microsoft Teams, Slack and AMMP OS. He checks every site each morning, groups repeat alarms and opens tickets, and posts his findings in the channel with the sources behind each one. People decide; Ray doesn't control hardware.",
  ] },
  { type: "heading", text: "Putting it together" },
  { type: "rich", parts: [
    "A good setup is short: a few alert rules the team acts on, suppression for the noise, one channel per team, and Ray's morning message on top. It works across every brand in the portfolio, as part of ",
    { a: "solar monitoring", href: "/solutions/solar-monitoring" },
    " in AMMP OS.",
  ] },
  { type: "cta", label: "Talk to our team", to: "/contact" },
];

export const teamsAlertsFaq: FaqItem[] = [
  { q: "Can I get solar alerts in Microsoft Teams?", a: "Yes. AMMP sends alert notifications to Microsoft Teams channels, and Ray can post his findings there with the evidence behind each one. For shared channels, your Microsoft 365 admin first needs to allow them." },
  { q: "Does AMMP work with Slack?", a: "Yes. AMMP sends alert notifications to Slack channels, and Ray works in Slack as well as Microsoft Teams and AMMP OS." },
  { q: "Can AMMP send alerts by email or webhook?", a: "Yes. Alerts can go to Microsoft Teams, Slack, email or webhooks." },
];

export const africaBody: BlogBlock[] = [
  { type: "paragraph", text: "Nigeria, Kenya and South Africa are three very different markets for commercial and industrial (C&I) solar. Grid reliability, the role of diesel, connectivity and tariffs all vary, and so do the questions a monitoring platform has to answer. This guide doesn't make claims about each market. It lists what to check, so you can judge a platform against your own sites." },
  { type: "heading", text: "Grid reliability and load-shedding" },
  { type: "list", items: [
    "Does the platform show when the grid was down, so grid downtime isn't counted against the plant?",
    "Can it show whether batteries and backup systems carried each site through an outage as designed?",
    "Can savings and PPA performance still be checked when the grid is down part of the day?",
  ] },
  { type: "rich", parts: [
    "For South Africa specifically, see the ",
    { a: "load-shedding monitoring guide", href: "/blog/monitor-solar-battery-backup-load-shedding-south-africa" },
    ".",
  ] },
  { type: "heading", text: "Diesel hybrids" },
  { type: "list", items: [
    "Can you see solar, battery and diesel genset on the same site in one view?",
    "Does it read gensets and controllers that have no cloud API, through a datalogger on site?",
    "Can it show how much diesel the solar and battery replaced?",
  ] },
  { type: "rich", parts: [
    "Daystar Power manages 200+ hybrid solar systems across West Africa on AMMP; read the ",
    { a: "case studies", href: "/case-studies" },
    ". More on ",
    { a: "hybrid site monitoring", href: "/solutions/hybrid-sites" },
    ".",
  ] },
  { type: "heading", text: "Connectivity" },
  { type: "list", items: [
    "What happens to data when a site loses its connection, and does the platform show which values are missing or estimated?",
    "Does it combine cloud APIs with an on-site datalogger, so each site uses whatever connection works there?",
    "Are communication failures raised as alerts, so a silent site isn't mistaken for a healthy one?",
  ] },
  { type: "heading", text: "Tariffs and savings" },
  { type: "list", items: [
    "Does the platform hold the grid and PPA tariffs for every country you work in, including time-of-use and demand charges?",
    "Can it check battery charging and discharging against a time-of-use tariff?",
    "Can savings and PPA invoices come from the same data as monitoring?",
  ] },
  { type: "rich", parts: [
    "In South Africa, the AMMP tariff database covers 1,000+ tariffs; see ",
    { a: "AMMP in South Africa", href: "/south-africa" },
    ".",
  ] },
  { type: "heading", text: "What to look for in a platform" },
  { type: "list", items: [
    "Every brand in one portal: inverters, batteries, meters and gensets, through cloud APIs or a datalogger.",
    "KPIs calculated the same way in every country, so sites can be compared.",
    "Alerts that reach the team in Microsoft Teams, Slack, email or webhooks.",
    "Reports for investors and clients from the same data.",
    "Data access through an API, an MCP server and exports, so you aren't locked in.",
  ] },
  { type: "paragraph", text: "AMMP runs on 10,000+ sites in 30+ countries, with 30+ integrations, and is one option to compare against this list." },
  { type: "cta", label: "Talk to our team", to: "/contact" },
];

export const africaFaq: FaqItem[] = [
  { q: "What should I look for in solar monitoring for Nigeria, Kenya or South Africa?", a: "Grid downtime shown separately from plant downtime, solar, battery and genset in one view, clear handling of missing data when connectivity drops, the right local tariffs, and alerts that reach the team where they work." },
  { q: "Can one platform monitor sites in several African countries?", a: "Yes, if it supports every brand you use and calculates KPIs the same way everywhere. AMMP runs on 10,000+ sites in 30+ countries." },
];
