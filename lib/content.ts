import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface HomeContent {
  siteName: string
  email: string
  navigation: { label: string; href: string }[]
  hero: {
    label: string
    title: string
    description: string
    metrics: { value: string; label: string }[]
  }
  marquee: string[]
  sections: {
    [key: string]: { title: string; subtitle: string; story?: string }
  }
  footer: {
    text: string
    socialLinks: { platform: string; url: string }[]
  }
}

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  role: string
  metrics: string[]
  externalUrl: string
  featured: boolean
  theme: string
  content: string
  prdUrl?: string
  researchUrl?: string
  uatUrl?: string
  architectureUrl?: string
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
  metrics: string[]
  order: number
}

export interface Writing {
  title: string
  description: string
  date: string
  url: string
  category: string
  platform: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Service {
  title: string
  description: string
  icon: string
}

export function getHomeContent(): HomeContent {
  const filePath = path.join(contentDirectory, 'home.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContent)
  return data as HomeContent
}

export function getCaseStudies(): CaseStudy[] {
  const dir = path.join(contentDirectory, 'case-studies')
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir)
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(dir, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      // Validation
      if (!data.title || !data.description || !data.externalUrl) {
        throw new Error(`Missing required fields in case study: ${file}`)
      }

      return {
        slug: file.replace('.md', ''),
        content,
        ...data
      } as CaseStudy
    })
    .sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1))
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  let filePath = path.join(contentDirectory, 'case-studies', `${slug}.md`)
  if (!fs.existsSync(filePath)) {
    filePath = path.join(contentDirectory, 'strategic-case-studies', `${slug}.md`)
  }
  if (!fs.existsSync(filePath)) return null
  
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  
  return {
    slug,
    content,
    ...data
  } as CaseStudy
}

export function getExperience(): Experience[] {
  const dir = path.join(contentDirectory, 'experience')
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir)
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(dir, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)
      return data as Experience
    })
    .sort((a, b) => (a.order || 0) - (b.order || 0))
}

export function getWritings(): Writing[] {
  const dir = path.join(contentDirectory, 'writings')
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir)
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(dir, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)
      return data as Writing
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getTestimonials(): Testimonial[] {
  const dir = path.join(contentDirectory, 'testimonials')
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir)
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(dir, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)
      return data as Testimonial
    })
}

export function getSkills(): SkillGroup[] {
  const filePath = path.join(contentDirectory, 'skills.md')
  if (!fs.existsSync(filePath)) return []
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContent)
  return data.groups as SkillGroup[]
}

export function getServices(): Service[] {
  const filePath = path.join(contentDirectory, 'services.md')
  if (!fs.existsSync(filePath)) return []
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContent)
  return data.services as Service[]
}

export function getStrategicCaseStudies(): CaseStudy[] {
  const dir = path.join(contentDirectory, 'strategic-case-studies')
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir)
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(dir, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      return {
        slug: file.replace('.md', ''),
        content,
        ...data
      } as CaseStudy
    })
}
