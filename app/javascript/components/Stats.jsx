import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Projects Completed' },
  { value: 12, suffix: '+', label: 'Technologies' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
]

const CountUp = ({ target, suffix, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, (duration * 1000) / steps)

    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return (
    <span ref={ref} className="text-gradient font-black text-[48px] sm:text-[56px] leading-none">
      {count}{suffix}
    </span>
  )
}

const Stats = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-20 px-10 py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <CountUp target={stat.value} suffix={stat.suffix} />
            <p className="text-neutral-500 text-sm mt-3 uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Stats
