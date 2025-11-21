// src/types/contact.ts

import { ReactNode } from 'react';

export interface ContactMethod {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  color: string;
  bgColor: string;
  description?: string;
}

export interface ContactWindowTab {
  id: 'form' | 'quick' | 'info';
  label: string;
  icon: ReactNode;
}
