"use client"

import { FadeIn } from "@/components/motion"

const platforms = [
  "LinkedIn", "Naukri", "Indeed", "AngelList", "Instahyre",
  "Wellfound", "IIMJobs", "Glassdoor", "Monster", "Cutshort",
]

export function LogoSlider() {
  return (
    <section className="py-14 md:py-20 border-y border-border overflow-hidden">
      <div className="max-w-site mx-auto px-5 md:px-8 mb-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground whitespace-nowrap">
              Post once, reach everywhere
            </span>
            <div className="h-px flex-1 bg-border hidden md:block" />
          </div>
        </FadeIn>
      </div>

      <div className="relative" role="marquee" aria-label="Supported job platforms">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee">
          {[0, 1].map((set) => (
            <div key={set} className="flex gap-3 md:gap-4 pr-3 md:pr-4" aria-hidden={set === 1}>
              {platforms.map((p) => (
                <div
                  key={`${set}-${p}`}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-card border border-border flex-shrink-0 hover:border-primary/20 transition-colors"
                >
                  <div className="w-6 h-6 rounded-md bg-primary/[0.06] flex items-center justify-center">
                    <span className="text-[10px] font-bold text-primary">{p.charAt(0)}</span>
                  </div>
                  <span className="text-xs font-semibold text-foreground whitespace-nowrap">{p}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
