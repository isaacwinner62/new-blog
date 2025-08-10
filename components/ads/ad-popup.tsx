"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import dummyData from "@/data/dummy-data.json"

export function AdPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    if (!dummyData.ads.popup.enabled) return

    // Check if popup was recently shown
    const lastShown = localStorage.getItem("popup-last-shown")
    const now = Date.now()
    const frequency = dummyData.ads.popup.frequency * 60 * 60 * 1000 // Convert hours to milliseconds

    if (lastShown && now - Number.parseInt(lastShown) < frequency) {
      return
    }

    // Track scroll progress
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 50 && !hasScrolled) {
        setHasScrolled(true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Show popup after scroll or time delay
    const timer = setTimeout(() => {
      if (hasScrolled || window.innerWidth > 768) {
        // Don't auto-show on mobile
        setIsVisible(true)
        localStorage.setItem("popup-last-shown", now.toString())
      }
    }, 5000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [hasScrolled])

  const closePopup = () => {
    setIsVisible(false)
    // Set longer suppression if user manually closes
    const suppressUntil = Date.now() + 7 * 24 * 60 * 60 * 1000 // 7 days
    localStorage.setItem("popup-last-shown", suppressUntil.toString())
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closePopup()
    }
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={closePopup}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="bg-white rounded-lg max-w-md w-full relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 text-center">
          <Image
            src={dummyData.ads.popup.image || "/placeholder.svg"}
            alt="Special Offer"
            width={400}
            height={200}
            className="w-full rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">{dummyData.ads.popup.title}</h3>
          <p className="text-gray-600 mb-4">{dummyData.ads.popup.description}</p>
          <button className="btn-primary w-full">{dummyData.ads.popup.cta}</button>
        </div>
      </div>
    </div>
  )
}
