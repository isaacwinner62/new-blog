import Link from "next/link"
import { Palette, Cpu, Briefcase, Heart, Coffee } from "lucide-react"
import { getArticlesByCategory } from "@/lib/articles"
import dummyData from "@/data/dummy-data.json"

const categoryIcons = {
  palette: Palette,
  cpu: Cpu,
  briefcase: Briefcase,
  heart: Heart,
  coffee: Coffee,
}

export function CategoryTeasers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {dummyData.categories.map((category) => {
        const articles = getArticlesByCategory(category.slug).slice(0, 3)
        const IconComponent = categoryIcons[category.icon as keyof typeof categoryIcons] || Cpu

        return (
          <div
            key={category.id}
            className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Category Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 rounded-lg text-white" style={{ backgroundColor: category.color }}>
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{articles.length} articles</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">{category.description}</p>

            {/* Recent Articles */}
            <div className="space-y-3 mb-6">
              {articles.map((article) => (
                <div key={article.id} className="group/article">
                  <Link
                    href={`/${article.category.toLowerCase()}/${article.slug}`}
                    className="block text-gray-900 hover:text-indigo-600 font-medium transition-colors text-sm line-clamp-2 group-hover/article:underline"
                  >
                    {article.title}
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">{article.readTime} min read</p>
                </div>
              ))}
            </div>

            {/* View All Link */}
            <Link
              href={`/category/${category.slug}`}
              className="inline-flex items-center text-sm font-medium transition-colors group-hover:translate-x-1 duration-200"
              style={{ color: category.color }}
            >
              View all {category.name.toLowerCase()} →
            </Link>

            {/* Decorative Element */}
            <div
              className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 -translate-y-10 translate-x-10 group-hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: category.color }}
            />
          </div>
        )
      })}
    </div>
  )
}
