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
} from '../components'

const Home = ({ name, skills, projects }) => {
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
