import type { Step } from "./types";

export const STEPS: Record<string, Step> = {
  // ─── Entry ────────────────────────────────────────────────────────────────
  start: {
    id: "start",
    botMessage:
      "Hey there. I'm Ahmad's assistant. I can help figure out exactly what you need — just answer a few quick questions and we'll set everything up. By the way, this conversation gets sent to Ahmad by email so he can follow up properly.",
    inputType: "single-select",
    key: "intent",
    options: [
      { label: "I need a website built from scratch", goTo: "a1-purpose" },
      { label: "I need help with my existing website", goTo: "b1-platform" },
      { label: "I'm looking for a long-term dev partner", goTo: "c1-type" },
      { label: "I just have a quick question", goTo: "d1-topic" },
    ],
  },

  // ─── Branch A: New Website ────────────────────────────────────────────────
  "a1-purpose": {
    id: "a1-purpose",
    botMessage: "Good choice. What will this website mainly be used for?",
    inputType: "single-select",
    key: "purpose",
    options: [
      { label: "Sell products online", goTo: "a2-ecom" },
      { label: "Represent my business or brand", goTo: "a2-business" },
      { label: "Capture leads and enquiries", goTo: "a2-leads" },
      { label: "Show off portfolio or creative work", goTo: "a2-portfolio" },
      { label: "A web app or SaaS product", goTo: "a2-app" },
      { label: "Not sure yet, let's figure it out", goTo: "a-unsure" },
    ],
  },

  "a2-ecom": {
    id: "a2-ecom",
    botMessage:
      "An online store. How many products are you planning to list?",
    inputType: "single-select",
    key: "product_count",
    defaultNext: "a2-ecom-features",
    options: [
      { label: "1 to 20 products" },
      { label: "21 to 100 products" },
      { label: "100 to 500 products" },
      { label: "500 or more products" },
    ],
  },

  "a2-ecom-features": {
    id: "a2-ecom-features",
    botMessage: "Which of these do you need? Pick everything that applies.",
    inputType: "multi-select",
    key: "ecom_features",
    defaultNext: "a2-ecom-payments",
    continueLabel: "Next",
    options: [
      { label: "Product variations like size or color" },
      { label: "Subscriptions or recurring billing" },
      { label: "Booking or appointment system" },
      { label: "Digital downloads" },
      { label: "Multi-vendor marketplace" },
      { label: "Inventory management" },
      { label: "Coupons and discounts" },
    ],
  },

  "a2-ecom-payments": {
    id: "a2-ecom-payments",
    botMessage: "Which payment methods do you want to accept?",
    inputType: "multi-select",
    key: "payment_methods",
    defaultNext: "a3-brand",
    continueLabel: "Next",
    options: [
      { label: "Stripe or credit card" },
      { label: "PayPal" },
      { label: "JazzCash or EasyPaisa" },
      { label: "Bank transfer or cash on delivery" },
      { label: "Crypto" },
      { label: "Not sure yet" },
    ],
  },

  "a2-business": {
    id: "a2-business",
    botMessage: "What type of business is this for?",
    inputType: "single-select",
    key: "business_type",
    defaultNext: "a2-business-features",
    options: [
      { label: "Agency or studio" },
      { label: "Law firm or consultancy" },
      { label: "Healthcare or clinic" },
      { label: "Real estate" },
      { label: "Restaurant or hospitality" },
      { label: "Construction or trades" },
      { label: "Something else" },
    ],
  },

  "a2-business-features": {
    id: "a2-business-features",
    botMessage: "What features does the site need? Select all that apply.",
    inputType: "multi-select",
    key: "business_features",
    defaultNext: "a3-brand",
    continueLabel: "Next",
    options: [
      { label: "Team or staff profiles" },
      { label: "Services pages" },
      { label: "Case studies or portfolio" },
      { label: "Testimonials section" },
      { label: "Blog or news" },
      { label: "Live chat integration" },
      { label: "Google Maps or location" },
      { label: "Multi-language support" },
      { label: "WhatsApp button" },
    ],
  },

  "a2-leads": {
    id: "a2-leads",
    botMessage:
      "Smart move. What is the main thing you want visitors to do when they land on the site?",
    inputType: "single-select",
    key: "lead_action",
    defaultNext: "a2-leads-features",
    options: [
      { label: "Fill out a contact form" },
      { label: "Book a call or appointment" },
      { label: "Request a quote" },
      { label: "Download a lead magnet" },
      { label: "Subscribe to an email list" },
    ],
  },

  "a2-leads-features": {
    id: "a2-leads-features",
    botMessage: "Anything else you need on top of that?",
    inputType: "multi-select",
    key: "leads_features",
    defaultNext: "a3-brand",
    continueLabel: "Next",
    options: [
      { label: "Single landing page with one clear call to action" },
      { label: "Multi-step inquiry form" },
      { label: "CRM or email tool integration" },
      { label: "Live chat or chatbot" },
      { label: "Popups or exit intent" },
    ],
  },

  "a2-portfolio": {
    id: "a2-portfolio",
    botMessage: "What kind of work will the portfolio show?",
    inputType: "single-select",
    key: "portfolio_type",
    defaultNext: "a2-portfolio-features",
    options: [
      { label: "Design, visual work or branding" },
      { label: "Photography or videography" },
      { label: "Architecture or interior design" },
      { label: "Software or development" },
      { label: "Writing or journalism" },
      { label: "Music or art" },
    ],
  },

  "a2-portfolio-features": {
    id: "a2-portfolio-features",
    botMessage: "Which features do you need on this portfolio?",
    inputType: "multi-select",
    key: "portfolio_features",
    defaultNext: "a3-brand",
    continueLabel: "Next",
    options: [
      { label: "Password protected case studies" },
      { label: "Filterable project gallery" },
      { label: "Video embeds" },
      { label: "Blog or journal" },
      { label: "Client testimonials" },
      { label: "Resume or CV download" },
      { label: "Contact or hire me form" },
    ],
  },

  "a2-app": {
    id: "a2-app",
    botMessage: "A web app. Do you have a design ready?",
    inputType: "single-select",
    key: "design_status",
    defaultNext: "a2-app-features",
    options: [
      { label: "Yes, I have Figma designs" },
      { label: "I have wireframes or rough sketches" },
      { label: "No, I need design and development" },
      { label: "I have a reference app I want to model after" },
    ],
  },

  "a2-app-features": {
    id: "a2-app-features",
    botMessage: "What does the app need to do? Pick everything that fits.",
    inputType: "multi-select",
    key: "app_features",
    defaultNext: "a2-app-stack",
    continueLabel: "Next",
    options: [
      { label: "User login and signup" },
      { label: "User dashboard" },
      { label: "Database and admin panel" },
      { label: "Third-party API integrations" },
      { label: "Payments or subscriptions" },
      { label: "Real-time features like chat or live updates" },
      { label: "Multiple user roles" },
      { label: "Mobile ready or PWA" },
    ],
  },

  "a2-app-stack": {
    id: "a2-app-stack",
    botMessage: "Do you have a preferred tech stack in mind?",
    inputType: "single-select",
    key: "tech_stack",
    defaultNext: "a3-brand",
    options: [
      { label: "Next.js and React" },
      { label: "WordPress with a custom plugin" },
      { label: "No preference, you decide" },
      { label: "Something else entirely" },
    ],
  },

  "a-unsure": {
    id: "a-unsure",
    botMessage:
      "No problem, that's a great place to start. Tell me a bit about the industry or niche this is for.",
    inputType: "text",
    key: "industry",
    placeholder: "e.g. fitness coaching, real estate, food delivery",
    defaultNext: "a-unsure-audience",
  },

  "a-unsure-audience": {
    id: "a-unsure-audience",
    botMessage: "And who is the target audience?",
    inputType: "single-select",
    key: "audience",
    defaultNext: "a-unsure-inspo",
    options: [
      { label: "General consumers" },
      { label: "Businesses and professionals" },
      { label: "Both" },
      { label: "Not sure" },
    ],
  },

  "a-unsure-inspo": {
    id: "a-unsure-inspo",
    botMessage:
      "Do you have any websites you like that could serve as inspiration?",
    inputType: "single-select",
    key: "has_inspo",
    options: [
      { label: "Yes, I have some references", goTo: "a-unsure-inspo-url" },
      { label: "No, not really", goTo: "a3-brand" },
    ],
  },

  "a-unsure-inspo-url": {
    id: "a-unsure-inspo-url",
    botMessage: "Paste the URL of a site you like and Ahmad will take note.",
    inputType: "url",
    key: "inspo_url",
    placeholder: "https://example.com",
    defaultNext: "a3-brand",
  },

  // ─── Shared A3–A7 ─────────────────────────────────────────────────────────
  "a3-brand": {
    id: "a3-brand",
    botMessage: "Now let's talk design. Do you have a brand identity ready?",
    inputType: "single-select",
    key: "brand_status",
    defaultNext: "a3-content",
    options: [
      { label: "Yes, logo, colors and fonts are all ready" },
      { label: "Partial, I have a logo but not much else" },
      { label: "No, I need help with branding too" },
      { label: "I'll provide brand guidelines in a document" },
    ],
  },

  "a3-content": {
    id: "a3-content",
    botMessage: "What about the content, the text and images?",
    inputType: "single-select",
    key: "content_status",
    defaultNext: "a3-design",
    options: [
      { label: "I'll provide everything myself" },
      { label: "I need help writing the copy" },
      { label: "I need help sourcing images" },
      { label: "I need full content creation" },
    ],
  },

  "a3-design": {
    id: "a3-design",
    botMessage: "Do you have a design file or mockup to share?",
    inputType: "single-select",
    key: "design_file",
    defaultNext: "a4-pages-count",
    options: [
      { label: "Yes, I have a Figma file" },
      { label: "No, you handle the design" },
      { label: "I have a PDF or image mockup" },
      { label: "Let's go over design on a call" },
    ],
  },

  "a4-pages-count": {
    id: "a4-pages-count",
    botMessage: "Roughly how many pages does the site need?",
    inputType: "single-select",
    key: "pages_count",
    defaultNext: "a4-pages-list",
    options: [
      { label: "1 to 5 pages" },
      { label: "6 to 15 pages" },
      { label: "15 to 30 pages" },
      { label: "More than 30 pages" },
    ],
  },

  "a4-pages-list": {
    id: "a4-pages-list",
    botMessage: "Which pages do you need? Pick all that apply.",
    inputType: "multi-select",
    key: "pages_list",
    defaultNext: "a4-support",
    continueLabel: "Next",
    options: [
      { label: "Home" },
      { label: "About" },
      { label: "Services" },
      { label: "Individual service pages" },
      { label: "Portfolio or work" },
      { label: "Blog" },
      { label: "Pricing" },
      { label: "FAQ" },
      { label: "Testimonials" },
      { label: "Contact" },
      { label: "Landing page" },
      { label: "Privacy policy and terms" },
    ],
  },

  "a4-support": {
    id: "a4-support",
    botMessage: "Would you want ongoing support after the site goes live?",
    inputType: "single-select",
    key: "support",
    defaultNext: "a5-budget",
    options: [
      { label: "Yes, monthly maintenance" },
      { label: "Just the first month included" },
      { label: "No, one-time project only" },
      { label: "Not sure yet" },
    ],
  },

  "a5-budget": {
    id: "a5-budget",
    botMessage:
      "Almost there. What's your approximate budget? No wrong answers here, this just helps Ahmad recommend the right package.",
    inputType: "single-select",
    key: "budget",
    defaultNext: "a6-timeline",
    options: [
      {
        label: "Under PKR 20,000",
        note: "Starter plan may be the right fit",
      },
      {
        label: "PKR 20,000 to 50,000",
        note: "Professional plan may be the right fit",
      },
      {
        label: "PKR 50,000 to 100,000",
        note: "Enterprise plan may be the right fit",
      },
      {
        label: "PKR 100,000 and above",
        note: "Ahmad will scope a custom package for you",
      },
      { label: "I'd rather discuss it" },
    ],
  },

  "a6-timeline": {
    id: "a6-timeline",
    botMessage: "When do you need this live?",
    inputType: "single-select",
    key: "timeline",
    defaultNext: "a7-contact",
    options: [
      {
        label: "Within 2 weeks",
        note: "Rush projects may have a priority fee. Ahmad will confirm on the call.",
      },
      { label: "Within a month" },
      { label: "1 to 3 months from now" },
      { label: "More than 3 months out" },
      { label: "I have a specific date in mind" },
    ],
  },

  "a7-contact": {
    id: "a7-contact",
    botMessage:
      "You're all set. Just leave your details and Ahmad will get back to you. He typically replies within 2 hours during business hours.",
    inputType: "contact-fields",
    key: "contact",
    defaultNext: "a-done",
    note: "Usually replies within 2 hours",
  },

  "a-done": {
    id: "a-done",
    botMessage: (ans) =>
      `Ahmad has your brief${ans.name ? `, ${ans.name.split(" ")[0]}` : ""}. He will review everything and reach out on WhatsApp shortly.`,
    inputType: "done",
  },

  // ─── Branch B: Existing Website ───────────────────────────────────────────
  "b1-platform": {
    id: "b1-platform",
    botMessage:
      "Got it, let's fix or improve what you already have. What platform is your site built on?",
    inputType: "single-select",
    key: "platform",
    defaultNext: "b2-problems",
    options: [
      { label: "WordPress" },
      { label: "WooCommerce" },
      { label: "Next.js or React" },
      {
        label: "Webflow, Wix or Squarespace",
        note: "Ahmad specialises in WordPress and Next.js. He can advise but may refer you to a specialist for this platform.",
      },
      {
        label: "Shopify",
        note: "Ahmad specialises in WordPress and Next.js. He can advise but may refer you to a specialist for this platform.",
      },
      { label: "Not sure, I'll share the URL" },
    ],
  },

  "b2-problems": {
    id: "b2-problems",
    botMessage:
      "What are you dealing with? Pick everything that applies.",
    inputType: "multi-select",
    key: "problems",
    continueLabel: "Next",
    defaultNext: "b3-url",
    options: [
      { label: "Site is slow or performing badly" },
      { label: "Something is broken or not working" },
      { label: "Design looks outdated" },
      { label: "Poor Google rankings or SEO issues" },
      { label: "I want new features or pages added" },
      { label: "WooCommerce or store issues" },
      { label: "Security concerns or site was hacked" },
      { label: "Plugin conflicts or update issues" },
      { label: "Analytics or tracking setup" },
      { label: "Migrating host or domain" },
    ],
  },

  "b2a-urgent": {
    id: "b2a-urgent",
    botMessage:
      "That sounds urgent. Is your site currently down or inaccessible?",
    inputType: "single-select",
    key: "site_down",
    options: [
      { label: "Yes, it is completely down", goTo: "b-emergency" },
      { label: "No, it is live but something is wrong", goTo: "b3-url" },
    ],
  },

  "b-emergency": {
    id: "b-emergency",
    botMessage:
      "This is urgent. Tap below to reach Ahmad directly on WhatsApp right now. He handles emergency fixes and will respond as fast as possible.",
    inputType: "info",
    infoType: "general",
    infoLinks: [
      {
        label: "Contact Ahmad on WhatsApp",
        href: "https://wa.me/923129819819?text=Hi%20Ahmad%2C%20my%20website%20is%20completely%20down%20and%20I%20need%20urgent%20help.",
        external: true,
      },
    ],
  },

  "b3-url": {
    id: "b3-url",
    botMessage:
      "Can you share your website URL? It helps Ahmad see the issue in context.",
    inputType: "url",
    key: "site_url",
    placeholder: "https://yoursite.com",
    defaultNext: "b3-access",
  },

  "b3-access": {
    id: "b3-access",
    botMessage: "Do you have admin access to the site?",
    inputType: "single-select",
    key: "admin_access",
    defaultNext: "b4-urgency",
    options: [
      { label: "Yes, full admin access" },
      { label: "Partial access" },
      { label: "No, I have lost access" },
      { label: "Not sure" },
    ],
  },

  "b4-urgency": {
    id: "b4-urgency",
    botMessage: "How urgent is this for you?",
    inputType: "single-select",
    key: "urgency",
    defaultNext: "b5-budget",
    options: [
      {
        label: "Critical, I am losing business every hour",
        note: "Ahmad will try to respond within 1 to 2 hours for urgent requests.",
      },
      { label: "Important, needs fixing this week" },
      { label: "Low priority, whenever you are available" },
    ],
  },

  "b5-budget": {
    id: "b5-budget",
    botMessage: "Do you have a rough budget in mind for this work?",
    inputType: "single-select",
    key: "budget",
    defaultNext: "a7-contact",
    options: [
      { label: "Under PKR 10,000" },
      { label: "PKR 10,000 to 30,000" },
      { label: "PKR 30,000 and above" },
      { label: "I need a quote first" },
    ],
  },

  // ─── Branch C: Long-term Partnership ──────────────────────────────────────
  "c1-type": {
    id: "c1-type",
    botMessage:
      "Ahmad genuinely enjoys working with people long-term. What kind of arrangement are you thinking?",
    inputType: "single-select",
    key: "partnership_type",
    defaultNext: "c2-volume",
    options: [
      { label: "Monthly retainer for ongoing development and maintenance" },
      {
        label:
          "White-label work — you're an agency and Ahmad works behind the scenes",
      },
      { label: "Multiple projects over time" },
      { label: "Not sure, let's discuss" },
    ],
  },

  "c2-volume": {
    id: "c2-volume",
    botMessage: "Roughly how much work are we talking about per month?",
    inputType: "single-select",
    key: "work_volume",
    defaultNext: "c3-tech",
    options: [
      { label: "Light, a few hours for fixes and updates" },
      { label: "Medium, around 20 to 40 hours a month" },
      { label: "Heavy, 40 to 80 hours a month" },
      { label: "Full-time equivalent" },
    ],
  },

  "c3-tech": {
    id: "c3-tech",
    botMessage: "What technologies does your work typically involve?",
    inputType: "multi-select",
    key: "tech_needs",
    defaultNext: "c4-who",
    continueLabel: "Next",
    options: [
      { label: "WordPress or WooCommerce" },
      { label: "Next.js or React" },
      { label: "Custom plugin development" },
      { label: "API integrations" },
      { label: "Performance and SEO" },
      { label: "Hosting and server management" },
      { label: "UI and UX design" },
    ],
  },

  "c4-who": {
    id: "c4-who",
    botMessage:
      "Just so Ahmad can tailor his reply — who are you?",
    inputType: "single-select",
    key: "client_type",
    defaultNext: "a7-contact",
    options: [
      { label: "A business owner looking for a dedicated developer" },
      { label: "A design agency needing a dev partner" },
      { label: "A marketing agency that needs web support" },
      { label: "An individual or solopreneur" },
    ],
  },

  // ─── Branch D: Quick Question ──────────────────────────────────────────────
  "d1-topic": {
    id: "d1-topic",
    botMessage: "Of course. What would you like to know about?",
    inputType: "single-select",
    key: "question_topic",
    options: [
      { label: "Pricing and packages", goTo: "d-pricing" },
      { label: "Past work and portfolio", goTo: "d-portfolio" },
      { label: "Timeline and availability", goTo: "d-availability" },
      { label: "Technologies Ahmad works with", goTo: "d-tech" },
      { label: "Location and remote work", goTo: "d-location" },
      { label: "Something else", goTo: "d-other" },
    ],
  },

  "d-pricing": {
    id: "d-pricing",
    botMessage:
      "Here is a quick summary of Ahmad's packages. Prices are in PKR and may vary for custom work.",
    inputType: "info",
    infoType: "pricing-cards",
    defaultNext: "d-done",
  },

  "d-portfolio": {
    id: "d-portfolio",
    botMessage:
      "Ahmad has delivered over 50 websites across eCommerce, healthcare, hospitality, real estate and more. Here are a few recent ones.",
    inputType: "info",
    infoType: "portfolio-cards",
    defaultNext: "d-done",
  },

  "d-availability": {
    id: "d-availability",
    botMessage:
      "Ahmad typically keeps a limited number of slots open each month. Here is the current picture.",
    inputType: "info",
    infoType: "availability",
    defaultNext: "d-done",
  },

  "d-tech": {
    id: "d-tech",
    botMessage: "Here is what Ahmad works with day to day.",
    inputType: "info",
    infoType: "tech-stack",
    defaultNext: "d-done",
  },

  "d-location": {
    id: "d-location",
    botMessage:
      "Ahmad is based in Pakistan and works fully remote with clients worldwide, including the UK, US, Europe, Australia and the Middle East. Communication happens over WhatsApp, Slack or Google Meet.",
    inputType: "info",
    infoType: "location",
    infoLinks: [
      {
        label: "Start a conversation on WhatsApp",
        href: "https://wa.me/923129819819",
        external: true,
      },
    ],
    defaultNext: "d-done",
  },

  "d-other": {
    id: "d-other",
    botMessage:
      "Go ahead. Type your question below and leave a way to reach you. Ahmad will reply personally.",
    inputType: "contact-fields",
    key: "question",
    defaultNext: "d-done",
    note: "Usually replies within 2 hours",
  },

  "d-done": {
    id: "d-done",
    botMessage:
      "Thanks for reaching out. Ahmad has your message and will reply soon, usually within 2 hours.",
    inputType: "done",
  },
};
