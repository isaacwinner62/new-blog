import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArticleEditor } from "@/components/admin/article-editor"
import { AdminLayout } from "@/components/admin/admin-layout"
import { getArticleById } from "@/lib/articles"

interface EditArticlePageProps {
  params: {
    id: string
  }
}

export const metadata: Metadata = {
  title: "Edit Article | Premium Blog Admin",
  description: "Edit article content and SEO settings.",
  robots: "noindex, nofollow",
}

export default function EditArticlePage({ params }: EditArticlePageProps) {
  const article = getArticleById(params.id)

  if (!article) {
    notFound()
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Edit Article</h1>
          <p className="text-gray-600">Update your content and SEO settings.</p>
        </div>
        <ArticleEditor article={article} />
      </div>
    </AdminLayout>
  )
}
