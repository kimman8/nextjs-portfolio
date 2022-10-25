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
      <h3 className='uppercase text-md md:text-2xl lg:text-3xl tracking-[12px] md:tracking-[20px] text-[#CCD6F6] absolute top-12 md:top-20'>
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
        className='w-14 h-14 rounded-full object-cover -mb-28 md:mb-0 flex-shrink-0 md:rounded-lg md:w-40 md:h-60 lg:w-64 lg:h-96 xl:w-[500px] xl:h-[600px] md:ml-5'
      />
      <div className='mt-10 space-y-3 lg:space-y-7 px-4 md:px-10 max-w-xl text-left'>
        <h4 className='text-sm md:text-md lg:text-xl xl:text-3xl font-semibold text-[#CCD6F6]'>
          Here&apos;s a{' '}
          <span className='underline decoration-[#64FFDB]/50'>little</span>{' '}
          background
        </h4>
        <p className='text-[12px] md:text-xs lg:text-lg xl:text-xl text-[#858FAD]'>
          Hi! My name is Kim and I enjoy creating art, code and weird projects
          for this perfect and always evolving medium: the web! My interest in
          web development started back in 2006 when I decided to try editing
          custom MySpace profiles — turns out hacking together a custom button
          taught me a lot about HTML & CSS!
          <br />
          <br />
          Fast-forward to today, and I've had the priviledge of working as a
          mechanical engineer and project manager serving the mining, recycling
          and manufacturing industries - designing machinery for some of
          Australia&apos;s largest mining corporations.
          <br />
          <br />
          However, deep down I knew my passion was in the web and software - so
          I made a career switch and my main focus these days is building
          accessible, human-centered products and digital experiences at {''}
          <a
            className='transition-all hover:underline text-[#64FFDB]'
            href='https://www.akqa.com/'
            target='_blank'
          >
            AKQA
          </a>
          {''} for a variety of clients such as Officeworks, BMW, Nissan and
          Australian Super.
          <br />
          <br />
          JavaScript is my love language. Here are a few technologies I&apos;ve
          been working with lately: React, NextJS, TypeScript, GraphQL, HTML &
          CSS.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
