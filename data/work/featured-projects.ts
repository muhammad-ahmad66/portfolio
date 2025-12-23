import { PortfolioCategory } from "./portfolio";

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
    id: "1",
    name: "Himalu",
    liveUrl: "https://himalu.com/",
    imageUrl: "/images/projects/wordpress-development-project5.webp",
    imageAlt: "Himalu organic foods and Himalayan Shilajit e-commerce website",
    categories: ["E-commerce", "Wellness", "Healthcare"],
  },
  {
    id: "11",
    name: "Marjorie Jean",
    liveUrl: "https://www.themarjoriejean.com/",
    imageUrl: "/images/projects/wordpress-development-project20.webp",
    imageAlt:
      "Marjorie Jean WordPress website development for wedding and memorial floral preservation epoxy art",
    categories: ["Art", "Memorial", "Crafts"],
  },

  {
    id: "3",
    name: "EasilyTrip",
    liveUrl: "https://easilytrip.com/",
    imageUrl: "/images/projects/wordpress-development-project4.webp",
    imageAlt: "EasilyTrip WordPress travel website design and development",
    categories: ["E-commerce", "Travel", "Hospitality", "Restaurant"],
  },
  {
    id: "5",
    name: "Beauty Boost 24",
    liveUrl: "https://beautyboost24.de/",
    imageUrl: "/images/projects/wordpress-development-project25.webp",
    imageAlt:
      "Beauty Boost 24 WordPress website development for cosmetic tourism and laser surgery agency",
    categories: ["Wellness", "Medical Tourism", "Beauty", "Healthcare"],
  },
  {
    id: "4",
    name: "Soft Water Experts",
    liveUrl: "https://softwaterexperts.com/",
    imageUrl: "/images/projects/wordpress-development-project15.webp",
    imageAlt:
      "Soft Water Experts WordPress website development for water filtration services",
    categories: ["Home Services", "Healthcare", "Lifestyle"],
  },

  {
    id: "6",
    name: "Mondhygiënist Ede",
    liveUrl: "https://www.mondhygienistinede.nl/",
    imageUrl: "/images/projects/wordpress-development-project12.webp",
    imageAlt:
      "Mondhygiënist Ede WordPress website development for dental hygiene clinic",
    categories: ["Healthcare", "Wellness"],
  },
  {
    id: "7",
    name: "Lifeline Foundation",
    liveUrl: "https://lifeline-foundation.org/",
    imageUrl: "/images/projects/wordpress-development-project8.webp",
    imageAlt:
      "Lifeline Foundation WordPress website development for women skill-training NGO",
    categories: ["Non-profit", "Education"],
  },
  {
    id: "31",
    name: "Prescribing Care Direct",
    liveUrl: "https://pcd-dev.31g.co.uk/",
    imageUrl: "/images/projects/wordpress-development-project35.webp",
    imageAlt:
      "Prescribing Care Direct website for medicines optimisation and clinical pharmacy services",
    categories: ["Healthcare", "Pharmacy Services", "Medical"],
  },

  {
    id: "32",
    name: "Lone Star Loaners",
    liveUrl: "https://lonestarloaners.com/",
    imageUrl: "/images/projects/wordpress-development-project37.webp",
    imageAlt:
      "Lone Star Loaners affordable car rental service with weekly rentals and roadside assistance",
    categories: ["Automotive", "Car Rental"],
  },
  {
    id: "8",
    name: "Maxgrow LATAM",
    liveUrl: "https://maxgrow-latam.com/",
    imageUrl: "/images/projects/wordpress-development-project10.webp",
    imageAlt:
      "Maxgrow LATAM WordPress website development for electronic water treatment company",
    categories: ["Tech", "Sustainable Water", "Agriculture"],
  },
  {
    id: "33",
    name: "Local Help My Way",
    liveUrl: "https://localhelpmyway.simplyconnect.uk/",
    imageUrl: "/images/projects/wordpress-development-project36.webp",
    imageAlt:
      "Local Help My Way Staffordshire micro providers network connecting local care and support services",
    categories: ["Community Support", "Healthcare"],
  },
  {
    id: "9",
    name: "Mitsubishi Comfort",
    liveUrl: "https://www.mitsubishicomfort.com/",
    imageUrl: "/images/projects/wordpress-development-project19.webp",
    imageAlt:
      "Mitsubishi Comfort WordPress website development for HVAC heat pump and smart control systems",
    categories: ["Tech", "Energy Efficiency", "Home Services"],
  },
  {
    id: "10",
    name: "Mighty Puraimar",
    liveUrl: "https://mightypuraimarumountain.com/",
    imageUrl: "/images/projects/wordpress-development-project11.webp",
    imageAlt: "Mighty Puraimar NFT landing page design and development",
    categories: ["Tech", "Crypto", "Web3", "Landing Page"],
  },
  {
    id: "2",
    name: "Master Solutions",
    liveUrl: "https://www.master-solutions.nl/",
    imageUrl: "/images/projects/wordpress-development-project9.webp",
    imageAlt: "IT-solutions & software company",
    categories: ["Tech", "SaaS", "AI"],
  },

  {
    id: "12",
    name: "IIFL French School",
    liveUrl: "https://iiflfrenchschool.com/",
    imageUrl: "/images/projects/wordpress-development-project21.webp",
    imageAlt:
      "IIFL French School WordPress website development for online French language institute",
    categories: ["Education", "LMS", "E-commerce"],
  },
  {
    id: "13",
    name: "Elysian Properties",
    liveUrl: "https://elysian-properties.com/",
    imageUrl: "/images/projects/wordpress-development-project22.webp",
    imageAlt:
      "Elysian Properties WordPress website development for luxury real estate in Crete",
    categories: ["Real Estate", "Luxury", "Property Investment"],
  },
  {
    id: "14",
    name: "BCI",
    liveUrl: "https://bci.scratchcom.com/",
    imageUrl: "/images/projects/wordpress-development-project1.webp",
    imageAlt:
      "Luxury interior fit-out and custom home construction website for Build Corp Interiors in Dubai",
    categories: ["Construction", "Interior Design", "Real Estate"],
  },
  {
    id: "15",
    name: "BMS Marketing",
    liveUrl: "https://bmsmktg.com/",
    imageUrl: "/images/projects/wordpress-development-project2.webp",
    imageAlt:
      "BMS Marketing WordPress website development for data-driven digital marketing agency",
    categories: ["Marketing", "Tech"],
  },
  {
    id: "16",
    name: "Sanitbud Instalacje",
    liveUrl: "https://sanitbud-instalacje.pl/",
    imageUrl: "/images/projects/wordpress-development-project13.webp",
    imageAlt:
      "Sanitbud Instalacje WordPress website development for plumbing, heating and sanitary systems company",
    categories: ["Construction", "Home Services", "Energy Efficiency"],
  },
  {
    id: "17",
    name: "DarSalam Restaurant",
    liveUrl: "https://darsalamrestaurant.com/",
    imageUrl: "/images/projects/wordpress-development-project3.webp",
    imageAlt:
      "DarSalam Restaurant WordPress website development for authentic Iraqi & Middle Eastern cuisine in Portland",
    categories: ["Restaurant", "Hospitality"],
  },
  {
    id: "18",
    name: "R.O.S.E Kanda",
    liveUrl: "https://volunteeringindiahimalayarosekanda.org/",
    imageUrl: "/images/projects/wordpress-development-project17.webp",
    imageAlt:
      "R.O.S.E Kanda WordPress website development for Himalayan community volunteering and rural development NGO",
    categories: ["Non-profit", "Education"],
  },
  {
    id: "19",
    name: "Quantum Healings",
    liveUrl: "https://quantum-healings.com/",
    imageUrl: "/images/projects/wordpress-development-project23.webp",
    imageAlt:
      "Quantum Healings WordPress website development for holistic hypnotherapy and energy healing services",
    categories: ["Wellness", "Healthcare"],
  },
  {
    id: "20",
    name: "Hogarths Hotel",
    liveUrl: "https://hogarths.co.uk/",
    imageUrl: "/images/projects/wordpress-development-project24.webp",
    imageAlt:
      "Hogarths Hotel WordPress website development for boutique country-house hotel and restaurant in Solihull",
    categories: ["Hospitality", "Hotel", "Restaurant"],
  },
  {
    id: "21",
    name: "IsoDirect",
    liveUrl: "https://isodirect.ca/",
    imageUrl: "/images/projects/wordpress-development-project7.webp",
    imageAlt:
      "IsoDirect WordPress website development for home insulation and energy efficiency services",
    categories: ["Sustainable Energy", "Construction", "Home Services"],
  },
  {
    id: "22",
    name: "Ova Solutions",
    liveUrl: "https://ovasolutions.com/",
    imageUrl: "/images/projects/wordpress-development-project26.webp",
    imageAlt:
      "Ova Solutions WordPress website development for medical device engineering and health-tech company",
    categories: ["Tech", "Healthcare"],
  },
  {
    id: "23",
    name: "IAFormaPlus",
    liveUrl: "https://iaformaplus.fr/",
    imageUrl: "/images/projects/wordpress-development-project27.webp",
    imageAlt:
      "IAFormaPlus WordPress website development for French training & coaching company using AI",
    categories: ["Education", "AI", "Training"],
  },
  {
    id: "24",
    name: "Northroid",
    liveUrl: "https://northroid.is/",
    imageUrl: "/images/projects/wordpress-development-project28.webp",
    imageAlt:
      "Northroid WordPress website development for online health and wellness products store",
    categories: ["E-commerce", "Wellness", "Healthcare"],
  },
  {
    id: "25",
    name: "PropFirms Pass",
    liveUrl: "https://propfirmspass.com/",
    imageUrl: "/images/projects/wordpress-development-project29.webp",
    imageAlt:
      "PropFirms Pass WordPress website development for prop firm challenge funding service",
    categories: ["Finance", "Trading", "Tech"],
  },
  {
    id: "26",
    name: "Pousson Enterprises",
    liveUrl: "https://poussonenterprises.com/",
    imageUrl: "/images/projects/wordpress-development-project30.webp",
    imageAlt:
      "Pousson Enterprises WordPress website development for US Army mission support and government contracting services",
    categories: ["Defense", "Consulting"],
  },
  {
    id: "27",
    name: "Imaginatio AI",
    liveUrl: "https://imaginatio.ai/",
    imageUrl: "/images/projects/wordpress-development-project31.webp",
    imageAlt:
      "Imaginatio AI WordPress website development for artificial intelligence consulting and AI‑driven business solutions",
    categories: ["AI", "Tech", "Consulting"],
  },
  {
    id: "28",
    name: "UDR Welcome",
    liveUrl: "https://udr-welcome.com/",
    imageUrl: "/images/projects/wordpress-development-project32.webp",
    imageAlt:
      "UDR Welcome WordPress website development for real estate investment trust multifamily apartments",
    categories: ["Real Estate", "Investment"],
  },
  {
    id: "29",
    name: "Neuron HS",
    liveUrl: "https://neuronhs.com/",
    imageUrl: "/images/projects/wordpress-development-project33.webp",
    imageAlt:
      "Neuron Health Systems WordPress website development for home care and nursing services",
    categories: ["Healthcare", "Wellness"],
  },
  {
    id: "30",
    name: "EcoGivers",
    liveUrl: "https://ecogivers.com/",
    imageUrl: "/images/projects/wordpress-development-project34.webp",
    imageAlt:
      "EcoGivers WordPress website development for sustainable materials and carbon credit trading platform",
    categories: ["Sustainable", "Green Business", "Climate"],
  },

  {
    id: "34",
    name: "My Specialist Appinion",
    liveUrl: "https://www.myspecialistappinion.com/",
    imageUrl: "/images/projects/wordpress-development-project38.webp",
    imageAlt:
      "My Specialist Appinion telemedicine platform offering expert healthcare guidance and specialist consultations",
    categories: ["Healthcare", "Medical"],
  },

  {
    id: "35",
    name: "Setup My Business Now",
    liveUrl: "https://setupmybusinessnow.com/",
    imageUrl: "/images/projects/wordpress-development-project39.webp",
    imageAlt:
      "Setup My Business Now business services platform offering digital brand development and business setup support",
    categories: ["Business", "Tech", "Training"],
  },
];
