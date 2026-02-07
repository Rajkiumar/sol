"use client"

import { FadeIn } from "@/components/motion"
import { motion } from "framer-motion"

const founders = [
  {
    name: "Arjun Mehta",
    role: "CEO & Co-Founder",
    prev: "Ex-VP Engineering, HR-tech",
    bio: "15 years building products that scale recruiting for enterprises across APAC.",
    initials: "AM",
  },
  {
    name: "Priya Sharma",
    role: "CTO & Co-Founder",
    prev: "Ex-Google AI Research",
    bio: "Led the team that built NLP models for talent matching at scale across 40+ countries.",
    initials: "PS",
  },
  {
    name: "Rohan Gupta",
    role: "CPO & Co-Founder",
    prev: "Ex-Head of Product, Naukri",
    bio: "Obsessed with making hiring effortless for growing teams from seed to IPO.",
    initials: "RG",
  },
]

export function Founders() {
  return (
    <section className="py-20 md:py-32 noise-bg">
      <div className="max-w-site mx-auto px-5 md:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
            <div className="max-w-lg">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
                Team
              </span>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
                Built by founders, for founders
              </h2>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {founders.map((f, i) => (
            <FadeIn key={f.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 md:p-8 rounded-2xl bg-card border border-border group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/[0.06] flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className="text-base font-bold text-primary">{f.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-foreground">{f.name}</h3>
                    <p className="text-xs text-primary font-semibold">{f.role}</p>
                  </div>
                </div>
                <div className="inline-block px-2.5 py-1 rounded-md bg-secondary text-[10px] font-semibold text-secondary-foreground mb-4">
                  {f.prev}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.bio}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
