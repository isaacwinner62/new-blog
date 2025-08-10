import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArticleHeader } from "@/components/article/article-header"
import { ArticleContent } from "@/components/article/article-content"
import { ArticleFooter } from "@/components/article/article-footer"
import { RelatedArticles } from "@/components/article/related-articles"
import { SidebarAd } from "@/components/ads/sidebar-ad"
import { ShareButtons } from "@/components/article/share-buttons"
import { ReadingProgress } from "@/components/article/reading-progress"
import { TableOfContents } from "@/components/article/table-of-contents"
import { generateJsonLd } from "@/lib/seo"
import { getArticleBySlug, getRelatedArticles } from "@/lib/articles"
import dummyData from "@/data/dummy-data.json"

interface ArticlePageProps {
  params: {
    category: string
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Article Not Found | Premium Blog",
    }
  }

  return {
    title: article.seo.title,
    description: article.seo.metaDescription,
    keywords: article.tags.join(", "),
    authors: [{ name: article.author.name }],
    publishedTime: article.publishedAt,
    modifiedTime: article.modifiedAt,
    section: article.category,
    tags: article.tags,
    openGraph: {
      title: article.seo.title,
      description: article.seo.metaDescription,
      url: article.seo.canonical,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.modifiedAt,
      authors: [article.author.name],
      section: article.category,
      tags: article.tags,
      images: [
        {
          url: article.featuredImage.url,
          width: 1200,
          height: 630,
          alt: article.featuredImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seo.title,
      description: article.seo.metaDescription,
      images: [article.featuredImage.url],
      creator: article.author.social?.twitter,
    },
    alternates: {
      canonical: article.seo.canonical,
    },
    robots: article.seo.robots,
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(article.id, article.tags)

  const jsonLd = generateJsonLd({
    type: "Article",
    headline: article.title,
    description: article.excerpt,
    image: [article.featuredImage.url],
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      description: article.author.bio,
    },
    publisher: {
      "@type": "Organization",
      name: dummyData.site.name,
      logo: {
        "@type": "ImageObject",
        url: `${dummyData.site.baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.seo.canonical,
    },
    articleSection: article.category,
    keywords: article.tags.join(", "),
    wordCount: article.html.split(" ").length,
    timeRequired: `PT${article.readTime}M`,
  })

  const breadcrumbJsonLd = generateJsonLd({
    type: "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: dummyData.site.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: article.category,
        item: `${dummyData.site.baseUrl}/category/${article.category.toLowerCase()}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: article.seo.canonical,
      },
    ],
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <ReadingProgress />

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="content-grid">
          <div className="main-content">
            <ArticleHeader article={article} />

            <div className="flex gap-8">
              <div className="flex-1">
                <ArticleContent article={article} />
              </div>

              {/* Desktop Table of Contents */}
              <div className="hidden xl:block w-64 flex-shrink-0">
                <div className="sticky top-8">
                  <TableOfContents content={article.html} />
                </div>
              </div>
            </div>

            <ArticleFooter article={article} />

            <RelatedArticles articles={relatedArticles} />
          </div>

          {/* Sidebar */}
          <aside className="sidebar-content">
            <div className="sticky top-8 space-y-8">
              <ShareButtons article={article} />
              <SidebarAd />

              {/* Mobile Table of Contents */}
              <div className="xl:hidden">
                <TableOfContents content={article.html} />
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  )
}

export async function generateStaticParams() {
  return dummyData.articles.map((article) => ({
    category: article.category.toLowerCase(),
    slug: article.slug,
  }))
}
