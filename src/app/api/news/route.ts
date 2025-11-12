import { NextResponse } from "next/server";

interface NewsAPIResponse {
    status: string
    totalResults: number
    articles: Array<{
        source: { id: string | null; name: string}
        author: string | null
        title: string
        description: string | null
        url: string
        urlToImage: string | null
        publishedAt: string
        content: string | null
    }>
}

export async function GET() {
    try {
        const apiKey = process.env.NEWS_API_KEY;

        if(!apiKey) {
            return NextResponse.json({ error: "API key is not configured" }, { status: 500 })
        }

        //Appel NewsAPI
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?sources=bbc-news,cnn&apiKey=${apiKey}&pageSize=10`,
            { next: {revalidate: 300 } },
        );

        if(!response.ok) {
            throw new Error(`NewsAPI error: ${response.status}`);
        }

        const data: NewsAPIResponse = await response.json();

        // Retroune les articles
        return NextResponse.json(data.articles);
    } catch (error) {
        console.error("News API error:", error);
        return NextResponse.json({ error: "Failed to fetch news"}, { status: 500 })
    }
}