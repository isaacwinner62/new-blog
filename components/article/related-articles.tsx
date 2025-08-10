import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

interface RelatedArticlesProps {
  articles: Array<{
    id: string
    title: string
    slug: string
    excerpt: string
    category: string
    publishedAt: string
    readTime: number
    featuredImage: {
      url: string
      alt: string
    }
    author: {
      name: string
    }
  }>
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null

  return (
    <section className="mt-16 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article key={article.id} className="card">
            <Link href={`/${article.category.toLowerCase()}/${article.slug}`}>
              <Image
                src={article.featuredImage.url || "/placeholder.svg"}
                alt={article.featuredImage.alt}
                width={400}
                height={225}
                className="card-image"
              />
            </Link>
            <div className="p-6">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <span>{article.category}</span>
                <span>•</span>
                <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                <span>•</span>
                <span>{article.readTime} min read</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                <Link
                  href={`/${article.category.toLowerCase()}/${article.slug}`}
                  className="hover:text-indigo-600 transition-colors"
                >
                  {article.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-3">{article.excerpt}</p>
              <p className="text-sm text-gray-500">By {article.author.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
