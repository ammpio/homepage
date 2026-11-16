import { createFileRoute, Link } from "@tanstack/react-router";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { AlternativesList } from "@/components/site/AlternativesList";
import { LivePostLink } from "@/components/site/LivePostLink";
import { MINIGRID_AMMP_FIT, MINIGRID_CRITERIA, MINIGRID_FAQ, MINIGRID_OPTIONS } from "@/data/batch6";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/compare/best-mini-grid-hybrid-monitoring")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/compare/best-mini-grid-hybrid-monitoring",
    title: "Best mini-grid and hybrid monitoring platforms: solar, battery and diesel genset — AMMP",
    description: "Criteria for monitoring mini-grids and hybrid sites: solar, battery and genset in one view, data gaps, equipment without an API, alerts and financier reports.",
    faq: MINIGRID_FAQ,
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="Best mini-grid and hybrid monitoring platforms:"
        highlight="solar, battery and diesel genset."
        intro="For teams running mini-grids and hybrid sites, where solar, batteries and a diesel genset share one site and connectivity is not guaranteed. Six criteria and a fair look at the types of option. AMMP is one of them, not the only good one."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "Hybrid sites", to: "/solutions/hybrid-sites" }}
      />
      <Band tone="grey">
        <SectionHeading title="Six criteria for mini-grid and hybrid monitoring" />
        <FeatureGrid columns={3} features={MINIGRID_CRITERIA} />
      </Band>
      <Band>
        <SectionHeading title="The options" />
        <AlternativesList items={MINIGRID_OPTIONS} />
      </Band>
      <Band tone="grey">
        <SectionHeading title="How AMMP covers the criteria" />
        <FeatureGrid columns={3} features={MINIGRID_AMMP_FIT} />
        <p className="mt-8 text-sm leading-6 text-muted-foreground">
          Daystar Power runs its solar, battery and genset hybrid sites on AMMP.{" "}
          <Link to="/case-studies" className="font-medium text-foreground underline underline-offset-4">Read the Daystar Power case study</Link>.
        </p>
        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm leading-6">
          <Link to="/solutions/hybrid-sites" className="font-medium underline underline-offset-4">Hybrid sites</Link>
          <Link to="/compare/huawei" className="font-medium underline underline-offset-4">AMMP vs Huawei FusionSolar</Link>
          <Link to="/compare/best-bess-monitoring-software" className="font-medium underline underline-offset-4">BESS monitoring software compared</Link>
          <LivePostLink slug="solar-monitoring-africa-nigeria-kenya-south-africa" label="Solar monitoring in Africa: what to look for" />
        </p>
      </Band>
      <Band>
        <SectionHeading title="Frequently asked questions" />
        <Faq items={MINIGRID_FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
