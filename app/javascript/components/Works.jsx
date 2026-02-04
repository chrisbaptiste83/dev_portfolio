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
      <div className="bg-tertiary p-6 rounded-2xl sm:w-[360px] w-full group border border-neutral-800 hover:border-accent-muted/40 transition-colors">
        <div className="relative w-full h-[230px]">
          <div className="w-full h-full rounded-2xl bg-black-100 flex items-center justify-center border border-neutral-800">
            <span className="text-4xl font-black text-neutral-700">{String(index + 1).padStart(2, '0')}</span>
          </div>

          <div className="absolute inset-0 flex justify-end m-3 gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {source_code_link && (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:bg-neutral-700 transition-all"
              >
                <span className="text-white text-sm">{'</>'}</span>
              </a>
            )}
            {live_link && (
              <a
                href={live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:bg-neutral-200 transition-all"
              >
                <span className="text-black text-lg">→</span>
              </a>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-neutral-500 text-[14px] leading-relaxed">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <span
              key={`${name}-${tagIndex}`}
              className="text-[12px] text-accent bg-accent-muted/10 px-3 py-1 rounded border border-accent-muted/20"
            >
              {tag.name}
            </span>
          ))}
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
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className="sm:text-[18px] text-[14px] text-accent uppercase tracking-wider">
          My work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-8 text-neutral-500 text-[17px] max-w-3xl leading-[30px] text-center"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-24 flex flex-wrap gap-10 justify-center">
        {defaultProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects')
