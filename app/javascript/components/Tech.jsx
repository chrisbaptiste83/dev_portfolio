import React from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from './hoc/SectionWrapper'

const technologies = [
  { name: 'HTML 5' },
  { name: 'CSS 3' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React JS' },
  { name: 'Ruby on Rails' },
  { name: 'Tailwind CSS' },
  { name: 'Node JS' },
  { name: 'git' },
  { name: 'PostgreSQL' },
  { name: 'Docker' },
]

const Tech = ({ skills = [] }) => {
  const displayTechnologies = skills.length > 0 ? skills : technologies

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">
          What I work with
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-10">
          Technologies.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-4">
        {displayTechnologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="tech-badge text-white text-sm font-medium"
          >
            {technology.name}
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech')
