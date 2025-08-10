import { NextResponse } from "next/server"
import dummyData from "@/data/dummy-data.json"

export async function GET() {
  const baseUrl = dummyData.site.baseUrl

  const staticPages = ["", "/about", "/contact", "/privacy", "/advertise"]

  const categoryPages = dummyData.categories.map((category) => `/category/${category.slug}`)

  const articlePages = dummyData.articles.map((article) => `/${article.category.toLowerCase()}/${article.slug}`)

  const allPages = [...staticPages, ...categoryPages, ...articlePages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map((page) => {
      const url = `${baseUrl}${page}`
      const article = dummyData.articles.find((a) => page === `/${a.category.toLowerCase()}/${a.slug}`)
      const lastmod = article ? article.modifiedAt : new Date().toISOString()
      const changefreq = article ? "weekly" : "monthly"
      const priority = page === "" ? "1.0" : article ? "0.8" : "0.6"

      return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join("")}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
