import { createFileRoute, Link } from "@tanstack/react-router";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { AlternativesList } from "@/components/site/AlternativesList";
import { ASSETMGMT_AMMP_FIT, ASSETMGMT_CRITERIA, ASSETMGMT_FAQ, ASSETMGMT_OPTIONS } from "@/data/batch6";
import { pageHead } from "@/lib/page-head";

const link = "font-medium underline underline-offset-4";

export const Route = createFileRoute("/compare/best-solar-asset-management-software")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/compare/best-solar-asset-management-software",
    title: "Best solar asset management software in 2026: criteria and a neutral look at the main platforms — AMMP",
    description: "Eight criteria for solar asset management software, from multi-brand data and IEC 61724 KPIs to SLA tracking, PPA and investor reporting, AI and data access.",
    faq: ASSETMGMT_FAQ,
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="Best solar asset management software in 2026:"
        highlight="criteria and a neutral look at the main platforms."
        intro="Eight criteria for choosing solar asset management software, and a fair look at the main platforms and types of option. AMMP is one of them, not the only good one."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "Explore the product", to: "/product" }}
      />
      <Band tone="grey">
        <SectionHeading title="Eight criteria for solar asset management software" />
        <FeatureGrid columns={4} features={ASSETMGMT_CRITERIA} />
      </Band>
      <Band>
        <SectionHeading title="The main platforms" />
        <AlternativesList items={ASSETMGMT_OPTIONS} />
        <p className="mt-6 text-sm leading-6 text-muted-foreground">
          Manufacturer portals compared one by one:{" "}
          <Link to="/compare/sma" className={link}>SMA</Link>,{" "}
          <Link to="/compare/sungrow" className={link}>Sungrow</Link>,{" "}
          <Link to="/compare/solaredge" className={link}>SolarEdge</Link>,{" "}
          <Link to="/compare/fronius" className={link}>Fronius</Link>,{" "}
          <Link to="/compare/goodwe" className={link}>GoodWe</Link>,{" "}
          <Link to="/compare/growatt" className={link}>Growatt</Link>,{" "}
          <Link to="/compare/victron" className={link}>Victron</Link>.
        </p>
      </Band>
      <Band tone="grey">
        <SectionHeading title="How AMMP covers the criteria" />
        <FeatureGrid columns={3} features={ASSETMGMT_AMMP_FIT} />
        <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm leading-6">
          <Link to="/product/documentation/$slug" params={{ slug: "kpi-calculations" }} className={link}>How AMMP calculates KPIs</Link>
          <Link to="/solutions/om-sla-tracking" className={link}>O&M SLA tracking</Link>
          <Link to="/solutions/ppa-billing" className={link}>PPA billing</Link>
          <Link to="/solutions/investor-reporting" className={link}>Investor reporting</Link>
          <Link to="/solutions/portfolio-benchmarking" className={link}>Portfolio benchmarking</Link>
          <Link to="/solutions/hybrid-sites" className={link}>Hybrid sites</Link>
        </p>
      </Band>
      <Band>
        <SectionHeading title="More comparisons" />
        <p className="flex flex-wrap gap-x-6 gap-y-2 text-sm leading-6">
          <Link to="/compare/best-commercial-solar-monitoring-platforms" className={link}>Commercial solar monitoring platforms</Link>
          <Link to="/compare/best-solar-om-platforms" className={link}>Solar and battery O&M platforms</Link>
          <Link to="/compare/best-epc-solar-monitoring-software" className={link}>Monitoring software for EPCs</Link>
          <Link to="/compare/best-bess-monitoring-software" className={link}>BESS monitoring software</Link>
          <Link to="/compare/best-ppa-billing-software" className={link}>PPA billing software</Link>
          <Link to="/compare/best-ai-tools-solar-asset-managers" className={link}>AI tools for solar asset managers</Link>
          <Link to="/compare/best-mini-grid-hybrid-monitoring" className={link}>Mini-grid and hybrid monitoring</Link>
        </p>
      </Band>
      <Band tone="grey">
        <SectionHeading title="Frequently asked questions" />
        <Faq items={ASSETMGMT_FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
