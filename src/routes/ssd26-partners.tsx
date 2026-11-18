import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, Bell, Calendar, Cloud, Cpu, Database, FileText, ListOrdered, MessageSquare, Plug, PlugZap, Search, ShieldCheck, UserX, Users, Handshake, type LucideIcon } from "lucide-react";
import { Band, Faq, PageHero } from "@/components/site/sections";
import { BookMeeting } from "@/components/site/BookMeeting";
import { RayIcon } from "@/components/site/RayIcon";
import { EventContactForm, EventStrip, HendrikCard, IconCards, SectionTitle, StepRow } from "@/components/event/EventParts";

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

const why = [
  { icon: Database, title: "Built on data from 10,000+ sites" },
  { icon: Plug, title: "Connects through your cloud API" },
  { icon: UserX, title: "No in-house AI team needed" },
  { icon: ShieldCheck, title: "ISO 27001-certified" },
];

const uses = [
  { icon: Bell, title: "Alerts", text: "Your customers hear about faults and trips, with the ticket already open." },
  { icon: MessageSquare, title: "Answers", text: "Your customers ask about any site and get the evidence behind every answer." },
  { icon: FileText, title: "Reports", text: "Your customers get monthly and investor reports drafted from live data." },
  { icon: ListOrdered, title: "Priorities", text: "Your customers fix the most expensive problem first, not the loudest one." },
];

const pilot = [
  { icon: PlugZap, title: "Connect", text: "We connect to your cloud API." },
  { icon: Search, title: "Run", text: "Ray runs on a group of your customers' sites." },
  { icon: Handshake, title: "Review", text: "We review the results together and agree on next steps." },
];

const faq = [
  { q: "What do you need from us?", a: "Access to your cloud API. AMMP connects through APIs to manufacturers' cloud platforms, so no additional hardware is needed." },
  { q: "Where do customers use Ray?", a: "In Microsoft Teams, Slack and AMMP OS." },
  { q: "How is data secured?", a: <>AMMP Technologies is ISO/IEC 27001:2022 certified. Data is encrypted in transit and at rest, and customer data is never used to train external AI models. More on our <Link to="/security" className="underline">security page</Link>.</> },
  { q: "Who do we talk to?", a: "Hendrik Broering, CPO & Co-Founder: hendrik.broering@ammp.io. Or meet us at Stand P1.2." },
];

function Arrow() {
  return <div className="flex justify-center py-1.5" aria-hidden><span className="grid size-7 place-items-center rounded-full bg-foreground text-background"><ArrowDown className="size-4" strokeWidth={3} /></span></div>;
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
        eyebrow="Sustainable Solutions Düsseldorf · Hall 13/14, Stand P1.2"
        title="Give your customers an AI coworker."
        intro="Offer Ray on top of the devices and cloud platform your customers already use. No new hardware."
        primary={{ label: "Become a pilot partner", to: "#pilot" }}
        primaryVariant="pink"
        aside={<Flow />}
      />
      <Band tone="white">
        <SectionTitle title="Why partner with AMMP" />
        <IconCards items={why} />
      </Band>
      <Band tone="grey">
        <SectionTitle title="What your customers get" />
        <IconCards items={uses} />
      </Band>
      <Band tone="white">
        <SectionTitle title="How a pilot works" />
        <StepRow steps={pilot} />
      </Band>
      <Band tone="grey">
        <div className="mx-auto max-w-3xl"><SectionTitle title="Questions" /><Faq items={faq} /></div>
      </Band>
      <Band tone="white">
        <div id="pilot" className="scroll-mt-24">
          <h2 className="font-display text-3xl font-medium tracking-[-0.015em] sm:text-4xl">Pilot partners for 2027</h2>
          <p className="mt-3 text-lg text-muted-foreground">We're picking a small group of OEMs to pilot Ray with.</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
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
