import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { AlternativesList } from "@/components/site/AlternativesList";
import { AMMP, ALSOENERGY, BAZEFIELD, POWER_FACTORS, QOS, SELECTION_CRITERIA, UNIVERS, VENDOR_PORTALS } from "@/data/alternatives";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/compare/meteocontrol-alternatives")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/compare/meteocontrol-alternatives",
    title: "Meteocontrol alternatives: how to choose — AMMP",
    description: "A fair look at Meteocontrol alternatives for solar and storage portfolios: selection criteria, what each platform does and where each fits best.",
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Alternatives"
        title="Meteocontrol alternatives,"
        highlight="and how to choose."
        intro="Meteocontrol is an established, hardware-linked monitoring solution with a long track record in solar. If you are weighing other options for a commercial and industrial (C&I) or utility portfolio, here are the criteria that matter and a fair look at the main platforms. AMMP is one of them, not the only good one."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "AMMP vs Meteocontrol", to: "/compare/meteocontrol" }}
      />
      <Band tone="grey">
        <SectionHeading title="What to look for" />
        <FeatureGrid columns={3} features={SELECTION_CRITERIA} />
      </Band>
      <Band>
        <SectionHeading title="The options" intro="Short, neutral descriptions based on our published comparisons." />
        <AlternativesList items={[AMMP, POWER_FACTORS, ALSOENERGY, QOS, BAZEFIELD, UNIVERS, VENDOR_PORTALS]} />
        <Link to="/compare/best-commercial-solar-monitoring-platforms" className="mt-8 inline-flex items-center gap-1 text-sm font-medium hover:underline">Platforms for commercial and industrial portfolios <ArrowRight className="size-4" /></Link>
      </Band>
      <PageCta />
    </>
  );
}
