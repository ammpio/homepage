import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({ email: z.string().trim().email().max(254) });

export const subscribeNewsletter = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const brevoKey = process.env["BREVO_API_KEY"];
    if (!lovableKey || !brevoKey) {
      console.error("Newsletter: Brevo is not configured");
      return { ok: false as const };
    }
    const listId = Number(process.env["BREVO_LIST_ID"]);
    const body: Record<string, unknown> = { email: data.email, updateEnabled: true };
    if (Number.isFinite(listId) && listId > 0) body.listIds = [listId];
    const res = await fetch("https://connector-gateway.lovable.dev/brevo/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": brevoKey,
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      console.error(`Brevo subscribe failed [${res.status}]: ${await res.text()}`);
      return { ok: false as const };
    }
    return { ok: true as const };
  });
