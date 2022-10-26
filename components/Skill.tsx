import React from 'react';
import { motion } from 'framer-motion';
import { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className='group relative flex'>
      <motion.img
        initial={{
          // x: directionLeft ? -200 : 200,
          x: 0,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src={urlFor(skill?.image).url()}
        className='h-8 w-8 rounded-full border border-gray-500 object-cover md:h-12 md:w-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 group-hover:bg-[#CCD6F6] h-8 w-8 md:h-12 md:w-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full transition duration-300 ease-in-out z-0'>
        <div className='flex h-full flex-col items-center justify-center'>
          <p className='text-xs xl:text-sm opacity-100 text-black font-bold'>
            {skill.title}
          </p>
          <p className='text-xs lg:text-lg xl:text-xl opacity-100 text-black font-bold'>
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
