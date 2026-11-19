import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Calendar, Cloud, Cpu, Lightbulb, Plug, Users, type LucideIcon } from "lucide-react";
import { Band, Faq, PageHero } from "@/components/site/sections";
import { BookMeeting } from "@/components/site/BookMeeting";
import { TeamUseCases, TechCoverage } from "@/components/event/UseCaseBlocks";
import { RayIcon } from "@/components/site/RayIcon";
import { EventContactForm, EventStrip, HendrikCard, IconCards, SectionTitle, } from "@/components/event/EventParts";

export const Route = createFileRoute("/ssd26-partners")({
  staticData: { sitemap: false },
  head: () => ({ meta: [
    { title: "AMMP at Sustainable Solutions Düsseldorf 2026 – Ray for OEM partners" },
    { name: "description", content: "AMMP at Sustainable Solutions Düsseldorf 2026 (2–3 Dec, Hall 13/14, Stand P1.2): offer Ray, AMMP's AI coworker, on top of the devices and cloud platform your customers already use." },
    { name: "robots", content: "noindex" },
    { property: "og:title", content: "Give your customers an AI coworker" },
    { property: "og:description", content: "Pilot partners for 2027: offer Ray on top of your devices and cloud platform." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Page,
});

const flow = [
  ["Inverter 4 tripped", "Ticket opened"],
  ["Monthly report due", "Draft ready"],
  ["Yield below budget", "Cause found"],
  ["Why is my yield down?", "Answered"],
];

const stats = [
  ["10,000+", "sites already run on AMMP"],
  ["1", "API connection to your cloud"],
  ["0", "AI engineers to hire"],
];

const offers = [
  { icon: Cpu, title: "Embedded AI agents", text: "Ray works inside the tools your customers already use: Microsoft Teams, Slack and AMMP OS." },
  { icon: Plug, title: "MCP servers", text: "Connect AI assistants to your customers' site data through AMMP's MCP server." },
  { icon: Lightbulb, title: "AI strategy" },
];

const faq = [
  { q: "What do you need from us?", a: "Access to your cloud API. AMMP connects through APIs to manufacturers' cloud platforms, so no additional hardware is needed." },
  { q: "Where do customers use Ray?", a: "In Microsoft Teams, Slack and AMMP OS." },
  { q: "How is data secured?", a: <>AMMP Technologies is ISO/IEC 27001:2022 certified. Data is encrypted in transit and at rest, and customer data is never used to train external AI models. More on our <Link to="/security" className="underline">security page</Link>.</> },
  { q: "Who do we talk to?", a: "Hendrik Broering, CPO & Co-Founder: hendrik.broering@ammp.io. Or meet us at Stand P1.2." },
];

function Arrow() {
  return <div className="flex justify-center py-3" aria-hidden><span className="grid size-7 place-items-center rounded-full bg-foreground text-background"><ArrowDown className="size-4" strokeWidth={3} /></span></div>;
}

function Step({ icon: Icon, title, sub }: { icon: LucideIcon; title: string; sub?: string }) {
  return (
    <div className="glass flex items-center justify-center gap-3 rounded-2xl px-4 py-3 text-center">
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
      <Step icon={Cloud} title="Your cloud platform" />
      <Arrow />
      <div className="flex items-center justify-center gap-3 rounded-2xl bg-primary px-4 py-3 text-primary-foreground shadow-lg">
        <RayIcon className="size-9 shrink-0 ring-2 ring-primary-foreground/60" />
        <p className="font-medium">Ray, the AI coworker by AMMP</p>
      </div>
      <Arrow />
      <Step icon={Users} title="Your customers" />
    </div>
  );
}

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For hardware & platform makers"
        title="AI is reshaping monitoring. We help OEMs bring it to their users."
        intro="Offer Ray on top of the devices and cloud platform your customers already use. No new hardware."
        stacked
        aside={<div><Flow /><div className="mt-8 flex justify-center"><a href="#pilot" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg hover:opacity-90">Become a pilot partner</a></div></div>}
      />
      <Band tone="white">
        <SectionTitle title="Ray doesn't wait to be asked." intro="It spots the issue, does the work, and answers when asked." />
        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {flow.map(([from, to]) => (
            <div key={from} className="glass grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl px-4 py-3 text-sm sm:text-base">
              <p className="text-right">{from}</p>
              <ArrowRight className="size-4 text-primary" aria-hidden />
              <p className="font-medium">{to}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {stats.map(([n, l]) => (
            <div key={l} className="glass rounded-2xl p-6 text-center">
              <p className="font-display text-4xl font-medium">{n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </Band>
      <Band tone="grey">
        <SectionTitle title="We help OEMs bring AI to their users" />
        <IconCards items={offers} columns={3} />
      </Band>
      <Band tone="white">
        <SectionTitle title="Who Ray helps at your customers" intro="Your customers run teams that need answers from your device data every day." />
        <TeamUseCases compact />
      </Band>
      <Band tone="grey">
        <SectionTitle title="Works with your devices, and the rest of the fleet" intro="AMMP connects through your cloud API, so no additional hardware is needed." />
        <TechCoverage oem />
      </Band>
      <Band tone="white">
        <div className="mx-auto max-w-3xl"><SectionTitle title="Questions" /><Faq items={faq} /><p className="mt-8 text-center text-sm"><Link to="/faq" className="font-medium underline">Read the full FAQ</Link></p></div>
      </Band>
      <Band tone="grey">
        <div id="pilot" className="scroll-mt-24">
          <SectionTitle title="Pilot partners for 2027" intro="We're picking a small group of OEMs to pilot Ray with." />
          <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="space-y-5">
              <div className="glass-strong rounded-2xl p-5 sm:p-6"><EventContactForm sourcePage="/ssd26-partners" withDeviceTypes /></div>
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
