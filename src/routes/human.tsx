import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, ArrowRight, BarChart3, BatteryCharging, Bell, Bot, Brain, Check, ChevronRight, Code,
  DollarSign, FileOutput, FileText, Gauge, LockKeyhole, MessageSquare, Monitor,
  Plug, PlugZap, Radio, Server, Settings, Sun, Ticket, Wrench,
} from "lucide-react";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/human")({
  head: () => ({
    meta: [
      { title: "AMMP — an AI coworker for renewable energy portfolios" },
      { name: "description", content: "AMMP combines renewable energy portfolio software with an AI coworker that investigates, prioritizes and prepares work." },
      { property: "og:title", content: "AMMP — an AI coworker for renewable energy portfolios" },
      { property: "og:description", content: "Give every portfolio team an AI coworker grounded in the same trusted operational context." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,500;6..12,600;6..12,700;6..12,800&display=swap" },
    ],
  }),
  component: HumanHome,
});

const DISPLAY = "'Nunito Sans', 'Inter', sans-serif";
const display = { fontFamily: DISPLAY } as const;

const card = "rounded-3xl border border-stone-200/80 bg-white shadow-[0_1px_2px_rgba(28,25,23,0.04),0_12px_32px_-16px_rgba(28,25,23,0.10)]";
const cardHover = "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(28,25,23,0.05),0_20px_44px_-18px_rgba(28,25,23,0.16)]";
const pill = "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold";
const h2Class = "text-4xl font-extrabold leading-[1.08] tracking-[-0.01em] text-stone-900 sm:text-5xl";

function CoworkerBadge({ label, tone = "amber" }: { label: string; tone?: "amber" | "stone" }) {
  return (
    <span className={`${pill} ${tone === "amber" ? "bg-amber-100 text-amber-800" : "bg-stone-100 text-stone-600"}`}>
      <span className={`size-1.5 rounded-full ${tone === "amber" ? "bg-amber-500" : "bg-stone-400"}`} />
      {label}
    </span>
  );
}

function HumanHome() {
  return (
    <div className="bg-[#faf7f2] text-stone-900" style={display}>
      <Hero />
      <ScaleBand />
      <AgentsSection />
      <CoworkersSection />
      <SharedByDesign />
      <ContextPlatformSection />
      <PlatformOverview />
      <ResultsSection />
      <PageCta />
    </div>
  );
}

/* 1 — Hero */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 size-[26rem] rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -right-40 bottom-0 size-[30rem] rounded-full bg-orange-100/60 blur-3xl" />
      </div>
      <div className="site-container relative grid items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-28">
        <div>
          <div className="flex flex-wrap gap-2">
            <CoworkerBadge label="Ray online" />
            <CoworkerBadge label="Working alongside your people" tone="stone" />
          </div>
          <h1 className="mt-7 max-w-[16ch] text-balance text-5xl font-extrabold leading-[1.04] tracking-[-0.02em] text-stone-900 md:text-6xl">
            Put AI to work across your <span className="text-amber-600">renewable energy portfolio</span>
          </h1>
          <p className="mt-6 max-w-[48ch] text-pretty text-lg leading-relaxed text-stone-600">
            An AI coworker grounded in your portfolio data, ready to investigate, prioritize, prepare and collaborate alongside your team.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_-12px_rgba(28,25,23,0.5)] transition-all hover:-translate-y-0.5 hover:bg-stone-800">
              Meet your coworker <ArrowRight className="size-4" />
            </Link>
            <Link to="/ray" className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-bold text-stone-900 transition-all hover:-translate-y-0.5 hover:border-stone-400">
              See how it works
            </Link>
          </div>
        </div>
        <WorkspacePanel />
      </div>
    </section>
  );
}

function WorkspacePanel() {
  const [completed, setCompleted] = useState(false);
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-100/80 via-transparent to-stone-200/50 blur-xl" />
      <div className={`relative overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-[0_2px_4px_rgba(28,25,23,0.05),0_24px_60px_-20px_rgba(28,25,23,0.18)]`}>
        <div className="flex items-center justify-between border-b border-stone-100 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-full bg-amber-100 text-amber-700"><MessageSquare className="size-3.5" /></span>
            <span className="text-sm font-bold"># portfolio-ops</span>
            <span className="hidden text-xs text-stone-400 sm:inline">· shared workspace</span>
          </div>
          <CoworkerBadge label="Ray online" />
        </div>
        <div className="space-y-5 p-5 sm:p-6">
          <div className="flex gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-stone-200 text-xs font-bold text-stone-700">MO</span>
            <div>
              <div className="text-xs text-stone-400"><span className="font-bold text-stone-800">M. Okafor</span> · Asset manager · 09:41</div>
              <p className="mt-1 text-sm text-stone-800">Why is the East Mesa array underproducing this week?</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-amber-500 text-white shadow-[0_6px_14px_-6px_rgba(217,119,6,0.6)]"><Radio className="size-4" /></span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 text-xs text-stone-400">
                <span className="font-bold text-amber-700">Portfolio analyst</span>
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-700">AI coworker</span>
                09:41
              </div>
              <div className="mt-2 rounded-2xl rounded-tl-md border border-stone-200 bg-stone-50 p-4">
                <p className="text-sm leading-relaxed text-stone-800">Yield is <strong className="font-bold text-amber-700">6.8% below model</strong>. The pattern points to inverter IV-204 on block C.</p>
                <div className="mt-4 rounded-xl border border-stone-200/70 bg-white p-3">
                  <div className="flex justify-between text-[11px] font-semibold text-stone-400"><span>Root-cause evidence</span><span>3 sources</span></div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-stone-100"><div className="h-full w-[68%] rounded-full bg-gradient-to-r from-amber-300 to-amber-500" /></div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-stone-500">
                    <span>Irradiance <b className="font-bold text-stone-800">0.94</b></span>
                    <span>Soiling <b className="font-bold text-stone-800">12%</b></span>
                    <span>SLA <b className="font-bold text-amber-700">risk</b></span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button type="button" onClick={() => setCompleted(true)} className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-stone-900 px-4 text-xs font-bold text-white transition-colors hover:bg-stone-700">
                    {completed ? <Check className="size-3.5" /> : <Wrench className="size-3.5" />}{completed ? "Work order opened" : "Open work order"}
                  </button>
                  <button type="button" className="inline-flex min-h-9 items-center rounded-full border border-stone-300 px-4 text-xs font-bold text-stone-800 transition-colors hover:bg-stone-100">View evidence</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="relative mt-3 text-xs text-stone-500">Every request, source, and next action stays visible to the whole team.</p>
    </div>
  );
}

/* 2 — Scale band */
function ScaleBand() {
  const metrics = [
    ["10,000+", "Sites monitored across the portfolio"],
    ["35+", "Countries connected through one data layer"],
    ["30+", "Integrations across devices and workflows"],
  ] as const;
  return (
    <section aria-label="AMMP portfolio scale">
      <div className="site-container">
        <div className={`${card} grid gap-7 px-7 py-8 md:grid-cols-3 md:px-10`}>
          {metrics.map(([value, label]) => (
            <div key={label}>
              <div className="text-3xl font-extrabold tracking-[-0.02em] text-stone-900">{value}</div>
              <div className="mt-1 text-sm text-stone-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 3 — Your team just got a new coworker */
const agents = [
  { name: "Portfolio analyst", role: "Your analyst in AMMP OS, Slack and Teams", body: "Investigates underperformance and explains what changed, with evidence.", initials: "PA" },
  { name: "Alarm triage", role: "The checker that never sleeps", body: "Ranks issues by operational and commercial impact before they become noise.", initials: "AT" },
  { name: "Reporting coworker", role: "Recurring outputs, prepared for review", body: "Prepares recurring reports, narratives and source detail for review.", initials: "RC" },
  { name: "Compliance coworker", role: "Obligations tracked portfolio-wide", body: "Checks obligations, deadlines and portfolio-wide contract performance.", initials: "CC" },
] as const;

function AgentsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="site-container">
        <div className="max-w-5xl">
          <h2 className={h2Class}>Your team just got a new coworker</h2>
          <p className="mt-4 text-lg text-stone-600 lg:whitespace-nowrap">Each coworker has a clear job. They add capacity to the people you already have.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {agents.map((agent) => (
            <div key={agent.name} className={`${card} ${cardHover} group p-7`}>
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-amber-100 text-sm font-extrabold text-amber-700 ring-4 ring-amber-50">{agent.initials}</span>
                <div>
                  <p className="text-lg font-bold text-stone-900">{agent.name}</p>
                  <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-stone-500">AI coworker</span>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-stone-500">{agent.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{agent.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-stone-500">Every coworker reads the same portfolio, under your existing AMMP permissions.</p>
      </div>
    </section>
  );
}

/* 4 — Proactive / on demand */
function CoworkersSection() {
  return (
    <section className="rounded-[2.5rem] bg-stone-100/70">
      <div className="site-container py-20 lg:py-28">
        <div>
          <CoworkerBadge label="AMMP AI AGENTS" tone="stone" />
          <h2 className={`mt-5 ${h2Class}`}>Proactive when you don’t ask.<br />On demand when you do.</h2>
          <p className="mt-5 text-sm leading-relaxed text-stone-600 lg:whitespace-nowrap">AI handles routine work continuously and transparently, while people stay in control of decisions and action.</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Capability proactive />
          <Capability />
        </div>
      </div>
    </section>
  );
}

function Capability({ proactive = false }: { proactive?: boolean }) {
  const entries = [["East Mesa · inverter IV-204", "Needs review"], ["Ridge 2 · soiling pattern", "Watching"], ["Site 14 · SOC drift", "Resolved"]] as const;
  return (
    <div className={`${card} p-7 lg:p-9`}>
      <CoworkerBadge label={proactive ? "Proactive · portfolio triage" : "On demand · ask anything"} />
      <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.01em] text-stone-900">{proactive ? "Ranks what needs a human first" : "Answers with evidence, not guesswork"}</h3>
      <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-stone-600">{proactive ? "Continuously scans the fleet and surfaces the issues that deserve attention before they grow." : "Ask in Slack or Teams for a diagnosis, contract check, report, or exploration of your portfolio data."}</p>
      {proactive ? (
        <div className="mt-6 space-y-2.5">
          {entries.map(([site, state], index) => (
            <div key={site} className="flex items-center justify-between gap-3 rounded-xl border border-stone-200/70 bg-stone-50 px-4 py-3 text-sm text-stone-800">
              <span>{site}</span>
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${index === 2 ? "bg-stone-200/70 text-stone-500" : "bg-amber-100 text-amber-800"}`}>{state}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-6 space-y-2.5">
          <div className="rounded-2xl rounded-bl-md border border-stone-200/70 bg-stone-50 px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-stone-400"><span className="grid size-5 place-items-center rounded-full bg-stone-200 text-[9px] font-extrabold text-stone-600">YO</span>You</div>
            <p className="mt-1.5 text-sm text-stone-800">Is Q3 PPA compliance on track for Ridge 2?</p>
          </div>
          <div className="rounded-2xl rounded-tr-md border border-amber-200 bg-amber-50 px-4 py-3">
            <div className="flex items-center gap-2 text-xs"><span className="grid size-5 place-items-center rounded-full bg-amber-500 text-white"><Bot className="size-3" /></span><span className="font-bold text-amber-800">Compliance coworker</span></div>
            <p className="mt-1.5 text-sm leading-relaxed text-stone-800">On track. I found two curtailment events, checked their treatment, and prepared the supporting detail for review.</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* 5 — Shared by design */
function SharedByDesign() {
  const outcomes = [
    { icon: BarChart3, title: "Asset managers", text: "See what needs attention first and move from symptom to root cause faster.", href: "/use-cases/asset-managers" as const },
    { icon: Wrench, title: "O&M teams", text: "Receive prioritized issues with the context needed to plan the right response.", href: "/use-cases/om-providers" as const },
    { icon: FileText, title: "Reporting teams", text: "Turn standardized portfolio data into clear, reviewable reporting outputs.", href: "/use-cases/reporting-teams" as const },
  ];
  return (
    <section>
      <div className="site-container py-20 lg:py-28">
        <CoworkerBadge label="SHARED BY DESIGN" tone="stone" />
        <div className="mt-5 grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
          <div>
            <h2 className={h2Class}>Same workspace.<br />Same evidence.<br />Humans stay in control.</h2>
            <p className="mt-5 max-w-[45ch] leading-relaxed text-stone-600">Everyone can see what was requested, review the work, and add their own knowledge. Capabilities spread naturally because the learning happens together.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {outcomes.map(({ icon: Icon, title, text, href }) => (
              <Link key={title} to={href} aria-label={title} className={`${card} ${cardHover} group flex flex-col p-6 text-left`}>
                <span className="grid size-10 place-items-center rounded-full bg-amber-100 text-amber-700"><Icon className="size-5" /></span>
                <h3 className="mt-5 text-lg font-bold text-stone-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{text}</p>
                <ChevronRight className="mt-auto size-4 text-stone-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-amber-600" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 6 — AI built on an operating platform */
function ContextPlatformSection() {
  const sources = [
    { icon: Sun, label: "Assets and alerts" },
    { icon: BatteryCharging, label: "PV, BESS and hybrid" },
    { icon: Gauge, label: "KPIs and obligations" },
    { icon: Activity, label: "Time-series data" },
  ];
  return (
    <section className="rounded-[2.5rem] bg-stone-100/70 py-20 md:py-28">
      <div className="site-container">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <CoworkerBadge label="AI built on an operating platform" tone="stone" />
            <h2 className={`mt-5 text-balance ${h2Class}`}>AI is only as good as the data foundation it builds on</h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-stone-600">Underneath every coworker is the monitoring, workflow and data infrastructure AMMP has built across thousands of renewable energy systems.</p>
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
            <div className="grid grid-cols-2 gap-3">
              {sources.map(({ icon: Icon, label }) => (
                <div key={label} className={`${card} flex min-h-28 flex-col justify-between p-4`}>
                  <Icon className="h-5 w-5 text-stone-400" />
                  <p className="text-sm font-bold text-stone-800">{label}</p>
                </div>
              ))}
            </div>
            <div className="hidden items-center lg:flex"><ArrowRight className="h-5 w-5 text-amber-600" /></div>
            <div className="relative flex min-h-64 flex-col items-center justify-center overflow-hidden rounded-3xl bg-stone-900 p-8 text-center text-white shadow-[0_24px_60px_-20px_rgba(28,25,23,0.45)]">
              <div aria-hidden className="absolute -top-16 size-48 rounded-full bg-amber-500/25 blur-3xl" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-[0_10px_24px_-8px_rgba(217,119,6,0.7)]"><Brain className="h-7 w-7" /></div>
              <h3 className="relative mt-5 text-2xl font-extrabold">AMMP AI</h3>
              <p className="relative mt-3 max-w-xs text-sm leading-relaxed text-stone-300">One structured operational context across your entire renewable energy portfolio.</p>
              <div className="relative mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-stone-200"><LockKeyhole className="h-3.5 w-3.5" />Permission-aware</div>
            </div>
            <div className="hidden items-center lg:flex"><ArrowRight className="h-5 w-5 text-amber-600" /></div>
            <div className="grid gap-3">
              <div className={`${card} p-5`}><Bot className="h-5 w-5 text-amber-600" /><p className="mt-4 font-bold text-stone-900">AI coworker</p><p className="mt-1 text-sm text-stone-500">Slack · Teams · AMMP</p></div>
              <div className={`${card} p-5`}><PlugZap className="h-5 w-5 text-amber-600" /><p className="mt-4 font-bold text-stone-900">Your software tools</p><p className="mt-1 text-sm text-stone-500">Dashboards, reports and workflows</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 7 — AMMP OS + AI coworker */
const modulesGrid = [
  { icon: Monitor, title: "Monitoring", body: "Live performance across every site and device." },
  { icon: Ticket, title: "Ticketing", body: "Work tracked from fault to resolution." },
  { icon: Bell, title: "Alerting", body: "Rules that reach the right person quickly." },
  { icon: FileOutput, title: "Reporting", body: "Scheduled operational and investor reports." },
  { icon: DollarSign, title: "Commercials", body: "Savings, billing and contract performance." },
  { icon: Plug, title: "Integrations", body: "30+ vendors and third-party tools." },
  { icon: Settings, title: "Customizations", body: "Dashboards, KPIs and views built to fit." },
  { icon: Code, title: "API", body: "Your data in your own systems." },
  { icon: Server, title: "MCP server", body: "Portfolio context for any AI assistant." },
];

const interfaces = [
  { eyebrow: "For the team on shift", title: "AMMP OS", body: "Live portfolio views, alarms, performance analytics, and drill-down to the asset.", icon: Monitor },
  { eyebrow: "For the work nobody gets to", title: "AMMP AI coworker", body: "A portfolio-aware coworker that explores, analyzes, reports and keeps the team ahead.", icon: Bot },
];

function PlatformOverview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <CoworkerBadge label="One system of record. Two ways to use it." tone="stone" />
            <h2 className={`mt-5 ${h2Class}`}>A screen when you’re watching.<br />A coworker when you’re not.</h2>
          </div>
          <Link to="/product" className="group flex items-center gap-2 text-sm font-bold text-amber-700">Explore the platform <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {interfaces.map(({ eyebrow, title, body, icon: Icon }, index) => (
            <article key={title} className={`flex flex-col rounded-3xl p-7 sm:p-9 ${index === 0 ? card : "bg-stone-900 text-white shadow-[0_24px_60px_-20px_rgba(28,25,23,0.45)]"}`}>
              <span className="self-start"><CoworkerBadge label={eyebrow} tone={index === 0 ? "stone" : "amber"} /></span>
              <div className="mt-6 flex items-start justify-between gap-4">
                <h3 className="text-2xl font-extrabold tracking-[-0.01em]">{title}</h3>
                <span className={`grid size-10 shrink-0 place-items-center rounded-full ${index === 0 ? "bg-stone-100 text-stone-600" : "bg-amber-500 text-white"}`}><Icon className="size-5" /></span>
              </div>
              <p className={`mt-3 max-w-md text-sm leading-relaxed ${index === 0 ? "text-stone-600" : "text-stone-300"}`}>{body}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <CoworkerBadge label="Inside AMMP OS" tone="stone" />
            <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.01em] text-stone-900 sm:text-3xl">AMMP OS when you need it</h3>
            <p className="mt-3 text-lg text-stone-600 xl:whitespace-nowrap">The dashboards, tickets and reports your team uses every day. Ray sits on top of them.</p>
          </div>
          <Link to="/product" className="inline-flex items-center gap-2 text-sm font-bold text-stone-900 hover:underline">Full product tour <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modulesGrid.map((m) => (
            <Link key={m.title} to="/product" className={`${card} ${cardHover} flex items-start gap-3 p-4`}>
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-700"><m.icon className="h-4.5 w-4.5" aria-hidden="true" /></span>
              <span>
                <span className="block text-sm font-bold text-stone-900">{m.title}</span>
                <span className="mt-1 block text-sm text-stone-500">{m.body}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 8 — Results */
function ResultsSection() {
  const results = [
    { value: "99.9%", label: "platform uptime", customer: "Daystar Power" },
    { value: "Minutes", label: "to portfolio insight", customer: "SolarSaver" },
    { value: "170+", label: "sites in one portal", customer: "Broadreach" },
  ];
  return (
    <section className="rounded-[2.5rem] bg-stone-100/70 py-20 md:py-28">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <CoworkerBadge label="Results already delivered" tone="stone" />
          <h2 className={`mt-5 text-balance ${h2Class}`}>Proven across live portfolios.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {results.map((result) => (
            <div key={result.customer} className={`${card} ${cardHover} p-7 text-center md:p-9`}>
              <p className="text-4xl font-extrabold tracking-[-0.02em] text-stone-900">{result.value}</p>
              <p className="mt-3 text-sm text-stone-500">{result.label}</p>
              <Link to="/case-studies" className="mt-5 inline-flex items-center text-sm font-bold text-amber-700 hover:underline">{result.customer}<ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
