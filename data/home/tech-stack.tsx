import {
  SiWordpress,
  SiWoocommerce,
  SiElementor,
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSass,
  SiGithub,
} from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { SiPostman } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

export interface TechItem {
  label: string;
  icon: React.ReactNode;
}

export const wordpressTech: TechItem[] = [
  {
    label: 'WordPress',
    icon: <SiWordpress className="w-5 h-5" />,
  },
  {
    label: 'WooCommerce',
    icon: <SiWoocommerce className="w-5 h-5" />,
  },
  {
    label: 'Elementor',
    icon: <SiElementor className="w-5 h-5" />,
  },
];

export const devTech: TechItem[] = [
  { label: 'React', icon: <SiReact className="w-5 h-5" /> },
  { label: 'Redux', icon: <SiRedux className="w-5 h-5" /> },
  { label: 'Next.js', icon: <SiNextdotjs className="w-5 h-5" /> },
  { label: 'TypeScript', icon: <SiTypescript className="w-5 h-5" /> },
  { label: 'SCSS', icon: <SiSass className="w-5 h-5" /> },
  { label: 'Tailwind', icon: <SiTailwindcss className="w-5 h-5" /> },
  { label: 'MUI', icon: <SiMui className="w-5 h-5" /> },
  { label: 'Node.js', icon: <SiNodedotjs className="w-5 h-5" /> },
  { label: 'Express', icon: <SiExpress className="w-5 h-5" /> },
  { label: 'MongoDB', icon: <SiMongodb className="w-5 h-5" /> },
  { label: 'Git', icon: <FaGitAlt className="w-5 h-5" /> },
  { label: 'GitHub', icon: <SiGithub className="w-5 h-5" /> },
  { label: 'Postman', icon: <SiPostman className="w-5 h-5" /> },
  { label: 'VS Code', icon: <VscCode className="w-5 h-5" /> },
];
