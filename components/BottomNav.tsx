'use client'

import { motion } from 'framer-motion'
import { FiHome, FiStar, FiGrid, FiBriefcase, FiMessageCircle } from 'react-icons/fi'

interface BottomNavProps {
  activeSection: string
}

export default function BottomNav({ activeSection }: BottomNavProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 70 // slight offset to avoid covering by top elements
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navItems = [
    { id: 'hero', label: 'Home', icon: FiHome },
    { id: 'skills', label: 'Skills', icon: FiStar },
    { id: 'portfolio', label: 'Work', icon: FiGrid },
    { id: 'experience', label: 'Exp', icon: FiBriefcase },
    { id: 'contact', label: 'Contact', icon: FiMessageCircle },
  ]

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Mobile bottom navigation"
    >
      <div className="mx-auto max-w-xl">
        <div className="m-3 rounded-2xl bg-dark-card/95 backdrop-blur-md border border-gold/20 shadow-lg">
          <ul className="flex items-center justify-between px-2 py-1">
            {navItems.map(({ id, label, icon: Icon }) => {
              const isActive = activeSection === id
              return (
                <li key={id} className="flex-1">
                  <motion.button
                    onClick={() => scrollToSection(id)}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative w-full flex flex-col items-center justify-center gap-1 py-2 rounded-xl transition-colors ${
                      isActive ? 'text-gold' : 'text-text-secondary hover:text-text-primary'
                    }`}
                    aria-label={label}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="bottomNavActive"
                        className="absolute inset-0 rounded-xl bg-gold/10 border border-gold/30"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                    <Icon className="relative z-10 text-lg" />
                    <span className="relative z-10 text-[10px] font-medium">{label}</span>
                  </motion.button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}