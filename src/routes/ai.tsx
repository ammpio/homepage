import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Band, PageHero } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { HeroVideo, RayDay } from "@/components/site/RaySections";
import rayCinematic from "@/assets/Ray_launch_1080p_master_subtitled.mp4.asset.json";
import rayCinematicPoster from "@/assets/ray-launch-thumbnail.png.asset.json";
import rayPt from "@/assets/Ray_launch_PT-BR_1080p_master_subtitled.mp4.asset.json";
import rayPtPoster from "@/assets/Ray_thumbnail_PT-BR.png.asset.json";
import rayEs from "@/assets/Ray_launch_ES-LATAM_1080p_master_subtitled.mp4.asset.json";
import rayEsPoster from "@/assets/Ray_thumbnail_ES-LATAM.png.asset.json";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/ai")({
  head: () => ({ meta: [
    { title: "Meet Ray — AMMP's AI coworker for renewable portfolios" },
    { name: "description", content: "Ray checks performance, triages alarms, audits contracts and drafts reports with the evidence behind every answer." },
    { property: "og:title", content: "Meet Ray — AMMP's AI coworker for renewable portfolios" },
    { property: "og:description", content: "Ray works in Slack, Microsoft Teams and AMMP OS." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

function Page() {
  const { language } = useLanguage();
  const vid = language === "pt" ? { src: rayPt.url, poster: rayPtPoster.url }
    : language === "es" ? { src: rayEs.url, poster: rayEsPoster.url }
    : { src: rayCinematic.url, poster: rayCinematicPoster.url };
  return (
    <>
      <PageHero
        title="Meet Ray,"
        highlight="your new AI coworker."
        intro="Ray checks performance, triages alarms, audits contracts and drafts reports, with the evidence behind every answer. It works in Slack, Microsoft Teams and AMMP OS."
        primary={{ label: "Book a walkthrough", to: "/contact" }}
      />
      <section className="pb-8"><div className="site-container"><div className="mx-auto max-w-5xl"><HeroVideo key={vid.src} src={vid.src} poster={vid.poster} /></div></div></section>
      <RayDay />

      <Band>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-[-0.015em] sm:text-4xl">Bring your own assistant</h2>
          <p className="mt-4 text-lg text-muted-foreground">Ray runs on the AMMP MCP server. Claude, Copilot or your own agent can use the same portfolio context.</p>
          <Link to="/mcp" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline">About the MCP server <ArrowRight className="size-4" /></Link>
        </div>
      </Band>

      <PageCta />
    </>
  );
}
