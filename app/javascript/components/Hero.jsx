import React from 'react'
import { motion } from 'framer-motion'
import { ComputersCanvas } from './canvas'

const Hero = ({ name = 'Christopher Baptiste' }) => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Text content */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="max-w-7xl mx-auto sm:px-16 px-6 pt-32 flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-white" />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-white to-transparent" />
          </div>

          <div>
            <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 drop-shadow-lg">
              Christopher <span className="text-gray-300">Michael</span> Baptiste
            </h1>
            <p className="text-gray-300 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 drop-shadow-md">
              I develop web applications <br className="sm:block hidden" />
              and user interfaces
            </p>
          </div>
        </div>
      </div>

      {/* 3D Computer - takes full screen behind text */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about" className="pointer-events-auto">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
