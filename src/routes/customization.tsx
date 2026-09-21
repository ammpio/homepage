import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/customization")({
  head: () => ({ meta: [
    { title: "Custom Renewable Energy Software — AMMP" }, { name: "description", content: "Customise dashboards, KPIs, alerts, workflows and integrations in AMMP." },
    { property: "og:title", content: "Custom Renewable Energy Software — AMMP" }, { property: "og:description", content: "Customise dashboards, KPIs, alerts, workflows and integrations in AMMP." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("customization")} />; }
