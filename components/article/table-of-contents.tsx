"use client"

import { useEffect, useState } from "react"
import { extractHeadings } from "@/lib/utils"

interface TableOfContentsProps {
  content: string
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<
    Array<{
      id: string
      text: string
      level: number
    }>
  >([])
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const extractedHeadings = extractHeadings(content)
    setHeadings(extractedHeadings)

    // Add IDs to actual headings in the DOM
    const headingElements = document.querySelectorAll("h2, h3")
    headingElements.forEach((heading, index) => {
      heading.id = `heading-${index}`
    })

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" },
    )

    headingElements.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [content])

  if (headings.length === 0) return null

  return (
    <nav className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-semibold text-gray-900 mb-3">Table of Contents</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block text-sm transition-colors ${
                activeId === heading.id ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-gray-900"
              } ${heading.level === 3 ? "ml-4" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
