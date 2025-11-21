// src/contexts/contact-window-context.tsx
'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useContactWindow } from '../hooks/use-contact-window';

type ContactTab = 'form' | 'quick' | 'info';

interface ContactWindowContextType {
  isOpen: boolean;
  activeTab: ContactTab;
  isMinimized: boolean;
  openWindow: (tab?: ContactTab) => void;
  closeWindow: () => void;
  toggleWindow: () => void;
  minimizeWindow: () => void;
  restoreWindow: () => void;
  changeTab: (tab: ContactTab) => void;
}

const ContactWindowContext = createContext<
  ContactWindowContextType | undefined
>(undefined);

export function ContactWindowProvider({ children }: { children: ReactNode }) {
  const contactWindow = useContactWindow();

  return (
    <ContactWindowContext.Provider value={contactWindow}>
      {children}
    </ContactWindowContext.Provider>
  );
}

export function useContactWindowContext() {
  const context = useContext(ContactWindowContext);
  if (!context) {
    throw new Error(
      'useContactWindowContext must be used within ContactWindowProvider'
    );
  }
  return context;
}
