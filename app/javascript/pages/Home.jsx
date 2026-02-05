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
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero name={name} />
      </div>
      <About />
      <Stats />
      <Tech skills={skills} />
      <Works projects={projects} />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  )
}

export default Home
