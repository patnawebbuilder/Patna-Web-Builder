export interface DomainPlan {
  id: string;
  domainType: '.com' | '.in';
  duration: '1 Year' | '3 Year';
  durationYears: number;
  maintenanceCharge: number;
  renewalCharge: number;
  creationFee: number; // Always 10000
  totalInitial: number; // creationFee + maintenanceCharge
  popular?: boolean;
  savings?: string;
}

export interface WebsiteAddon {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: string;
}

export interface DemoTemplate {
  id: string;
  title: string;
  category: string;
  locationTag: string;
  description: string;
  colorTheme: string;
  heroHeading: string;
  heroSubheading: string;
  services: string[];
  contactPhone: string;
  demoUrl: string;
  image: string;
}

export interface AIConceptResult {
  businessName: string;
  tagline: string;
  suggestedDomains: string[];
  colorScheme: {
    primary: string;
    accent: string;
    bg: string;
  };
  keySections: string[];
  recommendedPackage: string;
  estimatedCost: {
    creation: number;
    maintenance: number;
    total: number;
    note: string;
  };
  aiTips: string[];
}
