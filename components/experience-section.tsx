import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Experience } from "@/lib/content"

interface ExperienceSectionProps {
  experience: Experience[]
  config: { title: string; subtitle: string }
}

export function ExperienceSection({ experience, config }: ExperienceSectionProps) {
  return (
    <section id="experience" className="container mx-auto px-4 py-16 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary mb-4">
            <span className="text-sm font-medium">{config.subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
            {config.title}
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-6 mb-12">
          {experience.map((exp, index) => (
            <div
              key={index}
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
                  <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

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
            </div>
          ))}
        </div>

        {/* Full resume button */}
        <div className="flex justify-center">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-4 px-8 text-lg font-semibold h-auto gap-2"
          >
            <a href="/cv/resume.pdf" download>
              <FileText className="w-5 h-5" />
              Download full resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
