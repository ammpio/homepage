import { Link, Outlet } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin } from "lucide-react";
import ammpLogo from "@/assets/ammp-logo.png";

const nav = [
  ["Product", "/product"], ["Integrations", "/integrations"], ["Use cases", "/use-cases/asset-managers"],
  ["Case studies", "/case-studies"], ["Pricing", "/pricing"], ["AI coworkers", "/ai"],
] as const;

export function SiteShell() {
  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="site-container flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="AMMP home"><img src={ammpLogo} alt="AMMP" className="h-7 w-auto" /></Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {nav.map(([label, to]) => <Link key={to} to={to} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground" activeProps={{ className: "text-foreground" }}>{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="https://os.ammp.io" target="_blank" rel="noreferrer" className="px-3 py-2 text-sm font-medium">Log in</a>
          <Link to="/demo" className="button button-ghost">Try demo</Link>
          <Link to="/contact" className="button button-primary">Contact sales</Link>
        </div>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-border px-3 py-2 text-sm font-semibold">Menu</summary>
          <div className="absolute right-0 top-12 w-72 rounded-md border border-border bg-card p-3 shadow-xl">
            {nav.map(([label, to]) => <Link key={to} to={to} className="block rounded px-3 py-2.5 text-sm hover:bg-secondary">{label}</Link>)}
            <div className="mt-2 grid gap-2 border-t border-border pt-3"><Link to="/demo" className="button button-ghost">Try demo</Link><Link to="/contact" className="button button-primary">Contact sales</Link></div>
          </div>
        </details>
      </div>
    </header>
    <main><Outlet /></main>
    <footer className="border-t border-border bg-secondary/40">
      <div className="site-container py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div><img src={ammpLogo} alt="AMMP" className="h-7 w-auto" /><p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">The operating system and AI coworkers for renewable energy portfolios.</p><a href="https://linkedin.com/company/ammptechnologies" className="mt-5 inline-flex text-muted-foreground" aria-label="AMMP on LinkedIn"><Linkedin className="size-5" /></a></div>
          <FooterColumn title="Platform" links={[["Product","/product"],["Integrations","/integrations"],["Pricing","/pricing"],["AI","/ai"]]} />
          <FooterColumn title="Solutions" links={[["Asset managers","/use-cases/asset-managers"],["O&M providers","/use-cases/om-providers"],["Solar monitoring","/solutions/solar-monitoring"],["Energy assets","/solutions/energy-asset-management"]]} />
          <FooterColumn title="Company" links={[["About","/about"],["Blog","/blog"],["Careers","/careers"],["Contact","/contact"]]} />
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© 2026 AMMP Technologies</span><div className="flex gap-5"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link><Link to="/security">Security</Link></div></div>
      </div>
    </footer>
  </div>;
}

function FooterColumn({ title, links }: { title: string; links: readonly (readonly [string,string])[] }) {
  return <div><h2 className="text-sm font-semibold">{title}</h2><ul className="mt-4 space-y-3">{links.map(([label,to]) => <li key={to}><Link to={to} className="text-sm text-muted-foreground hover:text-foreground">{label}</Link></li>)}</ul></div>;
}

export function PageCta() {
  return <section className="border-t border-border bg-background py-16"><div className="site-container flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow">Move from visibility to action</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">Put your portfolio data to work.</h2></div><Link to="/contact" className="button button-primary">Talk to our team <ArrowUpRight className="size-4" /></Link></div></section>;
}
