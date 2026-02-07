"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/motion"

const tourSteps = [
  {
    id: 1,
    title: "Smart Intake",
    subtitle: "AI-optimized job postings",
    description: "Define your ideal candidate profile. Our AI analyzes requirements, team culture, and past successful hires to create precision-optimized postings.",
    features: ["AI-generated job descriptions", "Culture-fit scoring criteria", "Skills weighting engine", "10+ job board distribution"],
    mockUI: { label: "Job Intake", status: "Generating requirements...", progress: 67 },
  },
  {
    id: 2,
    title: "AI Screening",
    subtitle: "Every resume, instantly analyzed",
    description: "Every application is analyzed in real-time against your criteria. AI ranks candidates by fit, flags concerns, and surfaces hidden gems.",
    features: ["3-second resume parsing", "Multi-factor scoring", "Bias reduction filters", "Automated shortlisting"],
    mockUI: { label: "Pipeline", status: "Screening 247 applicants", progress: 82 },
  },
  {
    id: 3,
    title: "Auto Interview",
    subtitle: "Scheduling meets intelligence",
    description: "From scheduling to structured interviews and evaluation. AI handles logistics, generates questions, and provides real-time assessment.",
    features: ["Calendar auto-sync", "Structured guides", "Real-time scoring", "Automated follow-ups"],
    mockUI: { label: "Interviews", status: "3 scheduled today", progress: 45 },
  },
]

export function ProductTour() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const step = tourSteps[activeStep]

  const advance = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % tourSteps.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(advance, 5000)
    return () => clearInterval(timer)
  }, [isPaused, advance])

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-site mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-20">
            <div className="max-w-xl">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
                Product tour
              </span>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-foreground">
                See the workflow in action
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed md:text-right">
              Three steps to transform your hiring process. Click through or watch auto-play.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left: Steps */}
            <div className="lg:col-span-2 flex flex-col gap-2">
              {tourSteps.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  className={`group text-left p-4 md:p-5 rounded-xl transition-all duration-300 ${
                    i === activeStep
                      ? "bg-background border border-primary/15 shadow-sm"
                      : "hover:bg-background/50 border border-transparent"
                  }`}
                  aria-pressed={i === activeStep}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-[11px] font-bold transition-colors ${
                      i === activeStep ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}>
                      {s.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-sm font-bold transition-colors ${i === activeStep ? "text-foreground" : "text-muted-foreground"}`}>
                        {s.title}
                      </h3>
                      <p className={`text-xs mt-0.5 transition-colors ${i === activeStep ? "text-muted-foreground" : "text-muted-foreground/60"}`}>
                        {s.subtitle}
                      </p>
                      {/* Progress bar for active step */}
                      {i === activeStep && !isPaused && (
                        <div className="mt-3 h-0.5 bg-border rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 5, ease: "linear" }}
                            key={`progress-${activeStep}`}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Interactive preview */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="bg-background border border-border rounded-2xl overflow-hidden"
                >
                  {/* Mock browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/30">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                    </div>
                    <div className="flex-1 h-6 rounded-md bg-background/60 mx-8 flex items-center justify-center">
                      <span className="text-[10px] text-muted-foreground/60">app.recruiterai.com/{step.mockUI.label.toLowerCase()}</span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    {/* Mock status bar */}
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-semibold text-primary">{step.mockUI.status}</span>
                      </div>
                      <span className="text-xs text-muted-foreground tabular-nums">{step.mockUI.progress}%</span>
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-md">{step.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="flex items-center gap-2.5 py-2 px-3 rounded-lg bg-secondary/40 text-xs text-foreground font-medium"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
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
