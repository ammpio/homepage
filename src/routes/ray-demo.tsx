import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { Band } from "@/components/site/sections";
import { BookMeeting } from "@/components/site/BookMeeting";
import { RayIcon } from "@/components/site/RayIcon";
import { EventStrip, HendrikCard, Pill } from "@/components/event/EventParts";

export const Route = createFileRoute("/ray-demo")({
  staticData: { sitemap: false },
  head: () => ({ meta: [
    { title: "Ray demo — AMMP at Sustainable Solutions Düsseldorf" },
    { name: "description", content: "Ray knows before your team logs on. Book a 20-minute demo of the AI coworker for renewable energy portfolios." },
    { name: "robots", content: "noindex" },
    { property: "og:title", content: "What did you miss last night? Meet Ray" },
    { property: "og:description", content: "Your AI coworker for renewable energy portfolios, in Microsoft Teams or Slack." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Page,
});

const cards = [
  ["Performance vs. budget", "Tracks every site against its financial model and explains why it's behind."],
  ["What to fix first", "Turns repeat alarms into one ranked fix list for your O&M team."],
  ["O&M contract checks", "Checks availability and response times against the contract and drafts the claims."],
  ["Investor reports", "Drafts monthly reports from live portfolio data, in each stakeholder's format."],
];

function RayMsg({ tag, text, evidence }: { tag: string; text: string; evidence: string }) {
  return (
    <div className="flex gap-3">
      <RayIcon className="size-9 shrink-0" />
      <div className="min-w-0">
        <p className="flex flex-wrap items-center gap-2 text-sm"><span className="font-medium">Ray</span><span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">{tag}</span></p>
        <p className="mt-1 text-sm leading-6">{text}</p>
        <p className="mt-1 text-xs text-muted-foreground">Evidence: {evidence}</p>
      </div>
    </div>
  );
}

function Page() {
  return (
    <>
      <section className="luminous-hero relative overflow-hidden pb-12 pt-10 md:py-20">
        <div aria-hidden className="glow-orb absolute -right-32 -top-48 size-[30rem] bg-glow-magenta/30" />
        <div className="site-container relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Sustainable Solutions Düsseldorf · Stand P1.2</p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.08] tracking-[-0.018em] sm:text-5xl">
              What did you miss <span className="event-highlight">last night?</span>
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">Ray knows before your team logs on. Your AI coworker for renewable energy portfolios, in Microsoft Teams or Slack.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#book" className="button button-pink">Book a 20-minute demo <ArrowRight className="size-4" /></a>
              <Link to="/ray" className="button button-ghost">Learn more about Ray</Link>
            </div>
          </div>
          <div className="glass-strong overflow-hidden rounded-2xl">
            <div className="border-b border-border/60 px-4 py-3 text-sm"><span className="font-medium"># portfolio-ops</span> <span className="text-muted-foreground">/ Microsoft Teams</span></div>
            <div className="space-y-5 p-4 sm:p-5">
              <RayMsg tag="Proactive alerts" text="Two inverters at Solarpark Valverde tripped at 11:40. Ticket drafted, Tom from O&M looped in." evidence="inverter logs · alarm history" />
              <div className="flex gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-muted text-sm font-medium">A</span>
                <div><p className="text-sm font-medium">Anna</p><p className="mt-1 text-sm leading-6">@Ray did Valverde hit its availability guarantee last month?</p></div>
              </div>
              <RayMsg tag="Answers questions" text="Yes: 98.4% against a 98% guarantee." evidence="availability data · O&M contract" />
            </div>
          </div>
        </div>
      </section>

      <Band tone="white">
        <h2 className="text-3xl font-medium tracking-tight">What Ray does for your team</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([t, d]) => (
            <div key={t} className="glass rounded-2xl p-5"><h3 className="font-medium">{t}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p></div>
          ))}
        </div>
      </Band>

      <Band tone="grey">
        <h2 className="text-3xl font-medium tracking-tight">Works where your team works</h2>
        <p className="mt-3 text-muted-foreground">On AMMP OS or on top of your existing monitoring.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Pill>Microsoft Teams</Pill><Pill>Slack</Pill><Pill>AMMP OS</Pill><Pill pink>ISO 27001</Pill>
        </div>
        <p className="mt-8 font-medium">30+ integrations</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["SMA", "Huawei", "SolarEdge", "Sungrow", "Fronius", "Victron", "SigEnergy", "+ more"].map((b) => <Pill key={b}>{b}</Pill>)}
        </div>
      </Band>

      <Band tone="white">
        <div id="book" className="grid scroll-mt-24 gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5">
            <h2 className="flex items-center gap-2 text-3xl font-medium tracking-tight"><Calendar className="size-7 text-primary" />Book a 20-minute demo</h2>
            <HendrikCard />
            <Link to="/ray" className="inline-flex items-center gap-1 text-sm font-medium hover:text-primary">Learn more about Ray <ArrowRight className="size-4" /></Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-background"><BookMeeting /></div>
        </div>
      </Band>
      <EventStrip />
    </>
  );
}
