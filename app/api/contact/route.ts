import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      domainHosting,
      graphicWork,
      message,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !projectType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if email configuration is set up
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error("Email configuration missing. Please set EMAIL_USER and EMAIL_APP_PASSWORD in .env.local");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the site administrator." },
        { status: 500 }
      );
    }

    // Create transporter - using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Format project type for display
    const projectTypeLabels: Record<string, string> = {
      wordpress: "WordPress Development",
      nextjs: "Next.js / React Application",
      ecommerce: "E-commerce Solution",
      redesign: "Website Redesign",
      maintenance: "Maintenance & Support",
      other: "Other",
    };

    // Format budget for display
    const budgetLabels: Record<string, string> = {
      "under-5k": "Under $5,000",
      "5k-10k": "$5,000 - $10,000",
      "10k-25k": "$10,000 - $25,000",
      "25k-50k": "$25,000 - $50,000",
      "50k-plus": "$50,000+",
      discuss: "Prefer to discuss",
    };

    // Format timeline for display
    const timelineLabels: Record<string, string> = {
      asap: "ASAP",
      "1-month": "Within 1 month",
      "2-3-months": "2-3 months",
      "3-6-months": "3-6 months",
      flexible: "Flexible",
    };

    // Email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
            .value { color: #333; }
            .divider { border-top: 2px solid #eee; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
              <p>You have received a new message from your portfolio website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              
              ${company ? `
              <div class="field">
                <div class="label">Company:</div>
                <div class="value">${company}</div>
              </div>
              ` : ""}
              
              <div class="divider"></div>
              
              <div class="field">
                <div class="label">Project Type:</div>
                <div class="value">${projectTypeLabels[projectType] || projectType}</div>
              </div>
              
              ${budget ? `
              <div class="field">
                <div class="label">Budget Range:</div>
                <div class="value">${budgetLabels[budget] || budget}</div>
              </div>
              ` : ""}
              
              ${timeline ? `
              <div class="field">
                <div class="label">Timeline:</div>
                <div class="value">${timelineLabels[timeline] || timeline}</div>
              </div>
              ` : ""}
              
              <div class="field">
                <div class="label">Additional Services:</div>
                <div class="value">
                  ${domainHosting ? "✓ Domain & Hosting Setup<br>" : ""}
                  ${graphicWork ? "✓ Graphic Work (Logo, Branding)<br>" : ""}
                  ${!domainHosting && !graphicWork ? "None" : ""}
                </div>
              </div>
              
              <div class="divider"></div>
              
              <div class="field">
                <div class="label">Project Details:</div>
                <div class="value" style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea;">${message}</div>
              </div>
              
              <div class="divider"></div>
              
              <p style="color: #666; font-size: 12px; margin-top: 30px;">
                This email was sent from your portfolio contact form.<br>
                Reply directly to this email to respond to ${name}.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Plain text version
    const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
${company ? `Company: ${company}\n` : ""}
Project Type: ${projectTypeLabels[projectType] || projectType}
${budget ? `Budget Range: ${budgetLabels[budget] || budget}\n` : ""}
${timeline ? `Timeline: ${timelineLabels[timeline] || timeline}\n` : ""}
Additional Services:
${domainHosting ? "- Domain & Hosting Setup\n" : ""}
${graphicWork ? "- Graphic Work (Logo, Branding)\n" : ""}
${!domainHosting && !graphicWork ? "- None\n" : ""}
Project Details:
${message}
    `;

    // Send email
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL || "muhammadugv66@gmail.com",
      replyTo: email,
      subject: `New Contact: ${name} - ${projectTypeLabels[projectType] || projectType}`,
      text: emailText,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

