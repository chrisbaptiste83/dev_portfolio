import React from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from './hoc/SectionWrapper'

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  }
}

const tagColors = [
  'text-accent-light bg-accent/10 border-accent/20',
  'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  'text-amber-400 bg-amber-400/10 border-amber-400/20',
  'text-pink-400 bg-pink-400/10 border-pink-400/20',
]

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div className="bg-tertiary p-6 rounded-2xl sm:w-[360px] w-full group border border-neutral-800 project-card h-full flex flex-col">
        <div className="relative w-full h-[230px]">
          <div className="w-full h-full rounded-2xl project-image-area flex items-center justify-center border border-neutral-800 relative overflow-hidden">
            {image && (
              <img
                src={image}
                alt={`${name} preview`}
                className="project-image"
                loading="lazy"
              />
            )}
            <div className="project-image-overlay" aria-hidden="true" />
            <div className="project-image-content flex flex-col items-center gap-2 z-10">
              <span className="text-5xl font-black text-gradient">{String(index + 1).padStart(2, '0')}</span>
              <span className="text-neutral-600 text-xs uppercase tracking-widest">Project</span>
            </div>
          </div>

          <div className="absolute inset-0 flex justify-end m-3 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            {source_code_link && (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800/90 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:bg-accent/20 hover:border hover:border-accent/30 transition-all"
              >
                <span className="text-white text-sm">{'</>'}</span>
              </a>
            )}
            {live_link && (
              <a
                href={live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all"
              >
                <span className="text-black text-lg">&rarr;</span>
              </a>
            )}
          </div>
        </div>

        <div className="mt-5 flex-1">
          <h3 className="text-white font-bold text-[24px] group-hover:text-gradient transition-all duration-300">{name}</h3>
          <p className="mt-2 text-neutral-500 text-[14px] leading-relaxed">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, tagIndex) => {
            const colorClass = tagColors[tagIndex % tagColors.length]
            return (
              <span
                key={`${name}-${tagIndex}`}
                className={`text-[12px] ${colorClass} px-3 py-1 rounded-full border font-medium`}
              >
                {tag.name}
              </span>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

const Works = ({ projects = [] }) => {
  const defaultProjects = projects.length > 0 ? projects : [
    {
      name: 'Car Rent',
      description:
        'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
      tags: [
        { name: 'react' },
        { name: 'mongodb' },
        { name: 'tailwind' },
      ],
      source_code_link: 'https://github.com/',
      live_link: 'https://example.com',
    },
    {
      name: 'Job IT',
      description:
        'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
      tags: [
        { name: 'react' },
        { name: 'restapi' },
        { name: 'scss' },
      ],
      source_code_link: 'https://github.com/',
      live_link: 'https://example.com',
    },
    {
      name: 'Trip Guide',
      description:
        'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
      tags: [
        { name: 'nextjs' },
        { name: 'supabase' },
        { name: 'css' },
      ],
      source_code_link: 'https://github.com/',
      live_link: 'https://example.com',
    },
  ]

  return (
    <div className="section-stack">
      <motion.div variants={textVariant()} className="text-center">
        <p className="sm:text-[18px] text-[14px] text-accent uppercase tracking-wider">
          My work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] accent-underline accent-underline-center">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-neutral-500 text-[17px] max-w-3xl leading-[30px] text-center"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="flex flex-wrap gap-6 sm:gap-8 justify-center">
        {defaultProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Works, 'projects')
