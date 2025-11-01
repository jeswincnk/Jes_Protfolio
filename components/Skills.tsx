'use client'

import { motion } from 'framer-motion'
import { 
  SiPython, 
  SiDjango, 
  SiPhp, 
  SiJava, 
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiJavascript,
  SiMysql,
  SiFirebase,
  SiGit,
  SiUbuntu,
  SiMongodb
} from 'react-icons/si'
import { FaCode, FaPlug, FaChartBar, FaMobileAlt, FaCloud } from 'react-icons/fa'

interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  highlighted?: boolean
}

const skills: Skill[] = [
  { name: 'Python', icon: SiPython },
  { name: 'Django', icon: SiDjango },
  { name: 'PHP', icon: SiPhp },
  { name: 'React Native', icon: FaMobileAlt },
  { name: 'React', icon: SiReact },
  { name: 'Ubuntu', icon: SiUbuntu, highlighted: true },
  { name: 'Git', icon: SiGit },
  { name: 'ERPNext', icon: FaCode },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'HTML/CSS', icon: SiHtml5 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'API', icon: FaPlug },
  { name: 'Power BI', icon: FaChartBar },
  { name: 'MySQL', icon: SiMysql },
  { name: 'AWS', icon: FaCloud },
]

export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-text-primary mb-6">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  bg-dark-card rounded-lg p-4 flex flex-col items-center justify-center
                  transition-all duration-300 cursor-pointer
                  ${skill.highlighted 
                    ? 'bg-gold text-dark-bg border-2 border-gold' 
                    : 'hover:border-gold border-2 border-transparent hover:scale-105'
                  }
                `}
              >
                <Icon className={`text-3xl mb-2 ${skill.highlighted ? 'text-dark-bg' : 'text-text-primary'}`} />
                <span className={`text-xs text-center ${skill.highlighted ? 'text-dark-bg font-semibold' : 'text-text-secondary'}`}>
                  {skill.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
