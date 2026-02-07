"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

export function FloatingCTA() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [400, 600], [0, 1])
  const pointerEvents = useTransform(scrollY, (v) => (v > 500 ? "auto" : "none"))

  return (
    <motion.div
      style={{ opacity, pointerEvents }}
      className="fixed bottom-5 right-5 z-50"
    >
      <Link
        href="/start-hiring"
        className="group inline-flex items-center gap-2 h-10 px-5 rounded-full bg-foreground text-background text-xs font-bold shadow-2xl shadow-foreground/20 hover:-translate-y-0.5 hover:shadow-foreground/30 transition-all"
      >
        Get started
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
          <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </motion.div>
  )
}
