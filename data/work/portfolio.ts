export type PortfolioCategory =
  | "E-commerce"
  | "Tech"
  | "Healthcare"
  | "Hospitality"
  | "Lifestyle"
  | "Education"
  | "Real Estate"
  | "Travel"
  | "Restaurant"
  | "Wellness"
  | "Finance"
  | "Non-profit"
  | "Marketing"
  | "Construction"
  | "SaaS"
  | "AI"
  | "Art"
  | "Crafts"
  | "Memorial"
  | "LMS"
  | "Luxury"
  | "Property Investment"
  | "Interior Design"
  | "Hotel"
  | "Medical Tourism"
  | "Beauty"
  | "Training"
  | "Business"
  | "Trading"
  | "Defense"
  | "Consulting"
  | "Investment"
  | "Sustainable"
  | "Green Business"
  | "Climate"
  | "Crypto"
  | "Sustainable Energy"
  | "Legal Services"
  | "Home Services"
  | "Agriculture"
  | "Sustainable Water"
  | "No-Code"
  | "Energy Efficiency"
  | "Landing Page"
  | "Web3"
  | "Pharmacy Services"
  | "Medical"
  | "Automotive"
  | "Car Rental"
  | "Community Support"
  | "Nature";

export interface PortfolioItem {
  url: string;
  categories: PortfolioCategory[];
  inProgress: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    url: "https://beautyboost24.de/",
    categories: ["Wellness", "Medical Tourism", "Beauty", "Healthcare"],
    inProgress: false,
  },
  {
    url: "https://www.neuronhs.com/",
    categories: ["Healthcare", "Wellness"],
    inProgress: false,
  },
  {
    url: "https://themarjoriejean.com/",
    categories: ["Art", "Memorial", "Crafts"],
    inProgress: false,
  },
  {
    url: "https://elysian-properties.com/",
    categories: ["Real Estate", "Luxury", "Property Investment"],
    inProgress: false,
  },
  {
    url: "https://www.mondhygienistinede.nl/",
    categories: ["Healthcare", "Wellness"],
    inProgress: false,
  },
  {
    url: "https://quantum-heals.com/",
    categories: ["Wellness", "Healthcare"],
    inProgress: false,
  },
  {
    url: "https://www.mitsubishicomfort.com/why-electrify",
    categories: ["Tech", "Energy Efficiency", "Home Services"],
    inProgress: false,
  },

  {
    url: "https://himalu.com/",
    categories: ["E-commerce", "Wellness", "Healthcare"],
    inProgress: false,
  },
  {
    url: "https://easilytrip.com/",
    categories: ["E-commerce", "Travel", "Hospitality", "Restaurant"],
    inProgress: false,
  },
  {
    url: "https://hogarths.co.uk/",
    categories: ["Hospitality", "Hotel", "Restaurant"],
    inProgress: false,
  },

  {
    url: "https://pcd-dev.31g.co.uk/",
    categories: ["Healthcare", "Pharmacy Services", "Medical"],
    inProgress: true,
  },

  {
    url: "https://lonestarloaners.com/",

    categories: ["Automotive", "Car Rental"],
    inProgress: false,
  },
  {
    url: "https://localhelpmyway.simplyconnect.uk/",
    categories: ["Community Support", "Healthcare"],
    inProgress: false,
  },

  {
    url: "https://www.myspecialistappinion.com/",
    categories: ["Healthcare", "Medical"],
    inProgress: false,
  },

  {
    url: "https://setupmybusinessnow.com/",
    categories: ["Business", "Tech", "Training"],
    inProgress: false,
  },
  {
    url: "https://udr-welcome.com/",
    categories: ["Real Estate", "Investment"],
    inProgress: false,
  },
  {
    url: "https://sanitbud-instalacje.pl/",
    categories: ["Construction", "Home Services", "Energy Efficiency"],
    inProgress: false,
  },
  {
    url: "https://northroid.is/",
    categories: ["E-commerce", "Wellness", "Healthcare"],
    inProgress: false,
  },
  {
    url: "https://bmsmktg.com/",
    categories: ["Marketing", "Tech"],
    inProgress: false,
  },
  {
    url: "https://bci.scratchcom.com/",
    categories: ["Construction", "Interior Design", "Real Estate"],
    inProgress: false,
  },
  {
    url: "https://www.master-solutions.nl/",
    categories: ["Tech", "SaaS", "AI"],
    inProgress: false,
  },
  {
    url: "https://fullertonfx.com/semi-ai-tool/",
    categories: ["Tech", "Finance"],
    inProgress: false,
  },
  {
    url: "https://imaginatio.ai/",
    categories: ["AI", "Tech", "Consulting"],
    inProgress: false,
  },
  {
    url: "https://www.playfulgrowth.com/playful-growth-home-new/",
    categories: ["Tech", "Marketing"],
    inProgress: false,
  },
  {
    url: "https://www.playfulgrowth.com/home-new/",
    categories: ["Tech", "Marketing"],
    inProgress: false,
  },
  {
    url: "https://assets-mc.com/",
    categories: ["Tech"],
    inProgress: false,
  },
  {
    url: "https://ovasolutions.com/",
    categories: ["Tech", "Healthcare"],
    inProgress: false,
  },
  {
    url: "https://ecogivers.com/",
    categories: ["Sustainable", "Green Business", "Climate"],
    inProgress: false,
  },

  {
    url: "https://isodirect.ca/",
    categories: ["Sustainable Energy", "Construction", "Home Services"],
    inProgress: false,
  },
  {
    url: "https://servicespurexpert.com/",
    categories: ["Tech"],
    inProgress: false,
  },
  {
    url: "https://isotechlasolution.com/",
    categories: ["Tech"],
    inProgress: false,
  },
  {
    url: "https://fastconcepts.fr/",
    categories: ["Tech"],
    inProgress: false,
  },

  {
    url: "https://fibresalessolutions.com/",
    categories: ["Tech"],
    inProgress: false,
  },

  {
    url: "https://dnbuild.net/",
    categories: ["Tech", "Construction"],
    inProgress: false,
  },

  {
    url: "https://bulldog2025stg.wpenginepowered.com/",
    categories: ["Tech"],
    inProgress: false,
  },
  {
    url: "https://lifeline-foundation.org/",
    categories: ["Non-profit", "Education"],
    inProgress: false,
  },
  {
    url: "https://alleluiaalumni.org/",
    categories: ["Tech", "Non-profit", "Education"],
    inProgress: false,
  },

  {
    url: "https://thealternativeway.com/",
    categories: ["Tech"],
    inProgress: false,
  },

  // Healthcare
  {
    url: "https://kamaramd.com/",
    categories: ["Healthcare"],
    inProgress: false,
  },

  {
    url: "https://treehousebyron.com.au/",
    categories: ["Hospitality", "Travel"],
    inProgress: false,
  },
  {
    url: "https://nautica-riviera.si/",
    categories: ["Hospitality", "Travel"],
    inProgress: false,
  },
  {
    url: "https://hapvra.nz/",
    categories: ["Hospitality"],
    inProgress: false,
  },

  {
    url: "https://matootravel.com/",
    categories: ["E-commerce", "Hotel", "Travel"],
    inProgress: false,
  },
  {
    url: "https://www.pfeffer-starzach.de/",
    categories: ["Hospitality"],
    inProgress: false,
  },
  {
    url: "https://warringtoninstalls.co.uk/home-new/",
    categories: ["Tech", "Construction"],
    inProgress: false,
  },
  {
    url: "https://www.desserts2night.co.uk/",
    categories: ["E-commerce", "Restaurant"],
    inProgress: false,
  },
  {
    url: "https://propfirmspass.com/",
    categories: ["Finance", "Trading", "Tech"],
    inProgress: false,
  },
  {
    url: "https://foreverlights.co/",
    categories: ["E-commerce", "Lifestyle"],
    inProgress: false,
  },
  // Restaurant
  {
    url: "https://darsalamrestaurant.com/",
    categories: ["Restaurant", "Hospitality"],
    inProgress: false,
  },

  {
    url: "https://iaformaplus.fr/",
    categories: ["Education", "AI", "Training"],
    inProgress: false,
  },
  {
    url: "https://iaformaplus.com/",
    categories: ["Lifestyle"],
    inProgress: true,
  },
  {
    url: "https://poussonenterprises.com/",
    categories: ["Defense", "Consulting"],
    inProgress: false,
  },

  // Education
  {
    url: "https://iiflfrenchschool.com/",
    categories: ["Education", "LMS", "E-commerce"],
    inProgress: false,
  },
  {
    url: "https://joinmomentum.community/",
    categories: ["Education", "Tech"],
    inProgress: false,
  },
  {
    url: "https://volunteeringindiahimalayarosekanda.org/",
    categories: ["Non-profit", "Education"],
    inProgress: false,
  },

  // Wellness
  {
    url: "https://softwaterexperts.com/",
    categories: ["Home Services", "Healthcare", "Lifestyle"],
    inProgress: false,
  },
  {
    url: "https://maxgrow-latam.com/",
    categories: ["Tech", "Sustainable Water", "Agriculture"],
    inProgress: false,
  },
  {
    url: "https://mightypuraimarumountain.com/",
    categories: ["Tech", "Crypto", "Web3", "Landing Page"],
    inProgress: false,
  },
];

// Category color mapping
export const categoryColors: Record<PortfolioCategory, string> = {
  "E-commerce":
    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  Tech: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  Healthcare: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  Hospitality:
    "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  Lifestyle:
    "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
  Education:
    "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  "Real Estate":
    "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  Travel: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  Restaurant:
    "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  Wellness:
    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Finance:
    "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  "Non-profit":
    "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
  Marketing:
    "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  Construction:
    "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
  SaaS: "bg-purple-300/10 text-purple-700 border-purple-300/20",
  AI: "bg-indigo-300/10 text-indigo-700 border-indigo-300/20",
  Art: "bg-pink-300/10 text-pink-700 border-pink-300/20",
  Crafts: "bg-amber-300/10 text-amber-700 border-amber-300/20",
  Memorial: "bg-gray-300/10 text-gray-700 border-gray-300/20",
  LMS: "bg-green-300/10 text-green-700 border-green-300/20",
  Luxury: "bg-yellow-300/10 text-yellow-700 border-yellow-300/20",
  "Property Investment":
    "bg-emerald-300/10 text-emerald-700 border-emerald-300/20",
  "Interior Design": "bg-purple-200/10 text-purple-700 border-purple-200/20",
  Hotel: "bg-orange-200/10 text-orange-700 border-orange-200/20",
  "Medical Tourism": "bg-red-200/10 text-red-700 border-red-200/20",
  Beauty: "bg-pink-200/10 text-pink-700 border-pink-200/20",
  Training: "bg-green-200/10 text-green-700 border-green-200/20",
  Trading: "bg-indigo-200/10 text-indigo-700 border-indigo-200/20",
  Defense: "bg-gray-400/10 text-gray-800 border-gray-400/20",
  Consulting: "bg-blue-200/10 text-blue-700 border-blue-200/20",
  Investment: "bg-yellow-200/10 text-yellow-700 border-yellow-200/20",
  Sustainable: "bg-emerald-200/10 text-emerald-700 border-emerald-200/20",
  "Green Business": "bg-lime-200/10 text-lime-700 border-lime-200/20",
  Climate: "bg-cyan-200/10 text-cyan-700 border-cyan-200/20",
  Crypto: "bg-purple-400/10 text-purple-900 border-purple-400/20",
  "Sustainable Energy": "bg-green-400/10 text-green-900 border-green-400/20",
  "Legal Services": "bg-gray-200/10 text-gray-800 border-gray-200/20",
  "Home Services": "bg-orange-300/10 text-orange-800 border-orange-300/20",
  Agriculture: "bg-lime-300/10 text-lime-800 border-lime-300/20",
  "Sustainable Water": "bg-cyan-300/10 text-cyan-800 border-cyan-300/20",
  "No-Code": "bg-indigo-400/10 text-indigo-900 border-indigo-400/20",
  "Energy Efficiency":
    "bg-emerald-400/10 text-emerald-900 border-emerald-400/20",
  "Landing Page": "bg-pink-400/10 text-pink-900 border-pink-400/20",
  Web3: "bg-purple-500/10 text-purple-900 border-purple-500/20",
  Nature: "bg-green-500/10 text-green-900 border-green-500/20",

  // MISSING KEYS ADDED:
  Business: "bg-gray-500/10 text-gray-700 border-gray-500/20",
  "Pharmacy Services": "bg-red-300/10 text-red-700 border-red-300/20",
  Medical: "bg-red-400/10 text-red-900 border-red-400/20",
  Automotive: "bg-blue-300/10 text-blue-700 border-blue-300/20",
  "Car Rental": "bg-blue-400/10 text-blue-900 border-blue-400/20",
  "Community Support": "bg-teal-300/10 text-teal-700 border-teal-300/20",
};
