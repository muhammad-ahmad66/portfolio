// import * as React from 'react';

// interface TypographyProps {
//   variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'lead';
//   children: React.ReactNode;
//   className?: string;
// }

// export function Typography({
//   variant = 'p',
//   children,
//   className = '',
// }: TypographyProps) {
//   const styles = {
//     h1: 'text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight',
//     h2: 'text-2xl sm:text-3xl md:text-3xl font-bold tracking-tight',
//     h3: 'text-xl sm:text-3xl font-semibold tracking-tight',
//     h4: 'text-xl sm:text-2xl font-semibold',
//     p: 'text-base text-muted-foreground leading-relaxed',
//     small: 'text-sm text-muted-foreground',
//     lead: 'text-lg sm:text-xl text-muted-foreground leading-relaxed',
//   };

//   const Tag = variant === 'small' ? 'p' : variant === 'lead' ? 'p' : variant;

//   return React.createElement(
//     Tag,
//     { className: `${styles[variant]} ${className}` },
//     children
//   );
// }

// ============================================
// TYPOGRAPHY COMPONENT - UPDATED
// ============================================

import * as React from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'lead';
  children: React.ReactNode;
  className?: string;
}

export function Typography({
  variant = 'p',
  children,
  className = '',
}: TypographyProps) {
  const styles = {
    h1: 'text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95]',
    h2: 'text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight leading-tight',
    h3: 'text-xl sm:text-3xl font-semibold tracking-tight',
    h4: 'text-xl sm:text-2xl font-semibold',
    p: 'text-base text-muted-foreground leading-relaxed',
    small: 'text-sm text-muted-foreground',
    lead: 'text-lg sm:text-xl text-muted-foreground leading-relaxed',
  };

  const Tag = variant === 'small' ? 'p' : variant === 'lead' ? 'p' : variant;

  return React.createElement(
    Tag,
    { className: `${styles[variant]} ${className}` },
    children
  );
}
