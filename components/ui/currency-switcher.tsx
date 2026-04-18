"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { currencies } from "@/lib/currencies";
import { useCurrency } from "@/contexts/currency-context";

interface CurrencySwitcherProps {
  compact?: boolean; // compact=true for header, false for inline use
}

export function CurrencySwitcher({ compact = false }: CurrencySwitcherProps) {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`group inline-flex items-center gap-1.5 h-9 rounded-xl border transition-all duration-200 font-medium backdrop-blur-sm ${
          compact
            ? "px-2.5 text-xs border-border/50 bg-background/60 hover:bg-muted/70 hover:border-primary-500/30"
            : "px-3.5 text-sm border-border/70 bg-card/80 hover:bg-muted/60 hover:border-primary-500/30"
        } ${open ? "border-primary-500/40 bg-muted/60" : ""}`}
      >
        <span className={compact ? "text-sm" : "text-base"}>{currency.flag}</span>
        <span className="text-foreground">{currency.code}</span>
        <ChevronDown
          className={`text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180 text-primary-500" : ""
          } ${compact ? "w-3 h-3" : "w-3.5 h-3.5"}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-48 rounded-2xl border border-border/60 overflow-hidden z-[9999] bg-card shadow-xl shadow-black/10"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Header */}
          <div className="px-4 py-2.5 border-b border-border/40">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Select Currency
            </p>
          </div>

          {/* Options */}
          <div className="py-1.5">
            {currencies.map((c) => {
              const active = c.code === currency.code;
              return (
                <button
                  key={c.code}
                  onClick={() => { setCurrency(c); setOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 ${
                    active
                      ? "bg-primary-500/10 text-foreground"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  }`}
                >
                  <span className="text-base w-5 text-center">{c.flag}</span>
                  <span className="font-semibold">{c.code}</span>
                  <span className="text-xs text-muted-foreground">{c.symbol}</span>
                  {active && (
                    <Check className="w-3.5 h-3.5 text-primary-500 ml-auto" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
