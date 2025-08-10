import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { FeaturedArticles } from "@/components/home/featured-articles"
import { CategoryTeasers } from "@/components/home/category-teasers"
import { TrendingArticles } from "@/components/home/trending-articles"
import { ArticleCarousel } from "@/components/home/article-carousel"
import { TextArticleList } from "@/components/home/text-article-list"
import { MagazineLayout } from "@/components/home/magazine-layout"
import { LeaderboardAd } from "@/components/ads/leaderboard-ad"
import { Newsletter } from "@/components/home/newsletter"
import { generateJsonLd } from "@/lib/seo"
import dummyData from "@/data/dummy-data.json"

export const metadata: Metadata = {
  title: "Premium Blog - Editorial Excellence & SEO Mastery",
  description:
    "Discover the latest insights in design, development, business, health, and lifestyle. Premium editorial content with advanced SEO optimization.",
  openGraph: {
    title: "Premium Blog - Editorial Excellence & SEO Mastery",
    description: "Discover the latest insights across technology, business, health, and lifestyle.",
    url: "https://premiumblog.com",
    images: [
      {
        url: "/images/default-og.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Blog Homepage",
      },
    ],
  },
}

export default function HomePage() {
  const jsonLd = generateJsonLd({
    type: "WebSite",
    name: dummyData.site.name,
    description: dummyData.site.description,
    url: dummyData.site.baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${dummyData.site.baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen">
        {/* Header Leaderboard Ad */}
        <div className="no-print">
          <LeaderboardAd />
        </div>

        {/* Hero Section */}
        <Hero />

        {/* Featured Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Featured Stories
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
                Discover our most popular and impactful content, carefully curated for maximum value.
              </p>
            </div>
            <FeaturedArticles />
          </div>
        </section>

        {/* Trending Articles Carousel */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                🔥 Trending Now
              </h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span>Live updates</span>
              </div>
            </div>
            <TrendingArticles />
          </div>
        </section>

        {/* Text-based Article List */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                Latest Insights
              </h2>
              <a href="/articles" className="text-indigo-600 hover:text-indigo-800 font-medium">
                View all articles →
              </a>
            </div>
            <TextArticleList />
          </div>
        </section>

        {/* Article Carousel by Category */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ArticleCarousel />
          </div>
        </section>

        {/* Magazine-style Layout */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Editor's Choice
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
                Hand-picked articles that showcase the best of our editorial content across all categories.
              </p>
            </div>
            <MagazineLayout />
          </div>
        </section>

        {/* Category Teasers */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Explore by Category
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
                Dive deep into specific topics that matter to your professional and personal growth.
              </p>
            </div>
            <CategoryTeasers />
          </div>
        </section>

        {/* Newsletter Signup */}
        <Newsletter />
      </div>
    </>
  )
}
