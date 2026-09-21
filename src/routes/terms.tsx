import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms of Service — AMMP" }, { name: "description", content: "Terms governing the use of AMMP products and services." },
    { property: "og:title", content: "Terms of Service — AMMP" }, { property: "og:description", content: "Terms governing the use of AMMP products and services." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("security")} />; }
