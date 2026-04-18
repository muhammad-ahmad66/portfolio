import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, whatsapp, message, plan } = await request.json();

    if (!name || !email || !whatsapp || !message || !plan) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: "Email service is not configured." },
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

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head><meta charset="utf-8"><style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 16px; }
          .label { font-weight: bold; color: #2563eb; margin-bottom: 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; }
          .value { color: #333; }
          .plan-badge { display: inline-block; background: #ede9fe; color: #7c3aed; padding: 6px 14px; border-radius: 20px; font-weight: 700; font-size: 14px; margin-bottom: 20px; }
          .divider { border-top: 2px solid #eee; margin: 20px 0; }
        </style></head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin:0 0 8px">New Pricing Inquiry</h1>
              <p style="margin:0;opacity:0.85">Someone is interested in a plan from your portfolio</p>
            </div>
            <div class="content">
              <div class="plan-badge">Plan: ${plan}</div>
              <div class="field"><div class="label">Name</div><div class="value">${name}</div></div>
              <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${email}">${email}</a></div></div>
              <div class="field"><div class="label">WhatsApp / Phone</div><div class="value">${whatsapp}</div></div>
              <div class="divider"></div>
              <div class="field"><div class="label">Message</div><div class="value" style="white-space:pre-wrap;background:white;padding:15px;border-radius:5px;border-left:4px solid #2563eb">${message}</div></div>
              <div class="divider"></div>
              <p style="color:#666;font-size:12px">Sent from the pricing page on your portfolio. Reply to this email to respond to ${name}.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Portfolio Pricing" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || "muhammadugv66@gmail.com",
      replyTo: email,
      subject: `Pricing Inquiry: ${plan} Plan — ${name}`,
      html: emailHtml,
      text: `New Pricing Inquiry\n\nPlan: ${plan}\nName: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ message: "Sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Pricing inquiry error:", error);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
