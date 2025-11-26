/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // E-commerce
    'bg-blue-500/10',
    'text-blue-600',
    'border-blue-500/20',
    // Tech
    'bg-purple-500/10',
    'text-purple-600',
    'border-purple-500/20',
    // Healthcare
    'bg-red-500/10',
    'text-red-600',
    'border-red-500/20',
    // Hospitality
    'bg-orange-500/10',
    'text-orange-600',
    'border-orange-500/20',
    // Lifestyle
    'bg-pink-500/10',
    'text-pink-600',
    'border-pink-500/20',
    // Education
    'bg-green-500/10',
    'text-green-600',
    'border-green-500/20',
    // Real Estate
    'bg-yellow-500/10',
    'text-yellow-600',
    'border-yellow-500/20',
    // Travel
    'bg-cyan-500/10',
    'text-cyan-600',
    'border-cyan-500/20',
    // Restaurant
    'bg-amber-500/10',
    'text-amber-600',
    'border-amber-500/20',
    // Wellness
    'bg-emerald-500/10',
    'text-emerald-600',
    'border-emerald-500/20',
    // Finance
    'bg-indigo-500/10',
    'text-indigo-600',
    'border-indigo-500/20',
    // Non-profit
    'bg-teal-500/10',
    'text-teal-600',
    'border-teal-500/20',
    // Marketing
    'bg-violet-500/10',
    'text-violet-600',
    'border-violet-500/20',
    // Construction
    'bg-slate-500/10',
    'text-slate-600',
    'border-slate-500/20',

    // Additional categories (extended)
    'bg-pink-400/10',
    'text-pink-700',
    'border-pink-400/20', // AI
    'bg-yellow-400/10',
    'text-yellow-700',
    'border-yellow-400/20', // Art
    'bg-cyan-400/10',
    'text-cyan-700',
    'border-cyan-400/20', // SaaS
    'bg-green-400/10',
    'text-green-700',
    'border-green-400/20', // Wellness / Sustainable
    'bg-purple-400/10',
    'text-purple-700',
    'border-purple-400/20', // Luxury
    'bg-indigo-400/10',
    'text-indigo-700',
    'border-indigo-400/20', // Education / Training
    'bg-orange-400/10',
    'text-orange-700',
    'border-orange-400/20', // Property / Real Estate
    'bg-red-400/10',
    'text-red-700',
    'border-red-400/20', // Defense / Medical
    // ...add any new categories you will use
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'glow-pulse': {
          '0%, 100%': {
            boxShadow:
              '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)',
          },
          '50%': {
            boxShadow:
              '0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(168, 85, 247, 0.3)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(2deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-2deg)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-up': 'fade-up 0.6s ease-out',
        'slide-in': 'slide-in 0.5s ease-out',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'bounce-slow': 'bounce-slow 3s infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
};
