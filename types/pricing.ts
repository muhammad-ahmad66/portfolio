// src/types/pricing.ts

export interface PricingFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  duration: string;
  popular?: boolean;
  recommended?: boolean;
  features: PricingFeature[];
  cta: string;
  color: {
    from: string;
    to: string;
    text: string;
  };
  deliverables: string[];
  timeline: string;
}
