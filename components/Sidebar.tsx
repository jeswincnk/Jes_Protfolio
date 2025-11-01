'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { FaUser, FaGraduationCap, FaLanguage } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { BASE_PATH } from '@/lib/constants'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'Malayalam', level: 'Native' },
    { name: 'Tamil', level: 'Conversational' },
  ]

  return (
    <>
      {/* Hover Trigger Button */}
      <div
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40"
        onMouseEnter={() => setIsOpen(true)}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="w-12 h-20 bg-gold/90 hover:bg-gold border-r-2 border-gold rounded-r-lg flex items-center justify-center shadow-lg transition-all"
          aria-label="Open Sidebar"
        >
          <FaUser className="text-dark-bg text-xl" />
        </motion.button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 z-30"
            />
            
            {/* Sidebar Content */}
            <motion.div
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              exit={{ x: -400 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onMouseLeave={() => setIsOpen(false)}
              className="fixed left-0 top-0 h-full w-80 bg-dark-card border-r-2 border-gold shadow-2xl z-40 overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Close Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-text-secondary hover:text-gold transition-colors"
                  >
                    <IoClose className="text-2xl" />
                  </button>
                </div>

                {/* Avatar */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gold mb-4">
                    <Image
                      src={`${BASE_PATH}/jeswin-photo.png`}
                      alt="Jeswin PJ"
                      fill
                      className="object-cover object-center"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">Jeswin PJ</h3>
                  <p className="text-sm text-text-secondary">Software Developer</p>
                </div>

                {/* Personal Information */}
                <div className="bg-dark-bg rounded-lg p-5 border border-gold/20">
                  <div className="flex items-center gap-2 mb-4">
                    <FaUser className="text-gold text-lg" />
                    <h4 className="text-lg font-bold text-text-primary">Personal Information</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Name:</span>
                      <span className="text-text-primary font-semibold">JESWIN PJ</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Age:</span>
                      <span className="text-text-primary font-semibold">29</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Marital Status:</span>
                      <span className="text-text-primary font-semibold">Single</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Nationality:</span>
                      <span className="text-text-primary font-semibold">Indian</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Location:</span>
                      <span className="text-text-primary font-semibold">Sharjah, UAE</span>
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div className="bg-dark-bg rounded-lg p-5 border border-gold/20">
                  <div className="flex items-center gap-2 mb-4">
                    <FaLanguage className="text-gold text-lg" />
                    <h4 className="text-lg font-bold text-text-primary">Languages Known</h4>
                  </div>
                  <div className="space-y-3">
                    {languages.map((lang, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-text-primary font-medium">{lang.name}</span>
                          <span className="text-gold text-xs">{lang.level}</span>
                        </div>
                        <div className="w-full bg-dark-card rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: lang.level === 'Native' ? '100%' : lang.level === 'Fluent' ? '90%' : '70%' }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="h-full bg-gold rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="bg-dark-bg rounded-lg p-5 border border-gold/20">
                  <div className="flex items-center gap-2 mb-4">
                    <FaGraduationCap className="text-gold text-lg" />
                    <h4 className="text-lg font-bold text-text-primary">Education</h4>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-text-primary font-semibold mb-1">Bachelor of Computer Application (BCA)</h5>
                      <p className="text-text-secondary text-sm mb-1">St. Thomas College Thavalappara</p>
                      <p className="text-text-secondary text-sm mb-2">Konni, Kerala, India</p>
                      <div className="flex items-center gap-2">
                        <span className="text-gold text-xs font-medium">June 2017 - March 2020</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

