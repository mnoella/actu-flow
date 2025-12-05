import { Suspense } from "react"
import { RecentCarouselContent } from "@/components/RecentCarousel"
import { CarouselFallback } from "@/components/CarouselFallback"
import { NewsGridSuspense } from "@/components/NewsGridSuspense"
import { NewsListFallback } from "@/components/NewsListFallback"
import Link from "next/link"
import { Newspaper, TrendingUp, Clock, Zap } from "lucide-react"
import Header from "@/components/Header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Header />

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            Actualités en temps réel
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
            Restez informé avec <span className="text-blue-600 dark:text-blue-400">ActuFlow</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-pretty">
            Découvrez les dernières actualités d'actualités en temps réel, triées et vérifiées
          </p>
        </div>

        {/* Recent Carousel with Suspense */}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">À la une</h2>
        <Suspense fallback={<CarouselFallback />}>
          <RecentCarouselContent />
        </Suspense>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          <Link
            href="/actualites"
            className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all p-8 border-2 border-transparent hover:border-blue-500"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4 group-hover:bg-blue-500 transition">
              <Newspaper className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Toutes les actualités</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">Parcourez tous les articles et actualités</p>
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Explorer →</span>
          </Link>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 border-2 border-slate-200 dark:border-slate-700 opacity-60">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg mb-4">
              <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Tendances</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">Les sujets qui font buzz cette semaine</p>
            <span className="text-gray-400 font-semibold">Bientôt</span>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 border-2 border-slate-200 dark:border-slate-700 opacity-60">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-4">
              <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Historique</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">Votre historique de lectures</p>
            <span className="text-gray-400 font-semibold">Bientôt</span>
          </div>
        </div>

        {/* All News Grid with Suspense */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Tous les articles</h2>
          <Suspense fallback={<NewsListFallback />}>
            <NewsGridSuspense />
          </Suspense>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">ActuFlow</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Votre source d'actualités fiables et en temps réel
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-slate-900 dark:text-white mb-3">Navigation</h5>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <Link href="/actualites" className="hover:text-blue-600">
                    Actualités
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-slate-900 dark:text-white mb-3">Légal</h5>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
            <p className="text-center text-sm text-slate-600 dark:text-slate-400">
              © 2025 ActuFlow. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
