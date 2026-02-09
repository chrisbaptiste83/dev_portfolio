import React from 'react'
import { motion } from 'framer-motion'

const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  }
}

const SectionWrapper = (Component, idName) =>
  function HOC(props) {
    const sectionLabel = idName ? idName.replace(/-/g, ' ') : undefined

    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="section-shell relative z-0"
        aria-label={sectionLabel}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component {...props} />
      </motion.section>
    )
  }

export default SectionWrapper
