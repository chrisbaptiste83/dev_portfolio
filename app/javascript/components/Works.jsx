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

const MY_PROJECTS = [
  {
    name: 'Shopzilla — Gloria\'s Embroidery',
    description:
      'Full-featured e-commerce platform for an embroidery studio. Stripe-powered checkout, secure time-limited download links, user dashboard, wishlist, and a stunning aurora-themed UI with DaisyUI and Tailwind CSS.',
    tags: [
      { name: 'Rails 8' },
      { name: 'Stripe' },
      { name: 'Tailwind/DaisyUI' },
      { name: 'Active Storage' },
      { name: 'Kamal' },
    ],
    image: 'https://image.thum.io/get/width/1200/crop/630/noanimate/https://gloriasembroideryshop.com',
    source_code_link: 'https://github.com/chrisbaptiste83/shopzilla',
    live_link: 'https://gloriasembroideryshop.com',
  },
  {
    name: 'Libra Arcana',
    description:
      'Dark-themed digital bookstore with Stripe checkout, time-limited token-authenticated download links, admin dashboard via ActiveAdmin, and rich reading experience built on Rails with Active Storage.',
    tags: [
      { name: 'Rails 7' },
      { name: 'Stripe' },
      { name: 'Devise' },
      { name: 'ActiveAdmin' },
    ],
    image: 'https://image.thum.io/get/width/1200/crop/630/noanimate/https://libra-arcana.online',
    source_code_link: 'https://github.com/chrisbaptiste83/libra_arcana',
    live_link: 'https://libra-arcana.online',
  },
  {
    name: 'Tethered — Social Platform',
    description:
      'Full-featured social media app with posts, comments, reactions, friendships, photo albums, real-time messaging, and live notifications powered by ActionCable. Built with Rails and a rich component UI.',
    tags: [
      { name: 'Rails 8' },
      { name: 'ActionCable' },
      { name: 'Turbo' },
      { name: 'PostgreSQL' },
    ],
    image: 'https://image.thum.io/get/width/1200/crop/630/noanimate/https://tethered.site',
    source_code_link: 'https://github.com/chrisbaptiste83/social_media_app',
    live_link: 'https://tethered.site',
  },
  {
    name: 'Cyrus Baptiste Portfolio',
    description:
      'Personal portfolio site built for a client. Modern dark aesthetic with smooth animations, project showcase, contact form, and fully responsive layout deployed with Kamal on a custom domain.',
    tags: [
      { name: 'Rails 8' },
      { name: 'Tailwind CSS' },
      { name: 'GSAP' },
      { name: 'Kamal' },
    ],
    image: 'https://image.thum.io/get/width/1200/crop/630/noanimate/https://cyrusbaptiste.com',
    source_code_link: 'https://github.com/chrisbaptiste83/cyrus-portfolio',
    live_link: 'https://cyrusbaptiste.com',
  },
]

const FeaturedProject = ({ project }) => {
  if (!project) return null
  return (
    <motion.div variants={fadeIn('up', 'spring', 0.2, 0.9)}>
      <div className="featured-project">
        <div className="featured-project-media">
          <div className="project-image-area h-full">
            {project.image && (
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="project-image"
                loading="lazy"
              />
            )}
            <div className="project-image-overlay" aria-hidden="true" />
            <div className="project-image-content flex flex-col items-start gap-2">
              <span className="text-neutral-500 text-xs uppercase tracking-widest">Featured</span>
              <span className="text-3xl sm:text-4xl font-black text-gradient">{project.name}</span>
            </div>
          </div>
        </div>

        <div className="featured-project-body">
          <p className="text-neutral-400 text-sm uppercase tracking-widest">Project Spotlight</p>
          <h3 className="text-white text-2xl sm:text-3xl font-semibold mt-3">{project.name}</h3>
          <p className="text-neutral-500 text-sm leading-relaxed mt-3">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => {
              const colorClass = tagColors[tagIndex % tagColors.length]
              return (
                <span
                  key={`${project.name}-${tagIndex}`}
                  className={`text-[12px] ${colorClass} px-3 py-1 rounded-full border font-medium`}
                >
                  {tag.name}
                </span>
              )
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-sm !py-2.5 !px-5"
              >
                View Code
              </a>
            )}
            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white border border-neutral-700 hover:border-accent/50 hover:bg-accent/5 px-5 py-2.5 rounded-xl font-medium transition-all text-sm"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const CompactProject = ({ project, index }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', 0.2 + index * 0.1, 0.8)}>
      <div className="compact-project h-full flex flex-col">
        <div className="relative w-full h-[200px] rounded-xl overflow-hidden mb-4">
          {project.image && (
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        <div className="compact-project-title">
          <h4 className="text-white text-lg font-semibold">{project.name}</h4>
          <div className="flex items-center gap-2">
            {project.source_code_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="compact-project-link"
              >
                Code
              </a>
            )}
            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="compact-project-link"
              >
                Live
              </a>
            )}
          </div>
        </div>
        <p className="text-neutral-500 text-sm leading-relaxed mt-2 flex-1">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => {
            const colorClass = tagColors[tagIndex % tagColors.length]
            return (
              <span
                key={`${project.name}-compact-${tagIndex}`}
                className={`text-[11px] ${colorClass} px-2.5 py-1 rounded-full border font-medium`}
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
  const displayProjects = projects.length > 0 ? projects : MY_PROJECTS

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
          Real-world applications built from scratch — from e-commerce and social platforms
          to client portfolios. Each project is fully deployed, production-ready, and reflects
          my ability to ship complete, polished products end to end.
        </motion.p>
      </div>

      <div className="space-y-10">
        <FeaturedProject project={displayProjects[0]} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayProjects.slice(1).map((project, index) => (
            <CompactProject
              key={`project-compact-${index}`}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Works, 'projects')
