'use client';
import {
  Code2,
  LayoutPanelTop,
  MonitorSmartphone,
  Palette,
  Puzzle,
  Server,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Wrench,
} from 'lucide-react';

export const serviceCatalog = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Custom Web Apps',
    description: 'Next.js & React solutions tailored to your workflows.',
    features: ['Next.js / React', 'API integrations', 'Dashboard UI'],
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: 'E-commerce Builds',
    description: 'WooCommerce stores engineered to convert and scale.',
    features: ['WooCommerce', 'Subscriptions', 'Headless commerce'],
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Brand Websites',
    description: 'Marketing experiences with pixel-perfect execution.',
    features: ['Design systems', 'CMS driven', 'Motion & micro copy'],
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Site Rescues',
    description: 'Audits, hardening, and fixes for underperforming builds.',
    features: ['Core web vitals', 'Security review', 'Refactoring'],
  },
  {
    icon: <LayoutPanelTop className="w-6 h-6" />,
    title: 'Headless CMS',
    description: 'Composable architectures powered by WordPress or Sanity.',
    features: ['WordPress + Next.js', 'Sanity / Contentful', 'GraphQL'],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Ongoing Care',
    description: 'Retainers for growth experiments and product support.',
    features: ['Product sprints', 'Launch support', 'Team enablement'],
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'Infrastructure & DevOps',
    description: 'Scalable hosting setups with automated workflows.',
    features: ['Vercel / AWS', 'CI/CD pipelines', 'Monitoring'],
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: 'Mobile-Ready Experiences',
    description: 'Responsive PWAs and mobile-first interfaces.',
    features: ['PWA setup', 'Offline states', 'Accessibility'],
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Growth & CRO',
    description: 'Experimentation frameworks that move key metrics.',
    features: ['Landing tests', 'Analytics wiring', 'CRM automations'],
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: 'Integrations & Automation',
    description: 'Connect your stack with custom middleware.',
    features: ['Zapier / Make', 'Custom APIs', 'Webhook orchestration'],
  },
];
export const defaultServices = serviceCatalog.slice(0, 6);
