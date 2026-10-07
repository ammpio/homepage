import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Band, PageHero, FeatureGrid } from "@/components/site/sections";

export const Route = createFileRoute("/trial")({
  head: () => ({ meta: [
    { title: "Start a Trial — AMMP" },
    { name: "description", content: "Start a discounted 6-month trial of AMMP OS and AI coworker, with a pilot phase on a subset of your portfolio." },
    { property: "og:title", content: "Start a trial with AMMP" },
    { property: "og:description", content: "Validate AMMP with a subset of your portfolio before committing to a full rollout." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

function Page() {
  const [form, setForm] = useState({ name: "", email: "", company: "", sites: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero eyebrow="Start a trial" title="Try AMMP on a slice of" highlight="your real portfolio." intro="We offer a discounted 6-month trial period that includes a pilot phase, so you can validate AMMP with a subset of your portfolio before committing to a full rollout." />

      <Band tone="grey">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">What the trial includes</h2>
            <FeatureGrid columns={2} features={[
              { icon: Check, title: "Run alongside your current setup", text: "Operate AMMP side-by-side with your existing tools during the trial." },
              { icon: Check, title: "No hardware replacement", text: "AMMP connects to equipment you already have from 30+ manufacturers." },
              { icon: Check, title: "Guided onboarding", text: "Setup takes about a month; our team handles integration and data migration." },
              { icon: Check, title: "AI coworker included", text: "See how Ray investigates and prioritize work on your own data." },
            ]} />
          </div>
          <div className="glass-strong rounded-2xl p-6">
            <h2 className="text-lg font-semibold">Request your trial</h2>
            {submitted ? (
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                <p>Thanks, {form.name || "there"}! We'll follow up to set up your pilot phase.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="tname" className="text-sm font-medium">Name</label>
                  <input id="tname" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="temail" className="text-sm font-medium">Email</label>
                  <input id="temail" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="tcompany" className="text-sm font-medium">Company</label>
                  <input id="tcompany" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="tsites" className="text-sm font-medium">Portfolio size (MWp or site count)</label>
                  <input id="tsites" value={form.sites} onChange={(e) => setForm({ ...form, sites: e.target.value })} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
                </div>
                <button type="submit" className="button button-primary w-full justify-center">Request trial <ArrowRight className="size-4" /></button>
              </form>
            )}
          </div>
        </div>
      </Band>

      <Band tone="white">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold">Prefer to see it first?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Explore the interactive demo before you commit to a trial.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/demo" className="button button-primary">Try the demo <ArrowRight className="size-4" /></Link>
            <Link to="/pricing" className="button button-ghost">View pricing</Link>
          </div>
        </div>
      </Band>
    </>
  );
}
