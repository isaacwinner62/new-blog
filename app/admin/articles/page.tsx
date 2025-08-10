import type { Metadata } from "next"
import { ArticlesList } from "@/components/admin/articles-list"
import { AdminLayout } from "@/components/admin/admin-layout"

export const metadata: Metadata = {
  title: "Articles Management | Premium Blog Admin",
  description: "Manage articles, drafts, and publishing workflow.",
  robots: "noindex, nofollow",
}

export default function ArticlesPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Articles</h1>
          <p className="text-gray-600">Manage your blog articles and publishing workflow.</p>
        </div>
        <ArticlesList />
      </div>
    </AdminLayout>
  )
}
