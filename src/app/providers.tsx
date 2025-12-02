"use client"

import { AuthProvider } from "@/lib/auth-context"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from "react"

export function Providers({ children }: { children: ReactNode }) {
    const [queryClient] = useState(
        () => 
            new QueryClient({ 
                defaultOptions: { 
                    queries: { 
                        staleTime: 1000 * 60 * 5, 
                        retry: 2,
                    },
                },
            }),
    )

    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </AuthProvider>
    )
}