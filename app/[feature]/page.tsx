import { notFound } from 'next/navigation';
import { HeroSection } from '../../components/feature/HeroSection';
import { StoryCard } from '../../components/feature/StoryCard';
import { ProductGrid } from '../../components/feature/ProductGrid';
import { CTASection } from '../../components/feature/CTASection';
import { ResourceFooter } from '../../components/feature/ResourceFooter';
import { getArticleData } from '../../data/articles';

interface ArticlePageProps {
  params: {
    feature: string; // This will be the article slug
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const articleData = await getArticleData(params.feature);
  
  if (!articleData) {
    notFound();
  }

  // Convert article data to the format expected by existing components
  const featureData = {
    title: articleData.title,
    subtitle: articleData.subtitle,
    heroImage: articleData.heroImage,
    story: {
      title: articleData.title,
      content: articleData.excerpt,
      highlights: articleData.tags
    },
    storyImage: articleData.heroImage,
    products: [], // Articles don't have products
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
    resources: [] // Articles don't have separate resources
  };

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
      
      {/* Article content section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: articleData.content }} />
          </div>
        </div>
      </section>
      
      <CTASection 
        cta={featureData.cta}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const { getArticleSlugs } = await import('../../data/articles');
  const slugs = getArticleSlugs();
  
  return slugs.map((slug) => ({
    feature: slug,
  }));
}
