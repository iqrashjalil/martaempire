import { NextResponse } from "next/server";
import { application } from "@/lib/content";

/**
 * Receives an application.
 * Set APPLICATIONS_WEBHOOK_URL (e.g. a Make/Zapier/n8n hook, Supabase Edge
 * Function or Notion proxy) to forward submissions. Without it, submissions
 * are logged on the server so the form still completes in development.
 */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const clean: Record<string, string> = {};
  for (const q of application.questions) {
    const raw = body[q.key];
    const v = typeof raw === "string" ? raw.trim() : "";
    if (v.length < q.min || v.length > q.max || (q.type === "email" && !EMAIL.test(v))) {
      return NextResponse.json({ error: `Invalid field: ${q.key}` }, { status: 422 });
    }
    clean[q.key] = v;
  }

  const payload = {
    ...clean,
    source: "martaempire.com",
    submitted_at: new Date().toISOString(),
    user_agent: req.headers.get("user-agent") ?? "",
  };

  const hook = process.env.APPLICATIONS_WEBHOOK_URL;
  if (hook) {
    const res = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error("[apply] webhook failed", res.status, await res.text().catch(() => ""));
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
  } else {
    console.info("[apply] new application (no APPLICATIONS_WEBHOOK_URL set)", payload);
  }

  return NextResponse.json({ ok: true });
}
