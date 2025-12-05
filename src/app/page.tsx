import { Suspense } from "react"
import { RecentCarouselContent } from "@/components/RecentCarousel"
import { CarouselFallback } from "@/components/CarouselFallback"
import Link from "next/link"
import { Newspaper, TrendingUp, Clock } from "lucide-react"
import Header from "@/components/Header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
            Restez informé avec <span className="text-blue-600 dark:text-blue-400">ActuFlow</span>
          </h1>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">À la une</h2>
        <Suspense fallback={<CarouselFallback />}>
          <RecentCarouselContent />
        </Suspense>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          <Link
            href="/articles"
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
      </main>
    </div>
  )
}
