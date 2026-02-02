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
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full group border border-gray-800 hover:border-gray-600 transition-colors">
        <div className="relative w-full h-[230px]">
          <div className="w-full h-full rounded-2xl bg-black-100 flex items-center justify-center border border-gray-800">
            <span className="text-6xl">🖼️</span>
          </div>

          <div className="absolute inset-0 flex justify-end m-3 gap-2">
            {source_code_link && (
              <a
                href={source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:bg-gray-600 transition-all"
              >
                <span className="text-xl">📂</span>
              </a>
            )}
            {live_link && (
              <a
                href={live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 hover:bg-gray-200 transition-all"
              >
                <span className="text-xl">🔗</span>
              </a>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-gray-400 text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <p
              key={`${name}-${tagIndex}`}
              className="text-[14px] text-gray-400"
            >
              #{tag.name}
            </p>
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
        { name: 'react', color: 'blue-text-gradient' },
        { name: 'mongodb', color: 'green-text-gradient' },
        { name: 'tailwind', color: 'pink-text-gradient' },
      ],
      source_code_link: 'https://github.com/',
      live_link: 'https://example.com',
    },
    {
      name: 'Job IT',
      description:
        'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
      tags: [
        { name: 'react', color: 'blue-text-gradient' },
        { name: 'restapi', color: 'green-text-gradient' },
        { name: 'scss', color: 'pink-text-gradient' },
      ],
      source_code_link: 'https://github.com/',
      live_link: 'https://example.com',
    },
    {
      name: 'Trip Guide',
      description:
        'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
      tags: [
        { name: 'nextjs', color: 'blue-text-gradient' },
        { name: 'supabase', color: 'green-text-gradient' },
        { name: 'css', color: 'pink-text-gradient' },
      ],
      source_code_link: 'https://github.com/',
      live_link: 'https://example.com',
    },
  ]

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">
          My work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-gray-400 text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {defaultProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects')
