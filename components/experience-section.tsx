"use client"

import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Experience } from "@/lib/content"
import { SectionWrapper, staggerContainer, fadeInUp } from "./section-wrapper"
import { motion } from "framer-motion"

interface ExperienceSectionProps {
  experience: Experience[]
  consulting: Experience[]
  config: { title: string; subtitle: string }
}

export function ExperienceSection({ experience, consulting, config }: ExperienceSectionProps) {
  return (
    <SectionWrapper id="experience" className="container mx-auto px-4 py-16 md:py-28">
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
            <span className="text-sm font-medium uppercase tracking-widest">{config.subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
            {config.title}
          </h2>
        </motion.div>

        {/* Timeline - Main Experience */}
        <motion.div variants={staggerContainer} className="space-y-6 mb-24">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative bg-white border border-border rounded-xl p-6 md:p-8 hover:border-primary/40 hover:shadow-lg transition-all group"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary rounded-l-xl group-hover:w-2 transition-all"></div>

              {/* Timeline dot */}
              <div className="absolute left-[-12px] top-8 w-6 h-6 bg-white border-4 border-primary rounded-full"></div>

              {/* Content grid */}
              <div className="grid md:grid-cols-3 gap-6 pl-4">
                {/* Left column - Company and period */}
                <div className="md:col-span-1">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Company</p>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-4">{exp.company}</h3>
                  <p className="text-sm text-secondary font-semibold">{exp.period}</p>
                </div>

                {/* Middle column - Role and description */}
                <div className="md:col-span-2">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Role</p>
                  <h4 className="text-lg font-bold text-foreground mb-3">{exp.role}</h4>
                  <div className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
                    {exp.description}
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3">
                    {exp.metrics?.map((metric, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Consulting Section */}
        <motion.div variants={fadeInUp} className="mb-16">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8 pb-4 border-b border-border">
            Consulting & Project-Based Work
          </h3>
          <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-6">
            {consulting.map((item, index) => (
              <motion.div variants={fadeInUp} key={index} className="bg-white border border-border rounded-xl p-6 hover:border-accent/40 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-xs font-bold text-accent uppercase tracking-widest">{item.period}</p>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{item.role}</h4>
                <p className="text-sm font-serif text-secondary mb-3">{item.company}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Full resume button */}
        <motion.div variants={fadeInUp} className="flex justify-center">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-4 px-8 text-lg font-semibold h-auto gap-2"
          >
            <a href="/cv/resume.pdf" download>
              <FileText className="w-5 h-5" />
              Download full resume
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
