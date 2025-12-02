"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useNewsQuery } from "@/hooks/useNewsQuery"
import { useAuth } from '@/lib/auth-context'
import NewsCard from "@/components/NewsCard"
import { Loader2 } from 'lucide-react'

// const COUNTRIES = [
//   { code: "fr", name: "France" },
//   { code: "us", name: "États-Unis" },
//   { code: "gb", name: "Royaume-Uni" },
//   { code: "de", name: "Allemagne" },
//   { code: "es", name: "Espagne" },
//   { code: "it", name: "Italie" },
//   { code: "ca", name: "Canada" },
//   { code: "au", name: "Australie" },
//   { code: "jp", name: "Japon" },
// ]

export default function Home() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const [selectedCountry, setSelectedCountry] = useState("fr")

  // useNewsQuery: hook personnalisé qui utilise TanStack Query pour faire l'appel GET à l'API NewsAPI automatiquement
  const { data: articles, isLoading, error } = useNewsQuery(selectedCountry)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login')
    }
  }, [isAuthenticated, router])

  // Ne rien afficher tant que la vérification n'est pas faite
  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">ActuFlow</h1>
          <p className="text-slate-600 dark:text-slate-300 mt-1">Découvrez les dernières actualités en temps réels</p>

          {/* <div className="mt-4 flex items-center gap-2">
            <label htmlFor="country-select" className="text-slate-700 dark:text-slate-300 font-medium">
              Pays:
            </label>
            <select
              id="country-select"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {COUNTRIES.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div> */}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Chargement des données */}
        {isLoading && (
          <div className="flex justify-center items-center min-h-96">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-10 h-10 animate-spin text-blue-500" />
              <p className="text-slate-600 dark:text-slate-300">Chargement des actualités...</p>
            </div>
          </div>
        )}

        {/* Erreur lors de la récupération */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <p className="text-red-800 dark:text-red-300 font-semibold">❌ Erreur lors du chargement des actualités</p>
            <p className="text-red-700 dark:text-red-400 mt-2">
              {error instanceof Error ? error.message : "Une erreur est survenue"}
            </p>
          </div>
        )}

        {/* Affichage des articles */}
        {articles && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        )}

        {/* Pas d'articles trouvés */}
        {articles && articles.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-300 text-lg">Aucun article trouvé.</p>
          </div>
        )}
      </main>
    </div>
  )
}
