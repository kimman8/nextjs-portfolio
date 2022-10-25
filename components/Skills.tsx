import React from 'react';
import { motion } from 'framer-motion';
import Skill from '../components/Skill';
import { Skill as SkillType } from '../typings';

type Props = {
  skills: SkillType[];
};
function Skills({ skills }: Props) {
  const half = Math.ceil(skills.length / 2);
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
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='uppercase text-md md:text-2xl lg:text-3xl tracking-[12px] md:tracking-[20px] text-[#CCD6F6] absolute top-12 md:top-20'>
        Skills
      </h3>
      <h3 className='absolute top-24 md:top-32 tracking-[3px] uppercase text-xs md:text-sm text-[#CCD6F6]'>
        Hover over a skill for proficiency
      </h3>
      <div className='absolute top-40 md:top-48 lg:top-60 grid grid-cols-4 gap-4 md:gap-5 lg:gap-6 xl:gap-8'>
        {/* {skills?.slice(0, half).map((skill) => (
          <Skill key={skill?._id} skill={skill} />
        ))}
        {skills?.slice(half).map((skill) => (
          <Skill key={skill?._id} skill={skill} directionLeft />
        ))} */}
        {skills.map((skill) => (
          <Skill key={skill?._id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
