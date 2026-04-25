import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Geist, Geist_Mono as V0_Font_Geist_Mono, Merriweather } from "next/font/google"

// Initialize fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Subhadeep Dey - Product Manager & EdTech Specialist",
  description: "Product Manager with 8+ years in EdTech. Shipped 4 SaaS products combining AI, pedagogy, and data-driven design. Exploring PM roles in EdTech & AI.",
  keywords: "Product Manager, EdTech, AI, SaaS, Product Strategy, User Experience",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} font-sans antialiased overflow-x-hidden`} suppressHydrationWarning>{children}</body>
    </html>
  )
}
