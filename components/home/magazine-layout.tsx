import Image from "next/image"
import Link from "next/link"
import { Clock, User, Star } from "lucide-react"
import { formatDate } from "@/lib/utils"
import dummyData from "@/data/dummy-data.json"

export function MagazineLayout() {
  const featuredArticles = dummyData.articles.filter((article) => article.featured && article.status === "published")
  const mainArticle = featuredArticles[0]
  const sideArticles = featuredArticles.slice(1, 4)
  const bottomArticles = dummyData.articles
    .filter((article) => !article.featured && article.status === "published")
    .slice(0, 3)

  if (!mainArticle) return null

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Featured Article */}
      <div className="lg:col-span-2">
        <article className="group relative overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="aspect-video relative">
            <Image
              src={mainArticle.featuredImage.url || "/placeholder.svg"}
              alt={mainArticle.featuredImage.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute top-4 left-4">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">EDITOR'S PICK</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center space-x-2 mb-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: dummyData.categories.find((cat) => cat.name === mainArticle.category)?.color,
                  }}
                >
                  {mainArticle.category}
                </span>
                <time className="text-sm opacity-90" dateTime={mainArticle.publishedAt}>
                  {formatDate(mainArticle.publishedAt)}
                </time>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                <Link
                  href={`/${mainArticle.category.toLowerCase()}/${mainArticle.slug}`}
                  className="hover:text-yellow-300 transition-colors"
                >
                  {mainArticle.title}
                </Link>
              </h2>
              <p className="text-gray-200 mb-4 line-clamp-2">{mainArticle.excerpt}</p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Image
                    src={mainArticle.author.avatar || "/placeholder.svg"}
                    alt={mainArticle.author.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span>{mainArticle.author.name}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{mainArticle.readTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Side Articles */}
      <div className="space-y-6">
        {sideArticles.map((article, index) => (
          <article key={article.id} className="group">
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <Link href={`/${article.category.toLowerCase()}/${article.slug}`}>
                  <Image
                    src={article.featuredImage.url || "/placeholder.svg"}
                    alt={article.featuredImage.alt}
                    width={100}
                    height={80}
                    className="rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </Link>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <span
                    className="inline-block w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: dummyData.categories.find((cat) => cat.name === article.category)?.color,
                    }}
                  />
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{article.category}</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                  <Link href={`/${article.category.toLowerCase()}/${article.slug}`}>{article.title}</Link>
                </h3>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>{article.author.name}</span>
                  <span>•</span>
                  <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                </div>
              </div>
            </div>
            {index < sideArticles.length - 1 && <hr className="mt-6 border-gray-200" />}
          </article>
        ))}
      </div>

      {/* Bottom Row - Three Column Layout */}
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
        {bottomArticles.map((article) => (
          <article key={article.id} className="group">
            <Link href={`/${article.category.toLowerCase()}/${article.slug}`}>
              <Image
                src={article.featuredImage.url || "/placeholder.svg"}
                alt={article.featuredImage.alt}
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-200"
              />
            </Link>
            <div className="flex items-center space-x-2 mb-2">
              <span
                className="px-2 py-1 rounded-full text-xs font-medium text-white"
                style={{ backgroundColor: dummyData.categories.find((cat) => cat.name === article.category)?.color }}
              >
                {article.category}
              </span>
              <time className="text-xs text-gray-500" dateTime={article.publishedAt}>
                {formatDate(article.publishedAt)}
              </time>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
              <Link href={`/${article.category.toLowerCase()}/${article.slug}`}>{article.title}</Link>
            </h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-3">{article.excerpt}</p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <User className="w-4 h-4" />
              <span>{article.author.name}</span>
              <span>•</span>
              <span>{article.readTime} min</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
