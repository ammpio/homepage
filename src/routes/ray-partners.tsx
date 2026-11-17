import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Calendar, Cloud, Cpu, Database, Plug, UserX, Users } from "lucide-react";
import { Band, PageHero } from "@/components/site/sections";
import { BookMeeting } from "@/components/site/BookMeeting";
import { RayIcon } from "@/components/site/RayIcon";
import { EventContactForm, EventStrip, HendrikCard } from "@/components/event/EventParts";

export const Route = createFileRoute("/ray-partners")({
  staticData: { sitemap: false },
  head: () => ({ meta: [
    { title: "Ray for hardware and platform makers — AMMP" },
    { name: "description", content: "Offer Ray, the AI coworker by AMMP, to your customers on top of the devices and cloud platform they already use." },
    { name: "robots", content: "noindex" },
    { property: "og:title", content: "Ray for hardware and platform makers" },
    { property: "og:description", content: "Pilot partners for 2027: offer Ray to your customers." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Page,
});

const points = [
  { icon: Database, text: "Built on data from 10,000+ sites" },
  { icon: Plug, text: "Connects through your existing cloud API" },
  { icon: UserX, text: "No AI team to build or run" },
];

function Arrow() {
  return <div className="flex justify-center py-1.5" aria-hidden><span className="grid size-7 place-items-center rounded-full bg-foreground text-background"><ArrowDown className="size-4" strokeWidth={3} /></span></div>;
}

function Step({ icon: Icon, title, sub }: { icon: typeof Cpu; title: string; sub?: string }) {
  return (
    <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
      <Icon className="size-5 shrink-0 text-primary" />
      <div><p className="font-medium">{title}</p>{sub && <p className="text-sm text-muted-foreground">{sub}</p>}</div>
    </div>
  );
}

function Flow() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <Step icon={Cpu} title="Your devices" />
      <Arrow />
      <Step icon={Cloud} title="Your cloud platform" sub="no new hardware" />
      <Arrow />
      <div className="flex items-center gap-3 rounded-2xl bg-primary px-4 py-3 text-primary-foreground shadow-lg">
        <RayIcon className="size-9 shrink-0 ring-2 ring-primary-foreground/60" />
        <p className="font-medium">Ray, the AI coworker by AMMP</p>
      </div>
      <Arrow />
      <Step icon={Users} title="Your customers" sub="in Teams, Slack or AMMP OS" />
    </div>
  );
}

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Sustainable Solutions Düsseldorf · Stand P1.2"
        title="Ray for hardware and platform makers."
        intro="Offer Ray to your customers, on top of the devices and cloud platform they already use."
        primary={{ label: "Become a pilot partner", to: "#pilot" }}
        primaryVariant="pink"
        aside={<Flow />}
      />
      <Band tone="white">
        <ul className="grid gap-4 md:grid-cols-3">
          {points.map(({ icon: Icon, text }) => (
            <li key={text} className="glass flex items-center gap-3 rounded-2xl p-5"><Icon className="size-5 shrink-0 text-primary" /><span className="font-medium">{text}</span></li>
          ))}
        </ul>
      </Band>
      <Band tone="grey">
        <div id="pilot" className="scroll-mt-24">
          <h2 className="font-display text-3xl font-medium tracking-[-0.015em] sm:text-4xl">Pilot partners for 2027</h2>
          <p className="mt-3 text-lg text-muted-foreground">We're picking a small group of OEMs to pilot Ray with.</p>
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
