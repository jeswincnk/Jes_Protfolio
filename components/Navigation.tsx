'use client'

import { FiSearch } from 'react-icons/fi'
import { motion } from 'framer-motion'

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for sticky nav height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'bio', label: 'Bio' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="flex items-center justify-between w-full">
      {/* Logo/Brand */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2"
      >
        <div className="w-10 h-10 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center">
          <span className="text-gold text-xl font-bold">JP</span>
        </div>
        <div className="hidden md:block">
          <span className="text-text-primary font-bold text-lg tracking-wide">Jeswin PJ</span>
        </div>
      </motion.div>

      {/* Navigation Links */}
      <div className="flex items-center gap-1 md:gap-2">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id
          return (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 text-sm md:text-base font-medium transition-all duration-300 rounded-lg ${
                isActive 
                  ? 'text-gold' 
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-gold/10 border border-gold/30 rounded-lg"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
              {isActive && (
                <motion.div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gold rounded-full"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          )
        })}
        
        {/* Search Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="ml-2 p-2 text-text-secondary hover:text-gold hover:bg-gold/10 rounded-lg transition-all duration-300 border border-transparent hover:border-gold/30"
          aria-label="Search"
        >
          <FiSearch className="text-lg" />
        </motion.button>
      </div>
    </nav>
  )
}
