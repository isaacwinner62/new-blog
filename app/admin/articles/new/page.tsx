import type { Metadata } from "next"
import { ArticleEditor } from "@/components/admin/article-editor"
import { AdminLayout } from "@/components/admin/admin-layout"

export const metadata: Metadata = {
  title: "New Article | Premium Blog Admin",
  description: "Create a new article with full SEO optimization.",
  robots: "noindex, nofollow",
}

export default function NewArticlePage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Create New Article</h1>
          <p className="text-gray-600">Write and optimize your content for maximum impact.</p>
        </div>
        <ArticleEditor />
      </div>
    </AdminLayout>
  )
}
