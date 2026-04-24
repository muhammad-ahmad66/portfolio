import { STEPS } from "./steps";
import type { ChatAnswers } from "./types";

export function getNextStep(
  stepId: string,
  answer: string,
  allAnswers: ChatAnswers
): string | null {
  const step = STEPS[stepId];
  if (!step) return null;

  // Option-level goTo takes priority
  if (step.options) {
    const opt = step.options.find(
      (o) => (o.value ?? o.label) === answer
    );
    if (opt?.goTo) return opt.goTo;
  }

  // b2-problems: if answer includes broken or hacked → escalate
  if (stepId === "b2-problems") {
    const lower = answer.toLowerCase();
    if (lower.includes("broken") || lower.includes("hacked")) {
      return "b2a-urgent";
    }
    return "b3-url";
  }

  return step.defaultNext ?? null;
}

export function estimateTotalSteps(historyStack: string[]): number {
  const first = historyStack[0] ?? "";
  if (first.startsWith("a") || first === "start") return 16;
  if (first.startsWith("b")) return 9;
  if (first.startsWith("c")) return 7;
  if (first.startsWith("d")) return 4;
  return 12;
}

export function buildWhatsAppLink(answers: ChatAnswers): string {
  const lines = [
    `Hi Ahmad, I just filled out your project form.`,
    answers.intent && `Enquiry type: ${answers.intent}`,
    answers.purpose && `Purpose: ${answers.purpose}`,
    answers.business_type && `Business type: ${answers.business_type}`,
    answers.budget && `Budget: ${answers.budget}`,
    answers.timeline && `Timeline: ${answers.timeline}`,
    answers.name && `My name: ${answers.name}`,
    answers.whatsapp && `My WhatsApp: ${answers.whatsapp}`,
    answers.email && `My email: ${answers.email}`,
    answers.notes && `Notes: ${answers.notes}`,
    answers.question && `Question: ${answers.question}`,
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/923129819819?text=${encodeURIComponent(lines)}`;
}

export function formatAnswersForEmail(answers: ChatAnswers): string {
  const labels: Record<string, string> = {
    intent: "Enquiry Type",
    purpose: "Website Purpose",
    product_count: "Product Count",
    ecom_features: "eCommerce Features",
    payment_methods: "Payment Methods",
    business_type: "Business Type",
    business_features: "Business Features",
    lead_action: "Primary Lead Action",
    leads_features: "Lead Gen Features",
    portfolio_type: "Portfolio Type",
    portfolio_features: "Portfolio Features",
    design_status: "Design Readiness",
    app_features: "App Features",
    tech_stack: "Tech Stack",
    industry: "Industry",
    audience: "Target Audience",
    has_inspo: "Has Inspiration",
    inspo_url: "Inspiration URL",
    brand_status: "Brand Identity",
    content_status: "Content Status",
    design_file: "Design File",
    pages_count: "Page Count",
    pages_list: "Pages Required",
    support: "Ongoing Support",
    budget: "Budget",
    timeline: "Timeline",
    platform: "Current Platform",
    problems: "Problems Reported",
    site_down: "Site Currently Down",
    site_url: "Website URL",
    admin_access: "Admin Access",
    urgency: "Urgency Level",
    partnership_type: "Partnership Type",
    work_volume: "Work Volume",
    tech_needs: "Tech Needs",
    client_type: "Client Type",
    question_topic: "Question Topic",
    question: "Question",
    name: "Name",
    whatsapp: "WhatsApp",
    email: "Email",
    notes: "Additional Notes",
  };

  return Object.entries(answers)
    .filter(([, v]) => v && v !== "(skipped)")
    .map(([k, v]) => `${labels[k] ?? k}: ${v}`)
    .join("\n");
}
