import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/ai")({
  head: () => ({ meta: [
    { title: "AI Coworkers for Renewable Energy — AMMP" }, { name: "description", content: "AI coworkers grounded in your trusted renewable energy portfolio context." },
    { property: "og:title", content: "AI Coworkers for Renewable Energy — AMMP" }, { property: "og:description", content: "AI coworkers grounded in your trusted renewable energy portfolio context." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("ai")} />; }
