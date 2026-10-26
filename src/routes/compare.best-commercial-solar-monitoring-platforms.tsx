import { createFileRoute } from "@tanstack/react-router";
import { Band, PageHero, SectionHeading, FeatureGrid } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { AlternativesList } from "@/components/site/AlternativesList";
import { AMMP, ALSOENERGY, METEOCONTROL, POWER_FACTORS, PV_OPERATION, QOS, SELECTION_CRITERIA, VENDOR_PORTALS } from "@/data/alternatives";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/compare/best-commercial-solar-monitoring-platforms")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/compare/best-commercial-solar-monitoring-platforms",
    title: "Best commercial solar monitoring platforms — AMMP",
    description: "Comparing monitoring platforms for multi-brand commercial and industrial solar portfolios on brand coverage, KPIs, alerts, reporting, SLAs and data access.",
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
        secondary={{ label: "Buyer's guide", to: "/blog/$slug", params: { slug: "commercial-solar-portfolio-monitoring-software" } } as never}
      />
      <Band tone="grey">
        <SectionHeading title="Six criteria for multi-brand portfolios" />
        <FeatureGrid columns={3} features={SELECTION_CRITERIA} />
      </Band>
      <Band>
        <SectionHeading title="The platforms" intro="Short, neutral descriptions based on our published comparisons, with where each fits best." />
        <AlternativesList items={[AMMP, METEOCONTROL, POWER_FACTORS, ALSOENERGY, QOS, PV_OPERATION, VENDOR_PORTALS]} />
      </Band>
      <PageCta />
    </>
  );
}
