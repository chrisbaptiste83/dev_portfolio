import React from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from './hoc/SectionWrapper'

const technologies = [
  { name: 'HTML 5', category: 'frontend' },
  { name: 'CSS 3', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React JS', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Three.js', category: 'frontend' },
  { name: 'Ruby on Rails', category: 'backend' },
  { name: 'Node JS', category: 'backend' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
]

const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  tools: 'Tools & DevOps',
}

const categoryOrder = ['frontend', 'backend', 'database', 'tools']

const getBadgeClass = (category) => {
  const map = {
    frontend: 'tech-badge-frontend',
    backend: 'tech-badge-backend',
    database: 'tech-badge-database',
    tools: 'tech-badge-tools',
  }
  return map[category] || 'tech-badge'
}

const Tech = ({ skills = [] }) => {
  const displayTechnologies = skills.length > 0 ? skills : technologies

  const grouped = categoryOrder.reduce((acc, cat) => {
    acc[cat] = displayTechnologies.filter(
      (t) => (t.category || 'tools').toLowerCase() === cat
    )
    return acc
  }, {})

  return (
    <div className="section-stack">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="sm:text-[18px] text-[14px] text-accent uppercase tracking-wider">
          What I work with
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] accent-underline accent-underline-center">
          Technologies.
        </h2>
      </motion.div>

      <div className="space-y-6">
        {categoryOrder.map((cat) => {
          const items = grouped[cat]
          if (!items || items.length === 0) return null
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-neutral-500 text-sm uppercase tracking-widest mb-4 text-center">
                {categoryLabels[cat]}
              </h3>
              <div className="flex flex-row flex-wrap justify-center gap-3">
                {items.map((technology, index) => (
                  <motion.div
                    key={technology.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className={`${getBadgeClass(cat)} text-sm font-medium px-5 py-2.5 rounded-full cursor-default`}
                  >
                    {technology.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, 'tech')
