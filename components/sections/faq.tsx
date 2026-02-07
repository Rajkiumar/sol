"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/motion"

const faqs = [
  {
    q: "How accurate is the AI screening?",
    a: "Our AI model achieves 94% accuracy in candidate-job matching, trained on millions of hiring decisions. It continuously improves with each hiring cycle and can be calibrated to your team's specific preferences.",
  },
  {
    q: "What integrations are supported?",
    a: "We integrate with all major ATS platforms, job boards (LinkedIn, Naukri, Indeed, and 10+ more), calendar tools (Google Calendar, Outlook), and communication platforms (Slack, Teams). We also offer a robust API.",
  },
  {
    q: "Can I switch plans or cancel anytime?",
    a: "Yes. Upgrade, downgrade, or cancel at any time. Upgrades are immediate; downgrades and cancellations take effect at the end of your billing cycle. No long-term contracts required.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams are up and running in under 30 minutes. Connect your existing job postings, configure screening criteria, and the AI starts working. Enterprise customers get hands-on onboarding support.",
  },
  {
    q: "How do you handle data security?",
    a: "SOC 2 Type II certified and GDPR compliant. All data encrypted at rest (AES-256) and in transit (TLS 1.3). Regular security audits, penetration testing, and 99.9% uptime SLA.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-site mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left heading */}
          <div className="lg:col-span-4">
            <FadeIn>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
                FAQ
              </span>
              <h2 className="font-serif text-3xl md:text-4xl leading-[1.1] tracking-tight text-foreground mb-3">
                Questions we hear most
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Can't find what you're looking for? Reach out to our team directly.
              </p>
            </FadeIn>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-8">
            <FadeIn delay={0.1}>
              <div className="flex flex-col">
                {faqs.map((faq, i) => (
                  <div key={faq.q} className="border-b border-border">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
                      aria-expanded={openIndex === i}
                    >
                      <span className="text-sm md:text-[15px] font-bold text-foreground pr-6 group-hover:text-primary transition-colors">
                        {faq.q}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === i ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-foreground" aria-hidden="true">
                          <path d="M6 2V10M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 md:pb-6 text-sm text-muted-foreground leading-relaxed pr-12">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
