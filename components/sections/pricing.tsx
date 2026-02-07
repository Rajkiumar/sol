"use client"

import Link from "next/link"
import { FadeIn } from "@/components/motion"
import { motion } from "framer-motion"

const tiers = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For small teams just getting started with AI recruiting.",
    features: ["5 active roles", "Basic AI screening", "Email support", "Standard analytics"],
    recommended: false,
  },
  {
    name: "Growth",
    price: "20,000",
    period: "/mo",
    description: "For scaling teams that need full automation and priority support.",
    features: ["Unlimited roles", "Advanced AI screening", "Auto scheduling", "Priority support", "Custom workflows", "API access"],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "2,40,000",
    period: "/yr",
    description: "For large organizations with complex requirements and compliance needs.",
    features: ["Everything in Growth", "Dedicated success manager", "Advanced security & compliance", "Custom integrations", "SLA guarantee"],
    recommended: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-card">
      <div className="max-w-site mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="max-w-xl mb-12 md:mb-16">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
              Pricing
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-foreground mb-3">
              Start free, scale when ready
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No hidden fees, no setup costs. Upgrade or cancel anytime.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative flex flex-col p-6 md:p-8 rounded-2xl border transition-shadow h-full ${
                  tier.recommended
                    ? "bg-foreground text-background border-foreground shadow-2xl shadow-foreground/20"
                    : "bg-background border-border"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-wider uppercase">
                    Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-sm font-bold mb-3 ${tier.recommended ? "text-background/70" : "text-muted-foreground"}`}>
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    {tier.price !== "Free" && (
                      <span className={`text-sm ${tier.recommended ? "text-background/50" : "text-muted-foreground"}`}>
                        {"₹"}
                      </span>
                    )}
                    <span className={`font-serif text-3xl md:text-4xl ${tier.recommended ? "text-background" : "text-foreground"}`}>
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className={`text-sm ${tier.recommended ? "text-background/50" : "text-muted-foreground"}`}>
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mt-2 leading-relaxed ${tier.recommended ? "text-background/60" : "text-muted-foreground"}`}>
                    {tier.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5 mb-8 flex-1" role="list">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-xs ${tier.recommended ? "text-background/80" : "text-foreground"}`}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`flex-shrink-0 ${tier.recommended ? "text-primary" : "text-primary"}`} aria-hidden="true">
                        <path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/start-hiring"
                  className={`inline-flex items-center justify-center w-full h-11 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 ${
                    tier.recommended
                      ? "bg-background text-foreground hover:shadow-lg"
                      : "border border-border text-foreground hover:bg-secondary bg-transparent"
                  }`}
                >
                  Get started
                </Link>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
