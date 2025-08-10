import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Tag } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface ArticleHeaderProps {
  article: {
    title: string
    excerpt: string
    author: {
      name: string
      avatar: string
      bio: string
    }
    publishedAt: string
    readTime: number
    category: string
    tags: string[]
    featuredImage: {
      url: string
      alt: string
    }
  }
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="mb-8">
      {/* Breadcrumb */}
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/category/${article.category.toLowerCase()}`} className="hover:text-indigo-600">
              {article.category}
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 truncate">{article.title}</li>
        </ol>
      </nav>

      {/* Featured Image */}
      <div className="mb-8">
        <Image
          src={article.featuredImage.url || "/placeholder.svg"}
          alt={article.featuredImage.alt}
          width={1200}
          height={630}
          className="w-full aspect-video object-cover rounded-lg"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

      {/* Title and Excerpt */}
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          {" "}
          {/* Updated typography classes */}
          {article.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">{article.excerpt}</p>
      </div>

      {/* Article Meta */}
      <div className="flex flex-wrap items-center gap-6 py-4 border-t border-b border-gray-200">
        {/* Author */}
        <div className="flex items-center space-x-3">
          <Image
            src={article.author.avatar || "/placeholder.svg"}
            alt={article.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-medium text-gray-900">{article.author.name}</p>
          </div>
        </div>

        {/* Publish Date */}
        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
        </div>

        {/* Read Time */}
        <div className="flex items-center space-x-2 text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{article.readTime} min read</span>
        </div>

        {/* Category */}
        <div className="flex items-center space-x-2">
          <Tag className="w-4 h-4 text-gray-600" />
          <Link
            href={`/category/${article.category.toLowerCase()}`}
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            {article.category}
          </Link>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tag/${tag}`}
              className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
