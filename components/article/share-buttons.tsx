"use client"

import { useState } from "react"
import { Share2, Twitter, Facebook, Linkedin, Link, Check } from "lucide-react"

interface ShareButtonsProps {
  article: {
    title: string
    seo: {
      canonical: string
    }
  }
}

export function ShareButtons({ article }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareUrl = article.seo.canonical
  const shareText = article.title

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
  }

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
        <Share2 className="w-4 h-4 mr-2" />
        Share Article
      </h3>
      <div className="space-y-2">
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Twitter className="w-5 h-5 text-blue-500" />
          <span className="text-sm">Share on Twitter</span>
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Facebook className="w-5 h-5 text-blue-600" />
          <span className="text-sm">Share on Facebook</span>
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Linkedin className="w-5 h-5 text-blue-700" />
          <span className="text-sm">Share on LinkedIn</span>
        </a>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors w-full text-left"
        >
          {copied ? <Check className="w-5 h-5 text-green-500" /> : <Link className="w-5 h-5 text-gray-500" />}
          <span className="text-sm">{copied ? "Link copied!" : "Copy link"}</span>
        </button>
      </div>
    </div>
  )
}
