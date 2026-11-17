import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  company: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().min(1).max(5000),
  turnstileToken: z.string().min(1),
  utm_source: z.string().trim().max(200).optional(),
  utm_medium: z.string().trim().max(200).optional(),
  utm_campaign: z.string().trim().max(200).optional(),
  source_page: z.string().trim().max(200).optional(),
});

export const submitContact = createServerFn({ method: "POST" })
  .validator((data) => schema.parse(data))
  .handler(async ({ data }) => {
    // Verify the Cloudflare Turnstile token before saving anything.
    const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env["TURNSTILE_SECRET_KEY"]!,
        response: data.turnstileToken,
      }),
    });
    const verdict = (await verify.json()) as { success?: boolean };
    if (!verify.ok || !verdict.success) {
      console.error("turnstile verification failed", verdict);
      return { ok: false as const };
    }
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row, error } = await supabaseAdmin
      .from("contact_submissions")
      .insert({
        name: data.name,
        email: data.email,
        company: data.company || null,
        message: data.message,
        utm_source: data.utm_source || null,
        utm_medium: data.utm_medium || null,
        utm_campaign: data.utm_campaign || null,
        source_page: data.source_page || null,
      })
      .select("id")
      .single();
    if (error || !row) {
      console.error("contact insert failed", error);
      return { ok: false as const };
    }
    try {
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
      await sendTemplateEmail("contact-notification", "sales@ammp.io", {
        templateData: { name: data.name, email: data.email, company: data.company, message: data.message },
        idempotencyKey: `contact-notification-${row.id}`,
        replyTo: data.email,
      });
    } catch (e) {
      // Message is already saved; don't fail the visitor's submission.
      console.error("contact email failed", e);
    }
    return { ok: true as const };
  });
