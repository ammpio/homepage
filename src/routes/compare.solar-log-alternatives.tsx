import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { AlternativesList } from "@/components/site/AlternativesList";
import { SELECTION_CRITERIA } from "@/data/alternatives";
import { SOLAR_LOG_FAQ, SOLAR_LOG_OPTIONS } from "@/data/batch5";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/compare/solar-log-alternatives")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/compare/solar-log-alternatives",
    title: "Solar-Log alternatives for multi-site portfolio monitoring — AMMP",
    description: "A fair look at Solar-Log alternatives for multi-site solar and storage portfolios: selection criteria, what each option does and where each fits best.",
    faq: SOLAR_LOG_FAQ,
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Alternatives"
        title="Solar-Log alternatives"
        highlight="for multi-site portfolio monitoring."
        intro="Solar-Log is an on-site datalogger and monitoring solution, widely used, with the Solar-Log WEB portal. If you run many sites across several brands, here are the criteria that matter and a fair look at the main options. AMMP is one of them, not the only good one."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "See integrations", to: "/integrations" }}
      />
      <Band tone="grey">
        <SectionHeading title="What to look for" />
        <FeatureGrid columns={3} features={SELECTION_CRITERIA} />
      </Band>
      <Band>
        <SectionHeading title="The options" />
        <AlternativesList items={SOLAR_LOG_OPTIONS} />
        <Link to="/compare/best-commercial-solar-monitoring-platforms" className="mt-8 inline-flex items-center gap-1 text-sm font-medium hover:underline">Platforms for commercial and industrial portfolios <ArrowRight className="size-4" /></Link>
      </Band>
      <Band tone="grey">
        <SectionHeading title="Frequently asked questions" />
        <Faq items={SOLAR_LOG_FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
