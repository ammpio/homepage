import type { BlogBlock } from "./blog-posts";

// Buyer's guide: "How to Choose Multi-Brand Solar Monitoring".
// Facts only from approved site copy (see src/data/ammp-facts.ts). No prices.
export const multiBrandGuideBody: BlogBlock[] = [
  { type: "heading", text: "The short answer" },
  { type: "paragraph", text: "Good commercial solar portfolio monitoring software pulls data from every inverter, meter, battery and genset brand into one place, compares each site against expected production, ranks alerts by impact, and links them to tickets, reports and contracts. Check how it connects to your equipment, whether you can trust its data, and whether your team can act on what it shows." },
  { type: "paragraph", text: "This guide is for commercial and industrial solar asset owners and operations leaders choosing a platform for a growing, mixed-brand portfolio. It covers what to look for, the questions to ask vendors, and how AMMP approaches each point." },

  { type: "heading", text: "Why multi-brand portfolios outgrow vendor portals" },
  { type: "paragraph", text: "Most commercial solar portfolios grow site by site. Each project uses whatever inverters, meters and batteries made sense at the time, and each brand comes with its own portal, login, alert logic and export format." },
  { type: "paragraph", text: "With a handful of sites this is manageable. With dozens or hundreds, the team spends its mornings logging into portals, reconciling numbers that don't match, and guessing which alert matters. Reports get built by hand, and contract checks happen late, if at all." },
  { type: "paragraph", text: "A multi-brand solar portfolio management platform replaces that patchwork with one view of every site, measured the same way. The question is which platform does it well." },

  { type: "heading", text: "1. Vendor-agnostic data collection" },
  { type: "paragraph", text: "Start with coverage. List every technology and brand in your portfolio today and in your pipeline, and check each one against the vendor's integration list." },
  { type: "list", items: [
    "Technologies: solar PV, battery storage, hybrid systems and mini-grids, wind, diesel gensets, meters and weather stations",
    "Connection methods: cloud API integrations with vendor portals, a local datalogger where you need higher-resolution or more reliable data, or both",
    "New brands: how long it takes to add an integration that isn't supported yet",
  ] },
  { type: "paragraph", text: "AMMP has 30+ integrations, including Huawei, SMA, SolarEdge, Sungrow, Fronius, Victron, GoodWe, Solis, Deye, Growatt, AlphaESS and SigEnergy, connected by cloud API or the AMMP Edge datalogger." },

  { type: "heading", text: "2. Photovoltaic performance monitoring against expectations" },
  { type: "paragraph", text: "Raw production numbers don't tell you much on their own. A site can produce less because of weather or because an inverter tripped. Good solar asset monitoring compares actual production with what each site should have produced, and goes down to inverters and strings to show where the gap is." },
  { type: "paragraph", text: "Ask how expected production is calculated, how irradiance and weather data are used, and whether the platform flags data it can't trust, so you never build a report or invoice on bad numbers." },

  { type: "heading", text: "3. Alerts that are ranked, not just listed" },
  { type: "paragraph", text: "Every monitoring tool sends alerts. The difference is whether your team can tell which ones matter. Across a large portfolio, unranked alerts quickly turn into noise that people learn to ignore." },
  { type: "paragraph", text: "Look for alerting that groups related events, explains the likely cause, and ranks issues by operational and commercial impact, so the team works on the site losing the most energy or putting a contract at risk first." },

  { type: "heading", text: "4. Solar operations and maintenance workflows" },
  { type: "paragraph", text: "Monitoring only pays off when it leads to action. Check whether alerts can become tickets in the same platform, whether field teams and O&M providers can work from them, and whether the history of each issue stays attached to the site." },
  { type: "paragraph", text: "If you work with external O&M providers, ask how they get access and how response times are tracked." },

  { type: "heading", text: "5. Reporting and commercials" },
  { type: "paragraph", text: "For asset owners, the portfolio is a set of commercial commitments: availability and performance guarantees, PPAs, savings promised to customers, and billing. Renewable energy asset management software should connect technical data to those commitments." },
  { type: "list", items: [
    "Portfolio and site reports that don't need to be rebuilt by hand every month",
    "Availability and performance checks against contract terms, with the evidence behind them",
    "Energy readings reliable enough for billing and customer savings reports",
  ] },

  { type: "heading", text: "6. Open data access" },
  { type: "paragraph", text: "Your data should not be locked into one screen. Ask whether there is an API for your own analytics and tools, and how AI assistants can read your portfolio data in a controlled way." },
  { type: "paragraph", text: "AMMP offers a Data API and an MCP server as add-ons. The MCP server gives AI assistants such as Claude, Copilot or your own agent structured portfolio context from AMMP OS." },

  { type: "heading", text: "7. Security" },
  { type: "paragraph", text: "Monitoring platforms connect to operational equipment and hold commercial data. Ask for independent certification rather than a security page. AMMP is certified to ISO/IEC 27001:2022." },

  { type: "heading", text: "8. AI on top of the data" },
  { type: "paragraph", text: "AI is only as good as its data foundation. An assistant that can't see clean, complete portfolio data will guess. When a vendor offers AI, ask what data it reads, whether its answers show their sources, and whether people keep the final decision." },
  { type: "paragraph", text: "AMMP AI is Ray, an AI coworker. He checks every site daily, ranks issues by impact, diagnoses root causes, checks SLAs and contracts with evidence, and drafts reports. Ray works in Microsoft Teams, Slack and AMMP OS, and can run on AMMP OS or on top of an existing monitoring stack such as Meteocontrol or Power Factors." },

  { type: "heading", text: "Questions to ask every vendor" },
  { type: "list", items: [
    "Which of our inverter, meter, battery and genset brands do you support today, and how are they connected?",
    "How do you calculate expected production for each site?",
    "How do you flag missing or unreliable data?",
    "How are alerts prioritised, and can we see why an alert was raised?",
    "Can alerts become tickets, and can our O&M providers work in the same system?",
    "How do you check availability and performance against our contracts?",
    "What reports come out of the box, and how much manual work is left?",
    "Is there an API, and can AI assistants access our data securely?",
    "Which security certifications do you hold?",
    "How is pricing structured as the portfolio grows?",
  ] },

  { type: "heading", text: "How AMMP approaches it" },
  { type: "paragraph", text: "AMMP is a vendor-agnostic platform for monitoring and managing solar, battery, hybrid, wind and genset portfolios, running on 10,000+ sites in 30+ countries. It has two modules that you can buy separately or together." },
  { type: "list", items: [
    "AMMP OS Platform: monitoring, alerting, ticketing, reporting and commercials in one place. These are capabilities of the platform, not separate products.",
    "AMMP AI: Ray, the AI coworker who works on top of your portfolio data.",
  ] },
  { type: "paragraph", text: "Pricing is an annual subscription per MWp of installed capacity. For a walkthrough with your own portfolio in mind, talk to our team." },
  { type: "cta", label: "Talk to our team", to: "/contact" },
];
