"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { login } = useAuth()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    console.log("[v0] handleLogin called with email:", email)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Store user info in localStorage
      console.log("[v0] Storing user in localStorage")
      localStorage.setItem(
        "user",
        JSON.stringify({ email, rememberMe, loginTime: new Date().toISOString() })
      )

      console.log("[v0] Calling login() function")
      login()

      setTimeout(() => {
        console.log("[v0] Redirecting to /")
        router.push("/")
      }, 100)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Se connecter</h2>
        <p className="text-gray-600 text-sm mt-2">Entrez vos identifiants pour accéder à votre compte</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Mot de passe
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300"
            />
            <span className="text-sm text-gray-600">Se souvenir de moi</span>
          </label>
          <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
            Mot de passe oublié?
          </Link>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {loading ? "Connexion..." : "Connexion"}
          </button>
          <Link
            href="/auth/signup"
            className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg font-medium text-center hover:bg-blue-50 transition"
          >
            S&apos;inscrire
          </Link>
        </div>
      </form>

      {/* <div className="flex justify-center gap-4 pt-4">
        <span className="text-xs text-gray-500 uppercase tracking-wide">Suivez-nous</span>
        <div className="flex gap-3">
          <a href="#" className="text-gray-400 hover:text-gray-600">
            𝕏
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            f
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600">
            📷
          </a>
        </div>
      </div> */}
    </div>
  )
}
