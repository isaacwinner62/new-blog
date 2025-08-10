interface JsonLdBase {
  "@context"?: string
  "@type": string
}

interface ArticleJsonLd extends JsonLdBase {
  headline: string
  description: string
  image: string[]
  datePublished: string
  dateModified: string
  author: {
    "@type": "Person"
    name: string
    description?: string
  }
  publisher: {
    "@type": "Organization"
    name: string
    logo: {
      "@type": "ImageObject"
      url: string
    }
  }
  mainEntityOfPage: {
    "@type": "WebPage"
    "@id": string
  }
  articleSection?: string
  keywords?: string
  wordCount?: number
  timeRequired?: string
}

interface WebSiteJsonLd extends JsonLdBase {
  name: string
  description: string
  url: string
  potentialAction?: {
    "@type": "SearchAction"
    target: string
    "query-input": string
  }
}

interface BreadcrumbJsonLd extends JsonLdBase {
  itemListElement: Array<{
    "@type": "ListItem"
    position: number
    name: string
    item: string
  }>
}

type JsonLdData =
  | (ArticleJsonLd & { type: "Article" })
  | (WebSiteJsonLd & { type: "WebSite" })
  | (BreadcrumbJsonLd & { type: "BreadcrumbList" })

export function generateJsonLd(data: JsonLdData) {
  const baseJsonLd = {
    "@context": "https://schema.org",
    "@type": data.type,
  }

  // Remove the type property and spread the rest
  const { type, ...rest } = data

  return {
    ...baseJsonLd,
    ...rest,
  }
}

export function generateMetaTags(data: {
  title: string
  description: string
  canonical?: string
  image?: string
  type?: "website" | "article"
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}) {
  const tags = [
    { name: "description", content: data.description },
    { property: "og:title", content: data.title },
    { property: "og:description", content: data.description },
    { property: "og:type", content: data.type || "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: data.title },
    { name: "twitter:description", content: data.description },
  ]

  if (data.canonical) {
    tags.push({ property: "og:url", content: data.canonical })
  }

  if (data.image) {
    tags.push({ property: "og:image", content: data.image }, { name: "twitter:image", content: data.image })
  }

  if (data.type === "article") {
    if (data.publishedTime) {
      tags.push({ property: "article:published_time", content: data.publishedTime })
    }
    if (data.modifiedTime) {
      tags.push({ property: "article:modified_time", content: data.modifiedTime })
    }
    if (data.author) {
      tags.push({ property: "article:author", content: data.author })
    }
    if (data.section) {
      tags.push({ property: "article:section", content: data.section })
    }
    if (data.tags) {
      data.tags.forEach((tag) => {
        tags.push({ property: "article:tag", content: tag })
      })
    }
  }

  return tags
}
