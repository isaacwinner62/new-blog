import dummyData from "@/data/dummy-data.json"

export function getAllArticles() {
  return dummyData.articles.filter((article) => article.status === "published")
}

export function getArticleBySlug(slug: string) {
  return dummyData.articles.find((article) => article.slug === slug)
}

export function getArticleById(id: string) {
  return dummyData.articles.find((article) => article.id === id)
}

export function getArticlesByCategory(category: string) {
  return dummyData.articles.filter(
    (article) => article.category.toLowerCase() === category.toLowerCase() && article.status === "published",
  )
}

export function getArticlesByTag(tag: string) {
  return dummyData.articles.filter((article) => article.tags.includes(tag) && article.status === "published")
}

export function getRelatedArticles(currentId: string, tags: string[], limit = 3) {
  return dummyData.articles
    .filter(
      (article) =>
        article.id !== currentId && article.status === "published" && article.tags.some((tag) => tags.includes(tag)),
    )
    .sort((a, b) => {
      const aMatches = a.tags.filter((tag) => tags.includes(tag)).length
      const bMatches = b.tags.filter((tag) => tags.includes(tag)).length
      return bMatches - aMatches
    })
    .slice(0, limit)
}

export function getFeaturedArticles(limit = 3) {
  return dummyData.articles
    .filter((article) => article.status === "published")
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}

export function searchArticles(query: string) {
  const lowercaseQuery = query.toLowerCase()
  return dummyData.articles.filter(
    (article) =>
      article.status === "published" &&
      (article.title.toLowerCase().includes(lowercaseQuery) ||
        article.excerpt.toLowerCase().includes(lowercaseQuery) ||
        article.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
        article.category.toLowerCase().includes(lowercaseQuery)),
  )
}
