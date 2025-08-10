import Image from "next/image"
import Link from "next/link"

interface ArticleFooterProps {
  article: {
    author: {
      id: string
      name: string
      bio: string
      avatar: string
      social?: {
        twitter?: string
        linkedin?: string
      }
    }
  }
}

export function ArticleFooter({ article }: ArticleFooterProps) {
  return (
    <footer className="mt-12 pt-8 border-t border-gray-200">
      {/* Author Bio */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-start space-x-4">
          <Image
            src={article.author.avatar || "/placeholder.svg"}
            alt={article.author.name}
            width={80}
            height={80}
            className="rounded-full flex-shrink-0"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">About {article.author.name}</h3>
            <p className="text-gray-600 mb-4">{article.author.bio}</p>
            <div className="flex space-x-4">
              {article.author.social?.twitter && (
                <a
                  href={`https://twitter.com/${article.author.social.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  Follow on Twitter
                </a>
              )}
              {article.author.social?.linkedin && (
                <a
                  href={`https://linkedin.com/in/${article.author.social.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-800 transition-colors"
                >
                  Connect on LinkedIn
                </a>
              )}
              <Link
                href={`/author/${article.author.id}`}
                className="text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                View all articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
