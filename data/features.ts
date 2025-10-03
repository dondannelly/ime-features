import { Feature } from '../lib/types';

// Company feature data - interactive webpages showcasing our products/services
const featuresData: Record<string, Feature> = {
  'salesforce-automation': {
    id: 'salesforce-automation',
    slug: 'salesforce-automation',
    title: 'Salesforce Automation Suite',
    subtitle: 'Streamline your Salesforce operations with intelligent automation',
    heroImage: '/images/automation-hero.jpg',
    story: {
      title: 'Transform Your Salesforce Workflow',
      content: 'Our comprehensive automation suite eliminates manual tasks, reduces errors, and accelerates your sales processes. From lead qualification to deal closure, we automate every step of your customer journey.',
      highlights: [
        'Automated lead scoring and routing',
        'Intelligent opportunity management',
        'Custom workflow automation',
        'Real-time data synchronization'
      ]
    },
    storyImage: '/images/automation-story.jpg',
    products: [
      {
        id: 'automation-starter',
        name: 'Automation Starter',
        description: 'Perfect for small teams getting started with automation',
        image: '/images/automation-starter.jpg',
        price: '$299/month',
        features: [
          'Up to 10 automation rules',
          'Basic workflow templates',
          'Email notifications',
          'Standard integrations'
        ],
        cta: {
          text: 'Start Free Trial',
          href: '/signup?plan=starter'
        }
      },
      {
        id: 'automation-professional',
        name: 'Automation Professional',
        description: 'Advanced automation for growing businesses',
        image: '/images/automation-professional.jpg',
        price: '$799/month',
        features: [
          'Unlimited automation rules',
          'Custom workflow builder',
          'Advanced integrations',
          'Priority support',
          'Analytics dashboard'
        ],
        popular: true,
        cta: {
          text: 'Start Free Trial',
          href: '/signup?plan=professional'
        }
      },
      {
        id: 'automation-enterprise',
        name: 'Automation Enterprise',
        description: 'Enterprise-grade solution for large organizations',
        image: '/images/automation-enterprise.jpg',
        price: '$1,999/month',
        features: [
          'Multi-org management',
          'Custom development',
          'Dedicated support team',
          'Advanced security',
          'API access'
        ],
        cta: {
          text: 'Contact Sales',
          href: '/contact?plan=enterprise'
        }
      }
    ],
    cta: {
      title: 'Ready to Automate Your Salesforce?',
      description: 'Join 500+ companies already using our automation suite to increase productivity by 40%',
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
        title: 'Automation Best Practices Guide',
        description: 'Learn how to design effective automation workflows',
        type: 'document',
        url: '/docs/automation-best-practices'
      },
      {
        title: 'Video Tutorials',
        description: 'Step-by-step video guides for common automation tasks',
        type: 'video',
        url: '/tutorials/automation'
      },
      {
        title: 'Integration Marketplace',
        description: 'Browse available integrations and connectors',
        type: 'link',
        url: '/integrations'
      }
    ],
    // Interactive components
    interactiveDemo: {
      title: 'Try Our Automation Builder',
      description: 'See how easy it is to create powerful automation workflows',
      type: 'configurator',
      component: 'AutomationBuilder',
      data: {
        templates: ['lead-scoring', 'opportunity-management', 'follow-up-sequences'],
        integrations: ['salesforce', 'hubspot', 'pipedrive']
      }
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      description: 'Choose the plan that fits your business needs',
      plans: [
        {
          id: 'starter',
          name: 'Starter',
          price: '$299',
          period: 'per month',
          description: 'Perfect for small teams',
          features: [
            'Up to 10 automation rules',
            'Basic templates',
            'Email support',
            'Standard integrations'
          ],
          cta: {
            text: 'Start Free Trial',
            href: '/signup?plan=starter'
          }
        },
        {
          id: 'professional',
          name: 'Professional',
          price: '$799',
          period: 'per month',
          description: 'Most popular for growing businesses',
          features: [
            'Unlimited automation rules',
            'Custom workflow builder',
            'Advanced integrations',
            'Priority support',
            'Analytics dashboard'
          ],
          popular: true,
          cta: {
            text: 'Start Free Trial',
            href: '/signup?plan=professional'
          }
        },
        {
          id: 'enterprise',
          name: 'Enterprise',
          price: '$1,999',
          period: 'per month',
          description: 'For large organizations',
          features: [
            'Multi-org management',
            'Custom development',
            'Dedicated support',
            'Advanced security',
            'API access'
          ],
          cta: {
            text: 'Contact Sales',
            href: '/contact?plan=enterprise'
          }
        }
      ],
      features: [
        'No setup fees',
        'Cancel anytime',
        '14-day free trial',
        '24/7 support'
      ]
    },
    testimonials: [
      {
        id: 'testimonial-1',
        content: 'This automation suite has transformed our sales process. We\'ve seen a 40% increase in productivity and our team loves how easy it is to use.',
        author: {
          name: 'Sarah Johnson',
          title: 'VP of Sales',
          company: 'TechCorp Inc.',
          avatar: '/images/testimonials/sarah-johnson.jpg'
        },
        rating: 5
      },
      {
        id: 'testimonial-2',
        content: 'The automation builder is incredibly intuitive. We were able to set up complex workflows in minutes, not hours.',
        author: {
          name: 'Mike Chen',
          title: 'Sales Operations Manager',
          company: 'GrowthCo',
          avatar: '/images/testimonials/mike-chen.jpg'
        },
        rating: 5
      }
    ],
    features: [
      {
        id: 'lead-scoring',
        title: 'Intelligent Lead Scoring',
        description: 'Automatically score and prioritize leads based on behavior and demographics',
        icon: '🎯',
        benefits: [
          'Increase conversion rates by 25%',
          'Reduce manual lead qualification time',
          'Focus on high-value prospects'
        ]
      },
      {
        id: 'workflow-automation',
        title: 'Visual Workflow Builder',
        description: 'Create complex automation workflows with our drag-and-drop interface',
        icon: '⚡',
        benefits: [
          'No coding required',
          'Real-time workflow testing',
          'Template library included'
        ]
      },
      {
        id: 'integration-hub',
        title: 'Seamless Integrations',
        description: 'Connect with 100+ popular business tools and platforms',
        icon: '🔗',
        benefits: [
          'One-click integrations',
          'Real-time data sync',
          'Custom API connections'
        ]
      }
    ],
    integrations: [
      {
        id: 'salesforce',
        name: 'Salesforce',
        description: 'Native Salesforce integration with full API access',
        logo: '/images/integrations/salesforce.png',
        category: 'CRM',
        status: 'available'
      },
      {
        id: 'hubspot',
        name: 'HubSpot',
        description: 'Sync data between Salesforce and HubSpot',
        logo: '/images/integrations/hubspot.png',
        category: 'Marketing',
        status: 'available'
      },
      {
        id: 'slack',
        name: 'Slack',
        description: 'Get notifications and updates in Slack',
        logo: '/images/integrations/slack.png',
        category: 'Communication',
        status: 'available'
      }
    ]
  },
  'data-analytics': {
    id: 'data-analytics',
    slug: 'data-analytics',
    title: 'Advanced Data Analytics',
    subtitle: 'Unlock insights with powerful Salesforce data analysis',
    heroImage: '/images/analytics-hero.jpg',
    story: {
      title: 'Turn Your Data Into Actionable Insights',
      content: 'Our advanced analytics platform provides real-time insights into your Salesforce data, helping you make data-driven decisions and optimize your sales performance.',
      highlights: [
        'Real-time dashboard updates',
        'Custom reporting tools',
        'Predictive analytics',
        'AI-powered insights'
      ]
    },
    storyImage: '/images/analytics-story.jpg',
    products: [
      {
        id: 'analytics-basic',
        name: 'Analytics Basic',
        description: 'Essential analytics for small teams',
        image: '/images/analytics-basic.jpg',
        price: '$199/month',
        features: [
          '5 custom dashboards',
          'Basic reports',
          'Email support',
          'Standard data sources'
        ],
        cta: {
          text: 'Start Free Trial',
          href: '/signup?plan=analytics-basic'
        }
      },
      {
        id: 'analytics-pro',
        name: 'Analytics Pro',
        description: 'Advanced analytics for growing businesses',
        image: '/images/analytics-pro.jpg',
        price: '$599/month',
        features: [
          'Unlimited dashboards',
          'Advanced reporting',
          'Predictive analytics',
          'Priority support',
          'Custom integrations'
        ],
        popular: true,
        cta: {
          text: 'Start Free Trial',
          href: '/signup?plan=analytics-pro'
        }
      }
    ],
    cta: {
      title: 'Ready to Unlock Your Data?',
      description: 'Start your free trial today and see the power of advanced analytics',
      primaryButton: {
        text: 'Start Free Trial',
        href: '/signup'
      },
      secondaryButton: {
        text: 'View Demo',
        href: '/demo'
      }
    },
    resources: [
      {
        title: 'Analytics Setup Guide',
        description: 'Complete guide to setting up your analytics dashboard',
        type: 'document',
        url: '/docs/analytics-setup'
      },
      {
        title: 'Video Tutorials',
        description: 'Learn how to create powerful reports and dashboards',
        type: 'video',
        url: '/tutorials/analytics'
      }
    ],
    interactiveDemo: {
      title: 'Interactive Analytics Demo',
      description: 'Explore our analytics platform with sample data',
      type: 'preview',
      component: 'AnalyticsDashboard',
      data: {
        sampleData: true,
        features: ['dashboards', 'reports', 'predictions']
      }
    }
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