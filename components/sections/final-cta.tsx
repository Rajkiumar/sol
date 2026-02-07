"use client"

import Link from "next/link"
import { FadeIn, motion } from "@/components/motion"

export function FinalCTA() {
  return (
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
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/start-hiring"
                className="inline-flex items-center gap-2 h-10 md:h-11 px-6 rounded-full bg-white text-foreground text-xs md:text-sm font-semibold shadow-lg shadow-black/20"
              >
                Start Free Trial
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/schedule-demo"
                className="inline-flex items-center h-10 md:h-11 px-6 rounded-full border border-white/25 text-white/80 text-xs md:text-sm font-semibold hover:bg-white/5 transition-all"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
