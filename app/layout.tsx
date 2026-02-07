import React from "react"
import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Space_Grotesk } from 'next/font/google'

import './globals.css'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RecruiterAI - Every Hire, Faster and Better',
  description:
    'AI-powered recruiting platform that screens 250+ applications in minutes. Reduce time-to-hire by 70% with intelligent automation.',
}

export const viewport: Viewport = {
  themeColor: '#3B82F6',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased scroll-smooth">{children}</body>
    </html>
  )
}
