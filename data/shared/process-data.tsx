import { Compass, Layers, Brain, Rocket } from 'lucide-react';

const processSteps = [
  {
    phase: '01',
    title: 'Discover & Align',
    description:
      'Stakeholder sessions, success metrics, and a shared scorecard for the build.',
    artifacts: [
      'Stakeholder workshops',
      'Experience audit',
      'Success metrics blueprint',
    ],
    icon: <Compass className="w-5 h-5" />,
  },
  {
    phase: '02',
    title: 'Experience Systems',
    description:
      'Flows, component systems, and content models that keep every release consistent.',
    artifacts: [
      'Interactive wireflows',
      'Component architecture',
      'Content model mapping',
    ],
    icon: <Layers className="w-5 h-5" />,
  },
  {
    phase: '03',
    title: 'Build & Integrations',
    description:
      'Premium front-end craft paired with dependable integrations, with visual QA on each milestone.',
    artifacts: [
      'Edge-ready codebase',
      'Performance guardrails',
      'CMS + API integrations',
    ],
    icon: <Brain className="w-5 h-5" />,
  },
  {
    phase: '04',
    title: 'Launch & Optimization',
    description:
      'We choreograph the release, track impact, and keep testing so momentum never stalls.',
    artifacts: [
      'Launch playbook',
      'Analytics instrumentation',
      'Roadmap for iteration',
    ],
    icon: <Rocket className="w-5 h-5" />,
  },
];

const operatingPrinciples = [
  { text: 'Asynchronous weekly show & tell updates' },
  { text: 'Source files, docs, and tooling are client-owned' },
  { text: 'Performance budgets agreed before build' },
];

const valueProps = [
  { label: 'Avg. phase length', value: '2.5 weeks' },
  { label: 'Touchpoints / week', value: '2 async drops' },
  { label: 'Launch confidence', value: '99.8% uptime' },
];

// named export
export { processSteps, operatingPrinciples, valueProps };
