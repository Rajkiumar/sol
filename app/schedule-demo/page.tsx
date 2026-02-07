"use client"

import React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn, motion } from "@/components/motion"
import { AnimatePresence } from "framer-motion"

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
]

const teamSizes = [
  "1-10", "11-50", "51-200", "201-500", "500+",
]

export default function ScheduleDemoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedTime, setSelectedTime] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 noise-bg">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
          </div>

          <div className="relative max-w-site mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left: Info */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <FadeIn>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px flex-1 max-w-[40px] bg-primary/40" />
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary">
                      Book a demo
                    </span>
                  </div>
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-foreground text-balance mb-4">
                    See RecruiterAI in action
                  </h1>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-md">
                    30-minute live walkthrough with our product team. See exactly how RecruiterAI can transform your hiring.
                  </p>
                </FadeIn>

                {/* Timeline */}
                <FadeIn delay={0.1}>
                  <div className="flex flex-col gap-0 border-l border-border ml-3">
                    {[
                      { time: "0-5 min", label: "Quick intro & your challenges" },
                      { time: "5-20 min", label: "Live product walkthrough" },
                      { time: "20-30 min", label: "Q&A and next steps" },
                    ].map((item, i) => (
                      <div key={item.time} className="flex items-start gap-4 pl-6 py-3 relative">
                        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/30 border-2 border-background" />
                        <div>
                          <span className="text-[10px] font-bold tracking-wider text-primary block mb-0.5">{item.time}</span>
                          <span className="text-xs text-muted-foreground">{item.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-7">
                <FadeIn delay={0.15}>
                  <AnimatePresence mode="wait">
                    {!submitted ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        onSubmit={handleSubmit}
                        className="p-6 md:p-10 rounded-2xl bg-card border border-border"
                      >
                        <h2 className="text-[15px] font-bold text-foreground mb-6">Schedule your demo</h2>
                        <div className="flex flex-col gap-5">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                              <label htmlFor="fullName" className="block text-xs font-semibold text-foreground mb-2">
                                Full name
                              </label>
                              <input
                                id="fullName"
                                type="text"
                                required
                                className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                placeholder="Jane Smith"
                              />
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-xs font-semibold text-foreground mb-2">
                                Work email
                              </label>
                              <input
                                id="email"
                                type="email"
                                required
                                className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                placeholder="you@company.com"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                              <label htmlFor="company" className="block text-xs font-semibold text-foreground mb-2">
                                Company
                              </label>
                              <input
                                id="company"
                                type="text"
                                required
                                className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                placeholder="Acme Inc."
                              />
                            </div>
                            <div>
                              <label htmlFor="teamSize" className="block text-xs font-semibold text-foreground mb-2">
                                Team size
                              </label>
                              <select
                                id="teamSize"
                                required
                                className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
                              >
                                <option value="">Select</option>
                                {teamSizes.map((s) => (
                                  <option key={s} value={s}>{s} employees</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div>
                            <label htmlFor="date" className="block text-xs font-semibold text-foreground mb-2">
                              Preferred date
                            </label>
                            <input
                              id="date"
                              type="date"
                              required
                              className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-foreground mb-3">
                              Preferred time
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                              {timeSlots.map((slot) => (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => setSelectedTime(slot)}
                                  className={`h-9 rounded-lg text-[11px] font-semibold transition-all ${
                                    selectedTime === slot
                                      ? "bg-foreground text-background"
                                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                  }`}
                                >
                                  {slot}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label htmlFor="questions" className="block text-xs font-semibold text-foreground mb-2">
                              Anything specific? (Optional)
                            </label>
                            <textarea
                              id="questions"
                              rows={3}
                              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                              placeholder="E.g. Interested in enterprise security features..."
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full h-12 rounded-xl bg-foreground text-background text-sm font-bold hover:bg-foreground/90 hover:-translate-y-0.5 transition-all"
                          >
                            Schedule demo
                          </button>
                        </div>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="p-10 md:p-16 rounded-2xl bg-card border border-primary/20 text-center"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary" aria-hidden="true">
                            <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                            <path d="M7 2V6M17 2V6M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M10 15L12 17L16 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">Demo booked</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                          Check your email for a calendar invite. We look forward to showing you RecruiterAI.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
