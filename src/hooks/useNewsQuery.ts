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

const fetchNews = async (): Promise<NewsArticle[]> => {
  const response = await fetch("/api/news")

  if (!response.ok) {
    throw new Error("Failed to fetch news")
  }

  return response.json()
}

export function useNewsQuery() {
  return useSuspenseQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  })
}
