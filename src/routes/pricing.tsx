import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "AMMP Pricing — AMMP" }, { name: "description", content: "Plans for renewable energy portfolio operations, custom workflows and AI coworkers." },
    { property: "og:title", content: "AMMP Pricing — AMMP" }, { property: "og:description", content: "Plans for renewable energy portfolio operations, custom workflows and AI coworkers." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("pricing")} />; }
