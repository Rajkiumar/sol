"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn, motion } from "@/components/motion"
import { AnimatePresence } from "framer-motion"

const workflowSteps = [
  {
    label: "Post Your Job",
    title: "Smart Job Posting",
    description: "Create a job posting with AI-assisted descriptions. Our system optimizes your listing for maximum visibility and attracts the right candidates across platforms.",
    features: ["AI-generated descriptions", "Multi-platform distribution", "SEO-optimized listings", "Custom screening questions"],
  },
  {
    label: "AI Screens Candidates",
    title: "Intelligent Screening",
    description: "Every application is analyzed in real-time. AI evaluates skills, experience, culture fit, and potential -- surfacing the best candidates in seconds.",
    features: ["3-second resume parsing", "Multi-factor scoring", "Bias detection", "Automated shortlisting"],
  },
  {
    label: "Auto Schedule Interviews",
    title: "Effortless Scheduling",
    description: "No more back-and-forth emails. The system checks availability for all parties and books interviews automatically with full calendar integration.",
    features: ["Google & Outlook sync", "Timezone-aware booking", "Automated reminders", "One-click rescheduling"],
  },
  {
    label: "AI Interview & Assess",
    title: "Structured Interviews",
    description: "Conduct consistent, structured interviews with AI-generated questions tailored to each role. Get real-time assessments and comparison scorecards.",
    features: ["Role-specific questions", "Real-time scoring", "Candidate comparison", "Recording & notes"],
  },
  {
    label: "Smart Offer Management",
    title: "Streamlined Offers",
    description: "Generate competitive offers based on market data. Track acceptance rates, manage negotiations, and close your top candidates faster than ever.",
    features: ["Market-competitive offers", "Digital offer letters", "Negotiation tracking", "Acceptance analytics"],
  },
  {
    label: "Build Talent Pool",
    title: "Growing Talent Network",
    description: "Every interaction builds your proprietary talent pool. Re-engage past candidates automatically when new roles match their profile and skills.",
    features: ["Automated pool building", "Smart re-engagement", "Skills matching", "Relationship nurturing"],
  },
]

export default function SeeHowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0)
  const step = workflowSteps[activeStep]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-12 md:pt-40 md:pb-20 noise-bg">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent-3/[0.04] blur-3xl" />
          </div>
          <div className="relative max-w-site mx-auto px-5 md:px-8">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 max-w-[40px] bg-primary/40" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary">
                  Platform walkthrough
                </span>
              </div>
              <div className="max-w-3xl">
                <h1 className="font-serif text-3xl md:text-5xl lg:text-[4rem] leading-[1.05] tracking-tight text-foreground text-balance mb-4">
                  See how it works, end to end
                </h1>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                  A complete walkthrough of the RecruiterAI workflow -- from job posting to building your proprietary talent pool.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Interactive Workflow */}
        <section className="py-12 md:py-20">
          <div className="max-w-site mx-auto px-5 md:px-8">
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                {/* Left: Step list */}
                <div className="lg:col-span-4 flex flex-col lg:border-l border-border">
                  {workflowSteps.map((s, i) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => setActiveStep(i)}
                      className={`flex items-center gap-4 px-4 lg:px-6 py-3.5 lg:py-4 text-left transition-all border-l-2 lg:border-l-2 -ml-px ${
                        i === activeStep
                          ? "border-primary bg-primary/[0.03]"
                          : "border-transparent hover:bg-secondary/50"
                      }`}
                      aria-pressed={i === activeStep}
                    >
                      <span className={`text-[10px] font-bold tracking-wider tabular-nums ${
                        i === activeStep ? "text-primary" : "text-muted-foreground/40"
                      }`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`text-sm font-semibold ${
                        i === activeStep ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {s.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Right: Detail panel */}
                <div className="lg:col-span-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.25 }}
                      className="p-6 md:p-10 rounded-2xl bg-card border border-border"
                    >
                      {/* Progress bar */}
                      <div className="flex items-center gap-3 mb-8">
                        <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-primary rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${((activeStep + 1) / workflowSteps.length) * 100}%` }}
                            transition={{ duration: 0.4 }}
                          />
                        </div>
                        <span className="text-[10px] text-muted-foreground font-bold tabular-nums">
                          {activeStep + 1}/{workflowSteps.length}
                        </span>
                      </div>

                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary block mb-3">
                        Step {String(activeStep + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-lg">{step.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {step.features.map((feature, i) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.06 }}
                            className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg bg-secondary/40 text-xs font-medium text-foreground"
                          >
                            <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                            {feature}
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

        {/* Bottom CTA */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#000000] via-[#404040] to-[#737373]">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-white/10 blur-[120px]" />
          </div>
          <div className="relative max-w-site mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
            <FadeIn>
              <h2 className="font-serif text-2xl md:text-4xl text-white leading-[1.1] tracking-tight mb-3">
                Ready to Hire Better, Faster?
              </h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="text-xs md:text-sm text-white/60 max-w-xl mx-auto leading-relaxed mb-8">
                Join 500+ companies hiring smarter with AI. Start your free trial today.
              </p>
            </FadeIn>
            <FadeIn delay={0.16}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/start-hiring"
                  className="inline-flex items-center gap-2 h-10 md:h-11 px-6 rounded-full bg-white text-foreground text-xs md:text-sm font-semibold shadow-lg shadow-black/20"
                >
                  Start Free Trial
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/schedule-demo"
                  className="inline-flex items-center h-10 md:h-11 px-6 rounded-full border border-white/25 text-white/80 text-xs md:text-sm font-semibold hover:bg-white/5 transition-all"
                >
                  Schedule Demo
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <div className="relative z-10 bg-white">
        <Footer />
      </div>
    </>
  )
}
