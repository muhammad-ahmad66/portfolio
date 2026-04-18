export interface Currency {
  code: string;
  symbol: string;
  flag: string;
  rate: number; // relative to USD base
}

// Base currency is PKR (rate: 1). All other rates = 1 PKR in that currency.
export const currencies: Currency[] = [
  { code: "PKR", symbol: "₨",   flag: "🇵🇰", rate: 1 },
  { code: "USD", symbol: "$",   flag: "🇺🇸", rate: 0.0036 },
  { code: "GBP", symbol: "£",   flag: "🇬🇧", rate: 0.00287 },
  { code: "EUR", symbol: "€",   flag: "🇪🇺", rate: 0.0033 },
  { code: "AED", symbol: "د.إ", flag: "🇦🇪", rate: 0.0132 },
  { code: "CAD", symbol: "C$",  flag: "🇨🇦", rate: 0.005 },
];

export function formatPrice(amount: number, currency: Currency): string {
  const converted = Math.round(amount * currency.rate);
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.code,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(converted);
  } catch {
    return `${currency.symbol}${converted.toLocaleString()}`;
  }
}

export function formatNumber(amount: number, currency: Currency): string {
  return Math.round(amount * currency.rate).toLocaleString("en-US");
}
