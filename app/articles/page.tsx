import Link from 'next/link';
import { getAllArticles, getFeaturedArticles } from '../../data/articles';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export default async function ArticlesPage() {
  const [allArticles, featuredArticles] = await Promise.all([
    getAllArticles(),
    getFeaturedArticles()
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Featured Articles</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover insights, best practices, and expert advice to help you get the most out of your Salesforce platform.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <Card key={article.id} variant="elevated" className="hover:shadow-xl transition-shadow">
                  {article.heroImage && (
                    <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                      <img 
                        src={article.heroImage} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-blue-600 font-medium">{article.category}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{article.readingTime} min read</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {article.author.avatar && (
                          <img 
                            src={article.author.avatar} 
                            alt={article.author.name}
                            className="w-8 h-8 rounded-full"
                          />
                        )}
                        <span className="text-sm text-gray-600">{article.author.name}</span>
                      </div>
                      <Button variant="outline" size="sm" href={`/${article.slug}`}>
                        Read More
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allArticles.map((article) => (
              <Card key={article.id} variant="default" className="hover:shadow-lg transition-shadow">
                {article.heroImage && (
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img 
                      src={article.heroImage} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-blue-600 font-medium">{article.category}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{article.readingTime} min read</span>
                    {article.featured && (
                      <>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-yellow-600 font-medium">Featured</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {article.author.avatar && (
                        <img 
                          src={article.author.avatar} 
                          alt={article.author.name}
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                      <span className="text-sm text-gray-600">{article.author.name}</span>
                    </div>
                    <Button variant="outline" size="sm" href={`/${article.slug}`}>
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
