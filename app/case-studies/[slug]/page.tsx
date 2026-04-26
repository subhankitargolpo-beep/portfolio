import { getCaseStudyBySlug } from "@/lib/content"
import { notFound } from "next/navigation"
import { CaseStudyContent } from "@/components/case-study-content"

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)

  if (!study) {
    notFound()
  }

  return <CaseStudyContent study={study} />
}
