"use client"

import { Star } from "lucide-react"
import { Testimonial } from "@/lib/content"
import { SectionWrapper, staggerContainer, fadeInUp } from "./section-wrapper"
import { motion } from "framer-motion"

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  config: { title: string; subtitle: string }
}

export function TestimonialsSection({ testimonials, config }: TestimonialsSectionProps) {
  return (
    <SectionWrapper id="testimonials" className="container mx-auto px-4 py-16 md:py-28">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
            {config.title}
          </h2>
        </motion.div>

        {/* Testimonial grid */}
        <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white border border-border rounded-xl p-8 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 leading-relaxed mb-8 flex-grow">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-wider text-primary font-semibold">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
