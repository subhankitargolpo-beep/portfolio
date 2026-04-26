"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingModalProps {
  isOpen: boolean
}

export function LoadingModal({ isOpen }: LoadingModalProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShow(true)
    } else {
      // Add a small delay before hiding to ensure smooth transition
      const timer = setTimeout(() => setShow(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!show && !isOpen) return null

  return (
    <AnimatePresence>
      {(isOpen || show) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/80 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-16 h-16">
              {/* Google-style spinning dots */}
              {[
                { color: "var(--chart-3)", delay: 0 },
                { color: "var(--chart-1)", delay: 0.1 },
                { color: "var(--chart-4)", delay: 0.2 },
                { color: "var(--chart-2)", delay: 0.3 },
              ].map((dot, index) => (
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 w-4 h-4 rounded-full"
                  style={{ backgroundColor: dot.color }}
                  animate={{
                    rotate: [0, 360],
                    x: [0, 20, 0, -20, 0],
                    y: [0, 20, 40, 20, 0],
                    scale: [1, 1.2, 1, 0.8, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: dot.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
              {/* Pulsing glow background for the dots */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                 <motion.div 
                   animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
                   transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                   className="w-24 h-24 rounded-full bg-primary/20 blur-2xl"
                 />
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium text-muted-foreground tracking-widest uppercase"
            >
              Loading Experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
