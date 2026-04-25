"use client"

import { Mail, Download, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface HeroSectionProps {
  content: {
    label: string
    title: string
    description: string
    metrics: { value: string; label: string }[]
  }
  email: string
}

export function HeroSection({ content, email }: HeroSectionProps) {
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
                className="w-full h-full object-contain transition-all duration-500"
              />

              {/* Floating Status */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 md:-left-8 bg-white/90 backdrop-blur-md border border-primary/10 p-4 rounded-xl shadow-xl hidden sm:flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">Open to PM roles</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
