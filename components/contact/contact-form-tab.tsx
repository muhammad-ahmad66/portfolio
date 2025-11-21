// src/components/contact/contact-form-tab.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button-component';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';
import { Typography } from '@/components/ui/typography';

// const quickFormSchema = z.object({
//   name: z.string().min(2, 'Name must be at least 2 characters'),
//   email: z.string().email('Please enter a valid email'),
//   phone: z.string().min(10, 'Please enter a valid phone number'),
//   projectType: z.string().default('other'),
//   message: z.string().min(10, 'Message must be at least 10 characters'),
//   company: z.string().optional(),
//   budget: z.string().optional(),
//   timeline: z.string().optional(),
//   domainHosting: z.boolean().default(false),
//   graphicWork: z.boolean().default(false),
// });

const quickFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().optional(),
  projectType: z.string(), // Remove .min(1, "...") or .optional()
  budget: z.string().optional(),
  timeline: z.string().optional(),
  domainHosting: z.boolean(), // Remove .default(false)
  graphicWork: z.boolean(), // Remove .default(false)
  message: z.string().min(10, 'Please provide at least 10 characters'),
});

type QuickFormValues = z.infer<typeof quickFormSchema>;

export function ContactFormTab() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuickFormValues>({
    resolver: zodResolver(quickFormSchema),
    defaultValues: {
      projectType: 'other',
      domainHosting: false,
      graphicWork: false,
    },
  });

  const onSubmit = async (data: QuickFormValues) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Add default phone if not provided
      const formData = {
        ...data,
        phone: data.phone || 'Not provided',
        company: data.company || '',
        budget: data.budget || '',
        timeline: data.timeline || '',
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || 'Failed to send message');

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(
        error instanceof Error
          ? error.message
          : 'Failed to send message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-6 flex flex-col items-center justify-center min-h-[400px] text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-primary-500" />
        </div>
        <div className="space-y-2">
          <Typography variant="h4">Message Sent!</Typography>
          <Typography variant="p" className="text-muted-foreground text-sm">
            I'll get back to you within 24 hours.
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
      <div className="space-y-2">
        <Typography variant="h4">Send Me a Message</Typography>
        <Typography variant="p" className="text-muted-foreground text-sm">
          Fill out the quick form below
        </Typography>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="Your name"
            {...register('name')}
            error={errors.name?.message}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            placeholder="your@email.com"
            {...register('email')}
            error={errors.email?.message}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <Input
            type="tel"
            placeholder="+92 312 9818199"
            {...register('phone')}
            error={errors.phone?.message}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Optional - helps us respond faster
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            placeholder="Tell me about your project..."
            rows={4}
            {...register('message')}
            error={errors.message?.message}
          />
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/50 bg-red-500/10 p-3">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full group"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        For detailed projects, use the full contact form
      </p>
    </form>
  );
}
