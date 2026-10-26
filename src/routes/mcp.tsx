import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowRight, BarChart3, Bell, Lock, Server, Waves } from "lucide-react";
import { Band, PageHero, SectionHeading, Faq } from "@/components/site/sections";
import { MCP_FAQ, faqPageJsonLd } from "@/data/faq";
import { PageCta } from "@/components/site/SiteShell";

export const Route = createFileRoute("/mcp")({
  staticData: { sitemap: true },
  head: () => ({ scripts: [{ type: "application/ld+json", children: JSON.stringify(faqPageJsonLd(MCP_FAQ)) }], meta: [
    { title: "AMMP MCP server — your portfolio, for any AI assistant" },
    { name: "description", content: "The AMMP MCP server gives Claude, Copilot or your own agent secure, permission-aware access to live renewable portfolio data." },
    { property: "og:title", content: "AMMP MCP server — your portfolio, for any AI assistant" },
    { property: "og:description", content: "Connect any MCP-compatible assistant to your assets, KPIs, alerts and time-series in AMMP." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: McpPage,
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

function McpPage() {
  return (
    <>
      <PageHero
        title="The MCP server:"
        highlight="your portfolio, for any assistant."
        intro="The same foundation Ray runs on, available to Claude, Copilot or an agent you build yourself, under your existing AMMP permissions. Generally available as an add-on to either module, AMMP AI or AMMP OS Platform."
        primary={{ label: "Book a walkthrough", to: "/contact" }}
      />
      <Band tone="grey">
        <SectionHeading title="The same foundation, open to your own assistant" intro="Ray runs on the AMMP MCP server, which speaks the open Model Context Protocol. Claude, Cursor, Copilot or an agent you build yourself can query your live portfolio the same way: the model decides which tools to call, runs the queries and answers in natural language." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mcpItems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass-soft rounded-2xl p-5"><Icon className="size-5 text-primary" /><h4 className="mt-4 font-semibold">{title}</h4><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>
          ))}
        </div>
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-card p-5">
          <Lock className="size-5 shrink-0 text-primary" />
          <p className="text-sm text-muted-foreground">Permissions and scope follow your existing AMMP access controls. An assistant can only see what the connected user can already see.</p>
        </div>
        <Link to="/blog/$slug" params={{ slug: "mcp-server-beta" }} className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary">Read the announcement <ArrowRight className="size-4" /></Link>
      </Band>

      <Band>
        <SectionHeading center title="How this can fit into your stack" intro="Use Ray, bring your own assistant, or both." />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-3">
          <div className="glass-soft rounded-3xl border-2 border-dashed lg:col-span-2 p-5">
            <p className="text-sm font-medium text-muted-foreground">Provided by AMMP</p>
            <div className="mt-4">
              <DiagramCard title="Ray, your AI coworker" subtitle="In Slack, Teams and AMMP OS" items={["Remembers your context and learns from feedback", "Combines data sources into one answer", "Builds reports, exports and interactive charts", "Live dashboards and on-the-fly troubleshooting"]} />
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

      <Band tone="grey">
        <SectionHeading title="MCP server questions" />
        <Faq items={MCP_FAQ} />
      </Band>

      <PageCta />
    </>
  );
}
