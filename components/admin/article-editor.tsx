"use client"

import { useState } from "react"
import { Save, Eye, Tag, ImageIcon, Settings } from "lucide-react"

interface ArticleEditorProps {
  article?: {
    id: string
    title: string
    slug: string
    excerpt: string
    html: string
    category: string
    tags: string[]
    featuredImage: {
      url: string
      alt: string
    }
    seo: {
      title: string
      metaDescription: string
      canonical: string
      robots: string
      focusKeyword: string
    }
    status: string
    featured: boolean
    trending: boolean
  }
}

export function ArticleEditor({ article }: ArticleEditorProps) {
  const [activeTab, setActiveTab] = useState("content")
  const [formData, setFormData] = useState({
    title: article?.title || "",
    slug: article?.slug || "",
    excerpt: article?.excerpt || "",
    content: article?.html || "",
    category: article?.category || "",
    tags: article?.tags?.join(", ") || "",
    featuredImageUrl: article?.featuredImage?.url || "",
    featuredImageAlt: article?.featuredImage?.alt || "",
    seoTitle: article?.seo?.title || "",
    metaDescription: article?.seo?.metaDescription || "",
    canonical: article?.seo?.canonical || "",
    focusKeyword: article?.seo?.focusKeyword || "",
    status: article?.status || "draft",
    featured: article?.featured || false,
    trending: article?.trending || false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const tabs = [
    { id: "content", label: "Content", icon: ImageIcon },
    { id: "seo", label: "SEO", icon: Settings },
    { id: "settings", label: "Settings", icon: Tag },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Editor */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">{article ? "Edit Article" : "Create New Article"}</h1>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Eye className="w-4 h-4" />
                  <span>Preview</span>
                </button>
                <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
              </div>
            </div>

            {/* Title */}
            <input
              type="text"
              placeholder="Article title..."
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className="w-full text-3xl font-bold border-none outline-none placeholder-gray-400 mb-4"
            />

            {/* Slug */}
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <span>URL:</span>
              <span>premiumblog.com/</span>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => handleInputChange("slug", e.target.value)}
                className="border-none outline-none bg-transparent text-indigo-600"
              />
            </div>

            {/* Excerpt */}
            <textarea
              placeholder="Write a compelling excerpt..."
              value={formData.excerpt}
              onChange={(e) => handleInputChange("excerpt", e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg resize-none"
              rows={3}
            />
          </div>

          {/* Content Editor */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
              <div className="border border-gray-300 rounded-lg">
                {/* Toolbar */}
                <div className="border-b border-gray-200 p-3 flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <strong>B</strong>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <em>I</em>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <u>U</u>
                  </button>
                  <div className="w-px h-6 bg-gray-300" />
                  <button className="p-2 hover:bg-gray-100 rounded text-sm">H1</button>
                  <button className="p-2 hover:bg-gray-100 rounded text-sm">H2</button>
                  <button className="p-2 hover:bg-gray-100 rounded text-sm">H3</button>
                  <div className="w-px h-6 bg-gray-300" />
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <ImageIcon className="w-4 h-4" />
                  </button>
                </div>

                {/* Editor */}
                <textarea
                  value={formData.content}
                  onChange={(e) => handleInputChange("content", e.target.value)}
                  className="w-full p-4 border-none outline-none resize-none"
                  rows={20}
                  placeholder="Start writing your article..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 space-y-6">
          {/* Tabs */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="border-b border-gray-200">
              <nav className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium border-b-2 ${
                      activeTab === tab.id
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === "content" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => handleInputChange("category", e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                      <option value="">Select category</option>
                      <option value="Design">Design</option>
                      <option value="Technology">Technology</option>
                      <option value="Business">Business</option>
                      <option value="Health">Health</option>
                      <option value="Lifestyle">Lifestyle</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => handleInputChange("tags", e.target.value)}
                      placeholder="web-design, trends, ui-ux"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    <p className="text-xs text-gray-500 mt-1">Separate tags with commas</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image URL</label>
                    <input
                      type="url"
                      value={formData.featuredImageUrl}
                      onChange={(e) => handleInputChange("featuredImageUrl", e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image Alt Text</label>
                    <input
                      type="text"
                      value={formData.featuredImageAlt}
                      onChange={(e) => handleInputChange("featuredImageAlt", e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {activeTab === "seo" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">SEO Title</label>
                    <input
                      type="text"
                      value={formData.seoTitle}
                      onChange={(e) => handleInputChange("seoTitle", e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.seoTitle.length}/60 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
                    <textarea
                      value={formData.metaDescription}
                      onChange={(e) => handleInputChange("metaDescription", e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg resize-none"
                      rows={3}
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.metaDescription.length}/160 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Focus Keyword</label>
                    <input
                      type="text"
                      value={formData.focusKeyword}
                      onChange={(e) => handleInputChange("focusKeyword", e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Canonical URL</label>
                    <input
                      type="url"
                      value={formData.canonical}
                      onChange={(e) => handleInputChange("canonical", e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => handleInputChange("status", e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="scheduled">Scheduled</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={formData.featured}
                      onChange={(e) => handleInputChange("featured", e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                      Featured Article
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="trending"
                      checked={formData.trending}
                      onChange={(e) => handleInputChange("trending", e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <label htmlFor="trending" className="text-sm font-medium text-gray-700">
                      Trending Article
                    </label>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Publish Date</label>
                    <input type="datetime-local" className="w-full p-2 border border-gray-300 rounded-lg" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* SEO Score */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Score</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Title optimization</span>
                <span className="text-sm font-medium text-green-600">Good</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Meta description</span>
                <span className="text-sm font-medium text-yellow-600">Needs work</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Keyword density</span>
                <span className="text-sm font-medium text-green-600">Good</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Internal links</span>
                <span className="text-sm font-medium text-red-600">Missing</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">Overall Score</span>
                <span className="text-lg font-bold text-yellow-600">75/100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
