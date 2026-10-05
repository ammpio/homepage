import { createFileRoute } from "@tanstack/react-router";
import { PageCta } from "@/components/site/SiteShell";
import { Hero, StatsBar, BeforeLogin, ProactiveOnDemand, Details, Results } from "@/components/site/HomeSections";
import { RayDay, RayEverywhere } from "@/components/site/RaySections";

export const Route = createFileRoute("/ray")({
  head: () => ({ meta: [
    { title: "Meet Ray — AMMP's AI coworker for renewable portfolios" },
    { name: "description", content: "Ray checks performance, triages alarms, audits contracts and drafts reports across your renewable energy portfolio." },
    { property: "og:title", content: "Meet Ray — AMMP's AI coworker for renewable portfolios" },
    { property: "og:description", content: "Give your portfolio team an AI coworker grounded in trusted operational data." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: RayPage,
});

function RayPage() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <StatsBar />
      <BeforeLogin />
      <RayDay />
      <ProactiveOnDemand />
      <RayEverywhere />
      <Details />
      <Results />
      <PageCta />
    </div>
  );
}
