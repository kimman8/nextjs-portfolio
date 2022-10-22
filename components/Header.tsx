import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
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
        className='flex flex-row items-center'
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social?._id}
            url={social?.url}
            fgColor='#64FFDB'
            bgColor='transparent'
            className='transition-all hover:text-[#64FFDB]/40'
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
          <h1 className='uppercase hidden md:inline-flex text-[#64FFDB] text-sm tracking-widest'>
            Say Hello
          </h1>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
