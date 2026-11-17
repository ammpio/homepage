import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Calendar } from "lucide-react";
import { Band } from "@/components/site/sections";
import { BookMeeting } from "@/components/site/BookMeeting";
import { RayIcon } from "@/components/site/RayIcon";
import { EventContactForm, EventStrip, HendrikCard, Pill } from "@/components/event/EventParts";

export const Route = createFileRoute("/ray-partners")({
  staticData: { sitemap: false },
  head: () => ({ meta: [
    { title: "Ray for hardware & platform makers — AMMP" },
    { name: "description", content: "Offer Ray, the AI coworker by AMMP, to your customers on top of the devices and cloud platform they already use." },
    { name: "robots", content: "noindex" },
    { property: "og:title", content: "Give your hardware an AI coworker" },
    { property: "og:description", content: "Pilot partners for 2027: offer Ray to your fleet customers." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Page,
});

const steps = [
  "Connects through your existing cloud API. We already integrate 30+ brands.",
  "Answers in Microsoft Teams, Slack or inside your own portal.",
  "Cites the telemetry, alarms and contract terms behind every answer.",
];
const tiles = ["An AI feature you can sell now", "Stickier fleet customers", "No AI team to build or run", "ISO 27001-certified data handling"];

function Arrow() {
  return <div className="flex justify-center py-2" aria-hidden><span className="grid size-8 place-items-center rounded-full bg-foreground text-background"><ArrowDown className="size-5" strokeWidth={3} /></span></div>;
}

function Page() {
  return (
    <>
      <section className="luminous-hero relative overflow-hidden pb-12 pt-10 md:py-20">
        <div aria-hidden className="glow-orb absolute -right-32 -top-48 size-[30rem] bg-glow-magenta/30" />
        <div className="site-container relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">For energy hardware & platform makers</p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.08] tracking-[-0.018em] sm:text-5xl">
              Give your hardware an <span className="event-highlight">AI coworker.</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Offer Ray to your customers, on top of the devices and cloud platform they already use.</p>
            <a href="#pilot" className="button button-pink mt-7">Become a pilot partner <ArrowRight className="size-4" /></a>
          </div>
          <div className="mx-auto w-full max-w-md">
            <div className="glass rounded-2xl p-4">
              <p className="font-medium">Your devices</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Inverters", "Batteries", "Hybrid controllers", "Wind", "Gensets", "Meters", "Dataloggers"].map((d) => <Pill key={d}>{d}</Pill>)}
              </div>
            </div>
            <Arrow />
            <div className="glass rounded-2xl p-4"><p className="font-medium">Your cloud or monitoring platform</p><p className="text-sm text-muted-foreground">no new hardware</p></div>
            <Arrow />
            <div className="flex items-center gap-3 rounded-2xl bg-primary p-4 text-primary-foreground shadow-lg">
              <RayIcon className="size-11 shrink-0 ring-2 ring-primary-foreground/60" />
              <p className="font-medium">Ray, the AI coworker by AMMP</p>
            </div>
            <Arrow />
            <div className="glass rounded-2xl p-4"><p className="font-medium">Your customers</p><p className="text-sm text-muted-foreground">in Teams, Slack or your portal</p></div>
          </div>
        </div>
      </section>

      <Band tone="white">
        <h2 className="text-3xl font-medium tracking-tight">Why partner with AMMP</h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">Your customers are asking what your platform does with AI. Building an agent that understands real fleet data takes years. Ray already runs on data from 10,000+ sites.</p>
        <h2 className="mt-14 text-3xl font-medium tracking-tight">How it works</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s} className="glass flex gap-4 rounded-2xl p-5">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-foreground font-medium text-background">{i + 1}</span>
              <p className="text-sm leading-6">{s}</p>
            </li>
          ))}
        </ol>
      </Band>

      <Band tone="grey">
        <h2 className="text-3xl font-medium tracking-tight">What you get</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t) => <div key={t} className="glass rounded-2xl p-5 font-medium">{t}</div>)}
        </div>
      </Band>

      <Band tone="white">
        <div id="pilot" className="scroll-mt-24">
          <h2 className="text-3xl font-medium tracking-tight">Pilot partners for 2027</h2>
          <p className="mt-3 text-muted-foreground">We're picking a small group of OEMs to pilot Ray with.</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="space-y-5">
              <div className="glass-strong rounded-2xl p-5 sm:p-6"><EventContactForm sourcePage="/ray-partners" withDeviceTypes /></div>
              <HendrikCard />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/50 bg-background">
              <p className="flex items-center gap-2 px-5 pt-5 font-medium"><Calendar className="size-5 text-primary" />Book a meeting</p>
              <BookMeeting className="mt-4" />
            </div>
          </div>
        </div>
      </Band>
      <EventStrip />
    </>
  );
}
