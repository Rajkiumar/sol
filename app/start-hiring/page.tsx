"use client"

import React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FadeIn, motion } from "@/components/motion"
import { AnimatePresence } from "framer-motion"

const teamSizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
]

export default function StartHiringPage() {
  const [submitted, setSubmitted] = useState(false)

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
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
          </div>

          <div className="relative max-w-site mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left: Copy */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <FadeIn>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px flex-1 max-w-[40px] bg-primary/40" />
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary">
                      Get started
                    </span>
                  </div>
                  <h1 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-foreground text-balance mb-4">
                    Start hiring smarter today
                  </h1>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
                    Get instant access to AI-powered recruiting. No credit card required. Set up in under 30 minutes.
                  </p>
                </FadeIn>

                {/* Trust signals */}
                <FadeIn delay={0.1}>
                  <div className="flex flex-col gap-4">
                    {[
                      { tag: "Setup", text: "Connect tools and start screening in minutes" },
                      { tag: "Screen", text: "AI analyzes candidates the moment they apply" },
                      { tag: "Support", text: "Dedicated onboarding specialist for every customer" },
                    ].map((item) => (
                      <div key={item.tag} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/[0.06] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[9px] font-bold tracking-wider uppercase text-primary">{item.tag}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed pt-2.5">{item.text}</p>
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
                        <h2 className="text-[15px] font-bold text-foreground mb-6">Create your account</h2>
                        <div className="flex flex-col gap-5">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div>
                              <label htmlFor="company" className="block text-xs font-semibold text-foreground mb-2">
                                Company name
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
                          <div>
                            <label htmlFor="teamSize" className="block text-xs font-semibold text-foreground mb-2">
                              Team size
                            </label>
                            <select
                              id="teamSize"
                              required
                              className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
                            >
                              <option value="">Select team size</option>
                              {teamSizes.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label htmlFor="role" className="block text-xs font-semibold text-foreground mb-2">
                              Primary hiring role
                            </label>
                            <input
                              id="role"
                              type="text"
                              required
                              className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                              placeholder="e.g. Full Stack Developer"
                            />
                          </div>
                          <div>
                            <label htmlFor="target" className="block text-xs font-semibold text-foreground mb-2">
                              Target hires (next 3 months)
                            </label>
                            <input
                              id="target"
                              type="number"
                              required
                              min={1}
                              className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                              placeholder="5"
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full h-12 rounded-xl bg-foreground text-background text-sm font-bold hover:bg-foreground/90 hover:-translate-y-0.5 transition-all mt-1"
                          >
                            Get free access
                          </button>
                          <p className="text-[10px] text-center text-muted-foreground">
                            Free forever on Starter. No credit card required.
                          </p>
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
                            <path d="M6 12L10 16L18 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">You are in</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                          Check your email for login credentials and next steps. Welcome to smarter hiring.
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
