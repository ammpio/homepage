import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [
    { title: "AMMP Insights — AMMP" }, { name: "description", content: "Ideas and practical guidance for renewable energy portfolio operations." },
    { property: "og:title", content: "AMMP Insights — AMMP" }, { property: "og:description", content: "Ideas and practical guidance for renewable energy portfolio operations." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("case-studies")} />; }
