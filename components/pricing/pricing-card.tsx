// src/components/pricing/pricing-card.tsx
'use client';

import { PricingPlan } from '@/types/pricing';
import { Check, X, Clock, Package } from 'lucide-react';
import { Button } from '@/components/ui/button-component';
import { useState } from 'react';

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
}

export function PricingCard({ plan, index }: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Glow effect */}
      <div
        className={`absolute -inset-px bg-gradient-to-br ${plan.color.from} ${plan.color.to} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
      />

      {/* Card */}
      <div
        className={`relative h-full rounded-3xl border transition-all duration-500 ${
          plan.popular
            ? 'border-primary-500/50 bg-gradient-to-br from-primary-500/5 to-secondary-500/5'
            : 'border-border bg-card'
        } backdrop-blur-xl overflow-hidden`}
      >
        {/* Popular Badge */}
        {plan.popular && (
          <div className="absolute top-0 right-0 bg-gradient-to-br from-primary-500 to-primary-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl">
            MOST POPULAR
          </div>
        )}

        {/* Recommended Badge */}
        {plan.recommended && (
          <div className="absolute top-0 left-0 bg-gradient-to-br from-orange-500 to-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-br-2xl rounded-tl-3xl flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            RECOMMENDED
          </div>
        )}

        <div className="p-8 flex flex-col h-full">
          {/* Header */}
          <div className="space-y-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground">{plan.tagline}</p>
            </div>

            {/* Price */}
            <div className="flex items-end gap-2">
              {plan.price > 0 ? (
                <>
                  <span className="text-5xl font-bold text-foreground">
                    ${plan.price.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground text-sm mb-2">
                    {plan.duration}
                  </span>
                </>
              ) : (
                <span className="text-4xl font-bold text-foreground">
                  Custom Quote
                </span>
              )}
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-3 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted border border-border">
                <Clock className="w-3.5 h-3.5 text-primary-500" />
                <span className="text-foreground">{plan.timeline}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted border border-border">
                <Package className="w-3.5 h-3.5 text-primary-500" />
                <span className="text-foreground">
                  {plan.deliverables.length} deliverables
                </span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-8 flex-1">
            {plan.features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 ${
                  !feature.included ? 'opacity-50' : ''
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    feature.included
                      ? 'bg-primary-500'
                      : 'bg-muted border border-border'
                  }`}
                >
                  {feature.included ? (
                    <Check className="w-3 h-3 text-white" />
                  ) : (
                    <X className="w-3 h-3 text-muted-foreground" />
                  )}
                </div>
                <span
                  className={`text-sm ${
                    feature.highlight
                      ? 'font-semibold text-foreground'
                      : 'text-foreground'
                  }`}
                >
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Deliverables Dropdown */}
          <div className="mb-6">
            <details className="group/details">
              <summary className="cursor-pointer text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <span>View deliverables</span>
                <svg
                  className="w-4 h-4 transition-transform group-open/details:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <ul className="mt-3 space-y-2 text-xs text-foreground pl-4">
                {plan.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          </div>

          {/* CTA */}
          <Button
            variant={plan.popular || plan.recommended ? 'primary' : 'outline'}
            size="lg"
            className="w-full group/btn"
          >
            <span>{plan.cta}</span>
            <svg
              className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>

        {/* Bottom gradient accent */}
        <div
          className={`h-1 bg-gradient-to-r ${plan.color.from} ${plan.color.to} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />
      </div>
    </div>
  );
}
