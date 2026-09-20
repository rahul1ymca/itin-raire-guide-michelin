export type Language = 'fr' | 'en';

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

export interface RouteOption {
  type: string;
  name: string;
  description: string;
  badge: string;
  badgeColor: string;
  distance: string;
  duration: string;
  tollCost: number;
  fuelCost: number;
  scenicRating: number;
}

export interface RoutePreset {
  id: string;
  origin: string;
  destination: string;
  tagline: string;
  routes: {
    recommended: RouteOption;
    quickest: RouteOption;
    economic: RouteOption;
    scenic: RouteOption;
  };
  gourmetStops: {
    name: string;
    city: string;
    award: string;
    specialty: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
