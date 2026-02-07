"use client"

import { useRef, useEffect, useState } from "react"
import { FadeIn } from "@/components/motion"
import { motion, useInView } from "framer-motion"

const metrics = [
  { value: 10, suffix: "x", label: "Faster screening", color: "text-primary" },
  { value: 70, suffix: "%", label: "Time-to-hire reduction", color: "text-accent-3" },
  { value: 25, suffix: "x", label: "Interview capacity", color: "text-primary" },
  { value: 89, suffix: "%", label: "Better applicants", color: "text-accent-3" },
]

const benefits = [
  { title: "Lightning-Fast Processing", description: "AI scans thousands of resumes in minutes -- not days or weeks.", tag: "Speed" },
  { title: "Dramatically Lower Time-to-Hire", description: "Reduce average hiring cycles from weeks to as little as 12 days.", tag: "Efficiency" },
  { title: "Massive Interview Capacity", description: "Handle 25x more interviews without adding a single team member.", tag: "Scale" },
  { title: "Higher Candidate Engagement", description: "Fast response times and clear communication keep top talent interested.", tag: "Retention" },
  { title: "Consistently Better Hires", description: "AI pre-screens for skills, experience, and culture fit simultaneously.", tag: "Quality" },
  { title: "Significantly Lower Costs", description: "Cut cost-per-hire by automating the most time-consuming recruiting tasks.", tag: "Savings" },
]

function AnimatedNumber({ value, suffix, color }: { value: number; suffix: string; color: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    const startTime = performance.now()
    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setDisplay(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isInView, value])

  return (
    <span ref={ref} className={`tabular-nums ${color}`}>
      {display}{suffix}
    </span>
  )
}

export function Impact() {
  return (
    <section className="py-20 md:py-32 noise-bg">
      <div className="max-w-site mx-auto px-5 md:px-8">
        <FadeIn>
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
            Impact
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-foreground max-w-2xl mb-16 md:mb-20">
            The numbers speak louder than any sales pitch
          </h2>
        </FadeIn>

        {/* Metrics - horizontal strip with dividers */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 mb-20 md:mb-28">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`${i > 0 ? "md:border-l md:border-border md:pl-8" : ""} ${i % 2 !== 0 ? "pl-6 border-l border-border md:border-l md:pl-8" : ""}`}
              >
                <div className="font-serif text-4xl md:text-6xl lg:text-7xl leading-none mb-2">
                  <AnimatedNumber value={m.value} suffix={m.suffix} color={m.color} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Benefit cards - 2-column offset grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="group flex items-start gap-5 p-5 md:p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-all cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/[0.06] flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-primary">{b.tag}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm md:text-[15px] font-bold text-foreground mb-1">{b.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
