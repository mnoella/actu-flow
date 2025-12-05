"use client"

import { useNewsQuery } from "@/hooks/useNewsQuery"
import NewsCard from "@/components/NewsCard"

export function NewsGridSuspense() {
  const { data: articles } = useNewsQuery()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <NewsCard key={`${article.url}-${index}`} article={article} />
      ))}
    </div>
  )
}
