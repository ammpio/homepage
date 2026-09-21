import { createFileRoute } from "@tanstack/react-router";
import { Bot, Cpu, Database, Gauge, Home, Leaf, Map, Paintbrush, Receipt, ShieldCheck, Ticket, Wrench } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, QuoteBand } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/us")({
  head: () => ({ meta: [
    { title: "AMMP US — Tailored solar and BESS monitoring, plus AI coworkers" },
    { name: "description", content: "Asset management tailored to your vendors, KPIs and workflows, now with AI coworkers built on top. PV, BESS and hybrid portfolios, 10,000+ sites across 35 countries." },
    { property: "og:title", content: "AMMP US — Tailored solar and BESS monitoring, plus AI coworkers" },
    { property: "og:description", content: "Demos in US business hours, pricing in USD. Engineers, not ticket queues." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="AMMP in the US"
        title="AI coworkers on a monitoring platform built"
        highlight="around your portfolio."
        intro="AMMP is the asset management platform we tailor to your vendors, KPIs and workflows—and where AI coworkers now investigate and prepare work for your team. PV, BESS and hybrid. 10,000+ sites across 35 countries."
        primary={{ label: "Let's have a chat", to: "/contact" }}
        secondary={{ label: "See the platform", to: "/product" }}
      />

      <Band tone="grey">
        <SectionHeading eyebrow="How we work with you" title="What working with us looks like" center />
        <FeatureGrid
          columns={3}
          features={[
            { icon: Wrench, title: "Tailored, not templated", text: "We start from your vendors, your KPIs and your reporting obligations. The platform adapts to the portfolio, not the other way round." },
            { icon: Cpu, title: "Engineers, not ticket queues", text: "You talk to the people who build the integrations. No first-line script, no escalation tiers before someone technical reads your message." },
            { icon: Gauge, title: "Weeks, not roadmap quarters", text: "Custom integrations and dashboards typically ship in two to six weeks against a fixed quote. Your requirement does not have to win a roadmap vote." },
          ]}
        />
      </Band>

      <Band tone="white">
        <SectionHeading eyebrow="Social proof" title="Trusted by operators managing thousands of sites" center />
        <QuoteBand quote="AMMP has become an integral part of our daily operations. The team actually uses it every day, that's the best proof it works." author="Adam Bekker, Broadreach Energy" />
      </Band>

      <Band tone="grey">
        <SectionHeading eyebrow="Custom work" title="What we've tailored for customers" center />
        <FeatureGrid
          columns={3}
          features={[
            { icon: Leaf, title: "Environmental-impact dashboards", text: "CO2 avoided and trees saved, branded for an O&M provider and shown directly to their end customers." },
            { icon: Ticket, title: "Ticketing system integrations", text: "Alerts flowing straight into the tools field teams already use, so nothing is retyped between systems." },
            { icon: Paintbrush, title: "White-label platform for an EMS provider", text: "A fully branded monitoring and operations portal deployed under the provider's identity, with their customers logging into their platform, not ours." },
            { icon: Map, title: "Custom map with urgent alerts", text: "A geospatial view that surfaces open, high-priority alerts across the fleet so dispatch teams see what needs attention first." },
            { icon: Home, title: "Residential inverter dashboards", text: "A custom integration for a residential inverter manufacturer that lets their end customers see production, consumption and battery status in one place." },
            { icon: Receipt, title: "Invoicing with custom tariffs", text: "A billing integration that applies bespoke tariffs and pushes line items into the customer's accounting tool, cutting monthly manual reconciliation." },
          ]}
        />
      </Band>

      <Band tone="white">
        <SectionHeading eyebrow="Trust" title="The boring things that matter" center />
        <FeatureGrid
          columns={3}
          features={[
            { icon: ShieldCheck, title: "ISO/IEC 27001:2022 certified", text: "Independently audited information security management, encryption in transit and at rest." },
            { icon: Bot, title: "Built for continuous uptime", text: "High-availability cloud infrastructure with redundancy and automated failover." },
            { icon: Database, title: "Your data stays yours", text: "Full REST API and bulk export in open formats, during the contract and on exit." },
          ]}
        />
      </Band>

      <PageCta />
    </>
  );
}
