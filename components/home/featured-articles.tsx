import Image from "next/image"
import Link from "next/link"
import { getFeaturedArticles } from "@/lib/articles"
import { formatDate } from "@/lib/utils"

export function FeaturedArticles() {
  const articles = getFeaturedArticles(3)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
              <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-medium">
                {article.category}
              </span>
              <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
              <span>•</span>
              <span>{article.readTime} min read</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
              <Link
                href={`/${article.category.toLowerCase()}/${article.slug}`}
                className="hover:text-indigo-600 transition-colors"
              >
                {article.title}
              </Link>
            </h3>
            <p className="text-gray-600 line-clamp-3 mb-4">{article.excerpt}</p>
            <div className="flex items-center space-x-3">
              <Image
                src={article.author.avatar || "/placeholder.svg"}
                alt={article.author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm text-gray-700">{article.author.name}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
