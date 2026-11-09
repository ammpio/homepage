import { createFileRoute, Link } from "@tanstack/react-router";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { AlternativesList } from "@/components/site/AlternativesList";
import { LivePostLink } from "@/components/site/LivePostLink";
import { PPA_COMPARE_FAQ, PPA_CRITERIA, PPA_OPTIONS } from "@/data/batch5";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/compare/best-ppa-billing-software")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/compare/best-ppa-billing-software",
    title: "Best PPA billing and savings reporting software for C&I solar portfolios — AMMP",
    description: "Criteria for choosing PPA billing and savings reporting software for C&I solar: tariff coverage, auditable invoices, data quality, billing lock and client reports.",
    faq: PPA_COMPARE_FAQ,
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="Best PPA billing and savings reporting software"
        highlight="for C&I solar portfolios."
        intro="For teams invoicing commercial and industrial (C&I) solar under PPAs and proving savings to clients. Six criteria for choosing software and a fair look at the types of option. AMMP is one of them, not the only good one."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "PPA billing with AMMP", to: "/solutions/ppa-billing" }}
      />
      <Band tone="grey">
        <SectionHeading title="Six criteria for PPA billing software" />
        <FeatureGrid columns={3} features={PPA_CRITERIA} />
      </Band>
      <Band>
        <SectionHeading title="The options" />
        <AlternativesList items={PPA_OPTIONS} />
        <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm leading-6">
          <Link to="/solutions/investor-reporting" className="font-medium underline underline-offset-4">Investor and PPA reporting</Link>
          <LivePostLink slug="automated-ppa-billing-solar" label="Read: automated PPA billing for solar" />
        </p>
      </Band>
      <Band tone="grey">
        <SectionHeading title="Frequently asked questions" />
        <Faq items={PPA_COMPARE_FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
