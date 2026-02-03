import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getConfig } from "@/lib/config";

export async function POST(req: Request) {
  try {
    const cfg = getConfig();
    const resend = new Resend(cfg.resendApiKey);
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const toAddress = cfg.contactToEmail;

    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toAddress],
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: message,
    });

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
