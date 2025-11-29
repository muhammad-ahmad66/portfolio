import { Typography } from '@/components/ui/typography';
import { BadgeButton } from '@/components/ui/badge-button';
import { wordpressTech, devTech } from '@/data/home/tech-stack';

interface TechStackProps {
  isVisible: boolean;
}

export function TechStack({ isVisible }: TechStackProps) {
  return (
    <div
      className={`mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-border/50 space-y-6 sm:space-y-8 transition-all duration-700 delay-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="space-y-4">
        <Typography variant="small" className="text-center">
          WordPress Expertise
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {wordpressTech.map((tech) => (
            <BadgeButton
              key={tech.label}
              icon={tech.icon}
              label={tech.label}
              variant="card"
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="small" className="text-center">
          Modern Tech and Tools
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {devTech.map((tech) => (
            <BadgeButton
              key={tech.label}
              icon={tech.icon}
              label={tech.label}
              variant="minimal"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
