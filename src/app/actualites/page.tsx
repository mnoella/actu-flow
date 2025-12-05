"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useNewsQuery } from "@/hooks/useNewsQuery"
import { useAuth } from '@/lib/auth-context'
import NewsCard from "@/components/NewsCard"
import { Loader2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ActualitesPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const { data: articles, isLoading, error } = useNewsQuery()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <header className="bg-white dark:bg-slate-800 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition">
              <ArrowLeft className="w-5 h-5 text-slate-900 dark:text-white" />
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white">ActuFlow</h1>
              <p className="text-slate-600 dark:text-slate-300 mt-1">Découvrez les dernières actualités en temps réel</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Chargement */}
        {isLoading && (
          <div className="flex justify-center items-center min-h-96">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
              <p className="text-slate-600 dark:text-slate-300">Chargement des actualités...</p>
            </div>
          </div>
        )}

        {/* Erreur */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <p className="text-red-800 dark:text-red-300 font-semibold">❌ Erreur lors du chargement</p>
            <p className="text-red-700 dark:text-red-400 mt-2">
              {error instanceof Error ? error.message : "Une erreur est survenue"}
            </p>
          </div>
        )}

        {/* Articles */}
        {articles && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        )}

        {/* Aucun article */}
        {articles && articles.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-300 text-lg">Aucun article trouvé.</p>
          </div>
        )}
      </main>
    </div>
  )
}