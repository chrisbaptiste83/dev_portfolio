import React from 'react'
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from '../components'

const Home = ({ name, experiences, skills, projects, testimonials }) => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero name={name} />
      </div>
      <About />
      <Experience experiences={experiences} />
      <Tech skills={skills} />
      <Works projects={projects} />
      <Feedbacks testimonials={testimonials} />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}

export default Home
