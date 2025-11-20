import { PortfolioCategory } from './portfolio';

export interface FeaturedProject {
  id: string;
  name: string;
  liveUrl: string;
  imageUrl: string;
  imageAlt: string;
  categories: PortfolioCategory[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: '1',
    name: 'Himalu - Organic Foods & Shilajit',
    liveUrl: 'https://himalu.com/',
    imageUrl: '/images/projects/wordpress-development-project1.webp',
    imageAlt: 'Himalu organic foods and Himalayan Shilajit e-commerce website',
    categories: ['E-commerce', 'Wellness'],
  },
  {
    id: '2',
    name: 'Himalu - Organic Foods & Shilajit',
    liveUrl: 'https://himalu.com/',
    imageUrl: '/images/projects/wordpress-development-project2.webp',
    imageAlt: 'Himalu organic foods and Himalayan Shilajit e-commerce website',
    categories: ['E-commerce', 'Wellness'],
  },
  {
    id: '3',
    name: 'Himalu - Organic Foods & Shilajit',
    liveUrl: 'https://himalu.com/',
    imageUrl: '/images/projects/wordpress-development-project3.webp',
    imageAlt: 'Himalu organic foods and Himalayan Shilajit e-commerce website',
    categories: ['E-commerce', 'Wellness'],
  },
  {
    id: '4',
    name: 'Himalu - Organic Foods & Shilajit',
    liveUrl: 'https://himalu.com/',
    imageUrl: '/images/projects/wordpress-development-project4.webp',
    imageAlt: 'Himalu organic foods and Himalayan Shilajit e-commerce website',
    categories: ['E-commerce', 'Wellness'],
  },
  {
    id: '5',
    name: 'Himalu - Organic Foods & Shilajit',
    liveUrl: 'https://himalu.com/',
    imageUrl: '/images/projects/wordpress-development-project5.webp',
    imageAlt: 'Himalu organic foods and Himalayan Shilajit e-commerce website',
    categories: ['E-commerce', 'Wellness'],
  },
  {
    id: '6',
    name: 'Himalu - Organic Foods & Shilajit',
    liveUrl: 'https://himalu.com/',
    imageUrl: '/images/projects/wordpress-development-project6.webp',
    imageAlt: 'Himalu organic foods and Himalayan Shilajit e-commerce website',
    categories: ['E-commerce', 'Wellness'],
  },
  {
    id: '7',
    name: 'Himalukhan - Organic Foods & Shilajit',
    liveUrl: 'https://himalu.com/',
    imageUrl: '/images/projects/wordpress-development-project6.webp',
    imageAlt: 'Himalu organic foods and Himalayan Shilajit e-commerce website',
    categories: ['E-commerce', 'Wellness'],
  },
];
