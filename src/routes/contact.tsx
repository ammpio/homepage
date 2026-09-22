import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Calendar, Check, Linkedin, Mail } from "lucide-react";
import { Band, PageHero } from "@/components/site/sections";
import { BookMeeting } from "@/components/site/BookMeeting";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact AMMP — Talk to our team" },
    { name: "description", content: "Ready to put AI coworkers and portfolio-wide visibility to work? Talk to AMMP about your renewable energy operations." },
    { property: "og:title", content: "Contact AMMP" },
    { property: "og:description", content: "Ready to scale your solar operations? Let's discuss how AMMP can help." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Page,
});

function Page() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in"
        highlight="touch."
        intro="Ready to scale your solar operations? Let's discuss how AI coworkers and AMMP can help."
      />

      <Band tone="grey">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="glass-strong rounded-2xl p-6">
              <h2 className="text-lg font-semibold">Send us a message</h2>
              {submitted ? (
                <div className="mt-6 flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p>Thanks, {form.name || "there"}! Your message has been received. Our team will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input id="name" required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input id="email" type="email" required placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-sm font-medium">Company</label>
                    <input id="company" placeholder="Your company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea id="message" required rows={5} placeholder="Tell us about your solar portfolio and how we can help..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
                  </div>
                  <button type="submit" className="button button-primary w-full justify-center">Send Message <ArrowRight className="size-4" /></button>
                </form>
              )}
            </div>

            <div className="glass rounded-2xl p-6">
              <h2 className="text-lg font-semibold">Contact information</h2>
              <div className="mt-4 space-y-3">
                <a href="mailto:contact@ammp.io" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                  <span className="grid size-10 place-items-center rounded-lg bg-primary/10"><Mail className="size-5 text-primary" /></span>
                  <span><span className="block font-medium text-foreground">Email</span><span className="text-sm">contact@ammp.io</span></span>
                </a>
                <a href="https://linkedin.com/company/ammptechnologies" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                  <span className="grid size-10 place-items-center rounded-lg bg-primary/10"><Linkedin className="size-5 text-primary" /></span>
                  <span><span className="block font-medium text-foreground">LinkedIn</span><span className="text-sm">AMMP Technologies</span></span>
                </a>
              </div>
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold"><Calendar className="size-5 text-primary" />Book a meeting</h2>
            <p className="mt-3 text-sm text-muted-foreground">Schedule a time to discuss your solar monitoring and AI coworker needs with our team.</p>
            <BookMeeting className="mt-6" />
          </div>
        </div>
      </Band>
    </>
  );
}
