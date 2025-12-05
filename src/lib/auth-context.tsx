"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Vérifier au chargement si l'utilisateur est connecté (localStorage)
  useEffect(() => {
    localStorage.removeItem('user'); // déconnecté a chaque redémarrage

    const user = localStorage.getItem("user")
    console.log("[v0] Checking localStorage for user:", user)
    if (user) {
      console.log("[v0] User found, setting isAuthenticated to true")
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const login = () => {
    console.log("[v0] login() called, setting isAuthenticated to true")
    setIsAuthenticated(true)
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", JSON.stringify({ loginTime: new Date().toISOString() }))
    }
  }

  const logout = () => {
    console.log("[v0] logout() called")
    setIsAuthenticated(false)
    localStorage.removeItem("user")
  }

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Chargement...</div>
  }

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}

// Hook personnalisé pour utiliser le contexte
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider")
  }
  return context
}
