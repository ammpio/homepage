import { createFileRoute, Link } from "@tanstack/react-router";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { AlternativesList } from "@/components/site/AlternativesList";
import { EUROPE_CRITERIA, EUROPE_FAQ, EUROPE_OPTIONS } from "@/data/batch8";
import { AUTHORS } from "@/data/authors";
import { pageHead } from "@/lib/page-head";

const link = "font-medium underline underline-offset-4";

export const Route = createFileRoute("/compare/best-renewable-portfolio-management-software-europe")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/compare/best-renewable-portfolio-management-software-europe",
    title: "Best renewable energy portfolio management software in Europe: criteria and a neutral look at the options",
    description: "Six criteria for renewable portfolio management software in Europe, and a neutral look at Power Factors, Meteocontrol, Bazefield, 3E, DNV, GreenPowerMonitor and AMMP.",
    faq: EUROPE_FAQ,
    article: { author: AUTHORS.andreas, published: "2026-11-24" },
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="Best renewable energy portfolio management software in Europe"
        intro="Six criteria for choosing portfolio management software for a European renewable portfolio, and a fair look at the options. AMMP is one of them, not the only good one."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "Explore the product", to: "/product" }}
      />
      <p className="site-container -mt-4 pb-4 text-center text-sm text-muted-foreground">By {AUTHORS.andreas.name}, {AUTHORS.andreas.jobTitle}</p>
      <Band tone="grey">
        <SectionHeading title="Six criteria for portfolio management software" />
        <FeatureGrid columns={3} features={EUROPE_CRITERIA} />
      </Band>
      <Band>
        <SectionHeading title="The options" />
        <AlternativesList items={EUROPE_OPTIONS} />
      </Band>
      <Band tone="grey">
        <SectionHeading title="More comparisons" />
        <p className="flex flex-wrap gap-x-6 gap-y-2 text-sm leading-6">
          <Link to="/compare/best-solar-asset-management-software" className={link}>Solar asset management software</Link>
          <Link to="/compare/solar-wind-battery-single-platform" className={link}>Solar, wind and battery on one platform</Link>
          <Link to="/compare/meteocontrol-alternatives" className={link}>Meteocontrol alternatives</Link>
          <Link to="/compare/power-factors-alternatives" className={link}>Power Factors alternatives</Link>
          <Link to="/solutions/portfolio-benchmarking" className={link}>Portfolio benchmarking</Link>
        </p>
      </Band>
      <Band>
        <SectionHeading title="Frequently asked questions" />
        <Faq items={EUROPE_FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
