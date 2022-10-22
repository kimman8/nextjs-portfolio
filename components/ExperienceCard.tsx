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
    <article className='flex flex-col rounded-lg bg-[#112240] p-10 items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center opacity-70 hover:opacity-100 transition-opacity duration-200 overflow-hidden'>
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
        className='w-32 h-32 rounded-full object-cover xl:w-[200px] object-center'
      />
      <div className='px-0 md:px-10'>
        <h4 className='tracking-wide text-4xl text-[#64FFDB]'>
          {experience.jobTitle}
        </h4>
        <p className='tracking-widest text-2xl mt-1 text-[#A8B2D1]'>
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
              className='rounded-full relative mx-auto object-cover'
            />
          ))}
        </div>
        <p className='uppercase py-5 text-[#5B6785]'>
          {experience.dateStarted} -{' '}
          {experience.isCurrentlyWorkingHere ? 'PRESENT' : experience.dateEnded}
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 pr-5  overflow-y-scroll scrollbar-track-gray-400/20 scrollbar-thumb-[#64FFDB]/80'>
          {/* <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 pr-5  overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-gray-400/20  scrollbar-thumb-[#64FFDB]/80'> */}
          {experience.points.map((point: any, i: any) => (
            <li key={i} className='text-[#95A0BF]'>
              ⇨ {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
