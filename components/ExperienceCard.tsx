import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      // className='flex flex-col rounded-lg bg-[#112240] p-3 md:p-6 lg:p-10 items-center space-y-3 md:space-y-7 flex-shrink-0 w-[300px] md:w-[700px] lg:w-[800px] xl:w-[900px] snap-center opacity-70 hover:opacity-100 transition-opacity duration-200 overflow-hidden'
      className='w-screen flex-shrink-0 overflow-y-scroll snap-center flex flex-col space-y-2 md:space-y-5 lg:space-y-8 xl:space-y-12 px-5 items-center justify-center p-1 md:p-6 lg:p-20 xl:p-36 h-screen'
    >
      <motion.img
        initial={{
          y: -200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(experience?.companyImage).url()}
        alt='Kim Yuen'
        className='w-12 h-12 md:w-16 md:h-16 lg:h-32 lg:w-32 rounded-full object-cover xl:w-[200px] object-center'
      />
      <div className='px-0 md:px-2 lg:px-6 xl:px-8'>
        <h4 className='tracking-wide text-sm md:text-lg lg:text-4xl text-[#64FFDB]'>
          {experience.jobTitle}
        </h4>
        <p className='tracking-widest text-xs md:text-base lg:text-2xl mt-1 text-[#A8B2D1]'>
          {experience.company}
        </p>
        <div className='flex my-2 justify-evenly'>
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology?.image).url()}
              alt='Technology Icon'
              width={50}
              height={50}
              className='w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-12 xl:h-12 rounded-full relative mx-auto object-cover'
            />
          ))}
        </div>
        <p className='uppercase py-5 text-[#5B6785] text-xs md:text-sm lg:text-base xl:text-lg'>
          {experience.dateStarted} -{' '}
          {experience.isCurrentlyWorkingHere ? 'PRESENT' : experience.dateEnded}
        </p>
        <ul className='list-disc space-y-2 lg:space-y-4 ml-2 md:ml-5 text-xs max-h-96 pr-5  overflow-y-scroll scrollbar-track-gray-400/20 scrollbar-thumb-[#64FFDB]/80'>
          {/* <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 pr-5  overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-[#64FFDB]/80'> */}
          {experience.points.map((point: any, i: any) => (
            <li
              key={i}
              className='text-[#95A0BF] text-[14px] md:text-sm lg:text-base xl:text-xl'
            >
              ⇨ {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
