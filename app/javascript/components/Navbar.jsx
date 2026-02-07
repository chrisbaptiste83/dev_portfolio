import React, { useEffect, useState, useCallback } from 'react'
import { motion, LayoutGroup } from 'framer-motion'

const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'tech', title: 'Tech' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
]

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Scroll detection + progress bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 100)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll spy - detects which section is in view
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = navLinks.find((l) => l.id === entry.target.id)
            if (link) setActive(link.title)
          }
        })
      },
      { threshold: 0.2, rootMargin: '-80px 0px -40% 0px' }
    )

    // Small delay to let sections mount
    const timeout = setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    }, 500)

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [])

  const handleNavClick = useCallback((title) => {
    setActive(title)
    setToggle(false)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav
        className={`px-8 sm:px-16 w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-500 ${
          scrolled
            ? 'bg-primary/95 backdrop-blur-md nav-scrolled translate-y-0 opacity-100'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => {
              setActive('')
              window.scrollTo(0, 0)
            }}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-muted flex items-center justify-center shadow-[0_0_12px_rgba(155,27,48,0.3)] group-hover:shadow-[0_0_20px_rgba(155,27,48,0.5)] transition-shadow">
              <span className="text-white font-bold text-lg">CB</span>
            </div>
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Christopher &nbsp;
              <span className="sm:block hidden text-neutral-400">| Developer</span>
            </p>
          </a>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-10">
            <LayoutGroup>
              <ul className="list-none flex flex-row gap-8">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-white' : 'text-neutral-400'
                    } hover:text-white text-[15px] font-medium cursor-pointer transition-colors duration-200`}
                    onClick={() => handleNavClick(nav.title)}
                  >
                    <a href={`#${nav.id}`} className="relative pb-2">
                      {nav.title}
                      {active === nav.title && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </LayoutGroup>

            {/* CTA button */}
            <a
              href="#contact"
              onClick={() => handleNavClick('Contact')}
              className="btn-accent text-sm !py-2.5 !px-5"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <button
              className="w-[28px] h-[28px] flex flex-col justify-center items-center gap-1"
              onClick={() => setToggle(!toggle)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                  toggle ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                  toggle ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                  toggle ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>

            {/* Mobile menu */}
            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-6 glass-strong absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl flex-col gap-2`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-medium cursor-pointer text-[16px] transition-colors duration-200 ${
                      active === nav.title ? 'text-white' : 'text-neutral-400'
                    }`}
                    onClick={() => handleNavClick(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-neutral-800">
                <a
                  href="#contact"
                  onClick={() => handleNavClick('Contact')}
                  className="btn-accent text-sm !py-2 !px-4 block text-center"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
