import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { formatAnswersForEmail } from "@/data/chatbot/routing";
import type { ChatAnswers } from "@/data/chatbot/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { answers, trigger } = body as {
      answers: ChatAnswers;
      trigger: "submit" | "close";
    };

    if (!answers || Object.keys(answers).length < 2) {
      return NextResponse.json({ error: "Insufficient data" }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: "Email not configured" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const formatted = formatAnswersForEmail(answers);
    const displayName = answers.name || "Anonymous";
    const intent = answers.intent || "Unknown";

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>
  body { font-family: Arial, sans-serif; line-height: 1.7; color: #333; margin: 0; padding: 0; }
  .wrap { max-width: 600px; margin: 0 auto; }
  .head { background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%); color: white; padding: 28px 32px; border-radius: 10px 10px 0 0; }
  .head h1 { margin: 0 0 6px; font-size: 20px; }
  .head p { margin: 0; opacity: 0.85; font-size: 13px; }
  .body { background: #f8fafc; padding: 28px 32px; border-radius: 0 0 10px 10px; }
  .tag { display: inline-block; background: #eff6ff; color: #2563eb; border: 1px solid #bfdbfe; border-radius: 6px; padding: 3px 10px; font-size: 12px; font-weight: 600; margin-bottom: 20px; }
  .row { margin-bottom: 14px; }
  .label { font-weight: 700; color: #6366f1; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 3px; }
  .val { background: white; border-radius: 6px; padding: 10px 14px; border-left: 3px solid #6366f1; font-size: 14px; }
  .hr { border: none; border-top: 1px solid #e2e8f0; margin: 20px 0; }
  .footer { font-size: 12px; color: #94a3b8; margin-top: 20px; }
  .cta { display: inline-block; background: #25D366; color: white; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 13px; margin-top: 16px; }
</style></head>
<body>
<div class="wrap">
  <div class="head">
    <h1>New Chatbot Lead</h1>
    <p>Someone completed the assistant on your portfolio — ${trigger === "close" ? "chat was closed" : "form submitted"}</p>
  </div>
  <div class="body">
    <span class="tag">${intent}</span>
    ${Object.entries(answers)
      .filter(([, v]) => v && v !== "(skipped)")
      .map(
        ([k, v]) => `
    <div class="row">
      <div class="label">${k.replace(/_/g, " ")}</div>
      <div class="val">${v}</div>
    </div>`
      )
      .join("")}
    <hr class="hr" />
    ${answers.whatsapp ? `<a class="cta" href="https://wa.me/${answers.whatsapp.replace(/\D/g, "")}">Reply on WhatsApp</a>` : ""}
    ${answers.email ? `<a class="cta" style="background:#3b82f6;margin-left:8px" href="mailto:${answers.email}">Reply by Email</a>` : ""}
    <p class="footer">Sent from the portfolio chatbot assistant. Trigger: ${trigger}.</p>
  </div>
</div>
</body>
</html>`;

    await transporter.sendMail({
      from: `"Portfolio Chatbot" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL ?? "muhammadugv66@gmail.com",
      replyTo: answers.email ?? undefined,
      subject: `Chatbot Lead: ${displayName} — ${intent}`,
      text: `New chatbot lead\n\nTrigger: ${trigger}\n\n${formatted}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("chatbot-lead email error:", err);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
