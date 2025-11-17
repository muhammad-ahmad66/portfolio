digital-agency/
├── public/
│ ├── images/
│ │ ├── projects/ # Project screenshots
│ │ ├── team/ # Team member photos
│ │ ├── clients/ # Client logos
│ │ └── blog/ # Blog post images
│ ├── icons/ # Custom icons, SVGs
│ ├── fonts/ # Custom fonts (if self-hosting)
│ ├── favicon.ico
│ └── robots.txt
│
├── src/
│ ├── app/ # App Router (Next.js 13+)
│ │ ├── (marketing)/ # Route group for marketing pages
│ │ │ ├── page.tsx # Home page
│ │ │ ├── about/
│ │ │ │ └── page.tsx
│ │ │ ├── services/
│ │ │ │ ├── page.tsx
│ │ │ │ └── [slug]/
│ │ │ │ └── page.tsx
│ │ │ ├── work/ # Portfolio/Projects
│ │ │ │ ├── page.tsx
│ │ │ │ └── [slug]/
│ │ │ │ └── page.tsx
│ │ │ ├── blog/
│ │ │ │ ├── page.tsx
│ │ │ │ └── [slug]/
│ │ │ │ └── page.tsx
│ │ │ ├── contact/
│ │ │ │ └── page.tsx
│ │ │ └── layout.tsx # Marketing layout with header/footer
│ │ │
│ │ ├── (legal)/ # Route group for legal pages
│ │ │ ├── privacy/
│ │ │ │ └── page.tsx
│ │ │ ├── terms/
│ │ │ │ └── page.tsx
│ │ │ └── layout.tsx
│ │ │
│ │ ├── api/ # API routes
│ │ │ ├── contact/
│ │ │ │ └── route.ts
│ │ │ ├── newsletter/
│ │ │ │ └── route.ts
│ │ │ └── projects/
│ │ │ └── route.ts
│ │ │
│ │ ├── fonts/ # Font files for next/font
│ │ ├── globals.css # Global styles & Tailwind imports
│ │ ├── layout.tsx # Root layout
│ │ ├── not-found.tsx # 404 page
│ │ └── error.tsx # Error boundary
│ │
│ ├── components/
│ │ ├── ui/ # shadcn/ui components
│ │ │ ├── button.tsx
│ │ │ ├── input.tsx
│ │ │ ├── card.tsx
│ │ │ ├── dialog.tsx
│ │ │ ├── dropdown-menu.tsx
│ │ │ ├── sheet.tsx
│ │ │ ├── tabs.tsx
│ │ │ ├── accordion.tsx
│ │ │ └── ...
│ │ │
│ │ ├── layout/ # Layout components
│ │ │ ├── header.tsx
│ │ │ ├── footer.tsx
│ │ │ ├── navigation.tsx
│ │ │ ├── mobile-nav.tsx
│ │ │ └── sidebar.tsx
│ │ │
│ │ ├── sections/ # Page sections (Hero, Features, etc.)
│ │ │ ├── hero.tsx
│ │ │ ├── features.tsx
│ │ │ ├── testimonials.tsx
│ │ │ ├── cta.tsx
│ │ │ ├── stats.tsx
│ │ │ └── pricing.tsx
│ │ │
│ │ ├── forms/ # Form components
│ │ │ ├── contact-form.tsx
│ │ │ ├── newsletter-form.tsx
│ │ │ └── project-inquiry-form.tsx
│ │ │
│ │ ├── cards/ # Card components
│ │ │ ├── project-card.tsx
│ │ │ ├── service-card.tsx
│ │ │ ├── blog-card.tsx
│ │ │ └── team-card.tsx
│ │ │
│ │ ├── animations/ # Animation components
│ │ │ ├── fade-in.tsx
│ │ │ ├── slide-in.tsx
│ │ │ ├── parallax.tsx
│ │ │ └── scroll-reveal.tsx
│ │ │
│ │ ├── providers/ # Context providers
│ │ │ ├── theme-provider.tsx
│ │ │ ├── redux-provider.tsx
│ │ │ └── analytics-provider.tsx
│ │ │
│ │ └── shared/ # Shared/common components
│ │ ├── logo.tsx
│ │ ├── loading-spinner.tsx
│ │ ├── theme-toggle.tsx
│ │ ├── container.tsx
│ │ ├── section.tsx
│ │ └── badge.tsx
│ │
│ ├── lib/ # Utility functions & configurations
│ │ ├── utils.ts # cn() and other utilities
│ │ ├── constants.ts # App constants
│ │ ├── validations.ts # Zod schemas
│ │ ├── api.ts # API client configuration
│ │ └── fonts.ts # Font configurations
│ │
│ ├── store/ # Redux Toolkit
│ │ ├── index.ts # Store configuration
│ │ ├── hooks.ts # Typed hooks (useAppDispatch, etc.)
│ │ └── slices/ # Redux slices
│ │ ├── themeSlice.ts
│ │ ├── uiSlice.ts
│ │ └── projectsSlice.ts
│ │
│ ├── hooks/ # Custom React hooks
│ │ ├── use-media-query.ts
│ │ ├── use-scroll-position.ts
│ │ ├── use-intersection-observer.ts
│ │ ├── use-local-storage.ts
│ │ └── use-theme.ts
│ │
│ ├── types/ # TypeScript types
│ │ ├── index.ts
│ │ ├── project.ts
│ │ ├── blog.ts
│ │ ├── service.ts
│ │ └── team.ts
│ │
│ ├── data/ # Static data / mock data
│ │ ├── projects.ts
│ │ ├── services.ts
│ │ ├── testimonials.ts
│ │ └── team.ts
│ │
│ ├── styles/ # Additional styles
│ │ ├── animations.css # Custom animations
│ │ └── utilities.css # Custom utility classes
│ │
│ └── config/ # Configuration files
│ ├── site.ts # Site metadata
│ ├── navigation.ts # Navigation configuration
│ └── seo.ts # SEO configuration
│
├── .env.local # Environment variables
├── .env.example # Example environment variables
├── .gitignore
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── postcss.config.mjs # PostCSS configuration
├── tsconfig.json
├── package.json
└── README.md
