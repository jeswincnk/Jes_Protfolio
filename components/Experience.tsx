'use client'

import { motion } from 'framer-motion'

interface ExperienceItem {
  year: string
  title: string
  company: string
  location: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    year: '2024',
    title: 'Software Developer cum Marketing Executive',
    company: 'Cadd Centre - Software Training Institute',
    location: 'Thiruvalla, Kerala, India',
    description: 'Engineered applications utilizing HTML, React Native, Python, and PHP to enhance and guided user engagement by 80%. Engineered innovative software solutions addressing coding efficiency challenges, enhancing productivity by 50%. Enhanced live project led to delivery by 100% through effective collaboration with cross-functional teams. Designed and implemented Python, Django, PHP coding projects, honing skills in software development and program design.',
  },
  {
    year: '2023',
    title: 'Entry-Level Software Developer',
    company: 'Training Program',
    location: 'Kerala, India',
    description: 'Completed a one-year on-job training program focused on PHP and Java development, strengthening core programming and problem-solving skills. Collaborated with senior developers to design, debug, and deploy small-scale web modules and applications. Gained hands-on experience in backend development, database handling, and UI integration.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-text-primary mb-6">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gold" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-16"
              >
                {/* Timeline marker */}
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gold border-4 border-dark-bg flex items-center justify-center">
                  <span className="text-xs font-bold text-dark-bg">{exp.year}</span>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-1">{exp.title}</h3>
                  <p className="text-sm text-text-secondary mb-2">
                    {exp.company}, {exp.location}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

