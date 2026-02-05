import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from './hoc/SectionWrapper'

const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  }
}

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content

      const response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify({
          contact_message: form,
        }),
      })

      if (response.ok) {
        setSuccess(true)
        setForm({
          name: '',
          email: '',
          message: '',
        })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="xl:mt-12 flex flex-col lg:flex-row gap-10 items-start">
      {/* Contact info panel */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full lg:w-[380px] flex-shrink-0"
      >
        <p className="sm:text-[18px] text-[14px] text-accent uppercase tracking-wider">
          Get in touch
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] accent-underline">
          Contact.
        </h3>

        <p className="mt-8 text-neutral-400 text-[16px] leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities
          to be part of your vision. Feel free to reach out through the form or any
          of the channels below.
        </p>

        <div className="mt-10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <p className="text-neutral-500 text-sm">Email</p>
              <a href="mailto:chris@example.com" className="text-white hover:text-accent transition-colors">chris@example.com</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <p className="text-neutral-500 text-sm">Location</p>
              <p className="text-white">Available Worldwide (Remote)</p>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-10 flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl border border-neutral-800 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all group"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 text-neutral-500 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-xl border border-neutral-800 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all group"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 text-neutral-500 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Contact form */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full flex-1 bg-black-100 p-10 sm:p-12 rounded-2xl border border-neutral-800"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-neutral-600 text-white rounded-lg outline-none border border-neutral-800 font-medium focus:border-accent/40 transition-colors"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-neutral-600 text-white rounded-lg outline-none border border-neutral-800 font-medium focus:border-accent/40 transition-colors"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-neutral-600 text-white rounded-lg outline-none border border-neutral-800 font-medium focus:border-accent/40 transition-colors"
              required
            />
          </label>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          {success && (
            <p className="text-emerald-400 text-sm">
              Thank you! I'll get back to you as soon as possible.
            </p>
          )}

          <button
            type="submit"
            className="btn-accent w-fit"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
