import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AdPopup } from "@/components/ads/ad-popup"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Premium Blog - Editorial Excellence & SEO Mastery",
  description:
    "A premium editorial blog featuring the latest insights in design, development, and digital marketing with advanced SEO optimization.",
  keywords: "blog, design, development, SEO, premium content, editorial",
  authors: [{ name: "Premium Blog Team" }],
  creator: "Premium Blog",
  publisher: "Premium Blog",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://premiumblog.com",
    siteName: "Premium Blog",
    title: "Premium Blog - Editorial Excellence & SEO Mastery",
    description:
      "A premium editorial blog featuring the latest insights in design, development, and digital marketing.",
    images: [
      {
        url: "/images/default-og.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Blog - Editorial Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@premiumblog",
    creator: "@premiumblog",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="canonical" href="https://premiumblog.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1f2937" />
      </head>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <AdPopup />
      </body>
    </html>
  )
}
