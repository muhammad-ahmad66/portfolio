// src/app/(marketing)/layout.tsx
import { ContactWindowButton } from '@/components/contact/contact-window-button';
import { ReactNode } from 'react';

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return <>{children}</>;
}
