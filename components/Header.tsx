import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typings';
import { AiFillMessage } from 'react-icons/ai';

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 p-3 md:p-5 flex items-start justify-between max-w-7xl mx-auto z-20 items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center justify-center'
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social?._id}
            url={social?.url}
            fgColor='#64FFDB'
            bgColor='transparent'
            target='_blank'
          />
        ))}
      </motion.div>
      <Link href='#contact'>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className='flex flex-row text-gray-300 cursor-pointer items-center'
        >
          {/* <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          /> */}
          {/* we get UI hydration issues when we add the above icon */}
          <AiFillMessage className='w-4 h-4 mr-4 md:mr-2 text-[#64FFDB] text-xs md:text-sm lg:text-base' />
          <p className='uppercase hidden md:inline-flex text-[#64FFDB] text-xs md:text-sm lg:text-base tracking-widest'>
            Say hi
          </p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
