import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BatteryCharging, Clock, Database, Plug, ShieldCheck, Zap } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, QuoteBand } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/south-africa")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/south-africa",
    title: "AMMP South Africa — Solar and battery monitoring",
    description: "Solar and battery monitoring for load-shedding backup sites, with 1,000+ South African tariffs and time-of-use battery checks by Ray.",
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="AMMP in South Africa"
        title="Solar and battery monitoring built for"
        highlight="South African sites."
        intro="AMMP monitors solar and battery portfolios across South Africa, including commercial and industrial (C&I) load-shedding backup sites, with a tariff database of 1,000+ South African tariffs and an AI coworker checking every battery."
        primary={{ label: "Let's have a chat", to: "/contact" }}
        secondary={{ label: "See the platform", to: "/product" }}
      />
      <Band tone="grey">
        <SectionHeading title="What matters for South African portfolios" center />
        <FeatureGrid columns={3} features={[
          { icon: Zap, title: "Load-shedding backup sites", text: "See whether batteries and backup systems carry each site through load-shedding as designed." },
          { icon: Database, title: "1,000+ South African tariffs", text: "The AMMP tariff database covers 1,000+ South African tariff structures, so savings and billing use the right rates." },
          { icon: Clock, title: "Time-of-use battery checks", text: "Ray checks each battery's charging and discharging against the site's time-of-use tariff and flags sites that lost money to the wrong window." },
        ]} />
      </Band>
      <Band>
        <SectionHeading title="Trusted by South African operators" center />
        <QuoteBand quote="AMMP has become an integral part of our daily operations. The team actually uses it every day, that's the best proof it works." author="Adam Bekker, Broadreach Energy" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-base text-muted-foreground">
          SolarSaver and Broadreach run their South African portfolios on AMMP. <Link to="/case-studies" className="font-medium text-foreground hover:underline">Read the case studies</Link>.
        </p>
      </Band>
      <Band tone="grey">
        <SectionHeading title="The platform underneath" center />
        <FeatureGrid columns={3} features={[
          { icon: Plug, title: "30+ integrations", text: "Huawei, SMA, Sungrow, Victron, Deye and more, through cloud API or the AMMP Edge datalogger." },
          { icon: BatteryCharging, title: "Batteries as first-class assets", text: "Battery storage monitored with the same depth as solar." },
          { icon: ShieldCheck, title: "ISO/IEC 27001:2022 certified", text: "Independently audited information security management." },
        ]} />
      </Band>
      <Band>
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="Alternatives to Power Factors and Huawei FusionSolar in South Africa" />
          <p className="mt-6 text-base leading-7 text-muted-foreground">Power Factors is renewable asset performance management software. Teams already using it can keep it and add AMMP AI (Ray) on top.</p>
          <p className="mt-4 text-base leading-7 text-muted-foreground">Huawei FusionSolar is Huawei's own portal. It covers Huawei equipment, so a mixed fleet needs one portal per brand.</p>
          <p className="mt-4 text-base leading-7 text-muted-foreground">AMMP brings Huawei, SMA, Sungrow, Victron, Deye and other brands into one portal, with 1,000+ South African tariffs and Ray working on top.</p>
          <div className="mt-6 flex flex-wrap gap-6">
            <Link to="/compare/power-factors-alternatives" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">Power Factors alternatives <ArrowRight className="size-4" /></Link>
            <Link to="/compare/huawei" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">AMMP vs FusionSolar (Huawei) <ArrowRight className="size-4" /></Link>
            <Link to="/compare/best-commercial-solar-monitoring-platforms" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">Platforms for commercial and industrial portfolios <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </Band>
      <PageCta />
    </>
  );
}
