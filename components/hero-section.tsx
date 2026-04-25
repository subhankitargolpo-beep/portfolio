"use client"

import { Mail, Download, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { CaseStudy } from "@/lib/content"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  content: {
    label: string
    title: string
    description: string
    metrics: { value: string; label: string }[]
  }
  email: string
  caseStudies: CaseStudy[]
}

const bubblePositions = [
  { top: "5%", left: "-10%", delay: 0.5, color: "bg-orange-100 text-orange-600" },
  { top: "20%", right: "-15%", delay: 0.7, color: "bg-blue-100 text-blue-600" },
  { bottom: "25%", left: "-15%", delay: 0.9, color: "bg-emerald-100 text-emerald-600" },
  { top: "65%", right: "-10%", delay: 1.1, color: "bg-purple-100 text-purple-600" },
]

export function HeroSection({ content, email, caseStudies }: HeroSectionProps) {
  return (
    <section className="container mx-auto px-4 py-16 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16">
        {/* Full-width Headline Section */}
        <div className="space-y-6 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary"
          >
            <span className="text-xs md:text-sm font-medium uppercase tracking-wider">{content.label}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-[1.15] max-w-none w-full"
            dangerouslySetInnerHTML={{ __html: content.title }}
          />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left Column - Info (60% width on desktop) */}
          <div className="md:col-span-3 space-y-8 order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              {content.description}
            </motion.p>

            {/* Key metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              {content.metrics.map((metric, i) => (
                <div key={i} className="relative group">
                  <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-105 transition-transform cursor-default">{metric.value}</div>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold">{metric.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4"
            >
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-4 px-8 text-base font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] group"
              >
                <a href={`mailto:${email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Start a conversation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-2 border-primary/20 text-primary hover:bg-primary/5 rounded-lg py-4 px-8 text-base font-bold"
              >
                <a href="/cv/resume.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Image (40% width on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:col-span-2 flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative w-full max-w-sm aspect-square">
              <img
                src="/avatar/avatar.png"
                alt="Subhadeep Dey"
                className="w-full h-full object-contain transition-all duration-500 relative z-10"
              />

              {/* Product Bubbles */}
              {caseStudies.slice(0, 4).map((study, index) => (
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: bubblePositions[index].delay,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                  className="absolute z-20"
                  style={{
                    top: bubblePositions[index].top,
                    left: bubblePositions[index].left,
                    right: bubblePositions[index].right,
                    bottom: bubblePositions[index].bottom,
                  }}
                >
                  <Link href={`/case-studies/${study.slug}`}>
                    <motion.div
                      animate={{ 
                        y: [0, -8, 0],
                        rotate: [-1, 1, -1]
                      }}
                      transition={{ 
                        duration: 3 + index, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-full shadow-lg border border-white/50 backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform whitespace-nowrap",
                        bubblePositions[index].color
                      )}
                    >
                      <span className="text-xs font-bold tracking-tight">{study.title}</span>
                      <ExternalLink className="w-3 h-3 opacity-50" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
