import React from 'react'
import { motion } from "framer-motion"
import { Project } from '../typings'
import {urlFor} from "../sanity"

type Props = {
  projects: Project[],
}

function Projects({projects}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0
    }}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='uppercase text-gray-500 text-2xl tracking-[20px] absolute top-24'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {projects?.map((project, i) => (
                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                    initial={{
                        y: -300,
                        opacity: 0,
                    }}
                    whileInView={{ y: 0,
                        opacity: 1}}
                    transition={{duration: 1.2}}
                    viewport={{once: true}}
                    src={urlFor(project?.image).url()}
                    alt="project" />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>
                        Project {i+1} of {projects?.length }: 
                            </span>
                             {' '}{project?.title}</h4>
                        <div className='flex items-center justify-center space-x-2'>
                            {project?.technologies.map((technology)=>(
                                <img src={urlFor(technology?.image).url()} key={technology._id} alt="tech" className='h-12 w-12 object-cover'/>
                                ))}
                        </div>
                        <p className='text-lg text-center md:text-left'>{project?.summary}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 h-[500px] left-0 -skew-y-12"/>
    </motion.div>
  )
}

export default Projects