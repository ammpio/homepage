import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/compare/in-house-systems")({
  head: () => ({ meta: [
    { title: "AMMP vs In-house Systems — AMMP" }, { name: "description", content: "Compare AMMP with building and maintaining an in-house renewable energy platform." },
    { property: "og:title", content: "AMMP vs In-house Systems — AMMP" }, { property: "og:description", content: "Compare AMMP with building and maintaining an in-house renewable energy platform." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("product")} />; }
