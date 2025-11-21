'use client';

import { useContactWindowContext } from '@/app/contexts/contact-window-context';
import { ContactWindow } from './contact-window';
import { MessageCircle } from 'lucide-react';

export function ContactWindowButton() {
  const { isOpen, openWindow } = useContactWindowContext();

  return (
    <>
      <button
        onClick={() => openWindow('quick')}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary-500/90 backdrop-blur-sm border border-primary-400/20 shadow-lg hover:shadow-xl hover:bg-primary-600 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-background animate-pulse" />
      </button>

      {isOpen && <ContactWindow />}
    </>
  );
}
