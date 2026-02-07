"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/#workflows", label: "Product" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/see-how-it-works", label: "How It Works" },
  { href: "/schedule-demo", label: "Contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left"
        style={{ width: progressWidth }}
      />
      <header
        role="banner"
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-2xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="max-w-site mx-auto flex items-center justify-between px-5 md:px-8 h-16 lg:h-[72px]"
        >
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="RecruiterAI Home">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-background font-serif text-base leading-none" aria-hidden="true">R</span>
            </div>
            <span className="text-base font-bold tracking-tight text-foreground">
              Recruiter<span className="text-primary">AI</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/schedule-demo"
              className="px-4 py-2 text-[13px] font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Book demo
            </Link>
            <Link
              href="/start-hiring"
              className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-foreground text-background text-[13px] font-bold hover:opacity-90 transition-all"
            >
              Start free
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 items-center rounded-lg"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-x-0 top-[66px] bottom-0 bg-background z-40"
            >
              <div className="flex flex-col px-5 pt-8 pb-8 gap-1 h-full">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center h-14 text-2xl font-serif text-foreground"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-auto flex flex-col gap-3">
                  <Link
                    href="/schedule-demo"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center h-14 rounded-2xl border border-border text-foreground font-bold text-base bg-transparent"
                  >
                    Book a demo
                  </Link>
                  <Link
                    href="/start-hiring"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center h-14 rounded-2xl bg-foreground text-background font-bold text-base"
                  >
                    Start free
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
