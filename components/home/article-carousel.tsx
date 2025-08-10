"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { formatDate } from "@/lib/utils"
import dummyData from "@/data/dummy-data.json"

export function ArticleCarousel() {
  const [activeCategory, setActiveCategory] = useState("Technology")
  const [currentIndex, setCurrentIndex] = useState(0)

  const categoryArticles = dummyData.articles.filter(
    (article) => article.category === activeCategory && article.status === "published",
  )

  const articlesPerView = 3
  const maxIndex = Math.max(0, categoryArticles.length - articlesPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentIndex(0)
  }

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {dummyData.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.name)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              activeCategory === category.name
                ? "text-white shadow-lg transform scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            style={{
              backgroundColor: activeCategory === category.name ? category.color : undefined,
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
            Latest in {activeCategory}
          </h3>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / articlesPerView)}%)` }}
          >
            {categoryArticles.map((article) => (
              <div key={article.id} className="w-1/3 flex-shrink-0 px-3">
                <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <Link href={`/${article.category.toLowerCase()}/${article.slug}`}>
                    <Image
                      src={article.featuredImage.url || "/placeholder.svg"}
                      alt={article.featuredImage.alt}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <time className="text-sm text-gray-500" dateTime={article.publishedAt}>
                        {formatDate(article.publishedAt)}
                      </time>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">{article.readTime} min read</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      <Link
                        href={`/${article.category.toLowerCase()}/${article.slug}`}
                        className="hover:text-indigo-600 transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h4>
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
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-indigo-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
