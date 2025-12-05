"use client"

import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  description: string
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-cyan-400 relative overflow-hidden items-center justify-center p-12">
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-white max-w-sm">
          <div className="flex items-center gap-2 mb-12">
            <span className="text-xl font-bold">LOGO(plus tard) ActuFlow</span>
          </div>

          <h1 className="text-5xl font-bold mb-6 text-pretty">{title}</h1>
          <p className="text-lg text-blue-100 text-pretty">{description}</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  )
}
