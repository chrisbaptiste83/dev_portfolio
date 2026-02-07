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

const services = [
  {
    title: 'Web Developer',
    description: 'Building responsive, performant web experiences',
    icon: (
      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: 'React Developer',
    description: 'Creating dynamic UIs with modern React patterns',
    icon: (
      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Backend Developer',
    description: 'Designing scalable APIs and server architectures',
    icon: (
      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Full Stack Developer',
    description: 'End-to-end solutions from database to deployment',
    icon: (
      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
]

const CodeTerminal = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    viewport={{ once: true }}
    className="max-w-2xl mx-auto"
  >
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-neutral-600 text-xs ml-4" style={{ fontFamily: "'SF Mono', 'Consolas', monospace" }}>
          developer.js
        </span>
      </div>
      <div className="terminal-body">
        <div>
          <span className="terminal-line-number">1</span>
          <span className="text-accent">const</span> <span className="text-white">developer</span> <span className="text-neutral-500">=</span> <span className="text-neutral-400">{'{'}</span>
        </div>
        <div>
          <span className="terminal-line-number">2</span>
          {'  '}<span className="text-emerald-400">name</span><span className="text-neutral-500">:</span> <span className="text-amber-300">"Christopher Baptiste"</span><span className="text-neutral-500">,</span>
        </div>
        <div>
          <span className="terminal-line-number">3</span>
          {'  '}<span className="text-emerald-400">role</span><span className="text-neutral-500">:</span> <span className="text-amber-300">"Full Stack Developer"</span><span className="text-neutral-500">,</span>
        </div>
        <div>
          <span className="terminal-line-number">4</span>
          {'  '}<span className="text-emerald-400">skills</span><span className="text-neutral-500">:</span> <span className="text-neutral-400">[</span><span className="text-amber-300">"React"</span><span className="text-neutral-500">,</span> <span className="text-amber-300">"Rails"</span><span className="text-neutral-500">,</span> <span className="text-amber-300">"TypeScript"</span><span className="text-neutral-400">]</span><span className="text-neutral-500">,</span>
        </div>
        <div>
          <span className="terminal-line-number">5</span>
          {'  '}<span className="text-emerald-400">passion</span><span className="text-neutral-500">:</span> <span className="text-amber-300">"Building beautiful things"</span><span className="text-neutral-500">,</span>
        </div>
        <div>
          <span className="terminal-line-number">6</span>
          {'  '}<span className="text-indigo-400">build</span><span className="text-neutral-500">:</span> <span className="text-neutral-400">()</span> <span className="text-accent">=&gt;</span> <span className="text-amber-300">"amazing products"</span>
        </div>
        <div>
          <span className="terminal-line-number">7</span>
          <span className="text-neutral-400">{'}'}</span><span className="text-neutral-500">;</span><span className="cursor-blink">|</span>
        </div>
      </div>
    </div>
  </motion.div>
)

const ServiceCard = ({ index, title, description, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-card service-card"
    >
      <div className="rounded-[20px] py-7 px-10 min-h-[240px] flex justify-evenly items-center flex-col">
        <div className="service-icon-box">
          {icon}
        </div>
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        <p className="text-neutral-500 text-[13px] text-center leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  </div>
)

const About = () => {
  return (
    <div className="section-stack">
      <motion.div variants={textVariant()} className="text-center">
        <p className="sm:text-[18px] text-[14px] text-accent uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] accent-underline accent-underline-center">
          Overview.
        </h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-neutral-400 text-[17px] max-w-3xl leading-[30px] text-center"
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Ruby on Rails, and
          Node.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
      </div>

      <CodeTerminal />

      <div className="flex flex-wrap gap-8 sm:gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about')
