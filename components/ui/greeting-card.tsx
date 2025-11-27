import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export function GreetingCard({
  href = '/contact',
  title = 'Always in touch',
  message = 'Async updates twice a week',
  icon = MessageCircle,
  showAbsolute = true,
  position = 'top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6',
  rounded = 'rounded-2xl sm:rounded-3xl',
  containerClass = '',
  avatarText = 'Hi',
  avatarSpin = true,
}) {
  const Icon = icon;

  return (
    <Link
      href={href}
      className={[
        showAbsolute ? `absolute ${position}` : '',
        `${rounded} border border-border/70 bg-background/80 dark:bg-background/70 backdrop-blur-xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 hover:border-primary/50 hover:bg-background/90 transition-all duration-300 group shadow-lg`,
        containerClass,
      ].join(' ')}
    >
      <div className="relative flex-shrink-0">
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-primary flex items-center justify-center"
          style={avatarSpin ? { animation: 'spin 6s linear infinite' } : {}}
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
            {avatarText}
          </div>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-0.5 sm:mb-1">
          {title}
        </p>
        <p className="text-xs sm:text-sm text-foreground line-clamp-2">
          {message}
        </p>
      </div>

      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </Link>
  );
}
