'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Bio from '@/components/Bio'
import Portfolio from '@/components/Portfolio'
import Experience from '@/components/Experience'
import Testimonial from '@/components/Testimonial'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'
import BottomNav from '@/components/BottomNav'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'bio', 'portfolio', 'experience', 'testimonial', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-dark-bg">
      <div className="border-2 border-gold min-h-screen pb-20 md:pb-0">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Navigation at the top */}
        <div className="sticky top-0 z-50 bg-dark-bg/95 backdrop-blur-md border-b border-gold/20 shadow-lg shadow-gold/5">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4">
            <Navigation activeSection={activeSection} />
          </div>
        </div>
        
        {/* Full-width Hero Section */}
        <Hero />
        
        {/* Container for other sections */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <About />
            <Skills />
            <Bio />
            
            {/* Sections below Bio */}
            <Portfolio />
            <Experience />
            <Testimonial />
            <Contact />
          </div>
        </div>
        {/* Bottom Navigation for mobile */}
        <BottomNav activeSection={activeSection} />
      </div>
    </main>
  )
}

