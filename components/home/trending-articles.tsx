"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react"
import { formatDate } from "@/lib/utils"
import dummyData from "@/data/dummy-data.json"

export function TrendingArticles() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const trendingArticles = dummyData.articles.filter((article) => article.trending && article.status === "published")

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingArticles.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [trendingArticles.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingArticles.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + trendingArticles.length) % trendingArticles.length)
  }

  if (trendingArticles.length === 0) return null

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white">
        <div className="relative h-96 md:h-80">
          {trendingArticles.map((article, index) => (
            <div
              key={article.id}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentIndex
                  ? "translate-x-0"
                  : index < currentIndex
                    ? "-translate-x-full"
                    : "translate-x-full"
              }`}
            >
              <div className="relative h-full">
                <Image
                  src={article.featuredImage.url || "/placeholder.svg"}
                  alt={article.featuredImage.alt}
                  fill
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                <div className="relative h-full flex items-center">
                  <div className="max-w-4xl mx-auto px-6 sm:px-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-sm font-medium uppercase tracking-wide">Trending</span>
                      <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{article.category}</span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                      <Link
                        href={`/${article.category.toLowerCase()}/${article.slug}`}
                        className="hover:text-yellow-300 transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-lg text-gray-200 mb-6 max-w-2xl">{article.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span>{article.author.name}</span>
                      <span>•</span>
                      <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                      <span>•</span>
                      <span>{article.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {trendingArticles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
