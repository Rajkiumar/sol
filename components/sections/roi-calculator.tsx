"use client"

import { useState, useMemo } from "react"
import { FadeIn } from "@/components/motion"
import { motion } from "framer-motion"

export function ROICalculator() {
  const [hiresPerMonth, setHiresPerMonth] = useState(5)
  const [avgSalary, setAvgSalary] = useState(800000)

  const results = useMemo(() => {
    const costPerHire = avgSalary * 0.15
    const annualHires = hiresPerMonth * 12
    const savings = Math.round(annualHires * costPerHire * 0.4)
    const daysSaved = Math.round(annualHires * 8)
    return { savings, daysSaved, fasterHire: 70 }
  }, [avgSalary, hiresPerMonth])

  const formatINR = (num: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num)

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-site mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: Heading + Form */}
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-4 block">
                ROI Calculator
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-foreground mb-4">
                Estimate your savings
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm">
                Adjust the sliders to see how much time and money RecruiterAI can save your team annually.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-8">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label htmlFor="hires" className="text-sm font-semibold text-foreground">
                      Hires per month
                    </label>
                    <span className="text-sm font-bold text-primary tabular-nums">{hiresPerMonth}</span>
                  </div>
                  <input
                    id="hires"
                    type="range"
                    min={1}
                    max={50}
                    value={hiresPerMonth}
                    onChange={(e) => setHiresPerMonth(Number(e.target.value))}
                    className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex items-center justify-between mt-1 text-[10px] text-muted-foreground">
                    <span>1</span>
                    <span>50</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label htmlFor="salary" className="text-sm font-semibold text-foreground">
                      Average salary (INR)
                    </label>
                    <span className="text-sm font-bold text-primary tabular-nums">{formatINR(avgSalary)}</span>
                  </div>
                  <input
                    id="salary"
                    type="range"
                    min={300000}
                    max={5000000}
                    step={100000}
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(Number(e.target.value))}
                    className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex items-center justify-between mt-1 text-[10px] text-muted-foreground">
                    <span>3L</span>
                    <span>50L</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Annual savings", value: formatINR(results.savings), sub: "Based on 40% cost reduction" },
                  { label: "Days recovered", value: `${results.daysSaved}`, sub: "Redirected to strategic work" },
                  { label: "Faster hiring", value: `${results.fasterHire}%`, sub: "Time-to-hire reduction" },
                ].map((r) => (
                  <motion.div
                    key={r.label}
                    className="p-6 md:p-8 rounded-2xl bg-background border border-border"
                    layout
                  >
                    <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-muted-foreground mb-4">
                      {r.label}
                    </div>
                    <motion.div
                      key={r.value}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-serif text-2xl md:text-3xl text-foreground leading-tight mb-2"
                    >
                      {r.value}
                    </motion.div>
                    <div className="text-[11px] text-muted-foreground">{r.sub}</div>
                  </motion.div>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground mt-4 leading-relaxed">
                Estimates based on industry averages. Actual results may vary based on hiring volume and current processes.
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
