'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { IconBox } from '@/components/ui/icon-box';

interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  onClick,
  className = '',
}: ServiceCardProps) {
  const content = (
    <div
      className={`group relative p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary-500/30 hover:shadow-lg transition-all duration-300 ${
        onClick ? 'cursor-pointer' : 'cursor-pointer'
      } ${className}`}
      onClick={onClick}
    >
      {/* Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative">
        <IconBox
          icon={icon}
          title={title}
          description={description}
          variant="gradient"
          size="md"
        />
      </div>

      {/* Arrow Icon */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowRight className="w-4 h-4 text-primary-500" />
      </div>
    </div>
  );

  // If onClick is provided, return as clickable div, otherwise wrap in Link
  if (onClick) {
    return content;
  }

  return (
    <Link href="/contact" className="block">
      {content}
    </Link>
  );
}
