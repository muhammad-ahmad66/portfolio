export type PortfolioCategory =
  | 'E-commerce'
  | 'Tech'
  | 'Healthcare'
  | 'Hospitality'
  | 'Lifestyle'
  | 'Education'
  | 'Real Estate'
  | 'Travel'
  | 'Restaurant'
  | 'Wellness'
  | 'Finance'
  | 'Non-profit'
  | 'Marketing'
  | 'Construction';

export interface PortfolioItem {
  url: string;
  categories: PortfolioCategory[];
  inProgress: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  // E-commerce
  {
    url: 'https://www.desserts2night.co.uk/',
    categories: ['E-commerce', 'Restaurant'],
    inProgress: false,
  },
  {
    url: 'https://propfirmspass.com/',
    categories: ['E-commerce', 'Finance'],
    inProgress: false,
  },
  {
    url: 'https://foreverlights.co/',
    categories: ['E-commerce', 'Lifestyle'],
    inProgress: false,
  },

  // Tech
  {
    url: 'https://fullertonfx.com/semi-ai-tool/',
    categories: ['Tech', 'Finance'],
    inProgress: false,
  },
  {
    url: 'https://imaginatio.ai/',
    categories: ['Tech'],
    inProgress: false,
  },
  {
    url: 'https://www.playfulgrowth.com/playful-growth-home-new/',
    categories: ['Tech', 'Marketing'],
    inProgress: false,
  },
  {
    url: 'https://www.playfulgrowth.com/home-new/',
    categories: ['Tech', 'Marketing'],
    inProgress: false,
  },
  {
    url: 'https://assets-mc.com/',
    categories: ['Tech'],
    inProgress: false,
  },
  {
    url: 'https://ovasolutions.com/',
    categories: ['Tech'],
    inProgress: false,
  },
  {
    url: 'https://www.master-solutions.nl/',
    categories: ['Tech'],
    inProgress: false,
  },
  {
    url: 'https://isodirect.ca/',
    categories: ['Tech'],
    inProgress: false,
  },
  {
    url: 'https://servicespurexpert.com/',
    categories: ['Tech'],
    inProgress: false,
  },
  {
    url: 'https://isotechlasolution.com/',
    categories: ['Tech'],
    inProgress: false,
  },
  {
    url: 'https://fastconcepts.fr/',
    categories: ['Tech'],
    inProgress: false,
  },
  {
    url: 'https://northroid.is/',
    categories: ['Tech'],
    inProgress: false,
  },
  {
    url: 'https://fibresalessolutions.com/',
    categories: ['Tech'],
    inProgress: false,
  },
  {
    url: 'https://bci.scratchcom.com/',
    categories: ['Tech'],
    inProgress: false,
  },
  {
    url: 'https://dnbuild.net/',
    categories: ['Tech', 'Construction'],
    inProgress: false,
  },
  {
    url: 'https://sanitbud-instalacje.pl/',
    categories: ['Tech', 'Construction'],
    inProgress: false,
  },
  {
    url: 'https://bmsmktg.com/',
    categories: ['Tech', 'Marketing'],
    inProgress: false,
  },
  {
    url: 'https://bulldog2025stg.wpenginepowered.com/',
    categories: ['Tech'],
    inProgress: false,
  },
  {
    url: 'https://lifeline-foundation.org/',
    categories: ['Tech', 'Non-profit'],
    inProgress: false,
  },
  {
    url: 'https://alleluiaalumni.org/',
    categories: ['Tech', 'Non-profit', 'Education'],
    inProgress: false,
  },
  {
    url: 'https://udr-welcome.com/',
    categories: ['Tech'],
    inProgress: false,
  },
  {
    url: 'https://thealternativeway.com/',
    categories: ['Tech'],
    inProgress: false,
  },

  // Healthcare
  {
    url: 'https://kamaramd.com/',
    categories: ['Healthcare'],
    inProgress: false,
  },
  {
    url: 'https://www.neuronhs.com/',
    categories: ['Healthcare'],
    inProgress: true,
  },
  {
    url: 'https://www.mondhygienistinede.nl/',
    categories: ['Healthcare'],
    inProgress: false,
  },
  {
    url: 'https://quantum-heals.com/',
    categories: ['Healthcare', 'Wellness'],
    inProgress: false,
  },
  {
    url: 'https://www.mitsubishicomfort.com/why-electrify',
    categories: ['Tech', 'Healthcare'],
    inProgress: false,
  },

  // Hospitality
  {
    url: 'https://himalu.com/',
    categories: ['Hospitality', 'Travel'],
    inProgress: false,
  },
  {
    url: 'https://easilytrip.com/',
    categories: ['Hospitality', 'Travel'],
    inProgress: false,
  },
  {
    url: 'https://hogarths.co.uk/',
    categories: ['Hospitality'],
    inProgress: false,
  },
  {
    url: 'https://treehousebyron.com.au/',
    categories: ['Hospitality', 'Travel'],
    inProgress: false,
  },
  {
    url: 'https://nautica-riviera.si/',
    categories: ['Hospitality', 'Travel'],
    inProgress: false,
  },
  {
    url: 'https://hapvra.nz/',
    categories: ['Hospitality'],
    inProgress: false,
  },
  {
    url: 'https://themarjoriejean.com/',
    categories: ['Hospitality'],
    inProgress: false,
  },
  {
    url: 'https://elysian-properties.com/',
    categories: ['Hospitality', 'Real Estate'],
    inProgress: false,
  },
  {
    url: 'https://matootravel.com/',
    categories: ['Hospitality', 'Travel'],
    inProgress: false,
  },
  {
    url: 'https://www.pfeffer-starzach.de/',
    categories: ['Hospitality'],
    inProgress: false,
  },
  {
    url: 'https://warringtoninstalls.co.uk/home-new/',
    categories: ['Tech', 'Construction'],
    inProgress: false,
  },

  // Restaurant
  {
    url: 'https://darsalamrestaurant.com/',
    categories: ['Restaurant', 'Hospitality'],
    inProgress: false,
  },

  // Lifestyle
  {
    url: 'https://beautyboost24.de/',
    categories: ['Lifestyle', 'E-commerce'],
    inProgress: false,
  },
  {
    url: 'https://iaformaplus.fr/',
    categories: ['Lifestyle'],
    inProgress: false,
  },
  {
    url: 'https://iaformaplus.com/',
    categories: ['Lifestyle'],
    inProgress: true,
  },
  {
    url: 'https://poussonenterprises.com/',
    categories: ['Lifestyle'],
    inProgress: false,
  },

  // Education
  {
    url: 'https://iiflfrenchschool.com/',
    categories: ['Education'],
    inProgress: false,
  },
  {
    url: 'https://joinmomentum.community/',
    categories: ['Education', 'Tech'],
    inProgress: false,
  },
  {
    url: 'https://volunteeringindiahimalayarosekanda.org/',
    categories: ['Education', 'Non-profit', 'Travel'],
    inProgress: false,
  },

  // Wellness
  {
    url: 'https://softwaterexperts.com/',
    categories: ['Wellness'],
    inProgress: false,
  },
  {
    url: 'https://maxgrow-latam.com/',
    categories: ['Tech', 'Marketing'],
    inProgress: false,
  },
  {
    url: 'https://mightypuraimarumountain.com/',
    categories: ['Travel', 'Hospitality'],
    inProgress: false,
  },
];

// Category color mapping
export const categoryColors: Record<PortfolioCategory, string> = {
  'E-commerce': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  'Tech': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  'Healthcare': 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
  'Hospitality': 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
  'Lifestyle': 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20',
  'Education': 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  'Real Estate': 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20',
  'Travel': 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
  'Restaurant': 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  'Wellness': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  'Finance': 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
  'Non-profit': 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
  'Marketing': 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
  'Construction': 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20',
};



