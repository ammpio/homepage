import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowDown, ArrowRight, BarChart3, Bell, Lock, Server, Waves } from "lucide-react";
import { Band, PageHero, SectionHeading } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { RayVideo, RayDay } from "@/components/site/RaySections";
import rayAvatar from "@/assets/ray-avatar.png";

export const Route = createFileRoute("/ai")({
  head: () => ({ meta: [
    { title: "Meet Ray — AMMP's AI coworker for renewable portfolios" },
    { name: "description", content: "Ray checks performance, triages alarms, audits contracts and drafts reports with the evidence behind every answer — built on the open AMMP MCP server your own assistant can plug into." },
    { property: "og:title", content: "Meet Ray — AMMP's AI coworker for renewable portfolios" },
    { property: "og:description", content: "Ray works in Slack, Microsoft Teams and AMMP OS, on top of an open MCP server that gives any assistant secure access to your portfolio." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

const mcpItems = [
  { icon: Activity, title: "Assets and metadata", text: "Sites, devices, capacities and the context that makes a reading mean something." },
  { icon: BarChart3, title: "Computed KPIs", text: "Production, performance ratio, availability and yield, at your dashboard's definitions." },
  { icon: Bell, title: "Alerts, active and historical", text: "Today's alerts and the full history, so a cause can be traced back weeks." },
  { icon: Waves, title: "Raw time-series", text: "Telemetry at native resolution, so answers can be checked against the measurements." },
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
        eyebrow="AI at AMMP"
        title="Meet Ray,"
        highlight="your new AI coworker."
        intro="Ray checks performance, triages alarms, audits contracts and drafts reports — with the evidence behind every answer. It works in Slack, Microsoft Teams and AMMP OS, and runs on the same open MCP server your own assistant can plug into."
        primary={{ label: "Book a walkthrough", to: "/contact" }}
        secondary={{ label: "Try the demo", to: "/demo" }}
        aside={
          <div className="glass-strong rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <img src={rayAvatar} alt="Ray" className="size-12 shrink-0 rounded-full object-cover" />
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold"><span className="status-pulse size-1.5 rounded-full bg-primary" />Ray is online</p>
                <p className="text-xs text-muted-foreground">AMMP AI coworker</p>
              </div>
            </div>
            <a href="#ray-demo" onClick={(e) => { e.preventDefault(); document.getElementById("ray-demo")?.scrollIntoView({ behavior: "smooth" }); }} className="button button-primary mt-5 w-full justify-center">See Ray in action <ArrowDown className="size-4" /></a>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">A two-minute walkthrough: the morning check, the maintenance list, the SLA notice and the investor report.</p>
          </div>
        }
      />

      <RayVideo />
      <RayDay />

      <Band tone="grey">
        <SectionHeading eyebrow="Open protocol" title="The same foundation, open to your own assistant" intro="Ray runs on the AMMP MCP server, which speaks the open Model Context Protocol. Claude, Cursor, Copilot or an agent you build yourself can query your live portfolio the same way: the model decides which tools to call, runs the queries and answers in natural language." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mcpItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass-soft rounded-2xl p-5"><Icon className="size-5 text-primary" /><h4 className="mt-4 font-semibold">{title}</h4><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>
          ))}
        </div>
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-card p-5">
          <Lock className="size-5 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">Permissions and scope follow your existing AMMP access controls. An assistant can only see what the connected user can already see.</p>
        </div>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">Read the announcement <ArrowRight className="size-4" /></Link>
      </Band>

      <Band>
        <SectionHeading center eyebrow="How it fits together" title="How this can fit into your stack" intro="Use Ray, bring your own assistant, or both." />
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
      </Band>

      <PageCta />
    </>
  );
}
