import React from 'react';
import { motion } from 'framer-motion';

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      whileInView={{ opacity: 1 }}
      className='relative flex justify-center items-center'
    >
      <div className='absolute border border-[#233554] rounded-full h-[100px] w-[100px] lg:h-[200px] lg:w-[200px] animate-ping mt-48' />
      <div className='absolute border border-[#233554] rounded-full h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] mt-48' />
      <div className='absolute border border-[#233554] rounded-full h-[400px] w-[400px] lg:h-[500px] lg:w-[500px] mt-48' />
      <div className='absolute border border-[#64FFDB] rounded-full opacity-20 h-[550px] w-[550px] lg:h-[650px] lg:w-[650px] animate-pulse mt-48' />
      <div className='absolute border border-[#233554] rounded-full h-[700px] w-[700px] lg:h-[800px] lg:w-[800px] mt-48' />
    </motion.div>
  );
}

export default BackgroundCircles;
