import { Compass, Layers, Brain, Rocket } from "lucide-react";

const processSteps = [
  {
    phase: "01",
    title: "Discover & Plan",
    description:
      "We clarify project goals, user needs, and scope to ensure a smooth, focused development process.",
    artifacts: [
      "Quick stakeholder alignment",
      "Mini experience audit",
      "Success metrics summary",
    ],
    icon: <Compass className="w-5 h-5" />,
  },
  {
    phase: "02",
    title: "Design & Prototype",
    description:
      "We create clean layouts, simple component structures, and basic content flows for a cohesive user experience.",
    artifacts: [
      "Wireframes & clickable prototypes",
      "Component sketch library",
      "Content structure outline",
    ],
    icon: <Layers className="w-5 h-5" />,
  },
  {
    phase: "03",
    title: "Build & Integrate",
    description:
      "We develop the website or web app using reliable tools and integrate any required systems efficiently.",
    artifacts: [
      "Clean, maintainable code",
      "Basic CMS or API integration",
      "Performance check",
    ],
    icon: <Brain className="w-5 h-5" />,
  },
  {
    phase: "04",
    title: "Launch & Iterate",
    description:
      "We launch the site, ensure everything works smoothly, and make small tweaks to optimize user experience.",
    artifacts: [
      "Launch checklist",
      "Basic analytics setup",
      "Iteration notes for future updates",
    ],
    icon: <Rocket className="w-5 h-5" />,
  },
];

const operatingPrinciples = [
  { text: "Regular short updates to keep clients informed" },
  { text: "Clients own all source files and content" },
  { text: "Performance and design standards set upfront" },
];

const valueProps = [
  { label: "Average phase length", value: "1–2 weeks" },
  { label: "Client touchpoints", value: "2–3 short updates per week" },
  { label: "Launch reliability", value: "Stable, smooth delivery" },
];

// named export
export { processSteps, operatingPrinciples, valueProps };
