import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BatteryCharging, Cpu, Fuel, Network, Sun, WifiOff } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { pageHead } from "@/lib/page-head";

const FAQ = [
  { q: "Which assets does AMMP monitor on a hybrid site?", a: "Solar PV, battery storage, diesel gensets, mini-grids, meters and weather stations, in one view per site." },
  { q: "What about equipment without a cloud API?", a: "The AMMP Edge datalogger connects equipment that has no cloud API and sends its data to AMMP OS." },
  { q: "Does it work on sites with unreliable connectivity?", a: "Yes. AMMP is used on hybrid and off-grid sites across Africa where connections drop, so data gaps are part of the design." },
];

export const Route = createFileRoute("/solutions/hybrid-sites")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/solutions/hybrid-sites",
    title: "Hybrid site monitoring: solar, battery, genset — AMMP",
    description: "Monitor solar, battery, diesel genset and mini-grid sites in one view. AMMP Edge connects non-API equipment on sites with unreliable connectivity.",
    faq: FAQ,
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Hybrid sites"
        title="Solar, battery and genset sites,"
        highlight="in one view."
        intro="AMMP monitors solar, battery, diesel genset and mini-grid sites together, including commercial and industrial (C&I) hybrid systems. AMMP Edge connects equipment without a cloud API, on sites where connectivity is unreliable."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "Case studies", to: "/case-studies" }}
      />
      <Band tone="grey">
        <SectionHeading title="Every asset on the site" />
        <FeatureGrid columns={4} features={[
          { icon: Sun, title: "Solar PV", text: "Generation and performance across inverter brands." },
          { icon: BatteryCharging, title: "Battery storage", text: "State of charge, charging and discharging." },
          { icon: Fuel, title: "Diesel gensets", text: "Run hours and output alongside solar and storage." },
          { icon: Network, title: "Mini-grids", text: "Whole-system view for off-grid and mini-grid sites." },
        ]} />
      </Band>
      <Band>
        <SectionHeading title="Built for difficult sites" />
        <FeatureGrid columns={2} features={[
          { icon: Cpu, title: "AMMP Edge for non-API equipment", text: "The AMMP Edge datalogger reads equipment that has no cloud connection of its own." },
          { icon: WifiOff, title: "Unreliable connectivity", text: "Built from experience running hybrid sites across Africa, where connections drop and data arrives late." },
        ]} />
        <p className="mt-8 max-w-3xl text-base leading-7 text-muted-foreground">
          Operators such as Daystar Power, SolarSaver and Broadreach run their portfolios on AMMP.{" "}
          <Link to="/case-studies" className="font-medium text-foreground hover:underline">Read the case studies</Link>.
        </p>
        <Link to="/integrations" className="mt-4 inline-flex items-center gap-1 text-sm font-medium hover:underline">Supported equipment <ArrowRight className="size-4" /></Link>
      </Band>
      <Band tone="grey">
        <SectionHeading title="Questions about hybrid sites" />
        <Faq items={FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
