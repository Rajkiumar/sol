"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { Hero } from "@/components/sections/hero"
import { Workflows } from "@/components/sections/workflows"
import { ProductTour } from "@/components/sections/product-tour"
import { Impact } from "@/components/sections/impact"
import { ROICalculator } from "@/components/sections/roi-calculator"
import { LogoSlider } from "@/components/sections/logo-slider"
import { Founders } from "@/components/sections/founders"
import { Pricing } from "@/components/sections/pricing"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Workflows />
        <ProductTour />
        <Impact />
        <ROICalculator />
        <LogoSlider />
        <Founders />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
