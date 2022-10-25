import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import { FiGithub } from 'react-icons/fi';
import { MdOutlineLaunch } from 'react-icons/md';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='px-5 uppercase text-xs md:text-lg lg:text-3xl tracking-[5px] md:tracking-[10px] text-[#CCD6F6] absolute top-12 md:top-20'>
        Some Things I&apos;ve Built
        {/* Projects */}
      </h3>
      {/* <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thumb-[#64FFDB]/80'> */}
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#64FFDB]/80'>
        {projects?.map((project, i) => (
          <div
            key={project?._id}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-4 md:p-6 lg:p-20 xl:p-36 h-screen'
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt='project'
              className='w-4/5 md:w-1/3'
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl '>
              <h4 className='text-sm md:text-xl lg:text-2xl xl:text-4xl font-semibold text-[#CCD6F6]'>
                <span className='underline decoration-[#64FFDB]/50'>
                  Project {i + 1} of {projects?.length}:
                </span>{' '}
                {project?.title}
              </h4>
              <div className='flex items-center justify-around'>
                {project?.technologies.map((technology) => (
                  <img
                    src={urlFor(technology?.image).url()}
                    key={technology?._id}
                    alt='tech'
                    className='w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-9 xl:h-9 rounded-full relative mx-auto object-cover'
                  />
                ))}
              </div>
              <p className='text-xs md:text-base lg:text-lg xl:text-xl text-[#858FAD] text-left'>
                {project?.summary}
              </p>
              <div className='flex space-x-3 md:space-x-5 justify-center items-center'>
                <a
                  href={project?.linkToBuild}
                  aria-label='live preview'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <MdOutlineLaunch className='text-[#CCD6F6] h-4 w-4 md:h-6 md:w-6 hover:text-[#5FF5D3] ease-in-out duration-300 transition-all' />
                </a>
                <a
                  href={project?.linkToSourceCode}
                  aria-label='source code'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FiGithub className='text-[#CCD6F6] h-4 w-4 md:h-6 md:w-6 hover:text-[#5FF5D3] ease-in-out duration-300 transition-all' />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#64FFDB]/10 h-[500px] left-0 -skew-y-12' />
    </motion.div>
  );
}

export default Projects;
