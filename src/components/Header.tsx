import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          ActuFlow
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/actualites"
            className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
          >
            Actualités
          </Link>
        </nav>
      </div>
    </header>
  )
}
