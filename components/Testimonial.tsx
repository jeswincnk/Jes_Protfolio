'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Testimonial() {
  return (
    <section id="testimonial" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-dark-card rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-text-primary mb-4">Testimonial</h2>
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <p className="text-text-secondary leading-relaxed mb-4 italic">
              "Jeswin is a dedicated and skilled developer who consistently delivers high-quality work. 
              His expertise in Python, React Native, and Django has been instrumental in our project success. 
              He demonstrates strong problem-solving abilities and works well in team environments."
            </p>
            <p className="text-text-primary font-semibold">— Senior Developer</p>
            <p className="text-sm text-text-secondary">Cadd Centre</p>
          </div>
          <div className="relative w-32 h-32 rounded-lg overflow-hidden bg-gold flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-dark-bg text-4xl font-bold">JD</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

