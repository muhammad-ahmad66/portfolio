import { Compass, Layers, Brain, Rocket } from "lucide-react";

const processSteps = [
  {
    phase: "01",
    title: "Discovery and Strategy",
    description:
      "We define your goals, target audience and project scope so every decision from day one is focused on results.",
    artifacts: [
      "Project brief and goal alignment",
      "Competitor and UX audit",
      "SEO and conversion strategy",
    ],
    icon: <Compass className="w-5 h-5" />,
  },
  {
    phase: "02",
    title: "Design and Wireframes",
    description:
      "Clean, conversion-focused layouts built in Figma before a single line of code is written — saving time and revisions.",
    artifacts: [
      "Figma wireframes and mockups",
      "Mobile-first responsive design",
      "Brand-aligned UI components",
    ],
    icon: <Layers className="w-5 h-5" />,
  },
  {
    phase: "03",
    title: "Development and Integration",
    description:
      "Your website is built with clean, fast WordPress or Next.js code and integrated with the tools your business relies on.",
    artifacts: [
      "WordPress, WooCommerce or Next.js build",
      "CMS, API and payment integration",
      "Core Web Vitals and speed optimization",
    ],
    icon: <Brain className="w-5 h-5" />,
  },
  {
    phase: "04",
    title: "Launch and Handover",
    description:
      "We test everything, launch on your schedule and hand over full ownership so your team can manage the site with confidence.",
    artifacts: [
      "Pre-launch QA and cross-browser testing",
      "Google Analytics and Search Console setup",
      "Training and full source file handover",
    ],
    icon: <Rocket className="w-5 h-5" />,
  },
];

const operatingPrinciples = [
  { text: "Progress updates twice a week, no chasing needed" },
  { text: "You own all code, files and content from day one" },
  { text: "Performance, SEO and mobile standards built in" },
];

const valueProps = [
  { label: "Avg. project delivery", value: "2–4 weeks" },
  { label: "Client updates", value: "Twice a week" },
  { label: "Projects delivered", value: "60+ websites" },
];

// named export
export { processSteps, operatingPrinciples, valueProps };
