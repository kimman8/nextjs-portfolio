import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'
type Props = {
  experience: Experience[]
}

function WorkExperience({experience}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{
        duration: 1.5
    }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='uppercase text-2xl tracking-[20px] text-gray-500 absolute top-24'>Experience</h3>
        {/* <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-gray-400/20  scrollbar-thumb-[#F7AB0A]/80'> */}
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-[#F7AB0A]/80'>
          {experience?.map((individualExperience)=> (
            <ExperienceCard key={individualExperience?._id} individualExperience={individualExperience}/> 
          ))}
        </div>
    </motion.div>
  )
}

export default WorkExperience