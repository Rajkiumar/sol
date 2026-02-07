"use client"

import { FadeIn } from "@/components/motion"

const testimonials = [
  {
    quote: "We cut our average waiting time for candidates by 80%. RecruiterAI handles the tedious parts so we can focus on the human connection.",
    name: "Sarah K.",
    role: "Founder, TechStart",
    initials: "SK",
  },
  {
    quote: "The quality of our hires improved dramatically. The AI screening surfaces candidates we would have missed in manual reviews.",
    name: "Rahul M.",
    role: "Hiring Manager, GrowthCo",
    initials: "RM",
  },
  {
    quote: "As a CEO, I needed hiring to not be a bottleneck. RecruiterAI gave us back weeks of productivity every quarter.",
    name: "Priya S.",
    role: "CEO, InnovateLabs",
    initials: "PS",
    featured: true,
  },
  {
    quote: "Speed of hiring went from 45 days to under 12. Our competitors are still posting job ads the old way.",
    name: "Amit T.",
    role: "Head of HR, ScaleUp",
    initials: "AT",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 noise-bg">
      <div className="max-w-site mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="max-w-xl mb-12 md:mb-16">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
              Teams hiring smarter, every week
            </h2>
          </div>
        </FadeIn>

        {/* Asymmetric bento-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {testimonials.map((t, i) => {
            const span = i === 2 ? "md:col-span-7" : i === 3 ? "md:col-span-5" : "md:col-span-6"
            return (
              <FadeIn key={t.name} delay={i * 0.06} className={span}>
                <div className={`h-full p-6 md:p-8 rounded-2xl border border-border transition-colors hover:border-primary/15 ${
                  i === 2 ? "bg-foreground text-background" : "bg-card"
                }`}>
                  {/* Quote mark */}
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className={`mb-5 ${i === 2 ? "text-background/20" : "text-border"}`} aria-hidden="true">
                    <path d="M0 18V10.8C0 4.44 3.48 1.08 10.44 0L11.16 2.16C7.92 3 5.76 4.92 5.28 7.56H10.2V18H0ZM12.84 18V10.8C12.84 4.44 16.32 1.08 23.28 0L24 2.16C20.76 3 18.6 4.92 18.12 7.56H23.04V18H12.84Z" fill="currentColor" />
                  </svg>
                  <p className={`text-sm md:text-[15px] leading-relaxed mb-6 ${i === 2 ? "text-background/85" : "text-foreground"}`}>
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      i === 2 ? "bg-background/10" : "bg-primary/[0.06]"
                    }`}>
                      <span className={`text-[10px] font-bold ${i === 2 ? "text-background/70" : "text-primary"}`}>{t.initials}</span>
                    </div>
                    <div>
                      <div className={`text-xs font-bold ${i === 2 ? "text-background" : "text-foreground"}`}>{t.name}</div>
                      <div className={`text-[10px] ${i === 2 ? "text-background/50" : "text-muted-foreground"}`}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
