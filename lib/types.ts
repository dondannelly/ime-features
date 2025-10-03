// Feature-related types (for company feature pages)
export interface Feature {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  story: {
    title: string;
    content: string;
    highlights?: string[];
  };
  storyImage?: string;
  products: Product[];
  cta: CTA;
  resources: Resource[];
  // New interactive components
  interactiveDemo?: InteractiveDemo;
  pricing?: PricingSection;
  testimonials?: Testimonial[];
  features?: FeatureItem[];
  integrations?: Integration[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  features?: string[];
  popular?: boolean;
  cta?: {
    text: string;
    href: string;
  };
}

export interface CTA {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export interface Resource {
  title: string;
  description: string;
  type: 'document' | 'video' | 'link';
  url: string;
  icon?: string;
}

// New interactive components for feature pages
export interface InteractiveDemo {
  title: string;
  description: string;
  type: 'calculator' | 'simulator' | 'configurator' | 'preview';
  component: string; // Component name to render
  data?: Record<string, unknown>; // Component-specific data
}

export interface PricingSection {
  title: string;
  description: string;
  plans: PricingPlan[];
  features: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: {
    text: string;
    href: string;
  };
}

export interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
  rating?: number;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  benefits: string[];
}

export interface Integration {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: string;
  status: 'available' | 'coming-soon' | 'beta';
}

// Article-related types (for blog content)
export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  heroImage?: string;
  content: string; // Markdown content
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: string; // ISO date string
  updatedAt?: string; // ISO date string
  tags: string[];
  category: string;
  readingTime: number; // in minutes
  featured: boolean;
  seo: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
  relatedArticles?: string[]; // Array of article slugs
}

// Salesforce-related types
export interface SalesforceConfig {
  orgAlias: string;
  username: string;
  password: string;
  securityToken: string;
  loginUrl: string;
  apiVersion: string;
}

export interface Pricebook {
  id: string;
  name: string;
  description?: string;
  isStandard: boolean;
}

export interface PricebookEntry {
  id: string;
  productId: string;
  pricebookId: string;
  unitPrice: number;
  isActive: boolean;
}

export interface Product2 {
  id: string;
  name: string;
  description?: string;
  productCode?: string;
  isActive: boolean;
  family?: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}