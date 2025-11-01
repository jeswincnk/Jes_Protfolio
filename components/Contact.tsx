'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaDribbble } from 'react-icons/fa'

export default function Contact() {
  const contactInfo = [
    { icon: FaEnvelope, text: 'jeswincnk97@gmail.com', href: 'mailto:jeswincnk97@gmail.com' },
    { icon: FaPhone, text: '+971 50 201 9565 (UAE)', href: 'tel:+971502019565' },
    { icon: FaPhone, text: '+91 8848 936972 (IND)', href: 'tel:+918848936972' },
  ]

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://linkedin.com/in/jeswincnk/', label: 'LinkedIn' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaDribbble, href: '#', label: 'Dribbble' },
  ]

  return (
    <section id="contact" className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-text-primary mb-6">Contact Me</h2>
        
        <div className="space-y-4 mb-6">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-dark-card p-4 rounded-lg hover:border-gold border-2 border-transparent transition-all group"
              >
                <Icon className="text-gold text-xl group-hover:scale-110 transition-transform" />
                <span className="text-text-primary group-hover:text-gold transition-colors">
                  {item.text}
                </span>
              </motion.a>
            )
          })}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-dark-card flex items-center justify-center text-text-primary hover:text-gold hover:border-gold border-2 border-transparent transition-all"
              aria-label={label}
            >
              <Icon className="text-lg" />
            </motion.a>
          ))}
        </div>

        <p className="text-center text-text-secondary text-sm mt-8">
          Thanks for scrolling
        </p>
      </motion.div>
    </section>
  )
}

