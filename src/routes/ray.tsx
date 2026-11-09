import { assetUrl } from "@/lib/assets";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Band, PageHero } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { HeroVideo, RayDay } from "@/components/site/RaySections";
import rayCinematic from "@/assets/Ray_launch_1080p_master_subtitled.mp4.asset.json";
import rayCinematicPoster from "@/assets/ray-launch-thumbnail.webp.asset.json";
import rayPt from "@/assets/Ray_launch_PT-BR_1080p_master_subtitled.mp4.asset.json";
import rayEs from "@/assets/Ray_launch_ES-LATAM_1080p_master_subtitled.mp4.asset.json";
import { useLanguage } from "@/i18n/LanguageContext";
import { LivePostLink } from "@/components/site/LivePostLink";

export const Route = createFileRoute("/ray")({
  staticData: { sitemap: true },
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
  const vid = language === "pt" ? { src: assetUrl(rayPt), poster: "" }
    : language === "es" ? { src: assetUrl(rayEs), poster: "" }
    : { src: assetUrl(rayCinematic), poster: assetUrl(rayCinematicPoster) };
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
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-medium tracking-[-0.015em] sm:text-4xl">Root-cause analysis, with evidence</h2>
          <p className="mt-4 text-lg text-muted-foreground">When a site underperforms, Ray works out why before anyone opens a spreadsheet.</p>
          <ul className="mt-6 grid gap-3">
            {[
              ["Weather or site issue?", "Ray compares actual output with expected yield. When a site has no irradiance sensor, the platform uses backup satellite irradiance data, so a cloudy month isn't mistaken for a fault."],
              ["Neighbouring inverters", "Ray compares a device against its neighbouring inverters, for example: INV-03 produced 38% less than its neighbouring inverters."],
              ["Across every brand", "Because every brand lands in one data model, Ray can investigate underperformance across a mixed fleet, not one portal at a time."],
              ["A diagnosis the team can check", "Ray hands the team a diagnosis with the evidence behind it. People decide what happens next."],
            ].map(([title, text]) => (
              <li key={title} className="glass-soft rounded-2xl p-5">
                <p className="font-medium">{title}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
          <LivePostLink slug="why-is-my-solar-portfolio-underperforming" label="Why is my solar portfolio underperforming?" className="mt-6" />
        </div>
      </Band>

      <Band tone="grey">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-medium tracking-[-0.015em] sm:text-4xl">Rank alarms by revenue risk</h2>
          <p className="mt-4 text-lg text-muted-foreground">Not every alarm costs the same. Ray ranks open issues by what they put at risk, so the team fixes the most expensive problem first, not the loudest one.</p>
          <div className="glass-soft mt-6 rounded-2xl p-6 text-center">
            <p className="text-base font-semibold sm:text-lg">Priority = (energy at risk × value per kWh + contract penalty) ÷ time to fix</p>
          </div>
          <p className="mt-4 text-base text-muted-foreground">A small fault on a site with a strict availability guarantee can outrank a bigger one that is quick to fix. You see the reasoning behind every ranking, and people keep the decision.</p>
          <LivePostLink slug="rank-solar-alarms-by-revenue-risk" label="How to rank solar alarms by revenue risk" className="mt-6" />
        </div>
      </Band>

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
