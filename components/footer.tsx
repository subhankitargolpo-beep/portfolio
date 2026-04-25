import { Mail, Linkedin, Github, Twitter, ExternalLink } from "lucide-react"

const socialIconMap: Record<string, any> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Twitter: Twitter,
}

interface FooterProps {
  content: {
    text: string
    socialLinks: { platform: string; url: string }[]
  }
  email: string
}

export function Footer({ content, email }: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-primary/5 to-primary/10 border-t border-border py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand & Socials */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">P</span>
              </div>
              <span className="font-serif font-bold text-lg text-foreground">Portfolio</span>
            </div>
            <div className="flex gap-3">
              {content.socialLinks.map((link) => {
                const IconComponent = socialIconMap[link.platform] || ExternalLink
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                    title={link.platform}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                )
              })}
              <a
                href={`mailto:${email}`}
                className="w-9 h-9 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Copyright & Text */}
          <div className="text-center md:text-right text-muted-foreground text-sm">
            <p>{content.text}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
