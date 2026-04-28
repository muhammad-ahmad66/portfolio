"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type FormEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  MessageCircle,
  Mail,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  SkipForward,
  ChevronLeft,
  RotateCcw,
  Trash2,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogoIcon } from "@/components/ui/logo-icon";
import { STEPS } from "@/data/chatbot/steps";
import {
  getNextStep,
  estimateTotalSteps,
  buildWhatsAppLink,
} from "@/data/chatbot/routing";
import { pricingPlans } from "@/data/pricing/pricing-plans";
import { featuredProjects } from "@/data/work/featured-projects";
import type {
  ChatAnswers,
  ChatMessage,
  StoredSession,
  Step,
} from "@/data/chatbot/types";
import { SESSION_KEY, SESSION_TTL } from "@/data/chatbot/types";
import { useCurrency } from "@/contexts/currency-context";
import { formatPrice } from "@/lib/currencies";
import { useContactWindowContext } from "@/app/contexts/contact-window-context";

// ─────────────────────────────────────────────────────────────────────────────
// Session helpers
// ─────────────────────────────────────────────────────────────────────────────

function loadSession(): StoredSession | null {
  try {
    const raw =
      typeof window !== "undefined"
        ? localStorage.getItem(SESSION_KEY)
        : null;
    if (!raw) return null;
    const session = JSON.parse(raw) as StoredSession;
    if (Date.now() - session.savedAt > SESSION_TTL) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

function saveSession(session: Omit<StoredSession, "savedAt">) {
  try {
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ ...session, savedAt: Date.now() })
    );
  } catch {}
}

function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {}
}

// ─────────────────────────────────────────────────────────────────────────────
// Send lead email (fire and forget)
// ─────────────────────────────────────────────────────────────────────────────

async function sendLeadEmail(
  answers: ChatAnswers,
  trigger: "submit" | "close"
) {
  if (Object.keys(answers).length < 2) return;
  try {
    await fetch("/api/chatbot-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers, trigger }),
    });
  } catch {}
}

// ─────────────────────────────────────────────────────────────────────────────
// BotBubble — typewriter effect for latest message
// ─────────────────────────────────────────────────────────────────────────────

function BotBubble({
  text,
  animate,
  onDone,
}: {
  text: string;
  animate: boolean;
  onDone?: () => void;
}) {
  const [displayed, setDisplayed] = useState(animate ? "" : text);
  const [done, setDone] = useState(!animate);

  useEffect(() => {
    if (!animate) {
      setDisplayed(text);
      setDone(true);
      onDone?.();
      return;
    }
    setDisplayed("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
        onDone?.();
      }
    }, 13);
    return () => clearInterval(id);
  }, [text, animate]);

  return (
    <div className="max-w-[82%] sm:max-w-[78%] px-3 py-2.5 sm:px-3.5 rounded-2xl rounded-tl-sm bg-muted/60 dark:bg-white/[0.06] text-sm leading-relaxed text-foreground">
      {displayed}
      {animate && !done && (
        <span className="inline-block w-0.5 h-3.5 bg-primary-500 ml-0.5 align-middle animate-pulse" />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Progress bar
// ─────────────────────────────────────────────────────────────────────────────

function ProgressBar({
  historyStack,
  isDone,
}: {
  historyStack: string[];
  isDone: boolean;
}) {
  const total = estimateTotalSteps(historyStack);
  const pct = isDone ? 100 : Math.min(95, Math.round((historyStack.length / total) * 100));

  return (
    <div className="px-3 sm:px-4 pt-2.5 pb-1.5 shrink-0">
      <div className="h-0.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Info renderers
// ─────────────────────────────────────────────────────────────────────────────

function InfoPricingCards({ onContinue }: { onContinue: () => void }) {
  const { currency } = useCurrency();
  return (
    <div className="space-y-2.5 p-3 sm:p-4">
      <div className="space-y-2">
        {pricingPlans.slice(0, 3).map((p) => (
          <div
            key={p.id}
            className="flex items-center justify-between p-2.5 rounded-xl border border-border/60 bg-background/70"
          >
            <div>
              <p className="text-xs font-semibold text-foreground">{p.name}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                {formatPrice(p.price, currency)} · {p.timeline}
              </p>
            </div>
            <Link
              href={`/pricing#${p.id}`}
              className="flex items-center gap-1 text-[10px] font-medium text-primary-500 hover:text-primary-600 transition-colors"
            >
              View
              <ExternalLink className="w-2.5 h-2.5" />
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 pt-1">
        <a
          href="https://wa.me/923129819819?text=Hi%20Muhammad%2C%20I%27d%20like%20a%20custom%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white text-[11px] font-semibold transition-all"
        >
          <MessageCircle className="w-3 h-3" />
          Custom Quote
        </a>
        <Link
          href="/pricing"
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-border bg-background hover:bg-muted text-[11px] font-semibold transition-all"
        >
          Full Pricing
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
      <button
        onClick={onContinue}
        className="w-full text-[11px] text-muted-foreground/60 hover:text-muted-foreground transition-colors pt-1"
      >
        Continue
      </button>
    </div>
  );
}

function InfoPortfolioCards({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="space-y-2.5 p-3 sm:p-4">
      <div className="space-y-2">
        {featuredProjects.slice(0, 3).map((p) => (
          <a
            key={p.id}
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2.5 rounded-xl border border-border/60 bg-background/70 hover:border-primary-500/40 transition-colors group"
          >
            <div>
              <p className="text-xs font-semibold text-foreground group-hover:text-primary-500 transition-colors">
                {p.name}
              </p>
              <p className="text-[10px] text-muted-foreground mt-0.5 truncate max-w-[180px]">
                {p.categories.slice(0, 2).join(" · ")}
              </p>
            </div>
            <ExternalLink className="w-3 h-3 text-muted-foreground/40 group-hover:text-primary-500 transition-colors" />
          </a>
        ))}
      </div>
      <Link
        href="/work"
        className="flex items-center justify-center gap-1.5 w-full px-3 py-2 rounded-xl border border-border bg-background hover:bg-muted text-[11px] font-semibold transition-all"
      >
        See All Projects
        <ArrowRight className="w-3 h-3" />
      </Link>
      <button
        onClick={onContinue}
        className="w-full text-[11px] text-muted-foreground/60 hover:text-muted-foreground transition-colors pt-0.5"
      >
        Continue
      </button>
    </div>
  );
}

function InfoAvailability({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="space-y-2 p-3 sm:p-4">
      {[
        ["Average delivery", "3 weeks for Professional projects"],
        ["Rush delivery", "Available with a priority fee"],
        ["Global clients", "UK, US, Europe, Australia, Middle East"],
        ["Communication", "WhatsApp, Slack or Google Meet"],
      ].map(([label, value]) => (
        <div
          key={label}
          className="flex items-start gap-2 text-xs border-b border-border/40 pb-2 last:border-0"
        >
          <span className="font-semibold text-foreground/70 shrink-0 w-28">
            {label}
          </span>
          <span className="text-muted-foreground">{value}</span>
        </div>
      ))}
      <a
        href="https://wa.me/923129819819?text=Hi%20Muhammad%2C%20I%20wanted%20to%20check%20your%20availability."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 w-full mt-2 px-3 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white text-[11px] font-semibold transition-all"
      >
        <MessageCircle className="w-3 h-3" />
        Check Availability on WhatsApp
      </a>
      <button
        onClick={onContinue}
        className="w-full text-[11px] text-muted-foreground/60 hover:text-muted-foreground transition-colors pt-0.5"
      >
        Continue
      </button>
    </div>
  );
}

function InfoTechStack({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="space-y-2.5 p-3 sm:p-4">
      {[
        {
          label: "WordPress stack",
          items: "WordPress · WooCommerce · Elementor · Gutenberg · ACF · Custom Themes and Plugins",
        },
        {
          label: "Modern stack",
          items: "Next.js · React · TypeScript · Tailwind CSS · REST APIs",
        },
        {
          label: "Tools",
          items: "Figma to WP · Git · Vercel · cPanel · Performance and SEO",
        },
      ].map(({ label, items }) => (
        <div key={label} className="space-y-1">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
            {label}
          </p>
          <p className="text-xs text-foreground/80 leading-relaxed">{items}</p>
        </div>
      ))}
      <Link
        href="/about"
        className="flex items-center justify-center gap-1.5 w-full mt-1 px-3 py-2 rounded-xl border border-border bg-background hover:bg-muted text-[11px] font-semibold transition-all"
      >
        View Full About Page
        <ArrowRight className="w-3 h-3" />
      </Link>
      <button
        onClick={onContinue}
        className="w-full text-[11px] text-muted-foreground/60 hover:text-muted-foreground transition-colors"
      >
        Continue
      </button>
    </div>
  );
}

function InfoGeneral({
  step,
  onContinue,
}: {
  step: Step;
  onContinue: () => void;
}) {
  return (
    <div className="space-y-2 p-3 sm:p-4">
      {step.infoLinks?.map((lk) => (
        <a
          key={lk.href}
          href={lk.href}
          target={lk.external !== false ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl border border-border bg-background hover:border-primary-500/50 hover:bg-primary-500/5 transition-all text-xs font-medium"
        >
          {lk.label}
          <ExternalLink className="w-3 h-3 text-muted-foreground/40 shrink-0" />
        </a>
      ))}
      {step.defaultNext && (
        <button
          onClick={onContinue}
          className="w-full text-[11px] text-muted-foreground/60 hover:text-muted-foreground transition-colors pt-1"
        >
          Continue
        </button>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Contact fields (final form)
// ─────────────────────────────────────────────────────────────────────────────

interface ContactFieldValues {
  name: string;
  whatsapp: string;
  email: string;
  notes: string;
  question?: string;
}

function ContactFields({
  step,
  onSubmit,
}: {
  step: Step;
  onSubmit: (vals: ContactFieldValues) => void;
}) {
  const [vals, setVals] = useState<ContactFieldValues>({
    name: "",
    whatsapp: "",
    email: "",
    notes: "",
    question: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFieldValues, string>>>({});

  const isQuestionStep = step.id === "d-other";

  const validate = () => {
    const e: typeof errors = {};
    if (!vals.name.trim()) e.name = "Name is required";
    if (!vals.whatsapp.trim()) e.whatsapp = "WhatsApp number is required";
    if (isQuestionStep && !vals.question?.trim())
      e.question = "Please type your question";
    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    onSubmit(vals);
  };

  const field = (
    key: keyof ContactFieldValues,
    label: string,
    placeholder: string,
    type = "text",
    required = false
  ) => (
    <div className="space-y-1">
      <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        type={type}
        value={vals[key] as string}
        onChange={(e) => {
          setVals((p) => ({ ...p, [key]: e.target.value }));
          if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
        }}
        placeholder={placeholder}
        className={`w-full px-3 py-2 rounded-xl border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary-500/15 transition-all bg-background ${
          errors[key]
            ? "border-red-400 focus:border-red-400"
            : "border-border focus:border-primary-500/50"
        }`}
      />
      {errors[key] && (
        <p className="text-[10px] text-red-400 flex items-center gap-1">
          <AlertCircle className="w-2.5 h-2.5" />
          {errors[key]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="p-3 sm:p-4 space-y-2.5">
      {isQuestionStep && (
        <div className="space-y-1">
          <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
            Your question <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={2}
            value={vals.question}
            onChange={(e) => {
              setVals((p) => ({ ...p, question: e.target.value }));
              if (errors.question) setErrors((p) => ({ ...p, question: undefined }));
            }}
            placeholder="Type your question here..."
            className={`w-full px-3 py-2 rounded-xl border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary-500/15 transition-all bg-background resize-none ${
              errors.question ? "border-red-400" : "border-border focus:border-primary-500/50"
            }`}
          />
          {errors.question && (
            <p className="text-[10px] text-red-400 flex items-center gap-1">
              <AlertCircle className="w-2.5 h-2.5" />
              {errors.question}
            </p>
          )}
        </div>
      )}
      {field("name", "Your name", "Full name", "text", true)}
      {field("whatsapp", "WhatsApp number", "+92 312 345 6789", "tel", true)}
      {field("email", "Email (optional)", "you@example.com", "email")}
      {!isQuestionStep && (
        <div className="space-y-1">
          <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
            Anything else to add
          </label>
          <textarea
            rows={2}
            value={vals.notes}
            onChange={(e) => setVals((p) => ({ ...p, notes: e.target.value }))}
            placeholder="Share a link, a thought, anything..."
            className="w-full px-3 py-2 rounded-xl border border-border bg-background text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/15 transition-all resize-none"
          />
        </div>
      )}
      {step.note && (
        <p className="text-[10px] text-muted-foreground/50 flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-green-500" />
          {step.note}
        </p>
      )}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all active:scale-95"
      >
        <Send className="w-3.5 h-3.5" />
        Send to Muhammad
      </button>
    </form>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Done screen
// ─────────────────────────────────────────────────────────────────────────────

function DoneScreen({ answers }: { answers: ChatAnswers }) {
  const waLink = buildWhatsAppLink(answers);
  const keyAnswers = [
    { label: "Project", value: answers.purpose || answers.intent },
    { label: "Budget", value: answers.budget },
    { label: "Timeline", value: answers.timeline },
  ].filter((r) => r.value);

  return (
    <div className="p-3 sm:p-4 space-y-3">
      {keyAnswers.length > 0 && (
        <div className="rounded-xl border border-border/60 bg-muted/30 p-3 space-y-1.5">
          {keyAnswers.map(({ label, value }) => (
            <div key={label} className="flex justify-between text-xs">
              <span className="text-muted-foreground">{label}</span>
              <span className="font-medium text-foreground">{value}</span>
            </div>
          ))}
        </div>
      )}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 w-full px-3 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-xs font-semibold transition-all shadow-md shadow-green-500/20 active:scale-95"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        Chat on WhatsApp Now
      </a>
      <div className="grid grid-cols-2 gap-2">
        <Link
          href="/work"
          className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl border border-border bg-background hover:bg-muted text-[11px] font-semibold transition-all"
        >
          View Work
          <ArrowRight className="w-3 h-3" />
        </Link>
        <Link
          href="/pricing"
          className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl border border-border bg-background hover:bg-muted text-[11px] font-semibold transition-all"
        >
          See Pricing
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main chatbot engine
// ─────────────────────────────────────────────────────────────────────────────

export function QuickContactTab() {
  const router = useRouter();
  const { closeWindow } = useContactWindowContext();
  const [currentStepId, setCurrentStepId] = useState<string>("start");
  const [answers, setAnswers] = useState<ChatAnswers>({});
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [historyStack, setHistoryStack] = useState<string[]>([]);
  const [pendingMulti, setPendingMulti] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const [latestBotId, setLatestBotId] = useState<string | null>(null);
  const [inputReady, setInputReady] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [inputError, setInputError] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const emailSentRef = useRef(false);

  // ── Mount: restore or start fresh ────────────────────────────────────────
  useEffect(() => {
    const saved = loadSession();
    if (saved && saved.messages.length > 0) {
      setCurrentStepId(saved.currentStepId);
      setAnswers(saved.answers);
      setMessages(saved.messages);
      setHistoryStack(saved.historyStack);
      setIsTyping(false);
      setInputReady(true);
      setLatestBotId(null);
    } else {
      const step = STEPS["start"];
      const id = "bot-start";
      setLatestBotId(id);
      setTimeout(() => {
        setIsTyping(false);
        setMessages([
          { id, role: "bot", text: step.botMessage as string, stepId: "start" },
        ]);
        setCurrentStepId("start");
      }, 500);
    }
  }, []);

  // ── Persist on state change ───────────────────────────────────────────────
  useEffect(() => {
    if (messages.length > 0) {
      saveSession({ currentStepId, answers, messages, historyStack });
    }
  }, [currentStepId, answers, messages, historyStack]);

  // ── Scroll to bottom ──────────────────────────────────────────────────────
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, inputReady]);

  // ── Send email on window unload if answers collected ─────────────────────
  useEffect(() => {
    const handler = () => {
      if (!emailSentRef.current && Object.keys(answers).length >= 2) {
        sendLeadEmail(answers, "close");
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [answers]);

  // ─────────────────────────────────────────────────────────────────────────
  // Core: advance to next step
  // ─────────────────────────────────────────────────────────────────────────

  const advanceTo = useCallback(
    (nextId: string | null, userText: string, newAnswers: ChatAnswers) => {
      setIsTyping(true);
      setInputReady(false);

      setTimeout(() => {
        setIsTyping(false);

        if (!nextId || !STEPS[nextId]) {
          // End of flow
          setIsSubmitted(true);
          const doneId = `bot-done-${Date.now()}`;
          setLatestBotId(doneId);
          const doneStep = STEPS[currentStepId];
          const doneMsg =
            typeof doneStep?.botMessage === "function"
              ? doneStep.botMessage(newAnswers)
              : doneStep?.botMessage ?? "All done.";
          setMessages((p) => [
            ...p,
            { id: doneId, role: "bot", text: doneMsg, stepId: currentStepId },
          ]);
          return;
        }

        const nextStep = STEPS[nextId];
        const botText =
          typeof nextStep.botMessage === "function"
            ? nextStep.botMessage(newAnswers)
            : nextStep.botMessage;

        const botId = `bot-${nextId}-${Date.now()}`;
        setLatestBotId(botId);
        setMessages((p) => [
          ...p,
          { id: botId, role: "bot", text: botText, stepId: nextId },
        ]);
        setCurrentStepId(nextId);
        setHistoryStack((h) => [...h, currentStepId]);
        setPendingMulti([]);
        setTextInput("");
        setInputError("");
      }, 650);
    },
    [currentStepId]
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Handle single-select answer
  // ─────────────────────────────────────────────────────────────────────────

  const handleAnswer = useCallback(
    (value: string, displayText?: string, navigateTo?: string) => {
      // Navigate + close modal for direct-link options
      if (navigateTo) {
        closeWindow();
        router.push(navigateTo);
        return;
      }

      const step = STEPS[currentStepId];
      if (!step) return;

      const display = displayText ?? value;
      const newAnswers: ChatAnswers = step.key
        ? { ...answers, [step.key]: value }
        : { ...answers };
      setAnswers(newAnswers);

      setMessages((p) => [
        ...p,
        { id: `user-${Date.now()}`, role: "user", text: display },
      ]);

      const nextId = getNextStep(currentStepId, value, newAnswers);
      advanceTo(nextId, value, newAnswers);
    },
    [answers, currentStepId, advanceTo, closeWindow, router]
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Handle multi-select
  // ─────────────────────────────────────────────────────────────────────────

  const toggleMulti = (val: string) => {
    setPendingMulti((p) =>
      p.includes(val) ? p.filter((x) => x !== val) : [...p, val]
    );
  };

  const submitMulti = () => {
    const step = STEPS[currentStepId];
    if (!step) return;
    const selected = pendingMulti.length
      ? pendingMulti
      : ["None selected"];
    const joined = selected.join(", ");
    const newAnswers: ChatAnswers = step.key
      ? { ...answers, [step.key]: joined }
      : { ...answers };
    setAnswers(newAnswers);

    setMessages((p) => [
      ...p,
      { id: `user-${Date.now()}`, role: "user", text: joined },
    ]);

    const nextId = getNextStep(currentStepId, joined, newAnswers);
    advanceTo(nextId, joined, newAnswers);
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Handle text input submit
  // ─────────────────────────────────────────────────────────────────────────

  const handleTextSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!textInput.trim()) {
      setInputError("Please enter something to continue");
      return;
    }
    setInputError("");
    handleAnswer(textInput.trim());
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Handle contact fields
  // ─────────────────────────────────────────────────────────────────────────

  const handleContactSubmit = useCallback(
    (vals: ContactFieldValues) => {
      const newAnswers: ChatAnswers = {
        ...answers,
        name: vals.name,
        whatsapp: vals.whatsapp,
        ...(vals.email && { email: vals.email }),
        ...(vals.notes && { notes: vals.notes }),
        ...(vals.question && { question: vals.question }),
      };
      setAnswers(newAnswers);

      const summary = [
        vals.name,
        vals.whatsapp,
        vals.email && `Email: ${vals.email}`,
      ]
        .filter(Boolean)
        .join(" · ");

      setMessages((p) => [
        ...p,
        { id: `user-contact-${Date.now()}`, role: "user", text: summary },
      ]);

      // Send email
      sendLeadEmail(newAnswers, "submit");
      emailSentRef.current = true;

      const nextId = STEPS[currentStepId]?.defaultNext ?? null;
      advanceTo(nextId, summary, newAnswers);
    },
    [answers, currentStepId, advanceTo]
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Back navigation
  // ─────────────────────────────────────────────────────────────────────────

  const handleBack = () => {
    if (historyStack.length === 0) return;
    const prevStepId = historyStack[historyStack.length - 1];

    // Remove last 2 messages (last user answer + current bot question)
    setMessages((p) => p.slice(0, -2));
    setHistoryStack((h) => h.slice(0, -1));
    setCurrentStepId(prevStepId);
    setPendingMulti([]);
    setTextInput("");
    setInputError("");
    setInputReady(true);
    setLatestBotId(null);

    // Remove last answer (the one from the step we're leaving)
    const prevStep = STEPS[prevStepId];
    if (prevStep?.key) {
      setAnswers((a) => {
        const next = { ...a };
        delete next[prevStep.key!];
        return next;
      });
    }
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Clear chat
  // ─────────────────────────────────────────────────────────────────────────

  const handleClear = () => {
    clearSession();
    setMessages([]);
    setAnswers({});
    setHistoryStack([]);
    setPendingMulti([]);
    setTextInput("");
    setInputError("");
    setIsSubmitted(false);
    setIsTyping(true);
    emailSentRef.current = false;

    const step = STEPS["start"];
    const id = `bot-start-${Date.now()}`;
    setTimeout(() => {
      setIsTyping(false);
      setLatestBotId(id);
      setMessages([
        { id, role: "bot", text: step.botMessage as string, stepId: "start" },
      ]);
      setCurrentStepId("start");
    }, 400);
  };

  // ─────────────────────────────────────────────────────────────────────────
  // Current step
  // ─────────────────────────────────────────────────────────────────────────

  const step = STEPS[currentStepId];

  // ─────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col" style={{ height: 480 }}>
      {/* Progress */}
      <ProgressBar historyStack={historyStack} isDone={isSubmitted} />

      {/* Controls */}
      <div className="flex items-center justify-between px-3 sm:px-4 pb-1.5 shrink-0">
        <button
          onClick={handleBack}
          disabled={historyStack.length === 0 || isSubmitted}
          className="flex items-center gap-1 text-[11px] text-muted-foreground/50 hover:text-muted-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors"
        >
          <ChevronLeft className="w-3 h-3" />
          Back
        </button>
        <button
          onClick={handleClear}
          className="flex items-center gap-1 text-[11px] text-muted-foreground/50 hover:text-red-400 transition-colors"
          title="Clear chat"
        >
          <Trash2 className="w-3 h-3" />
          Clear
        </button>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-4 pb-2 space-y-2.5 min-h-0">
        <AnimatePresence initial={false}>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex gap-2 ${
                m.role === "user" ? "justify-end" : "items-start"
              }`}
            >
              {m.role === "bot" && (
                <div className="shrink-0 mt-0.5">
                  <LogoIcon size={22} animated={false} />
                </div>
              )}
              {m.role === "bot" ? (
                <BotBubble
                  text={m.text}
                  animate={m.id === latestBotId}
                  onDone={() => setInputReady(true)}
                />
              ) : (
                <div className="max-w-[82%] sm:max-w-[78%] px-3 py-2.5 sm:px-3.5 rounded-2xl rounded-tr-sm bg-gradient-to-br from-primary-500 to-secondary-600 text-white text-sm leading-relaxed shadow-md shadow-primary-500/20">
                  {m.text}
                </div>
              )}
            </motion.div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-2"
            >
              <div className="shrink-0 mt-0.5">
                <LogoIcon size={22} animated={false} />
              </div>
              <div className="px-3.5 py-3 rounded-2xl rounded-tl-sm bg-muted/60 dark:bg-white/[0.06] flex gap-1 items-center">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-bounce"
                    style={{ animationDelay: `${i * 160}ms` }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-border bg-background/60 overflow-y-auto" style={{ maxHeight: "55%" }}>
        <AnimatePresence mode="wait">
          {/* ── Done state ── */}
          {isSubmitted && step?.inputType === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <DoneScreen answers={answers} />
            </motion.div>
          )}

          {/* ── Active input ── */}
          {!isSubmitted && !isTyping && step && inputReady && (
            <motion.div
              key={currentStepId}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {/* Single select */}
              {step.inputType === "single-select" && (
                <div className="p-3 sm:p-4 grid grid-cols-2 gap-1.5">
                  {step.options?.map((opt) => (
                    <div key={opt.label} className="flex flex-col gap-0.5">
                      <button
                        onClick={() =>
                          handleAnswer(
                            opt.value ?? opt.label,
                            undefined,
                            opt.navigateTo
                          )
                        }
                        className="flex items-center gap-1 px-2.5 py-2 min-h-[44px] rounded-xl text-[11px] font-medium border border-border/70 bg-background hover:border-primary-500/60 hover:bg-primary-500/6 hover:text-primary-500 transition-all duration-150 active:scale-95 text-left w-full leading-tight"
                      >
                        {opt.label}
                      </button>
                      {opt.note && (
                        <p className="text-[9px] text-muted-foreground/50 px-1">
                          {opt.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Multi select */}
              {step.inputType === "multi-select" && (
                <div className="p-3 sm:p-4 space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {step.options?.map((opt) => {
                      const val = opt.value ?? opt.label;
                      const selected = pendingMulti.includes(val);
                      return (
                        <button
                          key={val}
                          onClick={() => toggleMulti(val)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 min-h-[44px] rounded-xl text-xs font-medium border transition-all duration-150 active:scale-95 ${
                            selected
                              ? "border-primary-500/70 bg-primary-500/10 text-primary-500"
                              : "border-border/70 bg-background hover:border-primary-500/40 hover:bg-primary-500/5"
                          }`}
                        >
                          {selected && (
                            <CheckCircle2 className="w-3 h-3 shrink-0" />
                          )}
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={submitMulti}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 text-white text-xs font-semibold hover:shadow-lg hover:shadow-primary-500/20 transition-all active:scale-95"
                  >
                    {step.continueLabel ?? "Continue"}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* Text inputs */}
              {(step.inputType === "text" ||
                step.inputType === "url" ||
                step.inputType === "email" ||
                step.inputType === "tel") && (
                <form
                  onSubmit={handleTextSubmit}
                  className="p-3 sm:p-4 space-y-1.5"
                >
                  <div className="flex gap-2">
                    <input
                      autoFocus
                      type={step.inputType === "text" ? "text" : step.inputType}
                      value={textInput}
                      onChange={(e) => {
                        setTextInput(e.target.value);
                        if (inputError) setInputError("");
                      }}
                      placeholder={step.placeholder ?? "Type here..."}
                      className={`flex-1 min-w-0 px-3 py-2.5 rounded-xl border text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary-500/15 transition-all bg-background ${
                        inputError
                          ? "border-red-400"
                          : "border-border focus:border-primary-500/50"
                      }`}
                    />
                    <button
                      type="submit"
                      className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 text-white flex items-center justify-center hover:shadow-lg hover:shadow-primary-500/20 transition-all active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {inputError && (
                    <p className="text-[10px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-2.5 h-2.5" />
                      {inputError}
                    </p>
                  )}
                </form>
              )}

              {/* Textarea */}
              {step.inputType === "textarea" && (
                <form
                  onSubmit={handleTextSubmit}
                  className="p-3 sm:p-4 space-y-1.5"
                >
                  <div className="flex gap-2">
                    <textarea
                      autoFocus
                      rows={2}
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      placeholder={step.placeholder ?? "Type here..."}
                      className="flex-1 min-w-0 px-3 py-2.5 rounded-xl border border-border bg-background text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/15 transition-all resize-none"
                    />
                    <button
                      type="submit"
                      className="w-10 shrink-0 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-600 text-white flex items-center justify-center hover:shadow-lg transition-all active:scale-95"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {step.optional && (
                    <button
                      type="button"
                      onClick={() => handleAnswer("(skipped)", "Skipped")}
                      className="flex items-center gap-1 text-[11px] text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                    >
                      <SkipForward className="w-3 h-3" />
                      {step.skipLabel ?? "Skip"}
                    </button>
                  )}
                </form>
              )}

              {/* Contact fields */}
              {step.inputType === "contact-fields" && (
                <ContactFields step={step} onSubmit={handleContactSubmit} />
              )}

              {/* Info steps */}
              {step.inputType === "info" && (
                <>
                  {step.infoType === "pricing-cards" && (
                    <InfoPricingCards
                      onContinue={() => handleAnswer("Continue", "Got it, continue")}
                    />
                  )}
                  {step.infoType === "portfolio-cards" && (
                    <InfoPortfolioCards
                      onContinue={() => handleAnswer("Continue", "Got it, continue")}
                    />
                  )}
                  {step.infoType === "availability" && (
                    <InfoAvailability
                      onContinue={() => handleAnswer("Continue", "Got it, continue")}
                    />
                  )}
                  {step.infoType === "tech-stack" && (
                    <InfoTechStack
                      onContinue={() => handleAnswer("Continue", "Got it, continue")}
                    />
                  )}
                  {(step.infoType === "location" ||
                    step.infoType === "general") && (
                    <InfoGeneral
                      step={step}
                      onContinue={() => handleAnswer("Continue", "Got it")}
                    />
                  )}
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
