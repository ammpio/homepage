import { createFileRoute, Link } from "@tanstack/react-router";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { AlternativesList } from "@/components/site/AlternativesList";
import { LivePostLink } from "@/components/site/LivePostLink";
import { BESS_AMMP_FIT, BESS_CRITERIA, BESS_FAQ, BESS_OPTIONS } from "@/data/batch5";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/compare/best-bess-monitoring-software")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/compare/best-bess-monitoring-software",
    title: "Best BESS monitoring software for commercial and industrial sites — AMMP",
    description: "Criteria for choosing battery storage monitoring software for C&I sites: state of charge, battery brands, hybrid view, time-of-use checks, alerts and reports.",
    faq: BESS_FAQ,
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="Best BESS monitoring software"
        highlight="for commercial and industrial sites."
        intro="For teams running battery storage on commercial and industrial (C&I) sites, often next to solar and a diesel genset. Six criteria for choosing software and a fair look at the types of option. AMMP is one of them, not the only good one."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "Hybrid sites", to: "/solutions/hybrid-sites" }}
      />
      <Band tone="grey">
        <SectionHeading title="Six criteria for battery storage monitoring" />
        <FeatureGrid columns={3} features={BESS_CRITERIA} />
      </Band>
      <Band>
        <SectionHeading title="The options" />
        <AlternativesList items={BESS_OPTIONS} />
      </Band>
      <Band tone="grey">
        <SectionHeading title="How AMMP covers the criteria" />
        <FeatureGrid columns={3} features={BESS_AMMP_FIT} />
        <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm leading-6">
          <Link to="/solutions/hybrid-sites" className="font-medium underline underline-offset-4">Hybrid sites</Link>
          <Link to="/south-africa" className="font-medium underline underline-offset-4">AMMP in South Africa</Link>
          <LivePostLink slug="battery-monitoring-cheat-sheet" label="Battery monitoring cheat sheet" />
        </p>
      </Band>
      <Band>
        <SectionHeading title="Frequently asked questions" />
        <Faq items={BESS_FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
