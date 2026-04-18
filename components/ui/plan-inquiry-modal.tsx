"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  X,
  MessageCircle,
  Mail,
  FileText,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";
import { PhoneInput } from "@/components/ui/phone-input";

interface PlanInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

type Tab = "whatsapp" | "email" | "form";

export function PlanInquiryModal({ isOpen, onClose, planName }: PlanInquiryModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>("whatsapp");
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab("whatsapp");
      setFormData({ name: "", email: "", whatsapp: "", message: "" });
      setIsSuccess(false);
      setError(null);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const whatsappText = encodeURIComponent(
    `Hi Muhammad, I'm interested in the ${planName} plan. Can we discuss further?`
  );
  const whatsappUrl = `https://wa.me/923129818199?text=${whatsappText}`;
  const emailUrl = `mailto:muhammadugv66@gmail.com?subject=Inquiry: ${planName} Plan&body=Hi Muhammad, I'm interested in the ${planName} plan. Can we discuss the details?`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/pricing-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, plan: planName }),
      });
      if (!res.ok) throw new Error("Failed");
      setIsSuccess(true);
    } catch {
      setError("Could not send message. Please try WhatsApp or email instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
    { id: "email", label: "Email", icon: Mail },
    { id: "form", label: "Form", icon: FileText },
  ];

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary-500/60 focus:ring-1 focus:ring-primary-500/30 transition";

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal — always centered, scrollable on short screens */}
      <div
        className="relative z-10 w-[calc(100vw-2rem)] max-w-md bg-card border border-border/80 rounded-3xl shadow-2xl overflow-hidden"
        style={{ maxHeight: "90svh", overflowY: "auto" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border/60">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-0.5">
              Get Started
            </p>
            <h2 className="text-lg font-bold text-foreground">{planName} Plan</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 px-6 pt-5">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 flex items-center justify-center gap-1 px-2 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === id
                  ? "bg-primary-500 text-white shadow-sm shadow-primary-500/30"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* WhatsApp */}
          {activeTab === "whatsapp" && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Chat with me directly on WhatsApp. I typically respond within a few minutes.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20b958] text-white font-semibold text-sm transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Open WhatsApp Chat
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-muted-foreground text-center">
                Opens with a prefilled message about the {planName} plan
              </p>
            </div>
          )}

          {/* Email */}
          {activeTab === "email" && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Send me an email with your project details. I usually reply within 2 hours.
              </p>
              <a
                href={emailUrl}
                className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm text-white transition-all"
                style={{ backgroundImage: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)" }}
              >
                <Mail className="w-5 h-5" />
                Open Email Client
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-muted-foreground text-center">
                Subject will be prefilled: &ldquo;Inquiry: {planName} Plan&rdquo;
              </p>
            </div>
          )}

          {/* Contact Form */}
          {activeTab === "form" && (
            isSuccess ? (
              <div className="text-center space-y-3 py-6">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
                <p className="font-semibold text-foreground">Message Sent!</p>
                <p className="text-sm text-muted-foreground">
                  I&apos;ll get back to you within 2 hours.
                </p>
                <button
                  onClick={onClose}
                  className="text-sm text-primary-500 hover:underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                {/* Plan - prefilled */}
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5 block">
                    Selected Plan
                  </label>
                  <input
                    value={planName}
                    readOnly
                    className="w-full px-4 py-2.5 rounded-xl border border-primary-500/30 bg-primary-500/5 text-primary-500 text-sm font-semibold cursor-not-allowed"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5 block">
                    Your Name *
                  </label>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    placeholder="John Smith"
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5 block">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5 block">
                    WhatsApp / Phone *
                  </label>
                  <PhoneInput
                    value={formData.whatsapp}
                    onChange={(val) => setFormData((p) => ({ ...p, whatsapp: val }))}
                    placeholder="300 1234567"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5 block">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white transition-all disabled:opacity-60 mt-1"
                  style={{ backgroundImage: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)" }}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
