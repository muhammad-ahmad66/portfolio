'use client';

import * as React from 'react';

interface IconBoxProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  variant?: 'gradient' | 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export function IconBox({
  icon,
  title,
  description,
  variant = 'gradient',
  size = 'md',
  className = '',
  onClick,
}: IconBoxProps) {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const variants = {
    gradient: 'bg-gradient-to-br from-primary-500 to-secondary-500',
    solid: 'bg-primary-500',
    outline: 'border-2 border-primary-500',
  };

  return (
    <div className={`space-y-3 ${className}`} onClick={onClick}>
      <div
        className={`${sizes[size]} rounded-xl bg-primary-500/10 flex items-center justify-center transition-transform duration-300 hover:scale-110`}
      >
        {icon ? (
          <div className="text-primary-500">{icon}</div>
        ) : (
          <div className={`w-6 h-6 rounded-lg ${variants[variant]}`} />
        )}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}
