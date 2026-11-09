import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { LivePostLink } from "@/components/site/LivePostLink";
import { PPA_FAQ, PPA_FEATURES } from "@/data/batch5";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/solutions/ppa-billing")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/solutions/ppa-billing",
    title: "PPA billing and savings verification for C&I solar — AMMP",
    description: "Billing-grade savings and PPA invoices from meter, tariff and contract data, with a monthly data freeze and scheduled delivery with your branding on reports.",
    faq: PPA_FAQ,
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="PPA billing"
        title="PPA billing and savings verification"
        highlight="for C&I solar."
        intro="AMMP turns meter, tariff and contract data into billing-grade savings and PPA invoices for commercial and industrial (C&I) solar portfolios, from the same data you monitor with."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "Investor reporting", to: "/solutions/investor-reporting" }}
      />
      <Band tone="grey">
        <SectionHeading title="From meter to invoice" />
        <FeatureGrid columns={3} features={PPA_FEATURES} />
        <div className="mt-8 flex flex-wrap gap-6">
          <LivePostLink slug="automated-ppa-billing-solar" label="Read: automated PPA billing for solar" />
          <Link to="/compare/best-ppa-billing-software" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">PPA billing software compared <ArrowRight className="size-4" /></Link>
          <Link to="/solutions/investor-reporting" className="inline-flex items-center gap-1 text-sm font-medium hover:underline">Investor and PPA reporting <ArrowRight className="size-4" /></Link>
        </div>
      </Band>
      <Band>
        <SectionHeading title="Questions about PPA billing" />
        <Faq items={PPA_FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
