import React from 'react'
import { motion } from "framer-motion"
import { Experience } from '../typings'
import {urlFor} from "../sanity"
import Image from 'next/image'

type Props = {
    individualExperience : Experience
}

function ExperienceCard({individualExperience}: Props) {
  return (
    <article className='flex flex-col rounded-lg bg-[#292929] p-10 items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center opacity-50 hover:opacity-100 transition-opacity duration-200 overflow-hidden'>
        <motion.img initial={{
            y:-200,
            opacity: 0,
            }} 
            whileInView={{
                y:0,
                opacity: 1,
            }}  
            viewport={{once:true}}
            transition={{
                duration:1.2
            }}
            src={urlFor(individualExperience?.companyImage).url()}  
            alt="Kim Yuen" 
            className='w-32 h-32 rounded-full object-cover xl:w-[200px] object-center'/>
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl'>{individualExperience.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1'>{individualExperience.company}</p>
                <div className='flex space-x-2 my-2'>
                    {individualExperience.technologies.map((technology) => (
                         <Image 
                          key={technology._id }
                          src={urlFor(technology?.image).url()}
                          alt="Kim Yuen"
                          width={190}
                          height={190}
                          className='rounded-full relative mx-auto object-cover'
                          />
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>{new Date(individualExperience.dateStarted).toDateString()} - {individualExperience.isCurrentlyWorkingHere ? 'PRESENT' : new Date(individualExperience.dateEnded).toDateString() }</p>
                <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 pr-5  overflow-y-scroll scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {/* <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 pr-5  overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-[#F7AB0A]/80'> */}
                    {individualExperience.points.map((point:any, i:any)=>(
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
    </article>
    
  )
}

export default ExperienceCard