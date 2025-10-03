import { Article } from '../lib/types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'data/articles');

/**
 * Parse frontmatter from markdown files
 */
function parseArticleFile(filePath: string): Article | null {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      id: data.id,
      slug: data.slug,
      title: data.title,
      subtitle: data.subtitle,
      excerpt: data.excerpt,
      heroImage: data.heroImage,
      content,
      author: data.author,
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
      tags: data.tags || [],
      category: data.category,
      readingTime: data.readingTime || 5,
      featured: data.featured || false,
      seo: data.seo || {},
      relatedArticles: data.relatedArticles || []
    } as Article;
  } catch (error) {
    console.error(`Error parsing article file ${filePath}:`, error);
    return null;
  }
}

/**
 * Get all article files from the articles directory
 */
function getArticleFiles(): string[] {
  try {
    return fs.readdirSync(articlesDirectory)
      .filter(file => file.endsWith('.md'))
      .map(file => path.join(articlesDirectory, file));
  } catch (error) {
    console.error('Error reading articles directory:', error);
    return [];
  }
}

/**
 * Get article data by slug
 */
export async function getArticleData(slug: string): Promise<Article | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const articleFiles = getArticleFiles();
  
  for (const filePath of articleFiles) {
    const article = parseArticleFile(filePath);
    if (article && article.slug === slug) {
      return article;
    }
  }
  
  return null;
}

/**
 * Get all articles
 */
export async function getAllArticles(): Promise<Article[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const articleFiles = getArticleFiles();
  const articles: Article[] = [];
  
  for (const filePath of articleFiles) {
    const article = parseArticleFile(filePath);
    if (article) {
      articles.push(article);
    }
  }
  
  // Sort by published date (newest first)
  return articles.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Get featured articles only
 */
export async function getFeaturedArticles(): Promise<Article[]> {
  const allArticles = await getAllArticles();
  return allArticles.filter(article => article.featured);
}

/**
 * Get articles by category
 */
export async function getArticlesByCategory(category: string): Promise<Article[]> {
  const allArticles = await getAllArticles();
  return allArticles.filter(article => 
    article.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get articles by tag
 */
export async function getArticlesByTag(tag: string): Promise<Article[]> {
  const allArticles = await getAllArticles();
  return allArticles.filter(article => 
    article.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get related articles
 */
export async function getRelatedArticles(articleSlug: string, limit: number = 3): Promise<Article[]> {
  const article = await getArticleData(articleSlug);
  if (!article || !article.relatedArticles) {
    return [];
  }
  
  const relatedArticles: Article[] = [];
  
  for (const relatedSlug of article.relatedArticles) {
    const relatedArticle = await getArticleData(relatedSlug);
    if (relatedArticle) {
      relatedArticles.push(relatedArticle);
    }
  }
  
  return relatedArticles.slice(0, limit);
}

/**
 * Get article slugs for static generation
 */
export function getArticleSlugs(): string[] {
  const articleFiles = getArticleFiles();
  const slugs: string[] = [];
  
  for (const filePath of articleFiles) {
    const article = parseArticleFile(filePath);
    if (article) {
      slugs.push(article.slug);
    }
  }
  
  return slugs;
}

/**
 * Search articles by title, content, or tags
 */
export async function searchArticles(query: string): Promise<Article[]> {
  const allArticles = await getAllArticles();
  const searchTerm = query.toLowerCase();
  
  return allArticles.filter(article => 
    article.title.toLowerCase().includes(searchTerm) ||
    article.subtitle.toLowerCase().includes(searchTerm) ||
    article.excerpt.toLowerCase().includes(searchTerm) ||
    article.content.toLowerCase().includes(searchTerm) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
}
