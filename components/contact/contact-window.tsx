// src/components/contact/contact-window.tsx
'use client';

import { QuickContactTab } from './quick-contact-tab';
import { ContactFormTab } from './contact-form-tab';
import { ContactInfoTab } from './contact-info-tab';
import {
  X,
  Minimize2,
  Maximize2,
  Zap,
  Mail,
  Info,
  ExternalLink,
} from 'lucide-react';
import { useState } from 'react';
import { useContactWindowContext } from '@/app/contexts/contact-window-context';

export function ContactWindow() {
  const { activeTab, changeTab, closeWindow, minimizeWindow, isMinimized } =
    useContactWindowContext();
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (isMinimized) {
    return null;
  }

  const tabs = [
    { id: 'quick' as const, label: 'Quick', icon: Zap },
    { id: 'form' as const, label: 'Message', icon: Mail },
    { id: 'info' as const, label: 'Info', icon: Info },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        onClick={closeWindow}
      />

      <div
        className={`fixed z-50 bg-background border border-border shadow-2xl rounded-2xl overflow-hidden transition-all duration-300 ${
          isFullscreen
            ? 'inset-4'
            : 'top-1/2 -translate-y-1/2 right-4 w-[440px] max-w-[calc(100vw-2rem)]'
        }`}
      >
        {/* Header */}
        <div className="relative border-b border-border bg-gradient-to-r from-primary-500/10 via-background to-secondary-500/10 p-4">
          {/* Window Controls */}
          <div className="absolute top-3 right-3 flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-muted transition-colors flex items-center justify-center"
              title={isFullscreen ? 'Restore' : 'Maximize'}
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={minimizeWindow}
              className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-muted transition-colors flex items-center justify-center"
              title="Minimize"
            >
              <Minimize2 className="w-4 h-4" />
            </button>

            <button
              onClick={closeWindow}
              className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Header Content */}
          <div className="pr-28">
            <h3 className="text-lg font-bold">Let's Connect</h3>
            <p className="text-sm text-muted-foreground">
              Choose how you'd like to reach out
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border bg-muted/30">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => changeTab(tab.id)}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-all relative ${
                  activeTab === tab.id
                    ? 'text-primary-500 bg-background'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </div>

                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div
          className="overflow-y-auto"
          style={{
            maxHeight: isFullscreen ? 'calc(100vh - 10rem)' : '70vh',
          }}
        >
          {activeTab === 'quick' && <QuickContactTab />}
          {activeTab === 'form' && <ContactFormTab />}
          {activeTab === 'info' && <ContactInfoTab />}
        </div>

        {/* Footer */}
        <div className="border-t border-border bg-muted/30 p-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Powered by Next.js</span>
            <a
              href="/contact"
              className="flex items-center gap-1 hover:text-primary-500 transition-colors"
            >
              <span>Full Contact Page</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
