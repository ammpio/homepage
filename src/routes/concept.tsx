import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, ArrowRight, ArrowDown, BarChart3, BatteryCharging, Bell, Brain, Check, ChevronRight, Code,
  DollarSign, FileOutput, FileText, Gauge, LockKeyhole, MessageSquare, Monitor,
  Plug, PlugZap, Radio, Server, Settings, Sun, Ticket, Wrench,
} from "lucide-react";
import { PageCta } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { ProofLockup, ExecutionTrace, ModeDeck, TrustBento } from "@/components/site/ConceptSections";
import { RayIcon } from "@/components/site/RayIcon";

export const Route = createFileRoute("/concept")({
  head: () => ({ meta: [
    { title: "AMMP concept homepage — an AI coworker for renewable portfolios" },
    { name: "description", content: "AMMP combines renewable energy portfolio software with an AI coworker that investigates, prioritises and prepares work." },
    { property: "og:title", content: "AMMP concept homepage — an AI coworker for renewable portfolios" },
    { property: "og:description", content: "Give every portfolio team an AI coworker grounded in the same trusted operational context." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <Hero />
        <ProofLockup />
        <AgentsSection />
        <CoworkersSection />
        <ExecutionTrace />
        <ModeDeck />
        <SharedByDesign />
        <ContextPlatformSection />
        <PlatformOverview />
        <TrustBento />
        <ResultsSection />
      </div>
      <PageCta />
    </div>
  );
}

const h2Class = "font-display text-4xl font-medium leading-[1.1] tracking-[-0.015em] sm:text-5xl";

/* 1 — Opening section (AMMP AI Co-Pilots) */
function Hero() {
  return (
    <section className="relative">
      <div className="site-container grid items-center gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-28">
        <div>
          <Reveal delay={90}>
            <h1 className="max-w-[16ch] text-balance font-display text-5xl font-medium leading-[1.03] tracking-[-0.02em] md:text-6xl">
              Put AI to work across your renewable energy portfolio
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-[48ch] text-pretty text-lg leading-relaxed text-muted-foreground">
              An AI coworker grounded in your portfolio data, ready to investigate, prioritise, prepare and collaborate alongside your team.
            </p>
          </Reveal>
          <Reveal delay={270}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/ai" className="button button-primary rounded-full px-5 transition-transform hover:-translate-y-0.5">Meet your coworker <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" /></Link>
              <Link to="/ai" className="button glass rounded-full px-5 text-foreground transition-transform hover:-translate-y-0.5">See how it works</Link>
            </div>
          </Reveal>
        </div>
        <WorkspacePanel />
      </div>
    </section>
  );
}

function WorkspacePanel() {
  const [completed, setCompleted] = useState(false);
  return (
    <div className="float-soft">
      <div className="glass-strong overflow-hidden rounded-3xl">
        <div className="flex items-center justify-between border-b border-white/50 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <MessageSquare className="size-4 text-muted-foreground" />
            <span className="text-sm font-medium"># portfolio-ops</span>
            <span className="hidden text-xs text-muted-foreground sm:inline">· shared workspace</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-primary"><span className="status-pulse size-1.5 rounded-full bg-primary" />Ray online</div>
        </div>
        <div className="space-y-5 p-5 sm:p-6">
          <div className="flex gap-3">
            <span className="glass-soft grid size-9 shrink-0 place-items-center rounded-xl text-xs font-semibold">MO</span>
            <div>
              <div className="text-xs text-muted-foreground"><span className="font-medium text-foreground">M. Okafor</span> · 09:41</div>
              <p className="mt-1 text-sm">Why is the East Mesa array underproducing this week?</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary"><Radio className="size-4" /></span>
            <div className="min-w-0 flex-1">
              <div className="msg-in flex flex-wrap items-center gap-2 text-xs text-muted-foreground" style={{ animationDelay: "500ms" }}>
                <span className="font-medium text-primary">Portfolio analyst</span>
                <span className="status-pulse size-1.5 rounded-full bg-primary" />09:41
              </div>
              <div className="msg-in glass mt-2 rounded-2xl p-4" style={{ animationDelay: "800ms" }}>
                <p className="text-sm leading-relaxed">Yield is <strong className="font-semibold text-primary">6.8% below model</strong>. The pattern points to inverter IV-204 on block C.</p>
                <div className="msg-in glass-soft mt-4 rounded-xl p-3" style={{ animationDelay: "1200ms" }}>
                  <div className="flex justify-between text-[11px] text-muted-foreground"><span>Root-cause evidence</span><span>3 sources</span></div>
                  <div className="shimmer-bar mt-2 h-1.5 overflow-hidden rounded-full bg-white/70"><div className="h-full w-[68%] rounded-full bg-gradient-to-r from-glow-amber to-primary" /></div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
                    <span>Irradiance <b className="font-medium text-foreground">0.94</b></span>
                    <span>Soiling <b className="font-medium text-foreground">12%</b></span>
                    <span>SLA <b className="font-medium text-primary">risk</b></span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button type="button" onClick={() => setCompleted(true)} className="button button-primary min-h-9 rounded-full text-xs">
                    {completed ? <Check className="size-3.5" /> : <Wrench className="size-3.5" />}{completed ? "Work order opened" : "Open work order"}
                  </button>
                  <button type="button" className="button glass min-h-9 rounded-full text-xs text-foreground">View evidence</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3 — Your team, plus a few more (AMMP Home A) */
const agents = [
  { name: "Portfolio analyst", role: "Your analyst in AMMP OS, Slack and Teams", body: "Investigates underperformance and explains what changed, with evidence." },
  { name: "Alarm triage", role: "The checker that never sleeps", body: "Ranks issues by operational and commercial impact before they become noise." },
  { name: "Reporting coworker", role: "Recurring outputs, prepared for review", body: "Prepares recurring reports, narratives and source detail for review." },
  { name: "Compliance coworker", role: "Obligations tracked portfolio-wide", body: "Checks obligations, deadlines and portfolio-wide contract performance." },
] as const;

function AgentsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="site-container">
        <div className="max-w-5xl">
          <h2 className={h2Class}>Your team just got a new coworker</h2>
          <p className="mt-4 text-lg text-muted-foreground lg:whitespace-nowrap">Each coworker has a clear job. They add capacity to the people you already have.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {agents.map((agent, index) => (
            <Reveal key={agent.name} delay={index * 90}>
              <div className="glass group h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-2">
                  <span className="status-pulse size-1.5 rounded-full bg-primary" />
                  <p className="text-lg font-semibold text-foreground">{agent.name}</p>
                </div>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{agent.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{agent.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">Every coworker reads the same portfolio, under your existing AMMP permissions.</p>
      </div>
    </section>
  );
}

/* 4 — Coworkers: proactive / on demand (AMMP AI Co-Pilots) */
function CoworkersSection() {
  return (
    <section>
      <div className="site-container py-20 lg:py-28">
        <div>
          <p className="eyebrow">AMMP AI AGENTS</p>
          <h2 className={`mt-4 ${h2Class}`}>Proactive when you don’t ask.<br />On demand when you do.</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground lg:whitespace-nowrap">AI handles routine work continuously and transparently, while people stay in control of decisions and action.</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal><Capability proactive /></Reveal>
          <Reveal delay={140}><Capability /></Reveal>
        </div>
      </div>
    </section>
  );
}

function Capability({ proactive = false }: { proactive?: boolean }) {
  const entries = [["East Mesa · inverter IV-204", "Needs review"], ["Ridge 2 · soiling pattern", "Watching"], ["Site 14 · SOC drift", "Resolved"]] as const;
  return (
    <div className="glass rounded-3xl p-7 lg:p-9">
      <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="status-pulse size-1.5 rounded-full bg-primary" />{proactive ? "Proactive · portfolio triage" : "On demand · ask anything"}</div>
      <h3 className="mt-4 font-display text-2xl font-medium tracking-[-0.015em]">{proactive ? "Ranks what needs a human first" : "Answers with evidence, not guesswork"}</h3>
      <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">{proactive ? "Continuously scans the fleet and surfaces the issues that deserve attention before they grow." : "Ask in Slack or Teams for a diagnosis, contract check, report, or exploration of your portfolio data."}</p>
      {proactive ? (
        <div className="mt-6 space-y-2.5">
          {entries.map(([site, state], index) => (
            <div key={site} className="msg-in glass-soft flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm" style={{ animationDelay: `${250 + index * 130}ms` }}>
              <span>{site}</span>
              <span className={index === 2 ? "text-muted-foreground" : "text-primary"}>{state}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 space-y-2.5">
          <div className="msg-in glass-soft rounded-xl px-4 py-3" style={{ animationDelay: "250ms" }}><div className="text-xs text-muted-foreground">You</div><p className="mt-1 text-sm">Is Q3 PPA compliance on track for Ridge 2?</p></div>
          <div className="msg-in rounded-xl border border-primary/25 bg-primary/5 px-4 py-3" style={{ animationDelay: "550ms" }}><div className="text-xs font-medium text-primary">Compliance coworker</div><p className="mt-1 text-sm leading-relaxed">On track. I found two curtailment events, checked their treatment, and prepared the supporting detail for review.</p></div>
        </div>
      )}
    </div>
  );
}

/* 5 — 03 · Shared by design (AMMP AI Co-Pilots) */
function SharedByDesign() {
  const outcomes = [
    { icon: BarChart3, title: "Asset managers", text: "See what needs attention first and move from symptom to root cause faster.", href: "/use-cases/asset-managers" as const },
    { icon: Wrench, title: "O&M teams", text: "Receive prioritised issues with the context needed to plan the right response.", href: "/use-cases/om-providers" as const },
    { icon: FileText, title: "Reporting teams", text: "Turn standardised portfolio data into clear, reviewable reporting outputs.", href: "/use-cases/reporting-teams" as const },
  ];
  return (
    <section>
      <div className="site-container py-20 lg:py-28">
        <p className="eyebrow">SHARED BY DESIGN</p>
        <div className="mt-4 grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
          <div>
            <h2 className={h2Class}>Same workspace.<br />Same evidence.<br />Humans stay in control.</h2>
            <p className="mt-5 max-w-[45ch] leading-relaxed text-muted-foreground">Everyone can see what was requested, review the work, and add their own knowledge. Capabilities spread naturally because the learning happens together.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {outcomes.map(({ icon: Icon, title, text, href }, index) => (
              <Reveal key={title} delay={index * 100} className="h-full">
                <Link
                  to={href}
                  aria-label={title}
                  className="glass group flex h-full flex-col rounded-3xl p-6 text-left transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="size-5" /></span>
                  <h3 className="mt-5 font-display text-lg font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  <ChevronRight className="mt-auto size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 6 — Merged: AI has the context (brain diagram) + the platform underneath */
function ContextPlatformSection() {
  const sources = [
    { icon: Sun, label: "Assets and alerts" },
    { icon: BatteryCharging, label: "PV, BESS and hybrid" },
    { icon: Gauge, label: "KPIs and obligations" },
    { icon: Activity, label: "Time-series data" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="site-container">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">AI built on an operating platform</p>
            <h2 className={`mt-3 text-balance ${h2Class}`}>AI can only work with what it understands</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">Underneath every coworker is the monitoring, workflow and data infrastructure AMMP has built across thousands of renewable energy systems.</p>
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
            <div className="grid grid-cols-2 gap-3">
              {sources.map(({ icon: Icon, label }, index) => (
                <Reveal key={label} delay={index * 90} className="h-full">
                  <div className="glass flex h-full min-h-28 flex-col justify-between rounded-2xl p-4">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm font-semibold">{label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground lg:gap-0"><ArrowDown className="arrow-pulse h-5 w-5 text-primary lg:hidden" /><span className="lg:hidden">Feeds into</span><ArrowRight className="arrow-pulse hidden h-5 w-5 text-primary lg:block" /></div>
            <div className="glass-strong msg-in relative flex min-h-64 flex-col items-center justify-center rounded-3xl p-8 text-center" style={{ animationDelay: "400ms" }}>
              <div aria-hidden className="glow-orb absolute inset-x-10 top-6 h-24 bg-glow-magenta/70" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><Brain className="h-7 w-7" /></div>
              <h3 className="relative mt-5 font-display text-2xl font-medium">AMMP AI</h3>
              <p className="relative mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">One structured operational context across your entire renewable energy portfolio.</p>
              <div className="glass-soft relative mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground"><LockKeyhole className="h-3.5 w-3.5" />Permission-aware</div>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground lg:gap-0"><ArrowDown className="arrow-pulse h-5 w-5 text-primary lg:hidden" style={{ animationDelay: "1.3s" }} /><span className="lg:hidden">Powers</span><ArrowRight className="arrow-pulse hidden h-5 w-5 text-primary lg:block" style={{ animationDelay: "1.3s" }} /></div>
            <div className="grid gap-3">
              <Reveal delay={550}><div className="glass rounded-2xl p-5"><RayIcon className="h-5 w-5 text-primary" /><p className="mt-4 font-semibold">AI coworker</p><p className="mt-1 text-sm text-muted-foreground">Slack · Teams · AMMP</p></div></Reveal>
              <Reveal delay={680}><div className="glass rounded-2xl p-5"><PlugZap className="h-5 w-5 text-primary" /><p className="mt-4 font-semibold">Your software tools</p><p className="mt-1 text-sm text-muted-foreground">Dashboards, reports and workflows</p></div></Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 8 — AMMP OS + AI coworker (merged: TwoInterfaces + PlatformGrid) */
const modulesGrid = [
  { icon: Monitor, title: "Monitoring", body: "Live performance across every site and device." },
  { icon: Ticket, title: "Ticketing", body: "Work tracked from fault to resolution." },
  { icon: Bell, title: "Alerting", body: "Rules that reach the right person quickly." },
  { icon: FileOutput, title: "Reporting", body: "Scheduled operational and investor reports." },
  { icon: DollarSign, title: "Commercials", body: "Savings, billing and contract performance." },
  { icon: Plug, title: "Integrations", body: "30+ vendors and third-party tools." },
  { icon: Settings, title: "Customisations", body: "Dashboards, KPIs and views built to fit." },
  { icon: Code, title: "API", body: "Your data in your own systems." },
  { icon: Server, title: "MCP server", body: "Portfolio context for any AI assistant." },
];

const interfaces = [
  {
    eyebrow: "For the team on shift",
    title: "AMMP OS",
    body: "Live portfolio views, alarms, performance analytics, and drill-down to the asset.",
    icon: Monitor,
  },
  {
    eyebrow: "For the work nobody gets to",
    title: "AMMP AI coworker",
    body: "A portfolio-aware coworker that explores, analyses, reports and keeps the team ahead.",
    icon: RayIcon,
  },
];

function PlatformOverview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">One system of record. Two ways to use it.</p>
            <h2 className={`mt-4 ${h2Class}`}>A screen when you’re watching.<br />A coworker when you’re not.</h2>
          </div>
          <Link to="/product" className="group flex items-center gap-2 text-sm font-semibold text-primary">Explore the platform <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {interfaces.map(({ eyebrow, title, body, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 130} className="h-full">
            <article className="glass flex h-full flex-col rounded-3xl p-7 sm:p-9">
              <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="status-pulse size-1.5 rounded-full bg-primary" />{eyebrow}</div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-medium tracking-[-0.015em]">{title}</h3>
                <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${index === 0 ? "bg-white/70 text-muted-foreground" : "bg-primary text-primary-foreground"}`}><Icon className="size-5" /></span>
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-muted-foreground">Inside AMMP OS</p>
            <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.015em] sm:text-3xl">AMMP OS when you need it</h3>
            <p className="mt-3 text-lg text-muted-foreground xl:whitespace-nowrap">The dashboards, tickets and reports your team uses every day. Ray sits on top of them.</p>
          </div>
          <Link to="/product" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:underline">Full product tour <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modulesGrid.map((m, index) => (
            <Reveal key={m.title} delay={(index % 3) * 90 + Math.floor(index / 3) * 60}>
              <Link to="/product" className="glass flex items-start gap-3 rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-1">
                <m.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-semibold text-foreground">{m.title}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{m.body}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 9 — Results (v2) */
function ResultsSection() {
  const results = [
    { value: "99.9%", label: "platform uptime", customer: "Daystar Power" },
    { value: "Minutes", label: "to portfolio insight", customer: "SolarSaver" },
    { value: "170+", label: "sites in one portal", customer: "Broadreach" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Results already delivered</p>
          <h2 className={`mt-3 text-balance ${h2Class}`}>Proven across live portfolios.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {results.map((result, index) => (
            <Reveal key={result.customer} delay={index * 120} className="h-full">
              <div className="glass h-full rounded-3xl p-7 text-center transition-transform duration-300 hover:-translate-y-1 md:p-9">
                <p className="font-display text-4xl font-medium tracking-[-0.02em] text-foreground">{result.value}</p>
                <p className="mt-3 text-sm text-muted-foreground">{result.label}</p>
                <Link to="/case-studies" className="mt-5 inline-flex items-center text-sm font-semibold text-primary hover:underline">{result.customer}<ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
