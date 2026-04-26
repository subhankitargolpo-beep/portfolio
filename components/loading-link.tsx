"use client"

import Link, { LinkProps } from "next/link"
import { ReactNode } from "react"
import { useLoading } from "@/lib/loading-context"
import { usePathname } from "next/navigation"

interface LoadingLinkProps extends LinkProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function LoadingLink({ children, onClick, ...props }: LoadingLinkProps) {
  const { startLoading } = useLoading()
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = props.href.toString()
    const isExternal = href.startsWith("http") || href.startsWith("//")
    const isHash = href.startsWith("#") || (href.startsWith(pathname) && href.includes("#"))
    
    // If it's a normal click (not cmd+click, etc.) and it's an internal, non-hash link
    if (
      !e.defaultPrevented && 
      e.button === 0 && 
      !isExternal &&
      !isHash &&
      (!props.target || props.target === "_self") && 
      !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
    ) {
      startLoading()
    }
    
    if (onClick) {
      onClick()
    }
  }

  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  )
}
