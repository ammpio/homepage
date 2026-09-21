import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About AMMP — AMMP" }, { name: "description", content: "Meet the company building the operating layer for the renewable energy transition." },
    { property: "og:title", content: "About AMMP — AMMP" }, { property: "og:description", content: "Meet the company building the operating layer for the renewable energy transition." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("about")} />; }
