import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/beta")({
  head: () => ({ meta: [
    { title: "AMMP Labs — AMMP" }, { name: "description", content: "Explore new AMMP capabilities for renewable energy portfolio teams." },
    { property: "og:title", content: "AMMP Labs — AMMP" }, { property: "og:description", content: "Explore new AMMP capabilities for renewable energy portfolio teams." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("ai")} />; }
