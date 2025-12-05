export function CarouselFallback() {
  return (
    <div className="w-full max-w-6xl mx-auto mb-16">
      <div className="grid grid-cols-3 gap-4 rounded-xl overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="bg-slate-200 dark:bg-slate-700 h-64 rounded-lg animate-pulse" />
        ))}
      </div>
    </div>
  )
}
