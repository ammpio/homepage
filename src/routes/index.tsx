import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomeSections";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({ meta: [
    { title: "AMMP — Put AI to work across your renewable energy portfolio" },
    { name: "description", content: "Meet Ray, AMMP's AI coworker: he checks performance, triages alarms, audits contracts and drafts reports across your renewable energy portfolio." },
    { property: "og:title", content: "AMMP — Put AI to work across your renewable energy portfolio" },
    { property: "og:description", content: "Meet Ray, AMMP's AI coworker: he checks performance, triages alarms, audits contracts and drafts reports across your renewable energy portfolio." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

