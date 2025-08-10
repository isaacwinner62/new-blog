"use client"

import { useEffect, useState } from "react"
import { InlineAd } from "@/components/ads/inline-ad"
import dummyData from "@/data/dummy-data.json"

interface ArticleContentProps {
  article: {
    html: string
    id: string
  }
}

export function ArticleContent({ article }: ArticleContentProps) {
  const [processedContent, setProcessedContent] = useState("")

  useEffect(() => {
    // Process HTML content to insert ads
    const parser = new DOMParser()
    const doc = parser.parseFromString(article.html, "text/html")
    const paragraphs = doc.querySelectorAll("p")

    // Insert ads at specified positions
    dummyData.ads.inArticleSlots.forEach((slot) => {
      if (paragraphs[slot.position - 1]) {
        const adElement = doc.createElement("div")
        adElement.className = "inline-ad-slot"
        adElement.setAttribute("data-position", slot.position.toString())
        paragraphs[slot.position - 1].insertAdjacentElement("afterend", adElement)
      }
    })

    setProcessedContent(doc.body.innerHTML)
  }, [article.html])

  return (
    <div className="article-content">
      <div dangerouslySetInnerHTML={{ __html: processedContent }} />

      {/* Render inline ads */}
      {dummyData.ads.inArticleSlots.map((slot, index) => (
        <InlineAd key={index} position={slot.position} />
      ))}
    </div>
  )
}
