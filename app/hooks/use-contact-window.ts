// src/hooks/use-contact-window.ts
'use client';

import { useState, useCallback, useEffect } from 'react';

type ContactTab = 'form' | 'quick' | 'info';

export function useContactWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<ContactTab>('quick');
  const [isMinimized, setIsMinimized] = useState(false);

  // Load state from localStorage
  useEffect(() => {
    const savedTab = localStorage.getItem('contact_active_tab');
    if (savedTab) setActiveTab(savedTab as ContactTab);
  }, []);

  // Save tab to localStorage
  useEffect(() => {
    localStorage.setItem('contact_active_tab', activeTab);
  }, [activeTab]);

  const openWindow = useCallback((tab?: ContactTab) => {
    setIsOpen(true);
    setIsMinimized(false);
    if (tab) setActiveTab(tab);
  }, []);

  const closeWindow = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleWindow = useCallback(() => {
    setIsOpen((prev) => !prev);
    if (isMinimized) setIsMinimized(false);
  }, [isMinimized]);

  const minimizeWindow = useCallback(() => {
    setIsMinimized(true);
  }, []);

  const restoreWindow = useCallback(() => {
    setIsMinimized(false);
    setIsOpen(true);
  }, []);

  const changeTab = useCallback((tab: ContactTab) => {
    setActiveTab(tab);
  }, []);

  return {
    isOpen,
    activeTab,
    isMinimized,
    openWindow,
    closeWindow,
    toggleWindow,
    minimizeWindow,
    restoreWindow,
    changeTab,
  };
}
