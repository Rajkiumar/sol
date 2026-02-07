"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-gradient-to-b from-[#EFF6FF] via-[#D0BCFF] to-[#FFFFFF]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-white/70 blur-[80px]" />
      </div>

      <div className="relative max-w-site mx-auto px-5 md:px-8 w-full pt-28 pb-20 md:pt-36 md:pb-28 text-center">
        {/* Overline */}
        <p className="text-[11px] md:text-xs font-semibold tracking-[0.2em] text-primary mb-5">
          AI RECRUITING THAT FEELS HUMAN
        </p>

        {/* Headline */}
        <h1 className="font-serif leading-[1.05] tracking-tight text-foreground mb-5" style={{ fontSize: "clamp(2.4rem, 6vw, 5.2rem)" }}>
          Every Hire, Faster and
          <br />
          Better
        </h1>

        {/* Sub-copy */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
          Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on building your team.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/start-hiring"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-primary text-primary-foreground text-[14px] font-semibold shadow-lg shadow-primary/20"
            >
              Start Hiring Smarter
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/see-how-it-works"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-primary/40 text-primary text-[14px] font-semibold bg-white/60"
            >
              See How It Works
            </Link>
          </motion.div>
        </div>

        {/* Metrics card */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="w-full max-w-3xl rounded-2xl border border-border bg-white/80 backdrop-blur px-6 py-6 shadow-xl">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {[
                { val: "250+", desc: "Applications screened in minutes" },
                { val: "12 Days", desc: "Average time-to-hire" },
                { val: "500+", desc: "Teams hiring smarter" },
              ].map((m) => (
                <div key={m.val}>
                  <div className="font-serif text-2xl md:text-3xl text-primary leading-none tracking-tight">
                    {m.val}
                  </div>
                  <div className="text-[11px] md:text-xs text-muted-foreground mt-1 leading-snug">
                    {m.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
