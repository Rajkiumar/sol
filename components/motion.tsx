"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useRef, type ReactNode } from "react"

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: {
  children: ReactNode
  delay?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: staggerDelay },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

export function AnimatedCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{
        y: -4,
        boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.15)",
        transition: { duration: 0.2 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export { motion }
