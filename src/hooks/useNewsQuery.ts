"use client"

import { useQuery } from "@tanstack/react-query";

interface NewsArticle {
    source: { id: string | null; name: string}
    author: string | null
    title: string
    description: string | null
    url: string
    urlToImage: string | null
    publishedAt: string
    content: string | null
}

// interface NewsAPIResponse {
//     status: string
//     totalResults: number
//     articles: NewsArticle[]
// }

// Appel GET
const fetchNews = async (): Promise<NewsArticle[]> => {
    const response = await fetch("/api/news");

    if (!response.ok) {
        throw new Error("Failed to fetch news");
    }

    return response.json();
}

// Tanstack + fetchNews : data, error et isLoading
export function useNewsQuery() {
    return useQuery({
        queryKey: ["news"],
        queryFn: fetchNews,
        staleTime: 1000 * 60 * 5,
        retry: 2,
    });
}


