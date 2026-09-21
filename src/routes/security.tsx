import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/security")({
  head: () => ({ meta: [
    { title: "Security at AMMP — AMMP" }, { name: "description", content: "How AMMP protects renewable energy portfolio data and AI workflows." },
    { property: "og:title", content: "Security at AMMP — AMMP" }, { property: "og:description", content: "How AMMP protects renewable energy portfolio data and AI workflows." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("security")} />; }
