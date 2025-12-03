'use client';

import { PageHero } from '@/components/sections/shared/page-hero';
import { Typography } from '@/components/ui/typography';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <>
      <PageHero
        badge={{
          label: 'Legal',
          icon: <FileText className="w-4 h-4 text-primary-500" />,
        }}
        title="Terms and"
        titleHighlight="Conditions"
        description="Please read these terms and conditions carefully before using our services."
      />
      <div className="relative overflow-hidden py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-background rounded-[32px] border border-border/60 p-8 sm:p-12 shadow-lg space-y-8">
            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                1. Acceptance of Terms
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed">
                By accessing and using the services of Muhammad Ahmad (hereinafter referred to as &ldquo;the Developer&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you accept and agree to be bound by the terms and conditions set forth in this document. If you do not agree to these terms, please do not use our services.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                2. Services Provided
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed mb-4">
                The Developer provides web development, design, and related technology services including but not limited to:
              </Typography>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>WordPress website development and customization</li>
                <li>Custom web application development using React, Next.js, and related technologies</li>
                <li>E-commerce solutions and integrations</li>
                <li>UI/UX design and implementation</li>
                <li>Website maintenance and support services</li>
              </ul>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                3. Client Responsibilities
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed mb-4">
                Clients are responsible for:
              </Typography>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Providing accurate and complete information required for project completion</li>
                <li>Timely feedback and approvals during the development process</li>
                <li>Payment of fees as agreed upon in project contracts</li>
                <li>Ensuring they have legal rights to any content, images, or materials provided</li>
              </ul>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                4. Intellectual Property
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed">
                Upon full payment, clients receive ownership of the custom-developed code and design elements created specifically for their project. The Developer retains the right to use general knowledge, techniques, and methodologies gained during the project. Third-party tools, libraries, and frameworks remain subject to their respective licenses.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                5. Payment Terms
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed mb-4">
                Payment terms will be specified in individual project agreements. Generally:
              </Typography>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Projects may require a deposit before work begins</li>
                <li>Final payment is due upon project completion and delivery</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are in the currency specified in the project agreement</li>
              </ul>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                6. Project Timeline and Delays
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed">
                Project timelines are estimates based on the information provided. Delays may occur due to client feedback cycles, third-party dependencies, or unforeseen technical challenges. The Developer will communicate any significant delays and work with clients to adjust timelines as needed.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                7. Revisions and Changes
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed">
                A reasonable number of revisions are included in project quotes. Significant changes to project scope may require additional time and cost, which will be discussed and agreed upon before implementation.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                8. Warranty and Support
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed mb-4">
                The Developer provides a warranty period for bug fixes related to delivered work, typically 30-90 days post-launch, as specified in project agreements. Support beyond the warranty period may be available under separate maintenance agreements.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                9. Limitation of Liability
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed">
                The Developer&apos;s liability is limited to the total project fee. We are not liable for indirect, incidental, or consequential damages arising from the use or inability to use the delivered services.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                10. Termination
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed">
                Either party may terminate a project agreement with written notice. Upon termination, the client is responsible for payment of work completed up to the termination date. The Developer retains ownership of work until full payment is received.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                11. Contact Information
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed">
                For questions about these terms, please contact:
                <br />
                Email: muhammadugv66@gmail.com
                <br />
                Phone: (+92) 355 5374466
                <br />
                Location: Rawalpindi, Pakistan
              </Typography>
            </section>

            <section>
              <Typography variant="p" className="text-sm text-muted-foreground italic">
                Last updated: January 2025
              </Typography>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}



