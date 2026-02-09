import React, { Suspense, useEffect, useState } from 'react'
import {
  About,
  Contact,
  Hero,
  Navbar,
  Stats,
  Tech,
  Works,
  Footer,
} from '../components'

const LazyStarsCanvas = React.lazy(() => import('../components/canvas/Stars'))

const shouldEnableStars = () => {
  if (typeof window === 'undefined') return false

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (motionQuery.matches) return false

  const connection = navigator.connection
  if (connection?.saveData) return false
  if (['slow-2g', '2g'].includes(connection?.effectiveType)) return false

  return true
}

const Home = ({ name, skills, projects }) => {
  const [showStars, setShowStars] = useState(false)

  useEffect(() => {
    if (!shouldEnableStars()) return

    let cancelled = false
    const schedule = window.requestIdleCallback || ((cb) => setTimeout(cb, 1200))
    const cancel = window.cancelIdleCallback || clearTimeout

    const id = schedule(() => {
      if (!cancelled) setShowStars(true)
    }, { timeout: 1500 })

    return () => {
      cancelled = true
      cancel(id)
    }
  }, [])
  return (
    <div className="relative z-0 bg-primary">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      {/* Aurora ambient background */}
      <div className="aurora" aria-hidden="true">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      {/* Stars background (subtle, page-wide) */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        {showStars && (
          <Suspense fallback={null}>
            <LazyStarsCanvas />
          </Suspense>
        )}
      </div>

      <header className="relative z-10" role="banner">
        <Navbar />
        <Hero name={name} />
      </header>

      <main
        id="main-content"
        tabIndex="-1"
        aria-label="Main content"
        className="relative z-10"
      >
        <About />
        <div className="section-divider" />
        <Stats />
        <div className="section-divider" />
        <Tech skills={skills} />
        <div className="section-divider" />
        <Works projects={projects} />
        <div className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default Home
