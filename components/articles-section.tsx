"use client"

import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Writing } from "@/lib/content"
import { SectionWrapper, staggerContainer, fadeInUp } from "./section-wrapper"
import { motion } from "framer-motion"

interface ArticlesSectionProps {
  writings: Writing[]
  config: { title: string; subtitle: string }
}

export function ArticlesSection({ writings, config }: ArticlesSectionProps) {
  return (
    <SectionWrapper id="articles" className="container mx-auto px-4 py-16 md:py-28">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Section header */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary mb-4">
              <span className="text-sm font-medium">{config.subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
              {config.title}
            </h2>
          </div>
        </motion.div>

        {/* Articles grid */}
        <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
          {writings.map((article, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white border border-border rounded-xl p-6 md:p-8 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col"
            >
              {/* Category tag */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold w-fit mb-4">
                {article.category}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-snug flex-grow">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {article.description}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div>
                  <p className="text-xs font-semibold text-primary">{article.platform}</p>
                  <p className="text-xs text-muted-foreground">{article.date}</p>
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-semibold text-sm group-hover:translate-x-1 transition-transform"
                >
                  →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
