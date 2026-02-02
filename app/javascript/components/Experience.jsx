import React from 'react'
import { motion } from 'framer-motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SectionWrapper from './hoc/SectionWrapper'

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

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1a1a1a',
        color: '#fff',
        border: '1px solid #333',
      }}
      contentArrowStyle={{ borderRight: '7px solid #333' }}
      date={experience.date}
      iconStyle={{ background: '#2a2a2a', border: '2px solid #444' }}
      icon={
        <div className="flex justify-center items-center w-full h-full text-2xl">
          {experience.icon}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-gray-400 text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-gray-300 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = ({ experiences = [] }) => {
  const defaultExperiences = experiences.length > 0 ? experiences : [
    {
      title: 'Senior Full Stack Developer',
      company_name: 'Tech Company',
      icon: '🏢',
      iconBg: '#2a2a2a',
      date: 'Jan 2023 - Present',
      points: [
        'Developing and maintaining web applications using React.js, Ruby on Rails, and other related technologies.',
        'Collaborating with cross-functional teams including designers, product managers, and other developers.',
        'Implementing responsive design and ensuring cross-browser compatibility.',
        'Participating in code reviews and providing constructive feedback to other developers.',
      ],
    },
    {
      title: 'Full Stack Developer',
      company_name: 'Startup Inc',
      icon: '🚀',
      iconBg: '#3a3a3a',
      date: 'Jun 2021 - Dec 2022',
      points: [
        'Built scalable web applications using modern JavaScript frameworks.',
        'Worked on API development and database optimization.',
        'Mentored junior developers and led technical discussions.',
        'Improved application performance by 40% through optimization.',
      ],
    },
    {
      title: 'Junior Developer',
      company_name: 'Web Agency',
      icon: '💼',
      iconBg: '#2a2a2a',
      date: 'Jan 2020 - May 2021',
      points: [
        'Developed responsive websites for various clients.',
        'Learned and applied best practices in web development.',
        'Collaborated with designers to implement pixel-perfect designs.',
        'Gained experience with version control and agile methodologies.',
      ],
    },
  ]

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {defaultExperiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
