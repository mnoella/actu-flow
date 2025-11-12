"use client"

import { Calendar, ExternalLink} from "lucide-react";
import Image from "next/image";

interface NewsArticle {
  source: { id: string | null; name: string }
  author: string | null
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string | null
}

interface NewsCardProps {
  article: NewsArticle
}

export default function NewsCard({ article }: NewsCardProps) {
  // Formatter la date
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <article className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full">
      
      {article.urlToImage && (
        <Image 
            src={article.urlToImage ?? "/placeholder.svg"} 
            alt={article.title}
            width={400}
            height={192}
            className="w-full h-48 object-cover" 
            priority={false}
        />
      )}

      
      <div className="p-4 flex flex-col flex-grow">
        
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase mb-2">
          {article.source.name}
        </span>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">{article.title}</h3>

        {article.description && (
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 flex-grow">
            {article.description}
          </p>
        )}

        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
          {article.author && (
            <>
              <span>•</span>
              <span>{article.author}</span>
            </>
          )}
        </div>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors w-full justify-center"
        >
          Lire plus
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </article>
  )
}
