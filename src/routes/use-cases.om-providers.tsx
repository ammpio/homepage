import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";
import { pageData } from "@/lib/site-pages";
export const Route = createFileRoute("/use-cases/om-providers")({
  head: () => ({ meta: [
    { title: "AMMP for O&M Providers — AMMP" }, { name: "description", content: "Triage issues, manage service levels and prove outcomes across renewable energy fleets." },
    { property: "og:title", content: "AMMP for O&M Providers — AMMP" }, { property: "og:description", content: "Triage issues, manage service levels and prove outcomes across renewable energy fleets." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});
function Page(){ return <ContentPage {...pageData("product")} />; }
