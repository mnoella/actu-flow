"use client"

import { useEffect, useRef, useState } from "react"
import { useNewsQuery } from "@/hooks/useNewsQuery"
import NewsCard from "@/components/NewsCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function RecentCarouselContent() {
  const { data: articles = [] } = useNewsQuery()
  const slides = articles.slice(0, 10)
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(3)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    const getVisible = () => {
      if (typeof window === "undefined") return 1
      if (window.matchMedia("(min-width: 1024px)").matches) return 3
      if (window.matchMedia("(min-width: 768px)").matches) return 2
      return 1
    }

    const update = () => {
      setVisible(getVisible())
    }

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const maxIndex = Math.max(0, slides.length - visible)

  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex)
    }
  }, [visible, slides.length, index, maxIndex])

  useEffect(() => {
    if (slides.length <= visible) return

    const start = () => {
      stop()
      intervalRef.current = window.setInterval(() => {
        setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
      }, 4000)
    }

    const stop = () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    if (!paused) start()
    return stop
  }, [slides.length, visible, paused, maxIndex])

  if (!slides.length) return null

  const slideWidth = 100 / visible

  return (
    <section
      className="relative w-full max-w-6xl mx-auto mb-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * slideWidth}%)` }}
        >
          {slides.map((a, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-2"
              style={{ flex: `0 0 ${slideWidth}%`, maxWidth: `${slideWidth}%` }}
            >
              <div className="h-full">
                <NewsCard article={a} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label="Précédent"
        onClick={() => setIndex((i) => (i - 1 < 0 ? maxIndex : i - 1))}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-900/70 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-800 transition"
      >
        <ChevronLeft className="w-5 h-5 text-slate-900 dark:text-white" />
      </button>

      <button
        aria-label="Suivant"
        onClick={() => setIndex((i) => (i >= maxIndex ? 0 : i + 1))}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-900/70 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-800 transition"
      >
        <ChevronRight className="w-5 h-5 text-slate-900 dark:text-white" />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === index ? "bg-blue-600 dark:bg-blue-400" : "bg-slate-300 dark:bg-slate-600"
            }`}
            aria-label={`Aller au slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
