import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Repeat } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { AlternativesList } from "@/components/site/AlternativesList";
import { AMMP, ALSOENERGY, BAZEFIELD, METEOCONTROL, QOS, SELECTION_CRITERIA, UNIVERS } from "@/data/alternatives";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/compare/power-factors-alternatives")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/compare/power-factors-alternatives",
    title: "Power Factors alternatives, and adding AI alongside it",
    description: "Power Factors alternatives for renewable portfolios, and how to add AI alongside Power Factors: run Ray on top, or switch to AMMP OS Platform.",
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Alternatives"
        title="Power Factors alternatives, and how to add"
        highlight="AI alongside Power Factors."
        intro="Power Factors is renewable asset performance management software. Whether you are reviewing options for a commercial and industrial (C&I) or utility portfolio or want to keep what you have, there are two ways to work with AMMP, and several other platforms worth a look."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "Meet Ray", to: "/ray" }}
      />
      <Band tone="grey">
        <SectionHeading title="Two ways to work with AMMP" />
        <FeatureGrid columns={2} features={[
          { icon: Bot, title: "Keep Power Factors, add Ray", text: "AMMP AI (Ray) can run on top of an existing monitoring stack such as Power Factors. Ray checks every site daily, ranks issues by impact and drafts reports, without replacing your current system." },
          { icon: Repeat, title: "Switch to AMMP OS Platform", text: "Move monitoring, alerting, ticketing, reporting and commercials to AMMP OS Platform, with Ray working on top." },
        ]} />
        <Link to="/switch" className="mt-8 inline-flex items-center gap-1 text-sm font-medium hover:underline">How switching works <ArrowRight className="size-4" /></Link>
      </Band>
      <Band>
        <SectionHeading title="What to look for" />
        <FeatureGrid columns={3} features={SELECTION_CRITERIA} />
      </Band>
      <Band tone="grey">
        <SectionHeading title="The options" intro="Short, neutral descriptions based on our published comparisons." />
        <AlternativesList items={[AMMP, METEOCONTROL, ALSOENERGY, QOS, BAZEFIELD, UNIVERS]} />
      </Band>
      <PageCta />
    </>
  );
}
