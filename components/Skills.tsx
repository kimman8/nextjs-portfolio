import React from 'react'
import { motion } from "framer-motion"
import Skill from '../components/Skill'
import { Skill as SkillType} from '../typings'


type Props = {
  skills: SkillType[],
 }
function Skills({skills}: Props) {
  const half = Math.ceil(skills.length / 2);
  return (
    <motion.div 
    initial={{
         opacity: 0
    }}
    whileInView={{
        opacity: 1  
    }}
    transition={{
        duration:1.5
    }}
    className='h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className="absolute top-24 uppercase text-gray-500 text-2xl tracking-[20px]">Skills</h3>
        <h3 className='absolute top-36 tracking-[3px] uppercase text-sm text-gray-500'>Hover over a skill for proficiency</h3>
        <div className='grid grid-cols-4 gap-5'>
          {skills?.slice(0, half).map((skill)=>(
            <Skill key={skill?._id} skill={skill}/>
          ))}
          {skills?.slice(half).map((skill)=>(
            <Skill key={skill?._id} skill={skill} directionLeft/>
          ))}
        </div>
    </motion.div>
  )
}

export default Skills