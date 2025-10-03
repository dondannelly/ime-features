import { Feature } from '../lib/types';

// Mock feature data - in a real application, this would come from a CMS or API
const featuresData: Record<string, Feature> = {
  'advanced-analytics': {
    id: 'advanced-analytics',
    slug: 'advanced-analytics',
    title: 'Advanced Analytics',
    subtitle: 'Unlock insights with powerful data analysis tools',
    heroImage: '/images/analytics-hero.jpg',
    story: {
      title: 'Transform Your Data into Actionable Insights',
      content: 'Our advanced analytics platform provides real-time insights into your business performance, customer behavior, and market trends. Make data-driven decisions with confidence.',
      highlights: [
        'Real-time dashboard updates',
        'Customizable reporting tools',
        'Predictive analytics capabilities',
        'Integration with existing systems'
      ]
    },
    storyImage: '/images/analytics-story.jpg',
    products: [
      {
        id: 'analytics-pro',
        name: 'Analytics Pro',
        description: 'Professional analytics suite with advanced reporting',
        image: '/images/analytics-pro.jpg',
        price: '$299/month',
        features: [
          'Unlimited reports',
          'Custom dashboards',
          'API access',
          '24/7 support'
        ]
      },
      {
        id: 'analytics-enterprise',
        name: 'Analytics Enterprise',
        description: 'Enterprise-grade solution for large organizations',
        image: '/images/analytics-enterprise.jpg',
        price: '$999/month',
        features: [
          'Multi-tenant architecture',
          'Advanced security',
          'Custom integrations',
          'Dedicated support'
        ]
      }
    ],
    cta: {
      title: 'Ready to Get Started?',
      description: 'Join thousands of businesses already using our analytics platform',
      primaryButton: {
        text: 'Start Free Trial',
        href: '/signup'
      },
      secondaryButton: {
        text: 'Schedule Demo',
        href: '/demo'
      }
    },
    resources: [
      {
        title: 'Getting Started Guide',
        description: 'Complete guide to setting up your analytics dashboard',
        type: 'document',
        url: '/docs/getting-started'
      },
      {
        title: 'Video Tutorials',
        description: 'Step-by-step video tutorials for common tasks',
        type: 'video',
        url: '/tutorials'
      },
      {
        title: 'API Documentation',
        description: 'Comprehensive API reference for developers',
        type: 'link',
        url: '/api-docs'
      }
    ]
  },
  'automation-tools': {
    id: 'automation-tools',
    slug: 'automation-tools',
    title: 'Automation Tools',
    subtitle: 'Streamline your workflows with intelligent automation',
    heroImage: '/images/automation-hero.jpg',
    story: {
      title: 'Automate Repetitive Tasks, Focus on What Matters',
      content: 'Reduce manual work and human error with our comprehensive automation suite. From simple workflows to complex business processes, we have the tools you need.',
      highlights: [
        'Visual workflow designer',
        'Pre-built automation templates',
        'Multi-platform integrations',
        'Advanced scheduling options'
      ]
    },
    storyImage: '/images/automation-story.jpg',
    products: [
      {
        id: 'workflow-basic',
        name: 'Workflow Basic',
        description: 'Essential automation tools for small teams',
        image: '/images/workflow-basic.jpg',
        price: '$99/month',
        features: [
          'Up to 10 workflows',
          'Basic integrations',
          'Email support',
          'Standard templates'
        ]
      },
      {
        id: 'workflow-professional',
        name: 'Workflow Professional',
        description: 'Advanced automation for growing businesses',
        image: '/images/workflow-professional.jpg',
        price: '$299/month',
        features: [
          'Unlimited workflows',
          'Advanced integrations',
          'Priority support',
          'Custom templates'
        ]
      }
    ],
    cta: {
      title: 'Start Automating Today',
      description: 'See how automation can transform your business processes',
      primaryButton: {
        text: 'Try Free',
        href: '/automation/trial'
      },
      secondaryButton: {
        text: 'View Examples',
        href: '/automation/examples'
      }
    },
    resources: [
      {
        title: 'Automation Best Practices',
        description: 'Learn how to design effective automation workflows',
        type: 'document',
        url: '/docs/automation-best-practices'
      },
      {
        title: 'Integration Marketplace',
        description: 'Browse available integrations and connectors',
        type: 'link',
        url: '/integrations'
      }
    ]
  }
};

/**
 * Get feature data by slug
 */
export async function getFeatureData(slug: string): Promise<Feature | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return featuresData[slug] || null;
}

/**
 * Get all available features
 */
export async function getAllFeatures(): Promise<Feature[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return Object.values(featuresData);
}

/**
 * Get feature slugs for static generation
 */
export function getFeatureSlugs(): string[] {
  return Object.keys(featuresData);
}
