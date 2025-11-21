'use client';

import Image from 'next/image';
import { PageHero } from '@/components/sections/shared/page-hero';
import { ContactForm } from '@/components/forms/contact-form';
import { ContactInfoSection } from '@/components/sections/shared/contact-info-section';
import { MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge={{
          label: 'Get in Touch',
          icon: <MessageCircle className="w-4 h-4 text-primary-500" />,
        }}
        title="Let's start a"
        titleHighlight="conversation"
        description="Ready to bring your vision to life? Whether you're looking for a custom web solution, need help with an existing project, or just want to discuss possibilities, I'd love to hear from you."
        primaryAction={{
          label: 'Send a Message',
          onClick: () => {
            window.location.href = 'mailto:muhammadugv66@gmail.com';
          },
        }}
        secondaryAction={{
          label: 'WhatsApp Me',
          onClick: () => {
            window.open('https://wa.me/923129818199', '_blank');
          },
        }}
      />

      <section className="relative overflow-hidden py-14 lg:py-20">
        <div className="absolute inset-0 bg-background">
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              background:
                'radial-gradient(circle at 10% 20%, rgba(236,72,153,0.12), transparent 55%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <ContactForm />
            <div className="space-y-8">
              <ContactInfoSection />

              {/* Professional Portrait Image */}
              <div className="relative rounded-3xl overflow-hidden border border-border/60 bg-card/80 backdrop-blur-xl shadow-2xl group">
                <div className="relative h-[320px]">
                  <Image
                    src="/images/project-design-visual-landscape.webp"
                    alt="Muhammad Ahmad - Senior WordPress Developer and MERN Stack Developer available for freelance projects"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-sm font-medium">
                      Available for new projects and collaborations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
