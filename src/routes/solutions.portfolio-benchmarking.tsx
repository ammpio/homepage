import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { LivePostLink } from "@/components/site/LivePostLink";
import { BENCH_FAQ, BENCH_FEATURES } from "@/data/batch5";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/solutions/portfolio-benchmarking")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/solutions/portfolio-benchmarking",
    title: "Benchmark solar KPIs across sites and brands — AMMP",
    description: "Compare performance ratio (IEC 61724), availability and losses across every site and brand, in one data model with energy-weighted portfolio KPIs.",
    faq: BENCH_FAQ,
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio benchmarking"
        title="Benchmark solar KPIs"
        highlight="across sites and brands."
        intro="AMMP brings every brand into one data model, so performance ratio, availability and losses are calculated the same way for every site, from the portfolio down to a single device."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "Solar monitoring", to: "/solutions/solar-monitoring" }}
      />
      <Band tone="grey">
        <SectionHeading title="Compare like with like" />
        <FeatureGrid columns={3} features={BENCH_FEATURES} />
        <div className="mt-8 flex flex-wrap gap-6">
          <Link to="/product/documentation/$slug" params={{ slug: "kpi-calculations" }} className="inline-flex items-center gap-1 text-sm font-medium hover:underline">How AMMP calculates KPIs <ArrowRight className="size-4" /></Link>
          <LivePostLink slug="calculate-performance-ratio-solar-portfolio" label="Read: how to calculate performance ratio across a portfolio" />
        </div>
      </Band>
      <Band>
        <SectionHeading title="Questions about benchmarking" />
        <Faq items={BENCH_FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
