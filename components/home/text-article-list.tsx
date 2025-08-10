import Image from "next/image"
import Link from "next/link"
import { Clock, User, ArrowRight } from "lucide-react"
import { formatDate } from "@/lib/utils"
import dummyData from "@/data/dummy-data.json"

export function TextArticleList() {
  const articles = dummyData.articles.filter((article) => article.status === "published").slice(0, 6)

  return (
    <div className="space-y-6">
      {articles.map((article, index) => (
        <article
          key={article.id}
          className={`group flex items-start space-x-6 p-6 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 ${
            index === 0 ? "border-l-4 border-l-indigo-500" : ""
          }`}
        >
          {/* Article Image */}
          <div className="flex-shrink-0">
            <Link href={`/${article.category.toLowerCase()}/${article.slug}`}>
              <Image
                src={article.featuredImage.url || "/placeholder.svg"}
                alt={article.featuredImage.alt}
                width={120}
                height={80}
                className="rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
              />
            </Link>
          </div>

          {/* Article Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <span
                className="inline-block px-2 py-1 rounded-full text-xs font-medium text-white"
                style={{ backgroundColor: dummyData.categories.find((cat) => cat.name === article.category)?.color }}
              >
                {article.category}
              </span>
              {article.featured && (
                <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Featured
                </span>
              )}
              {article.trending && (
                <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  🔥 Trending
                </span>
              )}
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
              <Link href={`/${article.category.toLowerCase()}/${article.slug}`}>{article.title}</Link>
            </h3>

            <p className="text-gray-600 text-sm md:text-base mb-3 line-clamp-2">{article.excerpt}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{article.author.name}</span>
                </div>
                <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} min</span>
                </div>
              </div>

              <Link
                href={`/${article.category.toLowerCase()}/${article.slug}`}
                className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 text-sm font-medium group-hover:translate-x-1 transition-all duration-200"
              >
                <span>Read more</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
