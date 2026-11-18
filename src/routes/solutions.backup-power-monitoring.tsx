import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BatteryWarning, Bot, Database, LayoutDashboard, MessageSquare, Plug } from "lucide-react";
import { Band, PageHero, SectionHeading, FeatureGrid, Faq } from "@/components/site/sections";
import { PageCta } from "@/components/site/SiteShell";
import { LivePostLink } from "@/components/site/LivePostLink";
import { BACKUP_FAQ } from "@/data/batch7";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/solutions/backup-power-monitoring")({
  staticData: { sitemap: true },
  head: () => pageHead({
    path: "/solutions/backup-power-monitoring",
    title: "Solar and battery backup monitoring for South African branch networks — AMMP",
    description: "Monitor solar and battery backup across every branch in one view: alerts when backup isn't ready, Microsoft Teams and Slack, and savings with 1,000+ SA tariffs.",
    faq: BACKUP_FAQ,
  }),
  component: Page,
});

const link = "inline-flex items-center gap-1 text-sm font-medium hover:underline";

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Backup power monitoring"
        title="Solar and battery backup across"
        highlight="every branch."
        intro="For companies with many branches or stores running solar and battery backup through load-shedding, such as banks, retailers, franchise and property portfolios. AMMP brings every site and brand into one view, and tells you when backup isn't ready."
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "AMMP in South Africa", to: "/south-africa" }}
      />
      <Band tone="grey">
        <SectionHeading title="One view across branches and brands" />
        <FeatureGrid columns={3} features={[
          { icon: Plug, title: "Every brand in one place", text: "Huawei, SMA, Sungrow, Victron, Deye and more, through cloud API or the AMMP Edge datalogger." },
          { icon: LayoutDashboard, title: "Dashboards at every level", text: "Portfolio, sub-portfolio, site and device dashboards." },
          { icon: Database, title: "1,000+ South African tariffs", text: "The AMMP tariff database covers 1,000+ South African tariff structures, so savings and billing use the right rates." },
        ]} />
      </Band>
      <Band>
        <SectionHeading title="Know when backup isn't ready" />
        <FeatureGrid columns={3} features={[
          { icon: BatteryWarning, title: "Battery state of charge", text: "A battery that starts load-shedding half empty can't deliver the backup it was sized for. Track state of charge before each scheduled outage." },
          { icon: Plug, title: "Inverters offline", text: "Alerts cover common conditions such as communication failures, battery state of charge and PV generation performance." },
          { icon: MessageSquare, title: "Alerts where your team works", text: "Alerts go to Microsoft Teams, Slack, email or webhooks." },
        ]} />
        <div className="mt-8 flex flex-wrap gap-6">
          <LivePostLink slug="monitor-solar-battery-backup-load-shedding-south-africa" label="How to monitor solar and battery backup through load-shedding" />
          <LivePostLink slug="solar-battery-alerts-microsoft-teams-slack" label="Solar and battery alerts in Microsoft Teams and Slack" />
        </div>
      </Band>
      <Band tone="grey">
        <SectionHeading title="Ray checks every branch each morning" />
        <FeatureGrid columns={2} features={[
          { icon: Bot, title: "Morning check", text: "Ray checks every site each morning, groups repeat alarms and opens tickets. People decide; Ray doesn't control hardware." },
          { icon: Database, title: "Savings per branch", text: "Ray checks each battery's charging and discharging against the site's time-of-use tariff and flags sites that lost money to the wrong window." },
        ]} />
        <div className="mt-8 flex flex-wrap gap-6">
          <Link to="/south-africa" className={link}>AMMP in South Africa <ArrowRight className="size-4" /></Link>
          <Link to="/solutions/hybrid-sites" className={link}>Hybrid sites <ArrowRight className="size-4" /></Link>
          <Link to="/integrations" className={link}>Supported equipment <ArrowRight className="size-4" /></Link>
        </div>
      </Band>
      <Band>
        <SectionHeading title="Questions about backup power monitoring" />
        <Faq items={BACKUP_FAQ} />
      </Band>
      <PageCta />
    </>
  );
}
