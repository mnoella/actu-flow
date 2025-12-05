"use client"

import { useSuspenseQuery } from "@tanstack/react-query"

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

export function useNewsQuery() {
  return useSuspenseQuery({
    queryKey: ["news"],
    queryFn: async (): Promise<NewsArticle[]> => {
      const response = await fetch("/api/news")

      if (!response.ok) {
        throw new Error("Faild to fetch neius")
      }

      return response.json()
    },
  })
}
