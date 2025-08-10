import Link from "next/link"
import { getArticlesByCategory } from "@/lib/articles"
import dummyData from "@/data/dummy-data.json"

export function CategoryTeasers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {dummyData.categories.map((category) => {
        const articles = getArticlesByCategory(category.slug).slice(0, 3)

        return (
          <div key={category.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: category.color }} />
              <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
            </div>
            <p className="text-gray-600 mb-6">{category.description}</p>

            <div className="space-y-4 mb-6">
              {articles.map((article) => (
                <div key={article.id}>
                  <Link
                    href={`/${article.category.toLowerCase()}/${article.slug}`}
                    className="text-gray-900 hover:text-indigo-600 font-medium transition-colors line-clamp-2"
                  >
                    {article.title}
                  </Link>
                  <p className="text-sm text-gray-500 mt-1">{article.readTime} min read</p>
                </div>
              ))}
            </div>

            <Link
              href={`/category/${category.slug}`}
              className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors"
            >
              View all {category.name.toLowerCase()} articles →
            </Link>
          </div>
        )
      })}
    </div>
  )
}
