'use client';

import { PageHero } from '@/components/sections/shared/page-hero';
import { Typography } from '@/components/ui/typography';
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        badge={{
          label: 'Privacy',
          icon: <Shield className="w-4 h-4 text-primary-500" />,
        }}
        title="Privacy"
        titleHighlight="Policy"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
      />
      <div className="relative overflow-hidden py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-background rounded-[32px] border border-border/60 p-8 sm:p-12 shadow-lg space-y-8">
            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                1. Information We Collect
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </Typography>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Project requirements and specifications</li>
                <li>Communication records (emails, messages, calls)</li>
                <li>Payment information (processed through secure third-party payment processors)</li>
                <li>Website usage data and analytics (when you visit our website)</li>
              </ul>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                2. How We Use Your Information
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed mb-4">
                We use the collected information to:
              </Typography>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Communicate with you about projects, services, and updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send technical notices, updates, and security alerts</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                3. Information Sharing and Disclosure
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
              </Typography>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or respond to legal requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>With service providers who assist in operating our business (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                4. Data Security
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                5. Data Retention
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Project-related information may be retained for record-keeping and legal compliance purposes.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                6. Your Rights
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </Typography>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent at any time (where processing is based on consent)</li>
              </ul>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                7. Cookies and Tracking Technologies
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and understand user preferences. You can control cookie preferences through your browser settings.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                8. Third-Party Links
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                9. Children's Privacy
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                10. Changes to This Policy
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </Typography>
            </section>

            <section>
              <Typography variant="h3" className="text-2xl mb-4 font-semibold">
                11. Contact Us
              </Typography>
              <Typography variant="p" className="text-muted-foreground leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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



