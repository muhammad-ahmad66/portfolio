export type StepInputType =
  | "single-select"
  | "multi-select"
  | "text"
  | "tel"
  | "email"
  | "url"
  | "textarea"
  | "contact-fields"
  | "info"
  | "done";

export type InfoType =
  | "pricing-cards"
  | "portfolio-cards"
  | "availability"
  | "tech-stack"
  | "location"
  | "general";

export interface StepOption {
  label: string;
  value?: string;
  goTo?: string;
  note?: string;
}

export interface InfoLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Step {
  id: string;
  botMessage: string | ((answers: ChatAnswers) => string);
  inputType: StepInputType;
  key?: string;
  options?: StepOption[];
  defaultNext?: string;
  placeholder?: string;
  required?: boolean;
  note?: string;
  continueLabel?: string;
  optional?: boolean;
  skipLabel?: string;
  infoType?: InfoType;
  infoLinks?: InfoLink[];
}

export type ChatAnswers = Record<string, string>;

export interface ChatMessage {
  id: string;
  role: "bot" | "user";
  text: string;
  stepId?: string;
}

export interface StoredSession {
  currentStepId: string;
  answers: ChatAnswers;
  messages: ChatMessage[];
  historyStack: string[];
  savedAt: number;
}

export const SESSION_KEY = "ma_chat_session";
export const SESSION_TTL = 24 * 60 * 60 * 1000; // 24 hours
