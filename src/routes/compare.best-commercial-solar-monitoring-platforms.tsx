import { createFileRoute, Link } from "@tanstack/react-router";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { AlternativesList } from "@/components/site/AlternativesList";
import { AMMP, ALSOENERGY, METEOCONTROL, POWER_FACTORS, PV_OPERATION, QOS, SELECTION_CRITERIA, VENDOR_PORTALS, MULTI_BRAND_PLATFORMS, MULTI_BRAND_FAQ } from "@/data/alternatives";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/compare/best-commercial-solar-monitoring-platforms")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/compare/best-commercial-solar-monitoring-platforms",
    title: "Best commercial solar monitoring platforms — AMMP",
    description: "Comparing monitoring platforms for multi-brand commercial and industrial solar portfolios on brand coverage, KPIs, alerts, reporting, SLAs and data access.",
    faq: MULTI_BRAND_FAQ,
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="Monitoring platforms for multi-brand"
        highlight="commercial solar portfolios."
        intro="Commercial and industrial (C&I) portfolios rarely run on one inverter brand. This page sets out six criteria for choosing a platform and a fair description of the main options. AMMP is one of them, not the only good one."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "AMMP vs manufacturer portals", to: "/compare/vendor-portals" }}
      />
      <Band tone="grey">
        <SectionHeading title="Six criteria for multi-brand portfolios" />
        <FeatureGrid columns={3} features={SELECTION_CRITERIA} />
      </Band>
      <Band>
        <SectionHeading title="The platforms" />
        <AlternativesList items={[AMMP, METEOCONTROL, POWER_FACTORS, ALSOENERGY, QOS, PV_OPERATION, VENDOR_PORTALS]} />
      </Band>
      <Band tone="grey">
        <SectionHeading title="Monitoring Huawei, SMA and Sungrow in one portal" intro="Every inverter manufacturer has its own portal: Huawei has FusionSolar, SMA has Sunny Portal and Sungrow has iSolarCloud. A fleet that grew brand by brand ends up with one login per brand, different data formats and reports put together by hand." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { title: "API or datalogger, per brand", text: "For each brand, check whether data comes through the vendor's cloud API or needs a datalogger on site, and how often it updates." },
            { title: "KPI consistency across brands", text: "Performance ratio, availability and yield should be calculated the same way for every brand, or comparisons across the fleet mean little." },
            { title: "Alert routing", text: "Alerts from every brand should land in one place and reach the right person, such as in Microsoft Teams or Slack." },
          ].map((c) => (
            <div key={c.title} className="glass-soft rounded-2xl p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-12 text-xl font-medium">How each platform handles data from several brands</h3>
        <ul className="mt-4 space-y-3">
          {MULTI_BRAND_PLATFORMS.map((p) => (
            <li key={p.name} className="text-sm leading-6"><span className="font-medium">{p.name}: </span><span className="text-muted-foreground">{p.multiBrand}</span></li>
          ))}
        </ul>
        <p className="mt-8 text-sm leading-6">
          <Link to="/integrations" className="font-medium underline underline-offset-4">See all integrations</Link>
          <span className="text-muted-foreground"> · </span>
          <Link to="/solutions/solar-monitoring" className="font-medium underline underline-offset-4">Multi-brand solar monitoring</Link>
        </p>
      </Band>
      <Band>
        <SectionHeading title="Frequently asked question" />
        <Faq items={MULTI_BRAND_FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
