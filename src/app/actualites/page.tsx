"use client"

import { Suspense, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { NewsGridSuspense } from "@/components/NewsGridSuspense"
import { NewsListFallback } from "@/components/NewsListFallback"
import Header from "@/components/Header"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ArticlesPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">Tous les articles</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">Explorez toutes les actualités ici</p>
        </div>
        
        <Suspense fallback={<NewsListFallback />}>
          <NewsGridSuspense />
        </Suspense>
      </main>
    </div>
  )
}
