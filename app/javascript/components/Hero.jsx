import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'full-stack web apps',
  'React interfaces',
  'Rails backends',
  'seamless experiences',
]

const heroTags = ['React', 'Rails', 'TypeScript']

const Hero = ({ name = 'Christopher Baptiste' }) => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length + 1))
      }, 80)
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length - 1))
      }, 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] mx-auto overflow-hidden">
      <div className="hero-grid" aria-hidden="true" />
      {/* Hero aurora blobs */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="hero-aurora-1" />
        <div className="hero-aurora-2" />
      </div>

      {/* Text content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 pt-28 sm:pt-32 pb-16 sm:pb-10 flex flex-col lg:flex-row items-start gap-10">
          <div className="flex flex-row items-start gap-6 flex-1">
            <div className="flex flex-col justify-center items-center mt-4">
              <div className="w-5 h-5 rounded-full bg-accent shadow-[0_0_15px_rgba(155,27,48,0.5)]" />
              <div className="w-1 sm:h-72 h-32 bg-gradient-to-b from-accent via-accent-muted to-transparent" />
            </div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="font-display font-black text-white lg:text-[82px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px]"
              >
                Christopher{' '}
                <span className="text-gradient">Michael</span>{' '}
                Baptiste
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="lg:text-[28px] sm:text-[24px] xs:text-[20px] text-[16px] lg:leading-[40px]"
              >
                <span className="text-neutral-400 font-medium">I build </span>
                <span aria-hidden="true" className="text-accent font-semibold">{displayed}</span>
                <span aria-hidden="true" className="text-accent animate-pulse font-light">|</span>
                <span className="sr-only">
                  I build full-stack web apps, React interfaces, Rails backends, and seamless experiences.
                </span>
              </motion.div>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-5">
                <motion.a
                  href="#projects"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="btn-accent text-sm sm:text-base"
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="text-neutral-400 hover:text-white border border-neutral-700 hover:border-accent/50 hover:bg-accent/5 px-6 py-3 rounded-xl font-medium transition-all text-sm sm:text-base"
                >
                  Get In Touch
                </motion.a>
              </div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:chris@example.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </motion.div>

              {/* Hero meta */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="flex flex-wrap items-center gap-3"
              >
                <span className="hero-pill">Primary Stack</span>
                {heroTags.map((tag) => (
                  <span key={tag} className="hero-tag">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="w-full lg:w-[360px]"
          >
            <div className="hero-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div className="hero-avatar">
                  <span>CB</span>
                </div>
                <div className="availability-pill">
                  <span className="availability-dot" aria-hidden="true" />
                  Open to new projects
                </div>
              </div>

              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-widest">Current Focus</p>
                <h3 className="text-white text-xl font-semibold mt-2">
                  Design-forward products
                </h3>
                <p className="text-neutral-500 text-sm mt-2 leading-relaxed">
                  Shipping fast, accessible interfaces and resilient Rails APIs.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  'UI Systems',
                  'Performance',
                  'APIs',
                  'DX Tooling',
                ].map((item) => (
                  <div key={item} className="hero-metric">
                    {item}
                  </div>
                ))}
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span>Based in NY</span>
                  <span>Remote-friendly</span>
                </div>
                <div className="mt-3 h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                  <div className="h-full w-[72%] bg-gradient-to-r from-accent to-accent-light" />
                </div>
                <p className="text-[11px] text-neutral-600 mt-2">
                  Availability in the next 2-4 weeks.
                </p>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="max-w-7xl mx-auto px-8 sm:px-16 pb-16 sm:pb-20"
        >
          <div className="case-study">
            <div className="case-study-header">
              <div>
                <p className="case-pill">Case Study</p>
                <h3 className="text-white text-2xl sm:text-3xl font-semibold mt-3">
                  Latest Project: Rails + Inertia.js + React + Turbo Native.
                </h3>
              </div>
              <div className="case-metric">
                <p className="text-neutral-500 text-xs uppercase tracking-widest">Status</p>
                <p className="text-gradient text-2xl font-black mt-2">Active</p>
                <p className="text-neutral-500 text-xs mt-1">shipping v1</p>
              </div>
            </div>

            <div className="case-study-grid">
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-widest">Problem</p>
                <p className="text-neutral-300 text-sm leading-relaxed mt-2">
                  Needed a single codebase that feels native on mobile while keeping web iteration fast.
                </p>
              </div>
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-widest">Solution</p>
                <p className="text-neutral-300 text-sm leading-relaxed mt-2">
                  Rails app with Inertia.js and React for the web UI, plus Turbo Native for iOS/Android shells.
                </p>
              </div>
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-widest">Outcome</p>
                <p className="text-neutral-300 text-sm leading-relaxed mt-2">
                  Shared components, consistent UX, and faster shipping across platforms.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
