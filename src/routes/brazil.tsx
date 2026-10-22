import { createFileRoute } from "@tanstack/react-router";
import { BatteryCharging, BellRing, CalendarClock, FileBarChart, Gauge, Receipt, ScrollText, Sun, Users, Wrench, Zap } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/brazil")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "AMMP Brazil — Solar and BESS monitoring with AI coworker" },
    { name: "description", content: "Monitoring and asset management with an AI coworker for solar, storage and hybrid portfolios in Brazil, built for BESS and the 2026 storage auctions." },
    { property: "og:title", content: "AMMP Brazil — Solar and BESS monitoring with AI coworker" },
    { property: "og:description", content: "No local SCADA box required, and batteries are first-class assets, not an add-on." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="AMMP in Brazil"
        title="An AI coworker for solar and storage, built for"
        highlight="Brazil's next cycle."
        intro="AMMP is a cloud-native monitoring and asset management platform for solar, battery and hybrid portfolios, with an AI coworker investigating and preparing work on top. No local SCADA box required, and batteries are first-class assets, not an add-on."
        primary={{ label: "Book a conversation", to: "/contact" }}
        secondary={{ label: "Compare with PV Operation", to: "/compare/pv-operation" }}
      />

      <Band tone="grey">
        <SectionHeading eyebrow="Why now" title="Storage is inflecting" intro="Brazil's storage market is moving from pilot projects to contracted capacity. The operators positioning for it need a monitoring layer that handles batteries properly." center />
        <FeatureGrid
          columns={2}
          features={[
            { icon: ScrollText, title: "The SAE framework is in place", text: "ANEEL approved the regulatory framework for energy storage (SAE) in 2026, and the Ministry of Mines and Energy issued guidelines for the first storage-dedicated capacity auctions through Ordinance 136/2026." },
            { icon: CalendarClock, title: "First BESS auctions in December 2026", text: "Auctions 05 and 06/2026 are scheduled for December 2026: 15-year contracts, supply from August 2028, a 30 MW minimum, 85%+ round-trip efficiency and grid-forming capability." },
            { icon: Zap, title: "Roughly 18 GW queued", text: "Around 18 GW of battery projects are queued to register, and co-location with solar or wind is the fastest-growing segment. Pairing can cut contracted network usage by up to 30%." },
            { icon: Wrench, title: "A recognized O&M skills gap", text: "The market has a known shortage of experience in large-scale BESS design, commissioning and operation, which is exactly where a strong monitoring and asset-management layer earns its place." },
          ]}
        />
      </Band>

      <Band tone="white">
        <SectionHeading eyebrow="The gap" title="Solar-only monitoring does not cover batteries" center />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 md:p-8">
            <Sun className="size-5 text-muted-foreground" />
            <h3 className="mt-4 text-xl font-semibold">What a solar-first tool assumes</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              <li>Performance ratio and irradiance as the primary lens on every asset.</li>
              <li>An operations center staffed during daylight hours, when generation happens.</li>
              <li>A local SCADA install per plant, with hardware packages tied to the contract.</li>
              <li>Reporting shaped around generation, not around dispatch or revenue.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-primary/40 bg-card p-6 md:p-8">
            <BatteryCharging className="size-5 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">What batteries actually need</h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              <li>State of charge, throughput, cycles and degradation tracked continuously.</li>
              <li>24/7 alerting, because a battery does not stop working at sunset.</li>
              <li>Hybrid sites modelled as one asset: PV, BESS, meters and generators together.</li>
              <li>Tariff-aware financial monitoring, so dispatch decisions can be checked against revenue.</li>
            </ul>
          </div>
        </div>
      </Band>

      <Band tone="grey">
        <SectionHeading eyebrow="What we bring" title="What AMMP brings to a Brazilian portfolio" center />
        <FeatureGrid
          columns={3}
          features={[
            { icon: BatteryCharging, title: "Solar and storage in one data model", text: "PV, batteries, meters and generators sit in the same model, so hybrid sites are monitored and reported on like any other asset." },
            { icon: Gauge, title: "No SCADA box required", text: "Hardware-agnostic ingestion from 30+ device brands through vendor APIs and existing equipment, with an edge gateway only where a site genuinely needs one." },
            { icon: BellRing, title: "Alerts center and ticketing", text: "Alerts become work: assigned, tracked and closed, with integrations into the tools your field teams already use." },
            { icon: FileBarChart, title: "Automated reporting", text: "Scheduled, white-labeled reports for investors, offtakers and internal reviews, generated from the same data your team operates on." },
            { icon: Receipt, title: "Tariff and financial monitoring", text: "Tariffs, savings and billing logic modelled alongside the technical data, so commercial and technical views stay in sync." },
            { icon: Users, title: "Stakeholder portal", text: "Branded access for offtakers, financiers and end customers, without giving them your operational console." },
          ]}
        />
      </Band>

      <Band tone="white">
        <p className="text-center text-xs text-muted-foreground">Market and regulatory figures on this page are based on publicly available sources as of August 2026.</p>
      </Band>

      <PageCta />
    </>
  );
}
