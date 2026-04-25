import { getCaseStudyBySlug, getHomeContent } from "@/lib/content"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, FileText, BarChart, Settings, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  const home = getHomeContent()

  if (!study) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Premium Header */}
      <div className={`w-full py-20 bg-gradient-to-br ${study.theme || 'from-primary to-accent'} text-white relative overflow-hidden`}>
        {/* Background texture/overlay */}
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Portfolio</span>
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              {study.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              {study.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-3xl">
              {study.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-white text-primary hover:bg-white/90 rounded-xl px-8 py-6 h-auto text-lg font-bold shadow-xl">
                <a href={study.externalUrl} target="_blank" rel="noopener noreferrer">
                  View Live Project
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Body */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-border">
              {/* Quick Summary Cards */}
              <div className="grid sm:grid-cols-3 gap-6 mb-16 pb-16 border-b border-border">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Role</p>
                  <p className="text-lg font-serif font-bold text-foreground">{study.role}</p>
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Key Impacts</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {study.metrics.map(metric => (
                      <span key={metric} className="text-sm font-medium text-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Case Study Content (Markdown) */}
              <div className="prose max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{study.content}</ReactMarkdown>
              </div>
            </div>
          </div>

          {/* Sidebar - PRD & Documents */}
          <div className="lg:col-span-4 space-y-8">
            {/* PRD Quick Access */}
            <div className="bg-secondary/5 border border-secondary/10 rounded-3xl p-8 sticky top-32">
              <h3 className="text-2xl font-serif font-bold mb-6 text-secondary flex items-center gap-3">
                <FileText className="w-6 h-6" />
                Project Intelligence
              </h3>
              
              <div className="space-y-4">
                {study.prdUrl && (
                  <a href={study.prdUrl} target="_blank" rel="noopener noreferrer" className="block group p-4 bg-white border border-border rounded-2xl hover:border-secondary transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">PRD</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Requirements Doc</p>
                      </div>
                    </div>
                  </a>
                )}

                {study.researchUrl && (
                  <a href={study.researchUrl} target="_blank" rel="noopener noreferrer" className="block group p-4 bg-white border border-border rounded-2xl hover:border-secondary transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Search className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Market Research</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">User Analysis</p>
                      </div>
                    </div>
                  </a>
                )}

                {study.uatUrl && (
                  <a href={study.uatUrl} target="_blank" rel="noopener noreferrer" className="block group p-4 bg-white border border-border rounded-2xl hover:border-secondary transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                        <BarChart className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">UAT Report</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Testing Results</p>
                      </div>
                    </div>
                  </a>
                )}

                {study.architectureUrl && (
                  <a href={study.architectureUrl} target="_blank" rel="noopener noreferrer" className="block group p-4 bg-white border border-border rounded-2xl hover:border-secondary transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                        <Settings className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Architecture</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Tech Stack</p>
                      </div>
                    </div>
                  </a>
                )}
              </div>

              <div className="mt-10 p-8 bg-secondary text-secondary-foreground rounded-3xl border border-white/10 shadow-lg">
                <p className="text-sm font-bold mb-3 italic tracking-wide uppercase opacity-80">Product Perspective</p>
                <p className="text-base leading-relaxed font-serif">
                  "This project was designed with a focus on solving specific pedagogical gaps through intuitive UI and robust back-end logic."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
