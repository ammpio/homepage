import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { AlternativesList } from "@/components/site/AlternativesList";
import { PFSA_CRITERIA, PFSA_FAQ, PFSA_OPTIONS, PFSA_SWITCH_MAP } from "@/data/batch7";
import { AUTHORS } from "@/data/authors";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/compare/power-factors-alternatives-south-africa")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/compare/power-factors-alternatives-south-africa",
    title: "Power Factors alternatives for South African solar and battery portfolios",
    description: "A neutral look at Power Factors alternatives in South Africa: load shedding and backup, multi-brand fleets, SLA tracking, investor reports and local tariffs.",
    faq: PFSA_FAQ,
    article: { author: AUTHORS.andreas, published: "2026-11-18" },
  }),
  component: Page,
});

const link = "inline-flex items-center gap-1 text-sm font-medium hover:underline";

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Alternatives"
        title="Power Factors alternatives for South African"
        highlight="solar and battery portfolios."
        intro="Power Factors is renewable asset performance management software. Teams already using it can keep it and add AMMP AI (Ray) on top. For South African portfolios reviewing their options, here are five things to check and a fair look at the platforms. AMMP is one of them, not the only good one."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "AMMP in South Africa", to: "/south-africa" }}
      />
      <p className="site-container -mt-4 pb-4 text-center text-sm text-muted-foreground">By {AUTHORS.andreas.name}, {AUTHORS.andreas.jobTitle}</p>
      <Band tone="grey">
        <SectionHeading title="What South African portfolios should look for" />
        <FeatureGrid columns={3} features={PFSA_CRITERIA} />
      </Band>
      <Band>
        <SectionHeading title="The options" />
        <AlternativesList items={PFSA_OPTIONS} />
      </Band>
      <Band tone="grey">
        <SectionHeading title="Moving from another platform" intro="AMMP connects to 30+ equipment brands with no hardware changes, and our team handles integration and data migration. Four things to map:" />
        <FeatureGrid columns={4} features={PFSA_SWITCH_MAP} />
        <div className="mt-8 flex flex-wrap gap-6">
          <Link to="/switch" className={link}>How switching works <ArrowRight className="size-4" /></Link>
          <Link to="/compare/power-factors-alternatives" className={link}>Power Factors alternatives worldwide <ArrowRight className="size-4" /></Link>
          <Link to="/solutions/backup-power-monitoring" className={link}>Backup power monitoring <ArrowRight className="size-4" /></Link>
        </div>
      </Band>
      <Band>
        <SectionHeading title="Frequently asked questions" />
        <Faq items={PFSA_FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
