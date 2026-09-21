import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/compare/pv-operation")({
  head: () => ({ meta: [
    { title: "AMMP vs PV Operation — AMMP" }, { name: "description", content: "Compare AMMP with conventional solar operations software." },
    { property: "og:title", content: "AMMP vs PV Operation — AMMP" }, { property: "og:description", content: "Compare AMMP with conventional solar operations software." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("product")} />; }
