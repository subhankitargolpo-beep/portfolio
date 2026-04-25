import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogoMarquee } from "@/components/logo-marquee"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"
import { 
  getHomeContent, 
  getCaseStudies, 
  getStrategicCaseStudies,
  getExperience, 
  getWritings, 
  getTestimonials, 
  getSkills, 
  getServices 
} from "@/lib/content"

export default function Home() {
  const homeContent = getHomeContent()
  const caseStudies = getCaseStudies()
  const strategicCaseStudies = getStrategicCaseStudies()
  const experience = getExperience()
  const writings = getWritings()
  const testimonials = getTestimonials()
  const skills = getSkills()
  const services = getServices()

  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation 
        siteName={homeContent.siteName} 
        links={homeContent.navigation} 
        email={homeContent.email} 
      />
      <HeroSection 
        content={homeContent.hero} 
        email={homeContent.email} 
      />
      <LogoMarquee items={homeContent.marquee} />
      <ServicesSection 
        services={services} 
        config={homeContent.sections.services} 
      />
      <AboutSection 
        skills={skills} 
        config={homeContent.sections.about} 
      />
      <PortfolioSection 
        caseStudies={caseStudies} 
        config={homeContent.sections.portfolio} 
      />
      <CaseStudiesSection 
        caseStudies={strategicCaseStudies} 
        config={homeContent.sections.case_studies} 
      />
      <ExperienceSection 
        experience={experience} 
        config={homeContent.sections.experience} 
      />
      <TestimonialsSection 
        testimonials={testimonials} 
        config={homeContent.sections.testimonials} 
      />
      <ArticlesSection 
        writings={writings} 
        config={homeContent.sections.writings} 
      />
      <Footer 
        content={homeContent.footer} 
        email={homeContent.email} 
      />
    </main>
  )
}
