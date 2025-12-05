export function NewsListFallback() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-slate-200 dark:bg-slate-700 rounded-lg h-80 animate-pulse" />
        ))}
      </div>
    </div>
  )
}
