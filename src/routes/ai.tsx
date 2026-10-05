import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowRight, BarChart3, Bell, Bot, ExternalLink, LayoutDashboard, Lock, MessagesSquare, Server, ShieldCheck, Sparkles, Waves } from "lucide-react";
import { Band, PageHero, SectionHeading } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import ammpIntelligence from "@/assets/ammp-intelligence.png";
import rayAvatar from "@/assets/ray-avatar.png";

const RAY_URL = "https://os.ammp.io/beta-ray";

export const Route = createFileRoute("/ai")({
  head: () => ({ meta: [
    { title: "AI at AMMP — MCP server and AI coworkers for energy portfolios" },
    { name: "description", content: "How AMMP puts your portfolio data in front of AI: an open MCP server exposing assets, KPIs, alerts and raw time-series, plus the AI coworkers we are building on top of it." },
    { property: "og:title", content: "AI at AMMP — MCP server and AI coworkers for energy portfolios" },
    { property: "og:description", content: "An open MCP server gives any assistant secure access to your assets, KPIs, alerts and telemetry." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const mcpItems = [
  { icon: Activity, title: "Assets and metadata", text: "Your full portfolio structure: sites, devices, capacities, commissioning data and the metadata that gives every reading context." },
  { icon: BarChart3, title: "Computed KPIs", text: "Production, performance ratio, availability, specific yield and the rest of the KPI set, at the same definitions your dashboards use." },
  { icon: Bell, title: "Alerts, active and historical", text: "Current alerts and the full alert history, so an assistant can correlate today's underperformance with an event three weeks ago." },
  { icon: Waves, title: "Raw time-series", text: "Telemetry at native resolution, so answers can be cross-checked against the underlying measurements rather than only the aggregates." },
];

const agents = [
  { icon: MessagesSquare, title: "A coworker in Slack and Teams", text: "A conversational agent that remembers your portfolio, learns from your feedback and pulls together answers from several data sources without you switching tools." },
  { icon: LayoutDashboard, title: "Visualisation on demand", text: "Charts, dashboards and exports generated from a single question inside AMMP OS, instead of a request to a reporting queue." },
  { icon: Activity, title: "Proactive QA and monitoring", text: "Agents that run their own checks on data, metadata and dashboard integrity without being prompted, and flag what looks wrong before you notice it." },
  { icon: Sparkles, title: "Escalation for hard problems", text: "When a diagnosis is genuinely complex, the work is handed to a more capable reasoning model rather than answered with a guess." },
];

function DiagramCard({ title, subtitle, items, dashed }: { title: string; subtitle: string; items: string[]; dashed?: boolean }) {
  return (
    <div className={`glass h-full rounded-2xl p-5 ${dashed ? "border-dashed" : ""}`}>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
        {items.map((item) => <li key={item} className="flex gap-2"><span aria-hidden="true">·</span><span>{item}</span></li>)}
      </ul>
    </div>
  );
}

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Beta"
        title="Your coworkers can now read your portfolio."
        intro="We are putting your portfolio data directly in front of AI. An open MCP server gives any assistant secure access to your assets, KPIs, alerts and raw telemetry, and our own AI coworkers are being built on exactly the same foundation, sitting on top of AMMP OS."
        primary={{ label: "Talk to us", to: "/contact" }}
        aside={
          <div className="glass-strong rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <img src={rayAvatar} alt="Ray" className="size-12 shrink-0 rounded-full object-cover ring-2 ring-primary/25" />
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold"><span className="status-pulse size-1.5 rounded-full bg-primary" />Ray is online</p>
                <p className="text-xs text-muted-foreground">AMMP AI coworker</p>
              </div>
            </div>
            <a href={RAY_URL} target="_blank" rel="noreferrer" className="button button-primary mt-4 w-full justify-center">Try Ray <ExternalLink className="size-4" /></a>
            <p className="mt-4 text-sm text-muted-foreground">Ray is our AI coworker inside AMMP OS: ask for an overview and it builds the chart, then explains what it found.</p>
          </div>
        }
      />

      <Band tone="grey">
        <SectionHeading eyebrow="Open protocol" title="The AMMP MCP server" intro="The AMMP MCP server speaks the open Model Context Protocol, so it plugs into Claude, Cursor, Copilot or an agent you build yourself. The model decides which tools to call, runs the queries against your live portfolio and answers in natural language." />
        <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-muted-foreground">What it exposes</h3>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {mcpItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6"><Icon className="size-5 text-primary" /><h4 className="mt-4 font-semibold">{title}</h4><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>
          ))}
        </div>
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-border bg-card p-5">
          <Lock className="size-5 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">Permissions and scope follow your existing AMMP access controls. An assistant can only see what the connected user can already see.</p>
        </div>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">Read the announcement <ArrowRight className="size-4" /></Link>
      </Band>

      <Band>
        <SectionHeading center eyebrow="How it fits together" title="How this can fit into your stack" intro="A rough map of the integration options we are testing with beta customers. Use our AI coworkers, bring your own assistant, or both." />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
          <div className="glass-soft rounded-3xl border-2 border-dashed lg:col-span-2 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Provided by AMMP</p>
            <div className="mt-4">
              <DiagramCard title="AI coworker" subtitle="In Slack, Teams and AMMP OS" items={["Remembers your context and learns from feedback", "Combines data sources into one answer", "Builds reports, exports and interactive charts", "Live dashboards and on-the-fly troubleshooting"]} />
            </div>
            <div className="mt-4 rounded-2xl border border-primary/30 bg-primary/5 p-5 text-center">
              <div className="inline-flex items-center gap-2 font-semibold text-primary"><Server className="size-5" />MCP server</div>
            </div>
            <div className="glass-soft mt-4 rounded-2xl p-5 text-center font-medium">Your energy portfolio</div>
          </div>
          <div className="grid gap-4 content-start">
            <DiagramCard title="Your AI assistant" subtitle="Claude, Codex, Copilot" items={["Native chat interface", "Direct portfolio access", "Full MCP tool support"]} />
            <DiagramCard dashed title="Other software tools" subtitle="Optional integration" items={["CRM, CMMS, ERP systems", "Connect via the MCP server", "Or via your AI assistant"]} />
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">These are working hypotheses, not a finished roadmap. We are refining them with the operators in our beta.</p>
      </Band>

      <Band tone="grey">
        <div className="mx-auto max-w-3xl text-center">
          <div className="glass-soft inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-primary"><img src={rayAvatar} alt="" className="size-6 rounded-full object-cover" /><span>Meet Ray</span></div>
          <SectionHeading center className="mt-3" eyebrow="AI coworker" title="Ray" intro="Ray is our AI coworker inside AMMP OS. Ask it for an overview and it builds the chart, then explains what it found on the way there." />
        </div>
        <div className="glass-strong mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl p-2">
          <img src={ammpIntelligence} alt="Ray" className="w-full" loading="lazy" />
        </div>
        <div className="mt-4 text-center">
          <a href={RAY_URL} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium text-primary">Open Ray in a new tab <ExternalLink className="ml-2 size-4" /></a>
        </div>
      </Band>

      <Band>
        <SectionHeading center eyebrow="Roadmap" title="Where our AI coworkers are heading" intro="We are building a small team of specialised agents on top of the MCP server. Here is what they are being designed to do." />
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          {agents.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-6"><Icon className="size-5 text-primary" /><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>
          ))}
        </div>
        <div className="mt-10 text-center"><Link to="/contact" className="button button-ghost">Join the beta <ArrowRight className="size-4" /></Link></div>
      </Band>

      <Band tone="grey">
        <div className="mx-auto max-w-2xl text-center">
          <img src={rayAvatar} alt="Ray" className="mx-auto size-16 rounded-full object-cover ring-4 ring-primary/15" />
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Want to work with Ray?</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">We are onboarding a small group of asset managers and O&M providers. Tell us about your portfolio and we will show you Ray and the other AI coworkers against your own data.</p>
          <Link to="/contact" className="button button-primary mt-8">Get in touch <ArrowRight className="size-4" /></Link>
        </div>
      </Band>

      <PageCta />
    </>
  );
}
