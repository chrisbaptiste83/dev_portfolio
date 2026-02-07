import React from 'react'
import {
  About,
  Contact,
  Hero,
  Navbar,
  Stats,
  Tech,
  Works,
  Footer,
  StarsCanvas,
} from '../components'

const Home = ({ name, skills, projects }) => {
  return (
    <div className="relative z-0 bg-primary">
      {/* Aurora ambient background */}
      <div className="aurora" aria-hidden="true">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      {/* Stars background (subtle, page-wide) */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <StarsCanvas />
      </div>

      <main className="relative z-10">
        <Navbar />
        <Hero name={name} />

        <About />
        <div className="section-divider" />
        <Stats />
        <div className="section-divider" />
        <Tech skills={skills} />
        <div className="section-divider" />
        <Works projects={projects} />
        <div className="section-divider" />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default Home
