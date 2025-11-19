"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button-component";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { Typography } from "@/components/ui/typography";

// const contactFormSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Please enter a valid email address"),
//   phone: z.string().min(10, "Please enter a valid phone number"),
//   company: z.string().optional(),
//   projectType: z.string().min(1, "Please select a project type"),
//   budget: z.string().optional(),
//   timeline: z.string().optional(),
//   domainHosting: z.boolean().default(false),
//   graphicWork: z.boolean().default(false),
//   message: z.string().min(10, "Please provide at least 10 characters"),
// });

// FILE: components/forms/contact-form.tsx
// Replace the contactFormSchema with this:

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  domainHosting: z.boolean(), // Remove .default(false)
  graphicWork: z.boolean(), // Remove .default(false)
  message: z.string().min(10, "Please provide at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      domainHosting: false,
      graphicWork: false,
      projectType: "",
      budget: "",
      timeline: "",
    },
  });

  const domainHosting = watch("domainHosting");
  const graphicWork = watch("graphicWork");
  const projectType = watch("projectType");
  const budget = watch("budget");
  const timeline = watch("timeline");

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Failed to send message");

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-3xl border border-border/60 bg-card/80 backdrop-blur-xl p-12 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-primary-500" />
        </div>
        <div className="space-y-2">
          <Typography variant="h3">Message Sent Successfully!</Typography>
          <Typography variant="p" className="text-muted-foreground">
            I'll get back to you within 24 hours.
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-border/60 bg-card/80 backdrop-blur-xl p-8 lg:p-12 space-y-8"
    >
      <div className="space-y-2">
        <Typography variant="h3">Get in Touch</Typography>
        <Typography variant="p" className="text-muted-foreground">
          Fill out the form below and I'll respond as soon as possible.
        </Typography>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="John Doe"
            {...register("name")}
            error={errors.name?.message}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            error={errors.email?.message}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <Input
            type="tel"
            placeholder="+1 (555) 123-4567"
            {...register("phone")}
            error={errors.phone?.message}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Company Name</label>
          <Input
            placeholder="Your Company"
            {...register("company")}
            error={errors.company?.message}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Project Type <span className="text-red-500">*</span>
          </label>
          <Select
            value={projectType || undefined}
            onValueChange={(value) =>
              setValue("projectType", value, { shouldValidate: true })
            }
          >
            <SelectTrigger error={errors.projectType?.message}>
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wordpress">WordPress Development</SelectItem>
              <SelectItem value="nextjs">
                Next.js / React Application
              </SelectItem>
              <SelectItem value="ecommerce">E-commerce Solution</SelectItem>
              <SelectItem value="redesign">Website Redesign</SelectItem>
              <SelectItem value="maintenance">Maintenance & Support</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Budget Range</label>
          <Select
            value={budget || undefined}
            onValueChange={(value) => setValue("budget", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-5k">Under $5,000</SelectItem>
              <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
              <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
              <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
              <SelectItem value="50k-plus">$50,000+</SelectItem>
              <SelectItem value="discuss">Prefer to discuss</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Timeline</label>
        <Select
          value={timeline || undefined}
          onValueChange={(value) => setValue("timeline", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select timeline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asap">ASAP</SelectItem>
            <SelectItem value="1-month">Within 1 month</SelectItem>
            <SelectItem value="2-3-months">2-3 months</SelectItem>
            <SelectItem value="3-6-months">3-6 months</SelectItem>
            <SelectItem value="flexible">Flexible</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium mb-2">
          Additional Services
        </label>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-3">
            <Checkbox
              id="domainHosting"
              checked={domainHosting}
              onCheckedChange={(checked) =>
                setValue("domainHosting", checked === true)
              }
            />
            <label
              htmlFor="domainHosting"
              className="text-sm font-medium cursor-pointer"
            >
              Domain & Hosting Setup
            </label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              id="graphicWork"
              checked={graphicWork}
              onCheckedChange={(checked) =>
                setValue("graphicWork", checked === true)
              }
            />
            <label
              htmlFor="graphicWork"
              className="text-sm font-medium cursor-pointer"
            >
              Graphic Work (Logo, Branding)
            </label>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Project Details <span className="text-red-500">*</span>
        </label>
        <Textarea
          placeholder="Tell me about your project, goals, and any specific requirements..."
          rows={6}
          {...register("message")}
          error={errors.message?.message}
        />
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/50 bg-red-500/10 p-4">
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
    </form>
  );
}
