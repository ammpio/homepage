import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Battery, Briefcase, Calendar, Database, Layers, MessagesSquare, Monitor, Receipt, Sun, Users, Wind, Wrench, type LucideIcon } from "lucide-react";
import { Band, PageHero } from "@/components/site/sections";
import { BookMeeting } from "@/components/site/BookMeeting";
import { RayDay } from "@/components/site/RaySections";
import { RayIcon } from "@/components/site/RayIcon";
import { EventStrip, HendrikCard } from "@/components/event/EventParts";

export const Route = createFileRoute("/ray-demo")({
  staticData: { sitemap: false },
  head: () => ({ meta: [
    { title: "Ray demo — AMMP at Sustainable Solutions Düsseldorf" },
    { name: "description", content: "Ray joins your team: book a 20-minute demo of the AI coworker for renewable energy portfolios." },
    { name: "robots", content: "noindex" },
    { property: "og:title", content: "Ray joins your team — book a demo" },
    { property: "og:description", content: "Ray checks performance, triages alarms, audits contracts and drafts reports, in Slack, Microsoft Teams and AMMP OS." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Page,
});

const groups: { title: string; items: [string, LucideIcon][] }[] = [
  { title: "Your portfolio", items: [["Solar", Sun], ["Wind", Wind], ["Storage", Battery], ["Hybrid", Layers]] },
  { title: "Your tools", items: [["Monitoring", Monitor], ["CRM", Database], ["ERP", Receipt], ["Teams & Slack", MessagesSquare]] },
  { title: "Your teams", items: [["O&M", Wrench], ["Asset management", BarChart3], ["Finance", Briefcase], ["Executives", Users]] },
];

function Group({ g }: { g: (typeof groups)[number] }) {
  return (
    <div className="glass rounded-2xl p-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{g.title}</p>
      <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5">
        {g.items.map(([label, Icon]) => (
          <li key={label} className="flex items-center gap-1.5 text-sm"><Icon className="size-4 shrink-0 text-primary" />{label}</li>
        ))}
      </ul>
    </div>
  );
}

function Hub() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Phone: Ray on top, three groups stacked underneath */}
      <div className="lg:hidden">
        <div className="flex flex-col items-center">
          <RayIcon className="size-16" />
          <p className="mt-1 text-sm font-medium">Ray</p>
          <span aria-hidden className="h-4 w-px bg-border" />
        </div>
        <div className="space-y-2">{groups.map((g) => <Group key={g.title} g={g} />)}</div>
      </div>
      {/* Desktop: hub with thin lines */}
      <div className="relative hidden aspect-square lg:block">
        <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 size-full text-border">
          <line x1="50" y1="50" x2="50" y2="14" stroke="currentColor" strokeWidth="0.4" />
          <line x1="50" y1="50" x2="18" y2="80" stroke="currentColor" strokeWidth="0.4" />
          <line x1="50" y1="50" x2="82" y2="80" stroke="currentColor" strokeWidth="0.4" />
          <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="1 1.5" />
        </svg>
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <RayIcon className="size-24" /><p className="mt-2 font-medium">Ray</p>
        </div>
        <div className="absolute left-1/2 top-0 w-60 -translate-x-1/2"><Group g={groups[0]!} /></div>
        <div className="absolute bottom-0 left-0 w-60"><Group g={groups[1]!} /></div>
        <div className="absolute bottom-0 right-0 w-60"><Group g={groups[2]!} /></div>
      </div>
    </div>
  );
}

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Sustainable Solutions Düsseldorf · Stand P1.2"
        title="Ray joins your team."
        intro="Ray checks performance, triages alarms, audits contracts and drafts reports, with the evidence behind every answer. It works in Slack, Microsoft Teams and AMMP OS."
        primary={{ label: "Book a 20-minute demo", to: "#book" }}
        primaryVariant="pink"
        secondary={{ label: "Meet Ray", to: "/ray" }}
        aside={<Hub />}
      />
      <RayDay />
      <Band tone="grey">
        <div id="book" className="grid scroll-mt-24 gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5">
            <h2 className="flex items-center gap-2 font-display text-3xl font-medium tracking-[-0.015em] sm:text-4xl"><Calendar className="size-7 text-primary" />Book a 20-minute demo</h2>
            <HendrikCard />
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-background"><BookMeeting /></div>
        </div>
      </Band>
      <EventStrip />
    </>
  );
}
