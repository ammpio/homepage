import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, Battery, Bell, Briefcase, Calendar, CheckCircle2, Database, FileText, Layers, ListOrdered, MessageSquare, MessagesSquare, Monitor, Receipt, ScanSearch, Sun, Users, Wind, Wrench, type LucideIcon } from "lucide-react";
import { Band, Faq, PageHero } from "@/components/site/sections";
import { BookMeeting } from "@/components/site/BookMeeting";
import { HeroVideo } from "@/components/site/RaySections";
import { RayIcon } from "@/components/site/RayIcon";
import { EventStrip, HendrikCard, IconCards, SectionTitle, StepRow } from "@/components/event/EventParts";
import { assetUrl } from "@/lib/assets";
import rayCinematic from "@/assets/Ray_launch_1080p_master_subtitled.mp4.asset.json";
import rayCinematicPoster from "@/assets/ray-launch-thumbnail.webp.asset.json";

export const Route = createFileRoute("/ray-demo")({
  staticData: { sitemap: false },
  head: () => ({ meta: [
    { title: "Ray demo — AMMP at Sustainable Solutions Düsseldorf" },
    { name: "description", content: "Meet Ray, AMMP's AI coworker. Book a 20-minute demo at Sustainable Solutions Düsseldorf, Stand P1.2." },
    { name: "robots", content: "noindex" },
    { property: "og:title", content: "Put AI to work across your energy portfolio" },
    { property: "og:description", content: "Ray reads your data, spots what matters and gets it done with your team, in Teams, Slack and AMMP OS." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Page,
});

const steps = [
  { icon: Database, title: "Reads your data", text: "Monitoring, contracts, finance." },
  { icon: ScanSearch, title: "Spots what matters, then acts", text: "Faults, losses and risks. Ray drafts the ticket, the report or the claim." },
  { icon: CheckCircle2, title: "Your team approves", text: "In Teams, Slack and AMMP OS. People keep the final say." },
];

const uses = [
  { icon: Bell, title: "Alerts", text: "Ray flags faults and trips, groups repeat alarms and opens the ticket." },
  { icon: MessageSquare, title: "Answers", text: "Ask about any site. Ray answers with the evidence behind every answer." },
  { icon: FileText, title: "Reports", text: "Ray drafts monthly and investor reports from live portfolio data." },
  { icon: ListOrdered, title: "Priorities", text: "Ray ranks open issues by revenue at risk, so the team fixes the most expensive problem first." },
];

const groups: { title: string; items: [string, LucideIcon][] }[] = [
  { title: "Your portfolio", items: [["Solar", Sun], ["Wind", Wind], ["Storage", Battery], ["Hybrid", Layers]] },
  { title: "Your tools", items: [["Monitoring", Monitor], ["CRM", Database], ["ERP", Receipt], ["Teams & Slack", MessagesSquare]] },
  { title: "Your teams", items: [["O&M", Wrench], ["Asset management", BarChart3], ["Finance", Briefcase], ["Executives", Users]] },
];

const faq = [
  { q: "Where does Ray work?", a: "Right inside AMMP OS, Microsoft Teams, and Slack. Your team can ask Ray for performance summaries or review triaged alerts in the tools they already use every day." },
  { q: "Which data does Ray use?", a: "Ray works on your portfolio data: telemetry, alarms, work orders and contracts. Ray only sees what the person asking is allowed to see in AMMP." },
  { q: "Does Ray work with my existing monitoring?", a: "Yes. Ray can run on AMMP OS or on top of an existing monitoring stack such as Meteocontrol or Power Factors." },
  { q: "How is data secured?", a: <>AMMP Technologies is ISO/IEC 27001:2022 certified. Data is encrypted in transit and at rest, and your data is never used to train external AI models. More on our <Link to="/security" className="underline">security page</Link>.</> },
  { q: "How do we get started?", a: "Book a 20-minute demo below, or meet us at Stand P1.2. We'll show Ray on a portfolio like yours." },
];

function ChatMock() {
  return (
    <div className="glass-strong mx-auto w-full max-w-md overflow-hidden rounded-2xl">
      <div className="border-b border-border/60 px-4 py-2.5 text-sm"><span className="font-medium"># portfolio-ops</span> <span className="text-muted-foreground">· Microsoft Teams</span></div>
      <div className="space-y-4 p-4">
        <div className="flex gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-muted text-xs font-semibold">You</span>
          <p className="self-center rounded-2xl rounded-tl-sm bg-muted px-3 py-2 text-sm">Why is Elmwood Mall behind budget?</p>
        </div>
        <div className="flex gap-3">
          <RayIcon className="size-9 shrink-0" />
          <div>
            <p className="text-xs font-medium">Ray</p>
            <p className="mt-1 rounded-2xl rounded-tl-sm border border-border/60 bg-background px-3 py-2 text-sm">Inverter 3 is down since Monday. Ticket's open.</p>
          </div>
        </div>
        <p className="text-right text-[11px] text-muted-foreground">Illustrative example</p>
      </div>
    </div>
  );
}

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Sustainable Solutions Düsseldorf · Stand P1.2"
        title="Put AI to work across your energy portfolio."
        intro="Meet Ray, AMMP's AI coworker. Ray reads your data, spots what matters and gets it done with your team, in Teams, Slack and AMMP OS."
        primary={{ label: "Book a 20-minute demo", to: "#book" }}
        primaryVariant="pink"
        secondary={{ label: "Meet Ray", to: "/ray" }}
        aside={<ChatMock />}
      />
      <Band tone="white">
        <SectionTitle title="How Ray works" />
        <StepRow steps={steps} />
      </Band>
      <Band tone="grey">
        <SectionTitle title="What Ray gets done" />
        <IconCards items={uses} />
      </Band>
      <Band tone="white">
        <SectionTitle title="Ray joins your team" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="glass rounded-2xl p-5">
              <p className="font-medium">{g.title}</p>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {g.items.map(([label, Icon]) => <li key={label} className="flex items-center gap-2 text-sm"><Icon className="size-4 shrink-0 text-primary" />{label}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Band>
      <Band tone="grey">
        <div className="mx-auto max-w-5xl"><HeroVideo src={assetUrl(rayCinematic)} poster={assetUrl(rayCinematicPoster)} /></div>
      </Band>
      <Band tone="white">
        <div className="mx-auto max-w-3xl"><SectionTitle title="Questions" /><Faq items={faq} /></div>
      </Band>
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
