import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  company: z.string().trim().max(200).optional().default(""),
  message: z.string().trim().min(1).max(5000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => schema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row, error } = await supabaseAdmin
      .from("contact_submissions")
      .insert({
        name: data.name,
        email: data.email,
        company: data.company || null,
        message: data.message,
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
