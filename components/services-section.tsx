"use client"

import { Mail, Layout, Cpu, BookOpen, Target, Settings, BarChart, GraduationCap, Bot, Code } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Service } from "@/lib/content"
import { SectionWrapper, staggerContainer, fadeInUp } from "./section-wrapper"
import { motion } from "framer-motion"

const iconMap: Record<string, any> = {
  Layout,
  Cpu,
  BookOpen,
  Target,
  Settings,
  BarChart,
  GraduationCap,
  Bot,
  Code
}

interface ServicesSectionProps {
  services: Service[]
  config: { title: string; subtitle: string }
}

export function ServicesSection({ services, config }: ServicesSectionProps) {
  return (
    <SectionWrapper id="services" className="container mx-auto px-4 py-16 md:py-28">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Section header */}
        <motion.div variants={fadeInUp} className="mb-16 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary mb-4">
            <span className="text-sm font-medium">{config.subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-4">
            {config.title}
          </h2>
        </motion.div>

        {/* Services grid */}
        <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Settings
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white border border-border rounded-xl p-8 hover:border-primary/40 hover:shadow-lg transition-all group"
              >
                {/* Icon */}
                <div className="text-primary mb-6">
                  <IconComponent className="w-10 h-10" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
