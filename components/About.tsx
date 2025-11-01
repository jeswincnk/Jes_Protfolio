'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-text-primary mb-4">About</h2>
        <p className="text-text-secondary leading-relaxed">
          Entry-Level Software Developer with 2-3 years of experience in programming, proficient in HTML, React Native, and Python. 
          Demonstrates strong analytical skills and a solid understanding of software development responsibilities while supporting live projects. 
          Successfully assisted with database management and video streaming tasks. Eager to contribute to a dynamic team, enhancing professional 
          skills in a growing organization.
        </p>
      </motion.div>
    </section>
  )
}

