import Link from 'next/link';
import Image from 'next/image';
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
  avatarImage = '',
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
      <div className="relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/20 to-secondary-400/20 blur-md" />

        {/* Dashed rotating ring — matches logo dot style */}
        <div
          className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/50"
          style={avatarSpin ? { animation: "rotate-slow 8s linear infinite" } : {}}
        />

        {/* Image with gradient background, static */}
        <div
          className="absolute inset-[5px] rounded-full overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #818cf8 50%, #a855f7 100%)",
          }}
        >
          {avatarImage ? (
            <Image
              src={avatarImage}
              alt="Muhammad Ahmad"
              width={56}
              height={56}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
              {avatarText}
            </div>
          )}
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
