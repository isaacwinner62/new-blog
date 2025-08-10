import { BarChart3, Users, FileText, Eye, TrendingUp, Calendar } from "lucide-react"
import dummyData from "@/data/dummy-data.json"

export function AdminDashboard() {
  const totalArticles = dummyData.articles.length
  const publishedArticles = dummyData.articles.filter((article) => article.status === "published").length
  const totalUsers = dummyData.users.length
  const featuredArticles = dummyData.articles.filter((article) => article.featured).length

  const stats = [
    {
      name: "Total Articles",
      value: totalArticles,
      icon: FileText,
      color: "bg-blue-500",
      change: "+12%",
      changeType: "positive",
    },
    {
      name: "Published",
      value: publishedArticles,
      icon: Eye,
      color: "bg-green-500",
      change: "+8%",
      changeType: "positive",
    },
    {
      name: "Total Users",
      value: totalUsers,
      icon: Users,
      color: "bg-purple-500",
      change: "+3%",
      changeType: "positive",
    },
    {
      name: "Featured",
      value: featuredArticles,
      icon: TrendingUp,
      color: "bg-yellow-500",
      change: "+15%",
      changeType: "positive",
    },
  ]

  const recentArticles = dummyData.articles
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 5)

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your blog.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <p className={`text-sm mt-2 ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
                  {stat.change} from last month
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Articles */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Articles</h2>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentArticles.map((article) => (
              <div key={article.id} className="flex items-start space-x-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: dummyData.categories.find((cat) => cat.name === article.category)?.color }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{article.title}</p>
                  <p className="text-sm text-gray-500">
                    {article.category} • {article.author.name}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    article.status === "published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {article.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Performance */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Category Performance</h2>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {dummyData.categories.map((category) => {
              const categoryArticles = dummyData.articles.filter((article) => article.category === category.name)
              const percentage = Math.round((categoryArticles.length / totalArticles) * 100)

              return (
                <div key={category.id}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{category.name}</span>
                    <span className="text-sm text-gray-500">{categoryArticles.length} articles</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: category.color,
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
