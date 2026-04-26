"use client"

import { ArrowRight } from "lucide-react"
import { CaseStudy } from "@/lib/content"
import { LoadingLink } from "@/components/loading-link"
import { SectionWrapper, staggerContainer, fadeInUp } from "./section-wrapper"
import { motion } from "framer-motion"

interface PortfolioSectionProps {
  caseStudies: CaseStudy[]
  config: { title: string; subtitle: string }
}

export function PortfolioSection({ caseStudies, config }: PortfolioSectionProps) {
  return (
    <SectionWrapper id="portfolio" className="container mx-auto px-4 py-16 md:py-28">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Section header */}
        <motion.div variants={fadeInUp} className="mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary mb-4">
            <span className="text-sm font-medium">{config.subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
            {config.title}
          </h2>
        </motion.div>

        {/* Case study grid */}
        <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study) => (
            <motion.div
              key={study.slug}
              variants={fadeInUp}
              className="group relative bg-white border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${study.theme || 'from-primary/30 via-accent/20 to-accent/10'} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative p-8 flex flex-col h-full">
                {/* Tag */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-primary/5 text-primary border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title and subtitle */}
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-secondary font-semibold mb-4">{study.role}</p>
                <p className="text-base text-foreground/80 leading-relaxed mb-6 flex-grow">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 gap-3 mb-8 pt-6 border-t border-border">
                  {study.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/60"></div>
                      <span className="text-sm font-medium text-muted-foreground">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto flex flex-wrap items-center gap-6">
                  <a
                    href={study.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-primary hover:gap-3 transition-all group/link"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>

                  <LoadingLink
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-secondary hover:text-secondary/80 transition-all"
                  >
                    <span>Product Details</span>
                    <span className="text-[10px] bg-secondary/10 px-2 py-0.5 rounded text-secondary-foreground font-medium lowercase">Tech Specs • Product Logic</span>
                  </LoadingLink>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div variants={fadeInUp} className="flex justify-center">
          <a
            href="#portfolio"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            <span>View all projects</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
