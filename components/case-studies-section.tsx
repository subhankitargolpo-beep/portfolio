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

          <motion.div variants={staggerContainer} className="grid gap-12">
            {caseStudies.map((study) => (
              <motion.div key={study.slug} variants={fadeInUp}>
                <LoadingLink 
                  href={`/case-studies/${study.slug}`}
                  className="group block bg-white rounded-3xl overflow-hidden border border-border hover:border-primary/40 transition-all hover:shadow-2xl"
                >
                  <div className="grid md:grid-cols-2">
                    {/* Left: Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex gap-2 mb-6">
                        {study.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-600 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-lg text-foreground/70 mb-8 line-clamp-2">
                        {study.description}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm font-bold uppercase tracking-widest text-primary">
                        <span>Read Case Study</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>

                    {/* Right: Metrics & Highlights */}
                    <div className={`p-8 md:p-12 bg-gradient-to-br ${study.theme} text-white flex flex-col justify-center`}>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                            <Target className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-widest font-bold opacity-70 mb-1">Role</p>
                            <p className="text-lg font-serif font-bold">{study.role}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                            <TrendingUp className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-widest font-bold opacity-70 mb-1">Key Metrics</p>
                            <div className="space-y-1">
                              {study.metrics.map(metric => (
                                <p key={metric} className="text-sm font-medium">{metric}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
