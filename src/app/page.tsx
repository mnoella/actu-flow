"use client"

import NewsCard from "@/components/NewsCard";
import { useNewsQuery } from "@/hooks/useNewsQuery";
import { Loader } from "lucide-react";

export default function Home() {

  const { data: articles, isLoading, error } = useNewsQuery();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">

      <header className="bg-white dark:bg-slate-800 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">ActuFlow</h1>
          <p className="text-slate-600 dark:text-slate-300 mt-1">Découvrez les dernières actualités en temps réels</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* cas chargement des données */}
        {isLoading && (
          <div className="flex justify-center items-center min-h-96">
            <div className="flex flex-col items-center gap-4">
              <Loader  className="w-10 h-10 animate-spin text-blue-500" />
              <p className="text-slate-600 dark:text-slate-300">Chargement des actualités...</p>
            </div>
          </div>
        )}

        {/* cas erreur lors de la récupération des données */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <p className="text-red-800 dark:text-red-300 font-semibold">❌ Erreur lors du chargement des actualités</p>
            <p className="text-red-700 dark:text-red-400 mt-2">
              {error instanceof Error ? error.message : "Une erreur est survenue"}
            </p>
          </div>
        )}

        {/* cas affichage des articles */}
        {articles && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        )}

        {/* cas pas d'articles trouvés */}
        {articles && articles.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-300 text-lg">Aucun article trouvé.</p>
          </div>
        )}
      </main>
    </div>
  )
}