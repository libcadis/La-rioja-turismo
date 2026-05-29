export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ExperienceCard {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  icon: "wine" | "food" | "mountain" | "village";
}

export interface WineRoute {
  id: string;
  name: string;
  x: number;
  y: number;
  description: string;
}

export interface TravelPlanCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  alt: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}
