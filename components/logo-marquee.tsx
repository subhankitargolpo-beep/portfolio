interface LogoMarqueeProps {
  items: string[]
}

export function LogoMarquee({ items }: LogoMarqueeProps) {
  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-accent to-secondary py-12 my-16">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-shrink-0">
              <span className="text-primary-foreground font-bold text-3xl md:text-4xl px-8">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
