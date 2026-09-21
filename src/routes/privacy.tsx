import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy — AMMP" }, { name: "description", content: "AMMP privacy information and data handling practices." },
    { property: "og:title", content: "Privacy Policy — AMMP" }, { property: "og:description", content: "AMMP privacy information and data handling practices." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("security")} />; }
