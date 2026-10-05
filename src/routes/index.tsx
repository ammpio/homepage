import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "AMMP — Ray, the AI coworker for renewable energy portfolios" },
    { name: "description", content: "Ray is AMMP's AI coworker: it checks performance, triages alarms, audits contracts and drafts reports across your renewable energy portfolio." },
    { property: "og:title", content: "AMMP — Ray, the AI coworker for renewable energy portfolios" },
    { property: "og:description", content: "Give your portfolio team an AI coworker grounded in trusted operational data." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

