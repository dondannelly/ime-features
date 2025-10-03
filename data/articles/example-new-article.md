---
id: example-new-article
slug: example-new-article
title: How to Add New Articles
subtitle: A step-by-step guide to creating and publishing new articles
excerpt: Learn how to easily add new articles to your blog system using markdown files and frontmatter metadata.
heroImage: /images/article-creation-hero.jpg
author:
  name: Admin User
  avatar: /images/authors/admin.jpg
  bio: System administrator and content creator
publishedAt: 2024-01-30T10:00:00Z
updatedAt: 2024-01-30T10:00:00Z
tags: [tutorial, content-management, markdown, how-to]
category: Tutorials
readingTime: 5
featured: false
seo:
  title: How to Add New Articles - Complete Guide
  description: Step-by-step guide to adding new articles to your blog system using markdown and frontmatter.
  keywords: [add articles, content management, markdown, tutorial]
relatedArticles: [getting-started-with-salesforce]
---

# How to Add New Articles

This guide will show you how to easily add new articles to your blog system.

## Step 1: Create a New Markdown File

1. Navigate to the `data/articles/` directory
2. Create a new `.md` file with your desired slug as the filename
3. Example: `my-awesome-article.md`

## Step 2: Add Frontmatter Metadata

At the top of your markdown file, add the required frontmatter:

```yaml
---
id: my-awesome-article
slug: my-awesome-article
title: My Awesome Article
subtitle: A brief description of what this article covers
excerpt: A longer description that will appear in article listings
heroImage: /images/my-article-hero.jpg
author:
  name: Your Name
  avatar: /images/authors/your-avatar.jpg
  bio: Your bio or role
publishedAt: 2024-01-30T10:00:00Z
updatedAt: 2024-01-30T10:00:00Z
tags: [tag1, tag2, tag3]
category: Category Name
readingTime: 5
featured: false
seo:
  title: SEO Title for Search Engines
  description: SEO description for search engines
  keywords: [keyword1, keyword2, keyword3]
relatedArticles: [related-article-slug1, related-article-slug2]
---
```

## Step 3: Write Your Content

After the frontmatter, write your article content using standard markdown:

```markdown
# Your Article Title

Your article content goes here...

## Subheading

More content...

- Bullet points
- Lists
- **Bold text**
- *Italic text*

[Links](https://example.com)
```

## Step 4: Required Fields

Make sure to include these required fields in your frontmatter:

- `id`: Unique identifier (usually same as slug)
- `slug`: URL-friendly identifier
- `title`: Article title
- `subtitle`: Brief description
- `excerpt`: Longer description for listings
- `author`: Author information
- `publishedAt`: Publication date (ISO format)
- `tags`: Array of tags
- `category`: Article category
- `readingTime`: Estimated reading time in minutes

## Step 5: Optional Fields

These fields are optional but recommended:

- `heroImage`: Hero image for the article
- `updatedAt`: Last update date
- `featured`: Whether to show in featured articles
- `seo`: SEO metadata
- `relatedArticles`: Array of related article slugs

## Step 6: Test Your Article

1. Save your markdown file
2. Run your development server: `npm run dev`
3. Navigate to `http://localhost:3000/your-article-slug`
4. Check that your article appears correctly

## Tips for Great Articles

- Use descriptive titles and subtitles
- Write compelling excerpts that encourage clicks
- Add relevant tags for better discoverability
- Include a hero image for visual appeal
- Set appropriate reading time estimates
- Use proper markdown formatting
- Link to related articles when relevant

## Conclusion

That's it! Your new article will automatically appear in:
- The articles listing page (`/articles`)
- The home page (if marked as featured)
- Search results
- Category and tag filters

The system will automatically generate static pages for your articles, making them fast and SEO-friendly.
