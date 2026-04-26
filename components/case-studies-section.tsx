"use client"

import { LoadingLink } from "@/components/loading-link"
import { ArrowRight, BookOpen, Target, TrendingUp } from "lucide-react"
import { CaseStudy } from "@/lib/content"
import { SectionWrapper, staggerContainer, fadeInUp } from "./section-wrapper"
import { motion } from "framer-motion"

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
  config: { title: string; subtitle: string }
}

export function CaseStudiesSection({ caseStudies, config }: CaseStudiesSectionProps) {
  return (
    <SectionWrapper id="case-studies" className="bg-secondary/5 py-24">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div variants={fadeInUp} className="mb-16 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-secondary/30 bg-secondary/5 text-secondary mb-4">
              <span className="text-sm font-medium uppercase tracking-widest">{config.subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              {config.title}
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <motion.div key={study.slug} variants={fadeInUp}>
                <LoadingLink 
                  href={`/case-studies/${study.slug}`}
                  className="group block h-full bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all hover:shadow-2xl relative"
                >
                  {/* Card Header - Theme Gradient */}
                  <div className={`h-2 w-full bg-gradient-to-r ${study.theme}`}></div>
                  
                  <div className="p-8 flex flex-col h-full">
                    {/* Top Meta */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Archive ID</span>
                        <span className="text-xs font-mono font-bold text-foreground">STRAT-{study.slug.slice(0, 4).toUpperCase()}</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all">
                        <BookOpen className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title Area */}
                    <div className="mb-8 flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[9px] font-bold uppercase tracking-widest border border-border px-2 py-0.5 rounded text-muted-foreground group-hover:border-primary/20 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed italic">
                        {study.description}
                      </p>
                    </div>

                    {/* Metrics Footer */}
                    <div className="pt-6 border-t border-border mt-auto">
                      <div className="grid grid-cols-2 gap-4">
                        {study.metrics.slice(0, 2).map((metric, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Metric {i+1}</span>
                            <span className="text-xs font-bold text-foreground truncate">{metric}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Open Intelligence File</span>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Subtle Background Badge */}
                  <div className="absolute -bottom-4 -right-4 text-slate-100 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
                    <Target className="w-24 h-24" />
                  </div>
                </LoadingLink>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
