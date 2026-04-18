"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { countries, defaultCountry, type Country } from "@/data/countries";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  error?: string;
}

export function PhoneInput({
  value,
  onChange,
  placeholder = "300 1234567",
  className = "",
  inputClassName = "",
  error,
}: PhoneInputProps) {
  const [country, setCountry] = useState<Country>(defaultCountry);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (open && searchRef.current) {
      setTimeout(() => searchRef.current?.focus(), 50);
    }
  }, [open]);

  const filtered = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dial.includes(search) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );

  const selectCountry = (c: Country) => {
    setCountry(c);
    setOpen(false);
    setSearch("");
  };

  return (
    <div className={`relative w-full ${className}`} ref={ref}>
      <div
        className={`flex items-center w-full min-w-0 rounded-xl border bg-background transition focus-within:border-primary-500/60 focus-within:ring-1 focus-within:ring-primary-500/30 ${
          error ? "border-red-500/60" : "border-border"
        }`}
      >
        {/* Country selector */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-1 px-2.5 py-2.5 border-r border-border shrink-0 hover:bg-muted/50 rounded-l-xl transition-colors"
        >
          <span className="text-base leading-none">{country.flag}</span>
          <span className="text-xs font-medium text-foreground tabular-nums">{country.dial}</span>
          <ChevronDown
            className={`w-3 h-3 text-muted-foreground transition-transform duration-200 shrink-0 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* Number input */}
        <input
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`flex-1 min-w-0 w-0 px-2.5 py-2.5 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none rounded-r-xl ${inputClassName}`}
        />
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-full mt-1.5 w-72 max-w-[min(18rem,calc(100vw-2rem))] rounded-2xl border border-border/60 bg-card shadow-xl shadow-black/10 z-[9999] overflow-hidden">
          {/* Search */}
          <div className="p-2 border-b border-border/40">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted/50">
              <Search className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
          </div>

          {/* List */}
          <div className="max-h-48 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <p className="px-4 py-3 text-sm text-muted-foreground">No results</p>
            ) : (
              filtered.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => selectCountry(c)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                    c.code === country.code
                      ? "bg-primary-500/10 text-foreground"
                      : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                  }`}
                >
                  <span className="text-base w-5 text-center shrink-0">{c.flag}</span>
                  <span className="flex-1 text-left truncate">{c.name}</span>
                  <span className="tabular-nums text-xs text-muted-foreground shrink-0">{c.dial}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
