"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { LoadingModal } from "@/components/loading-modal"

interface LoadingContextType {
  startLoading: () => void
  stopLoading: () => void
  isLoading: boolean
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const startLoading = () => setIsLoading(true)
  const stopLoading = () => setIsLoading(false)

  // Stop loading when the pathname or search params change
  useEffect(() => {
    stopLoading()
  }, [pathname, searchParams])

  return (
    <LoadingContext.Provider value={{ startLoading, stopLoading, isLoading }}>
      {children}
      <LoadingModal isOpen={isLoading} />
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider")
  }
  return context
}
