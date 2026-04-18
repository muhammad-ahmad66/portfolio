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
  | "portfolio"
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
    url: "https://prescribingcaredirect.co.uk/",
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

const TAG = "bg-primary-500/10 text-primary-600 dark:text-primary-400 border-primary-500/20";

// All categories share one consistent brand color
export const categoryColors: Record<PortfolioCategory, string> = {
  "E-commerce": TAG, Tech: TAG, Healthcare: TAG, Hospitality: TAG,
  Lifestyle: TAG, Education: TAG, "Real Estate": TAG, Travel: TAG,
  Restaurant: TAG, Wellness: TAG, Finance: TAG, "Non-profit": TAG,
  Marketing: TAG, Construction: TAG, SaaS: TAG, AI: TAG, Art: TAG,
  Crafts: TAG, Memorial: TAG, LMS: TAG, Luxury: TAG,
  "Property Investment": TAG, "Interior Design": TAG, Hotel: TAG,
  "Medical Tourism": TAG, Beauty: TAG, Training: TAG, Trading: TAG,
  Defense: TAG, Consulting: TAG, Investment: TAG, Sustainable: TAG,
  "Green Business": TAG, Climate: TAG, Crypto: TAG,
  "Sustainable Energy": TAG, "Legal Services": TAG, "Home Services": TAG,
  Agriculture: TAG, "Sustainable Water": TAG, "No-Code": TAG,
  "Energy Efficiency": TAG, "Landing Page": TAG, Web3: TAG,
  Nature: TAG, portfolio: TAG, Business: TAG, "Pharmacy Services": TAG,
  Medical: TAG, Automotive: TAG, "Car Rental": TAG, "Community Support": TAG,
};
