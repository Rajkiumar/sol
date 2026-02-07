"use client"

import { useState } from "react"
import { FadeIn } from "@/components/motion"
import { motion, AnimatePresence } from "framer-motion"

const workflows = [
  {
    tag: "01",
    title: "Screening + Scheduling",
    subtitle: "From resume to interview in minutes",
    description: "AI scans resumes, ranks candidates on multi-factor scoring, and auto-schedules interviews -- all without human intervention. No more spreadsheet chaos.",
    capabilities: ["Resume parsing in 3 seconds", "Multi-factor candidate ranking", "Calendar-aware auto scheduling", "Instant rejection/shortlist emails"],
  },
  {
    tag: "02",
    title: "Multi-Stage Interview",
    subtitle: "Consistent, structured, fair",
    description: "Conduct structured interviews with AI-generated questions tailored to each role and seniority level. Real-time scoring ensures consistency across every interviewer.",
    capabilities: ["Role-specific question banks", "Real-time candidate scoring", "Cross-interviewer calibration", "Automated feedback loops"],
  },
  {
    tag: "03",
    title: "Re-engagement Engine",
    subtitle: "Your talent pool never expires",
    description: "Every candidate becomes part of your proprietary talent network. When new roles open, AI matches past applicants and re-engages them automatically.",
    capabilities: ["Smart talent pool building", "Skills-based matching engine", "Automated re-engagement flows", "Relationship nurturing at scale"],
  },
]

export function Workflows() {
  const [active, setActive] = useState(0)
  const wf = workflows[active]

  return (
    <section id="workflows" className="py-20 md:py-32 noise-bg">
      <div className="max-w-site mx-auto px-5 md:px-8">
        {/* Section header - left aligned, editorial */}
        <FadeIn>
          <div className="max-w-xl mb-12 md:mb-20">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
              How it works
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-foreground text-balance">
              Three engines that replace your entire recruiting stack
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
            {/* Left: Tab buttons */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 lg:gap-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:border-l border-border">
              {workflows.map((w, i) => (
                <button
                  key={w.tag}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative flex-shrink-0 lg:flex-shrink text-left px-5 lg:px-8 py-4 lg:py-6 transition-all rounded-xl lg:rounded-none ${
                    i === active
                      ? "bg-card lg:bg-transparent lg:border-l-2 lg:-ml-px lg:border-primary"
                      : "hover:bg-card/50 lg:hover:bg-transparent"
                  }`}
                  aria-pressed={i === active}
                >
                  <div className="flex items-center gap-3 lg:gap-4">
                    <span className={`text-[11px] font-bold tracking-wider ${i === active ? "text-primary" : "text-muted-foreground/50"}`}>
                      {w.tag}
                    </span>
                    <div>
                      <h3 className={`text-sm lg:text-base font-bold whitespace-nowrap lg:whitespace-normal ${i === active ? "text-foreground" : "text-muted-foreground"}`}>
                        {w.title}
                      </h3>
                      <p className="hidden lg:block text-xs text-muted-foreground mt-0.5">{w.subtitle}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-8 lg:pl-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-2xl border border-border p-6 md:p-10"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{wf.tag}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-foreground leading-tight">{wf.title}</h3>
                      <p className="text-xs text-muted-foreground">{wf.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                    {wf.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {wf.capabilities.map((cap, i) => (
                      <motion.div
                        key={cap}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-primary" aria-hidden="true">
                            <path d="M2 5L4.5 7.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-sm text-foreground leading-snug">{cap}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
