import { notFound } from 'next/navigation';
import { HeroSection } from '../../components/feature/HeroSection';
import { StoryCard } from '../../components/feature/StoryCard';
import { ProductGrid } from '../../components/feature/ProductGrid';
import { CTASection } from '../../components/feature/CTASection';
import { ResourceFooter } from '../../components/feature/ResourceFooter';
import { InteractiveDemo } from '../../components/feature/InteractiveDemo';
import { PricingSection } from '../../components/feature/PricingSection';
import { TestimonialsSection } from '../../components/feature/TestimonialsSection';
import { FeaturesGrid } from '../../components/feature/FeaturesGrid';
import { IntegrationsSection } from '../../components/feature/IntegrationsSection';
import { getFeatureData } from '../../data/features';
import { getArticleData } from '../../data/articles';

interface FeaturePageProps {
  params: {
    feature: string; // This could be a feature slug or article slug
  };
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  // Try to get feature data first
  let featureData = await getFeatureData(params.feature);
  let isArticle = false;

  // If not a feature, try to get as article
  if (!featureData) {
    const articleData = await getArticleData(params.feature);
    if (articleData) {
      isArticle = true;
      // Convert article data to feature format for display
      featureData = {
        id: articleData.id,
        slug: articleData.slug,
        title: articleData.title,
        subtitle: articleData.subtitle,
        heroImage: articleData.heroImage,
        story: {
          title: articleData.title,
          content: articleData.excerpt,
          highlights: articleData.tags
        },
        storyImage: articleData.heroImage,
        products: [],
        cta: {
          title: 'Want to Learn More?',
          description: 'Explore more articles and resources',
          primaryButton: {
            text: 'Browse Articles',
            href: '/articles'
          },
          secondaryButton: {
            text: 'Contact Us',
            href: '/contact'
          }
        },
        resources: []
      };
    }
  }

  if (!featureData) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <HeroSection 
        title={featureData.title}
        subtitle={featureData.subtitle}
        backgroundImage={featureData.heroImage}
      />
      
      <StoryCard 
        story={featureData.story}
        image={featureData.storyImage}
      />

      {/* Interactive Demo - only for features, not articles */}
      {!isArticle && featureData.interactiveDemo && (
        <InteractiveDemo demo={featureData.interactiveDemo} />
      )}

      {/* Features Grid - only for features, not articles */}
      {!isArticle && featureData.features && (
        <FeaturesGrid features={featureData.features} />
      )}

      {/* Product Grid - only for features, not articles */}
      {!isArticle && featureData.products && featureData.products.length > 0 && (
        <ProductGrid products={featureData.products} />
      )}

      {/* Pricing Section - only for features, not articles */}
      {!isArticle && featureData.pricing && (
        <PricingSection pricing={featureData.pricing} />
      )}

      {/* Testimonials - only for features, not articles */}
      {!isArticle && featureData.testimonials && (
        <TestimonialsSection testimonials={featureData.testimonials} />
      )}

      {/* Integrations - only for features, not articles */}
      {!isArticle && featureData.integrations && (
        <IntegrationsSection integrations={featureData.integrations} />
      )}

      {/* Article content section - only for articles */}
      {isArticle && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: (await getArticleData(params.feature))?.content || '' }} />
            </div>
          </div>
        </section>
      )}
      
      <CTASection 
        cta={featureData.cta}
      />
      
      <ResourceFooter 
        resources={featureData.resources}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const { getArticleSlugs } = await import('../../data/articles');
  const { getFeatureSlugs } = await import('../../data/features');
  
  const articleSlugs = getArticleSlugs();
  const featureSlugs = getFeatureSlugs();
  
  const allSlugs = [...featureSlugs, ...articleSlugs];
  
  return allSlugs.map((slug) => ({
    feature: slug,
  }));
}
