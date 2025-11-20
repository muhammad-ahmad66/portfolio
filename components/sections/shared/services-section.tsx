'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BadgeHeading } from '@/components/ui/badge-heading';
import { Typography } from '@/components/ui/typography';
import { ServiceCard } from '@/components/cards/home/service-card';
import { IconList } from '@/components/ui/icon-list';
import { Button } from '@/components/ui/button-component';
import {
  ArrowRight,
  Code2,
  LayoutPanelTop,
  LineChart,
  MonitorSmartphone,
  Palette,
  Puzzle,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Wrench,
} from 'lucide-react';

const serviceCatalog = [
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

const defaultServices = serviceCatalog.slice(0, 6);

const processHighlights = [
  { text: 'Discovery & Strategy Sessions' },
  { text: 'Weekly async progress drops' },
  { text: 'Launch, QA & performance reports' },
];

const valueProps = [
  { label: 'Avg. time-to-value', value: '3 — 4 weeks' },
  { label: 'Retention rate', value: '92% renew' },
  { label: 'Launch confidence', value: 'Zero surprise releases' },
];

interface ServicesSectionProps {
  variant?: 'default' | 'expanded';
  id?: string;
}

export function ServicesSection({
  variant = 'default',
  id,
}: ServicesSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const servicesToRender =
    variant === 'expanded' ? serviceCatalog : defaultServices;

  return (
    <section id={id} className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-1000"
          style={{
            background:
              'radial-gradient(circle at 30% 20%, rgba(99,102,241,0.12), transparent 55%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div
          className={`text-center space-y-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <BadgeHeading
            label="Services"
            icon={<Sparkles className="w-4 h-4 text-primary-500" />}
          />
          <Typography variant="h2" className="leading-tight">
            {variant === 'expanded'
              ? 'A services catalogue that grows with your roadmap.'
              : 'Services built to launch, grow, and optimize your product.'}
          </Typography>
          <Typography variant="lead" className="max-w-3xl mx-auto">
            {variant === 'expanded'
              ? 'Browse modular engagements across strategy, design, engineering, and ongoing optimization. Mix and match deliverables as your team scales.'
              : 'From foundational builds to rescue missions, I partner with founders and teams to ship high-performing experiences backed by measurable outcomes.'}
          </Typography>
        </div>

        {variant === 'default' ? (
          <>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-10 items-start">
              <div
                className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                {servicesToRender.map((service) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    className="min-h-[190px]"
                  />
                ))}
              </div>

              <div
                className={`p-8 rounded-3xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl space-y-6 transition-all duration-700 delay-150 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                    <LineChart className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <Typography variant="h4" className="mb-0">
                      Partnership-first delivery
                    </Typography>
                    <Typography variant="small">
                      Clear touchpoints from kickoff to optimization.
                    </Typography>
                  </div>
                </div>

                <IconList
                  items={processHighlights}
                  variant="custom"
                  className="flex-col items-start gap-4"
                />

                <div className="rounded-2xl border border-border/60 bg-background/70 p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Ready when you are
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Limited build slots open quarterly.
                      </p>
                    </div>
                  </div>

                  <a href="/contact" className="w-full block">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full group"
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>

                <a href="/contact" className="w-full block">
                  <Button variant="outline" size="lg" className="w-full group">
                    <span>View Our Services</span>
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>

            <div
              className={`rounded-3xl border border-border/60 bg-card/70 px-6 py-6 flex flex-wrap gap-6 justify-between transition-all duration-700 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              {valueProps.map((item) => (
                <div key={item.label} className="space-y-1">
                  <Typography
                    variant="small"
                    className="uppercase tracking-wide"
                  >
                    {item.label}
                  </Typography>
                  <Typography variant="h4" className="text-foreground">
                    {item.value}
                  </Typography>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="space-y-12">
            <div
              className={`grid md:grid-cols-2 xl:grid-cols-3 gap-5 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
            >
              {servicesToRender.map((service) => (
                <div
                  key={service.title}
                  className="relative h-full rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-6 hover:border-primary-500/40 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary-500/10 text-primary-500 flex items-center justify-center shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-1">
                        {service.title}
                      </Typography>
                      <Typography variant="p" className="text-muted-foreground">
                        {service.description}
                      </Typography>
                    </div>
                  </div>

                  {service.features && service.features.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs font-medium rounded-full border border-border/80 bg-background/60"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto pt-6">
                    <a href="/contact" className="block">
                      <Button
                        variant="outline"
                        size="md"
                        className="w-full group"
                      >
                        <span>Get Quote</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-[2.5fr_1fr] gap-6 items-stretch">
              <div className="rounded-3xl border border-border bg-card/70 p-8 flex flex-col gap-6 h-full">
                <div className="flex flex-wrap items-center gap-6">
                  {valueProps.map((item) => (
                    <div key={item.label} className="space-y-1 min-w-[160px]">
                      <Typography
                        variant="small"
                        className="uppercase tracking-wide text-muted-foreground"
                      >
                        {item.label}
                      </Typography>
                      <Typography variant="h4">{item.value}</Typography>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {processHighlights.map((highlight) => (
                    <div
                      key={highlight.text}
                      className="rounded-2xl border border-border/60 bg-background/70 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <p className="text-sm font-medium text-foreground">
                          {highlight.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative mt-auto rounded-2xl overflow-hidden border border-border/60 min-h-[220px]">
                  <Image
                    src="/images/project-design-visual-landscape.webp"
                    alt="Creative workspace moodboard showcasing premium website projects"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-gradient-to-br from-primary-500/15 via-background/40 to-secondary-500/10 p-8 flex flex-col justify-between gap-6 h-full">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-background/60 text-xs uppercase tracking-[0.2em]">
                    <Sparkles className="w-3.5 h-3.5 text-primary-500" />
                    Book ahead
                  </div>
                  <Typography variant="h3" className="leading-tight">
                    Secure your build window before the next sprint.
                  </Typography>
                  <Typography variant="p" className="text-muted-foreground">
                    Every engagement starts with a strategy intensive to map
                    deliverables, resourcing, and success metrics.
                  </Typography>
                </div>

                <div className="space-y-4">
                  <IconList
                    items={processHighlights}
                    variant="custom"
                    className="flex-col gap-3"
                  />
                  <a href="/contact" className="w-full block">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full group"
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-1/3 -right-16 w-80 h-80 bg-primary-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-10 w-72 h-72 bg-secondary-500/10 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}
