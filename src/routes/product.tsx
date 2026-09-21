import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/product")({
  head: () => ({ meta: [
    { title: "Renewable Energy Portfolio Software — AMMP" }, { name: "description", content: "Monitor, investigate and report across every renewable energy asset with AMMP OS." },
    { property: "og:title", content: "Renewable Energy Portfolio Software — AMMP" }, { property: "og:description", content: "Monitor, investigate and report across every renewable energy asset with AMMP OS." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("product")} />; }
