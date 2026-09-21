import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/compare/vendor-portals")({
  head: () => ({ meta: [
    { title: "AMMP vs Vendor Portals — AMMP" }, { name: "description", content: "Unify mixed renewable energy technologies instead of switching between vendor portals." },
    { property: "og:title", content: "AMMP vs Vendor Portals — AMMP" }, { property: "og:description", content: "Unify mixed renewable energy technologies instead of switching between vendor portals." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("integrations")} />; }
