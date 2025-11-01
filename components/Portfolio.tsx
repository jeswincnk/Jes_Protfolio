'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  image: string
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Learning Platform',
    image: '/project1.jpg',
    description: 'React Native mobile application',
  },
  {
    id: 2,
    title: 'E-Commerce Dashboard',
    image: '/project2.jpg',
    description: 'Python Django web application',
  },
  {
    id: 3,
    title: 'Video Streaming App',
    image: '/project3.jpg',
    description: 'React Native with Firebase',
  },
  {
    id: 4,
    title: 'Database Management System',
    image: '/project4.jpg',
    description: 'PHP & MySQL application',
  },
  {
    id: 5,
    title: 'API Integration Platform',
    image: '/project5.jpg',
    description: 'Python Django REST API',
  },
  {
    id: 6,
    title: 'Web Analytics Dashboard',
    image: '/project6.jpg',
    description: 'React & Power BI integration',
  },
]

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(projects.length / itemsPerPage)

  return (
    <section id="portfolio" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-text-primary">Portfolio</h2>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentPage === index + 1 ? 'bg-gold' : 'bg-dark-card'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative group overflow-hidden rounded-lg bg-dark-card aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                <h3 className="text-lg font-semibold text-text-primary mb-1">{project.title}</h3>
                <p className="text-xs text-text-secondary mb-3">{project.description}</p>
                <button className="border-2 border-gold text-text-primary px-4 py-1.5 rounded text-sm hover:bg-gold hover:text-dark-bg transition-colors w-fit">
                  View More
                </button>
              </div>
              <div className="absolute inset-0 bg-dark-card/50 group-hover:bg-dark-card/30 transition-colors" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

