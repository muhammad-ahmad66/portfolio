'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-16 h-8 rounded-full bg-muted/50" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="group relative w-16 h-8 rounded-full bg-muted/50 border border-border transition-all duration-300 hover:border-foreground/20"
      aria-label="Toggle theme"
    >
      {/* Sliding Circle */}
      <div
        className={`absolute top-1 w-6 h-6 rounded-full bg-background border border-border shadow-sm transition-all duration-300 flex items-center justify-center ${
          theme === 'dark' ? 'left-9' : 'left-1'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="w-3.5 h-3.5 text-foreground" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-foreground" />
        )}
      </div>
    </button>
  );
}
