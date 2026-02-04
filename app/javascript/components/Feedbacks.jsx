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

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full border border-neutral-800"
  >
    <p className="text-accent font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-neutral-300 tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="text-neutral-600">@</span> {name}
          </p>
          <p className="mt-1 text-neutral-500 text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700">
          <span className="text-xl text-white font-medium">{name.charAt(0)}</span>
        </div>
      </div>
    </div>
  </motion.div>
)

const Feedbacks = ({ testimonials = [] }) => {
  const defaultTestimonials = testimonials.length > 0 ? testimonials : [
    {
      testimonial:
        'I thought it was impossible to make a website as beautiful as our product, but Christopher proved me wrong.',
      name: 'Sara Lee',
      designation: 'CFO',
      company: 'Acme Co',
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Christopher does.",
      name: 'Chris Brown',
      designation: 'COO',
      company: 'DEF Corp',
    },
    {
      testimonial:
        "After Christopher optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: 'Lisa Wang',
      designation: 'CTO',
      company: 'Tech Enterprises',
    },
  ]

  return (
    <div className="mt-12 bg-black-100 rounded-[20px] border border-neutral-800">
      <div className="bg-tertiary rounded-2xl sm:px-16 px-8 sm:py-16 py-12 min-h-[300px]">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-accent uppercase tracking-wider">
            What others say
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Testimonials.
          </h2>
        </motion.div>
      </div>
      <div className="-mt-20 pb-14 sm:px-16 px-8 flex flex-wrap gap-10 justify-center">
        {defaultTestimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, 'testimonials')
