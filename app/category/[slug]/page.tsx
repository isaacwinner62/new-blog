import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, TrendingUp } from "lucide-react"
import { getArticlesByCategory } from "@/lib/articles"
import { formatDate } from "@/lib/utils"
import { SidebarAd } from "@/components/ads/sidebar-ad"
import { LeaderboardAd } from "@/components/ads/leaderboard-ad"
import dummyData from "@/data/dummy-data.json"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = dummyData.categories.find((cat) => cat.slug === params.slug)

  if (!category) {
    return {
      title: "Category Not Found | Premium Blog",
    }
  }

  return {
    title: `${category.name} Articles | Premium Blog`,
    description: `Discover the latest ${category.name.toLowerCase()} articles, insights, and trends. ${category.description}`,
    openGraph: {
      title: `${category.name} Articles | Premium Blog`,
      description: category.description,
      url: `https://premiumblog.com/category/${category.slug}`,
    },
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = dummyData.categories.find((cat) => cat.slug === params.slug)

  if (!category) {
    notFound()
  }

  const articles = getArticlesByCategory(params.slug)
  const featuredArticles = articles.filter((article) => article.featured)
  const regularArticles = articles.filter((article) => !article.featured)
  const trendingArticles = articles.filter((article) => article.trending)

  return (
    <div>
      <LeaderboardAd />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-4 rounded-xl text-white" style={{ backgroundColor: category.color }}>
              <div className="w-8 h-8 flex items-center justify-center">
                <span className="text-2xl">
                  {category.name === "Design" && "🎨"}
                  {category.name === "Technology" && "💻"}
                  {category.name === "Business" && "💼"}
                  {category.name === "Health" && "❤️"}
                  {category.name === "Lifestyle" && "☕"}
                </span>
              </div>
            </div>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {category.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">{category.description}</p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span>{articles.length} articles</span>
            <span>•</span>
            <span>Updated daily</span>
            <span>•</span>
            <span>Expert insights</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            {/* Trending Articles */}
            {trendingArticles.length > 0 && (
              <section>
                <div className="flex items-center space-x-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-red-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Trending in {category.name}</h2>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trendingArticles.slice(0, 2).map((article) => (
                    <article
                      key={article.id}
                      className="group relative bg-gradient-to-r from-red-500 to-pink-500 rounded-xl overflow-hidden text-white"
                    >
                      <Image
                        src={article.featuredImage.url || "/placeholder.svg"}
                        alt={article.featuredImage.alt}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover opacity-30 group-hover:opacity-20 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">🔥 TRENDING</span>
                          <time className="text-xs opacity-90" dateTime={article.publishedAt}>
                            {formatDate(article.publishedAt)}
                          </time>
                        </div>
                        <h3 className="text-lg font-bold mb-2 line-clamp-2">
                          <Link
                            href={`/${article.category.toLowerCase()}/${article.slug}`}
                            className="hover:text-yellow-300 transition-colors"
                          >
                            {article.title}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-200 line-clamp-2 mb-3">{article.excerpt}</p>
                        <div className="flex items-center space-x-3 text-xs">
                          <span>{article.author.name}</span>
                          <span>•</span>
                          <span>{article.readTime} min read</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Featured Articles */}
            {featuredArticles.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                <div className="space-y-8">
                  {featuredArticles.map((article, index) => (
                    <article
                      key={article.id}
                      className={`group ${index === 0 ? "border-l-4 pl-6" : ""}`}
                      style={index === 0 ? { borderColor: category.color } : {}}
                    >
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <Link href={`/${article.category.toLowerCase()}/${article.slug}`}>
                            <Image
                              src={article.featuredImage.url || "/placeholder.svg"}
                              alt={article.featuredImage.alt}
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
                            />
                          </Link>
                        </div>
                        <div className="md:w-2/3">
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                              ⭐ FEATURED
                            </span>
                            <time className="text-sm text-gray-500" dateTime={article.publishedAt}>
                              {formatDate(article.publishedAt)}
                            </time>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                            <Link href={`/${article.category.toLowerCase()}/${article.slug}`}>{article.title}</Link>
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-2">
                                <Image
                                  src={article.author.avatar || "/placeholder.svg"}
                                  alt={article.author.name}
                                  width={24}
                                  height={24}
                                  className="rounded-full"
                                />
                                <span>{article.author.name}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{article.readTime} min read</span>
                              </div>
                            </div>
                            <Link
                              href={`/${article.category.toLowerCase()}/${article.slug}`}
                              className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                            >
                              Read more →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Regular Articles */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularArticles.map((article) => (
                  <article
                    key={article.id}
                    className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <Link href={`/${article.category.toLowerCase()}/${article.slug}`}>
                      <Image
                        src={article.featuredImage.url || "/placeholder.svg"}
                        alt={article.featuredImage.alt}
                        width={400}
                        height={225}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                        <span>•</span>
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} min read</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                        <Link href={`/${article.category.toLowerCase()}/${article.slug}`}>{article.title}</Link>
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">{article.excerpt}</p>
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
            </section>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <SidebarAd />

              {/* Category Stats */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Articles</span>
                    <span className="font-semibold text-gray-900">{articles.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Featured</span>
                    <span className="font-semibold text-gray-900">{featuredArticles.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Trending</span>
                    <span className="font-semibold text-gray-900">{trendingArticles.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Authors</span>
                    <span className="font-semibold text-gray-900">
                      {new Set(articles.map((a) => a.author.id)).size}
                    </span>
                  </div>
                </div>
              </div>

              {/* Related Categories */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore Other Categories</h3>
                <div className="space-y-3">
                  {dummyData.categories
                    .filter((cat) => cat.slug !== params.slug)
                    .map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/category/${cat.slug}`}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{cat.name}</span>
                        <span className="text-xs text-gray-500 ml-auto">
                          {getArticlesByCategory(cat.slug).length} articles
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return dummyData.categories.map((category) => ({
    slug: category.slug,
  }))
}
