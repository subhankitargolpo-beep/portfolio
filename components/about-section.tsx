"use client"

import { Code, BookOpen, Zap } from "lucide-react"
import { SkillGroup } from "@/lib/content"
import { SectionWrapper, staggerContainer, fadeInUp } from "./section-wrapper"
import { motion } from "framer-motion"

interface AboutSectionProps {
  skills: SkillGroup[]
  config: { title: string; subtitle: string; story?: string }
}

export function AboutSection({ skills, config }: AboutSectionProps) {
  return (
    <SectionWrapper id="about" className="container mx-auto px-4 py-16 md:py-28">
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

        {/* Main content grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Left column - Story */}
          <motion.div variants={fadeInUp} className="md:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none">
              {config.story?.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-lg text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
              ))}
            </div>

            {/* Key highlights */}
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-4 pt-8">
              <motion.div variants={fadeInUp} className="bg-white border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Code className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Shipped Products</h3>
                    <p className="text-sm text-muted-foreground">From concept to paid users, end-to-end product ownership</p>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white border border-border rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Deep Content Expertise</h3>
                    <p className="text-sm text-muted-foreground">Extensive experience in curriculum and instructional design</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column - Quick facts */}
          <motion.div variants={fadeInUp} className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl border border-border p-8">
            <h3 className="text-lg font-serif font-bold text-foreground mb-6">Quick Facts</h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Location</p>
                <p className="text-foreground font-medium">Hyderabad, India (Remote Friendly)</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Focus</p>
                <p className="text-foreground text-sm font-medium">Product Manager • Technical Product Manager • Product Owner</p>
                <p className="text-muted-foreground text-xs mt-1">Specializing in EdTech & AI-first companies</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">Education</p>
                <p className="text-foreground text-xs font-medium">IIT Madras (Programming), IIM Rohtak & IBM (Product Management Certifications), Tezpur University (M.Sc Physics)</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills section */}
        <motion.div variants={fadeInUp} className="border-t border-border pt-16">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-12">Expertise & Skills</h3>
          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((group) => (
              <motion.div variants={fadeInUp} key={group.category} className="space-y-4">
                <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
