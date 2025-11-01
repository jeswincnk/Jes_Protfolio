'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/in/jeswincnk/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/jeswincnk', label: 'GitHub' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:jeswincnk97@gmail.com', label: 'Email' },
  ]

  return (
    <section id="hero" className="relative h-[10vh] md:h-[75vh] flex items-center justify-center overflow-hidden w-full">
      {/* Background Image - Reduced size with opacity and grayscale filter, aligned from top */}
      <div className="absolute inset-0 w-full h-full pl-10 opacity-40">
        <div className="relative w-3/4 h-full">
          <Image
            src="/jeswin-photo-1.png"
            alt="Jeswin Background"
            fill
            className="object-cover object-top grayscale"
            priority
            quality={90}
          />
        </div>
      </div>

      {/* Gradient Overlay for fading from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent z-10"></div>

      {/* Content with better typography and alignment */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-40 text-center p-16 md:p-8 max-w-4xl mt-36 mx-auto w-full"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl lg:text-3xl text-gold mb-6 font-medium tracking-wide"
          style={{ letterSpacing: '0.05em' }}
        >
          Hello,
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-xs md:text-sm mb-3 font-light tracking-wider uppercase letter-spacing-wide"
          style={{ letterSpacing: '0.2em' }}
        >
          I'm
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-15xl md:text-7xl lg:text-8xl font-bold text-text-primary mb-13 leading-[2.1] tracking-tight"
          style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 800 }}
        >
          Jeswin <span className="text-gold">PJ</span>

        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl lg:text-3xl text-gold mb-6 font-medium tracking-wide"
          style={{ letterSpacing: '0.05em' }}
        >
          Software Developer & Python Developer
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-text-secondary text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-light"
          style={{ lineHeight: '1.8' }}
        >
          Entry-Level Software Developer with 2-3 years of experience in programming, proficient in HTML, React Native, and Python.
        </motion.p>
        
        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 rounded-full bg-dark-card/90 backdrop-blur-sm flex items-center justify-center text-text-primary hover:text-gold hover:bg-gold/20 border-2 border-transparent hover:border-gold transition-all shadow-lg"
                aria-label={link.label}
              >
                <Icon className="text-base md:text-lg" />
              </motion.a>
            )
          })}
        </motion.div>

        {/* Contact Me Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="border-2 border-gold text-text-primary px-8 py-3 rounded-lg hover:bg-gold hover:text-dark-bg transition-all font-medium text-sm md:text-base shadow-lg backdrop-blur-sm bg-dark-card/60 tracking-wide"
          style={{ letterSpacing: '0.05em' }}
        >
          Contact Me
        </motion.button>
      </motion.div>
    </section>
  )
}
