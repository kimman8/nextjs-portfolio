import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className='h-screen relative flex flex-col items-center justify-evenly md:flex-row text-center md:text-left max-w-7xl mx-auto'
    >
      <h3 className='uppercase tracking-[20px] absolute top-24 text-gray-500 text-2xl'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(pageInfo?.profilePic)?.url()}
        alt='Kim Yuen'
        className='w-56 h-56 rounded-full object-cover -mb-20 md:mb-0 flex-shrink-0 md:rounded-lg md:w-64 md:h-96 xl:w -[500px] xl:h-[600px] md:ml-5'
      />
      <div className='space-y-10 px-4 md:px-10 max-w-xl'>
        <h4 className='text-4xl font-semibold'>
          Here&apos;s a{' '}
          <span className='underline decoration-[#F7AB0A]/50'>little</span>{' '}
          background
        </h4>
        <p className='text-base'>{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
