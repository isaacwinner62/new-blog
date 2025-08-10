import Image from "next/image"
import Link from "next/link"
import { getFeaturedArticles } from "@/lib/articles"

export function Hero() {
  const featuredArticles = getFeaturedArticles(1)
  const heroArticle = featuredArticles[0]

  if (!heroArticle) return null

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroArticle.featuredImage.url || "/placeholder.svg"}
          alt={heroArticle.featuredImage.alt}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="mb-4">
            <span className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {heroArticle.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{heroArticle.title}</h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">{heroArticle.excerpt}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${heroArticle.category.toLowerCase()}/${heroArticle.slug}`}
              className="btn-primary inline-flex items-center justify-center"
            >
              Read Article
            </Link>
            <Link
              href="/about"
              className="btn-secondary bg-white/10 text-white hover:bg-white/20 border-white/20 inline-flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
