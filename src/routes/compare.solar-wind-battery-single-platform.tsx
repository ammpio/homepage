import { createFileRoute, Link } from "@tanstack/react-router";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { AlternativesList } from "@/components/site/AlternativesList";
import { MIXED_CRITERIA, MIXED_FAQ, MIXED_OPTIONS } from "@/data/batch8";
import { AUTHORS } from "@/data/authors";
import { pageHead } from "@/lib/page-head";

const link = "font-medium underline underline-offset-4";

export const Route = createFileRoute("/compare/solar-wind-battery-single-platform")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/compare/solar-wind-battery-single-platform",
    title: "Single platform for solar, wind and battery assets: what to look for in a mixed renewable portfolio",
    description: "Six criteria for one platform across solar, wind and battery storage, and a neutral look at the options for mixed renewable portfolios.",
    faq: MIXED_FAQ,
    article: { author: AUTHORS.andreas, published: "2026-11-24" },
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Platform comparison"
        title="One platform for solar, wind and battery assets"
        intro="Running a mixed renewable portfolio in several tools makes sites hard to compare. Here are six things to check in a single platform, and a fair look at the options."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "Explore the product", to: "/product" }}
      />
      <p className="site-container -mt-4 pb-4 text-center text-sm text-muted-foreground">By {AUTHORS.andreas.name}, {AUTHORS.andreas.jobTitle}</p>
      <Band tone="grey">
        <SectionHeading title="What to look for in a mixed portfolio" />
        <FeatureGrid columns={3} features={MIXED_CRITERIA} />
      </Band>
      <Band>
        <SectionHeading title="The options" />
        <AlternativesList items={MIXED_OPTIONS} />
      </Band>
      <Band tone="grey">
        <SectionHeading title="More comparisons" />
        <p className="flex flex-wrap gap-x-6 gap-y-2 text-sm leading-6">
          <Link to="/compare/best-renewable-portfolio-management-software-europe" className={link}>Portfolio management software in Europe</Link>
          <Link to="/compare/best-bess-monitoring-software" className={link}>BESS monitoring software</Link>
          <Link to="/compare/best-mini-grid-hybrid-monitoring" className={link}>Mini-grid and hybrid monitoring</Link>
          <Link to="/integrations" className={link}>Integrations</Link>
        </p>
      </Band>
      <Band>
        <SectionHeading title="Frequently asked questions" />
        <Faq items={MIXED_FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
