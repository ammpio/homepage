import { createFileRoute, Link } from "@tanstack/react-router";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { AlternativesList } from "@/components/site/AlternativesList";
import { EPC_AMMP_FIT, EPC_CRITERIA, EPC_FAQ, OM_EPC_PLATFORMS } from "@/data/om-epc-compare";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/compare/best-epc-solar-monitoring-software")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/compare/best-epc-solar-monitoring-software",
    title: "Best monitoring software for EPCs: client reporting and portfolio visibility — AMMP",
    description: "Criteria for EPCs and ESCOs choosing solar monitoring software: multi-brand support, handover checks, guarantee tracking, client access and scheduled client reports.",
    faq: EPC_FAQ,
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="Best monitoring software for EPCs:"
        highlight="client reporting and portfolio visibility."
        intro="For EPCs and ESCOs that stay responsible for commercial and industrial (C&I) sites after handover. Six criteria for choosing a platform and a fair description of the main options. AMMP is one of them, not the only good one."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "For EPCs and installers", to: "/use-cases/epcs" }}
      />
      <Band tone="grey">
        <SectionHeading title="Six criteria for EPCs and ESCOs" />
        <FeatureGrid columns={3} features={EPC_CRITERIA} />
      </Band>
      <Band>
        <SectionHeading title="The platforms" />
        <AlternativesList items={OM_EPC_PLATFORMS} />
      </Band>
      <Band tone="grey">
        <SectionHeading title="How AMMP covers the criteria" />
        <FeatureGrid columns={3} features={EPC_AMMP_FIT} />
        <p className="mt-8 text-sm leading-6">
          <Link to="/use-cases/epcs" className="font-medium underline underline-offset-4">AMMP for EPCs and installers</Link>
          <span className="text-muted-foreground"> · </span>
          <Link to="/solutions/investor-reporting" className="font-medium underline underline-offset-4">Investor and PPA reporting</Link>
        </p>
      </Band>
      <Band>
        <SectionHeading title="Frequently asked questions" />
        <Faq items={EPC_FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
