import { useEffect, useRef, useState, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowDown, ArrowRight, Check, Mail, type LucideIcon } from "lucide-react";
import { submitContact } from "@/lib/contact.functions";

const TURNSTILE_SITE_KEY = "0x4AAAAAAFQPfF249vmbtO0n";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;

/** Reads utm_* from the current URL (client only). */
export function useUtm() {
  const [utm, setUtm] = useState<Partial<Record<(typeof UTM_KEYS)[number], string>>>({});
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const out: Record<string, string> = {};
    for (const k of UTM_KEYS) { const v = q.get(k); if (v) out[k] = v.slice(0, 200); }
    setUtm(out);
  }, []);
  return utm;
}

export function EventStrip() {
  return (
    <div className="border-t border-border/60 bg-background/70 py-5">
      <p className="site-container text-center text-sm text-muted-foreground">
        Meet us at Sustainable Solutions Düsseldorf · 2–3 December 2026 · Hall 13/14, Stand P1.2
      </p>
    </div>
  );
}

export function HendrikCard() {
  return (
    <div className="glass rounded-2xl p-5">
      <p className="font-medium">Hendrik Broering</p>
      <p className="text-sm text-muted-foreground">CPO & Co-Founder</p>
      <a href="mailto:hendrik.broering@ammp.io" className="mt-3 inline-flex items-center gap-2 break-all text-sm font-medium hover:text-primary">
        <Mail className="size-4 shrink-0 text-primary" />hendrik.broering@ammp.io
      </a>
    </div>
  );
}

export function Pill({ children, pink = false }: { children: ReactNode; pink?: boolean }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-sm ${pink ? "border-primary bg-primary text-primary-foreground" : "border-border/70 bg-background/80"}`}>
      {children}
    </span>
  );
}

const field = "mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-base outline-none focus:border-primary";

/** Event contact form; saves to contact submissions with UTM and source page. */
export function EventContactForm({ sourcePage, withDeviceTypes = false }: { sourcePage: string; withDeviceTypes?: boolean }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", devices: "", message: "" });
  const [state, setState] = useState<"idle" | "sending" | "done" | "failed">("idle");
  const [token, setToken] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const utm = useUtm();
  const submit = useServerFn(submitContact);

  useEffect(() => {
    const render = () => {
      if (ref.current && window.turnstile && widgetId.current === null) {
        widgetId.current = window.turnstile.render(ref.current, {
          sitekey: TURNSTILE_SITE_KEY, callback: setToken, "expired-callback": () => setToken(""),
        });
      }
    };
    if (window.turnstile) { render(); return; }
    window.onTurnstileLoad = render;
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    const message = withDeviceTypes && form.devices ? `Device types: ${form.devices}\n\n${form.message}` : form.message;
    try {
      const res = await submit({ data: { name: form.name, email: form.email, company: form.company, message, turnstileToken: token, ...utm, source_page: sourcePage } });
      setState(res.ok ? "done" : "failed");
    } catch { setState("failed"); }
    if (widgetId.current !== null && window.turnstile) { window.turnstile.reset(widgetId.current); setToken(""); }
  }

  if (state === "done") {
    return (
      <div className="flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
        <Check className="mt-0.5 size-5 shrink-0 text-primary" />
        <p>Thanks, {form.name || "there"}! We'll be in touch shortly.</p>
      </div>
    );
  }
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div><label htmlFor="ev-name" className="text-sm font-medium">Name</label><input id="ev-name" required autoComplete="name" value={form.name} onChange={set("name")} className={field} /></div>
      <div><label htmlFor="ev-company" className="text-sm font-medium">Company</label><input id="ev-company" autoComplete="organization" value={form.company} onChange={set("company")} className={field} /></div>
      <div><label htmlFor="ev-email" className="text-sm font-medium">Email</label><input id="ev-email" type="email" required autoComplete="email" value={form.email} onChange={set("email")} className={field} /></div>
      {withDeviceTypes && (
        <div><label htmlFor="ev-devices" className="text-sm font-medium">Device types</label><input id="ev-devices" placeholder="e.g. inverters, batteries, controllers" value={form.devices} onChange={set("devices")} className={field} /></div>
      )}
      <div><label htmlFor="ev-message" className="text-sm font-medium">Message</label><textarea id="ev-message" required rows={4} value={form.message} onChange={set("message")} className={field} /></div>
      <div ref={ref} />
      {state === "failed" && <p className="text-sm text-destructive">Something went wrong. Please try again or email hendrik.broering@ammp.io.</p>}
      <button type="submit" disabled={state === "sending" || !token} className="button button-pink w-full justify-center">
        {state === "sending" ? "Sending…" : "Send"} <ArrowRight className="size-4" />
      </button>
    </form>
  );
}

/* Shared booth-page building blocks (/ssd26, /ssd26-partners). */

export function SectionTitle({ title, intro }: { title: string; intro?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-[-0.015em] sm:text-4xl lg:text-5xl">{title}</h2>
      {intro && <p className="mt-3 text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}

function FilledArrow() {
  return (
    <span aria-hidden className="mx-auto grid size-8 shrink-0 place-items-center self-center rounded-full bg-foreground text-background">
      <ArrowDown className="size-4 md:hidden" strokeWidth={3} />
      <ArrowRight className="hidden size-4 md:block" strokeWidth={3} />
    </span>
  );
}

/** Steps in a row with filled arrows between them; stacked on phones. */
export function StepRow({ steps }: { steps: { icon: LucideIcon; title: string; text: string }[] }) {
  return (
    <ol className="mx-auto mt-12 flex max-w-5xl flex-col gap-3 md:flex-row md:items-stretch">
      {steps.map(({ icon: Icon, title, text }, i) => (
        <li key={title} className="contents">
          {i > 0 && <FilledArrow />}
          <div className="glass flex-1 rounded-2xl p-6 text-center">
            <Icon className="mx-auto size-6 text-primary" />
            <p className="mt-3 font-medium">{title}</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function IconCards({ items, columns = 4 }: { items: { icon: LucideIcon; title: string; text?: string }[]; columns?: 3 | 4 }) {
  return (
    <div className={`mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 ${columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="glass rounded-2xl p-6 text-center">
          <Icon className="mx-auto size-6 text-primary" />
          <p className="mt-3 font-medium">{title}</p>
          {text && <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>}
        </div>
      ))}
    </div>
  );
}
