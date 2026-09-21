import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/demo")({
  head: () => ({ meta: [
    { title: "Explore the AMMP Demo — AMMP" }, { name: "description", content: "See how AMMP OS and AI coworkers help renewable energy portfolio teams." },
    { property: "og:title", content: "Explore the AMMP Demo — AMMP" }, { property: "og:description", content: "See how AMMP OS and AI coworkers help renewable energy portfolio teams." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("product")} />; }
