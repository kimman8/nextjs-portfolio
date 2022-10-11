import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import profilePic from '../public/me-blue.png'
import Link from 'next/link';
import { PageInfo } from "../typings";
import {urlFor} from "../sanity"

type Props = {
  pageInfo: PageInfo;
}

function Hero({pageInfo}: Props) {
    
    const [text, count] = useTypewriter({
        words: [
          `Hi!👋 My Name Is ${pageInfo?.name}`,
          'I-Love-Rock-Climbing.tsx',
           '<ButLoveToCodeEvenMore />'
          ],
        loop: true,
        delaySpeed: 2000,
      });
  return (
    <div className='h-screen flex flex-col space-y-4 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image 
        //  src={profilePic}
         src={urlFor(pageInfo?.heroImage).url()}
         alt="Kim Yuen"
         width={190}
         height={190}
         className='rounded-full relative mx-auto object-cover'
         />
         {/* <img src="https://i.imgur.com/3KNTWBj.png" alt="Kim Yuen" className='rounded-full relative mx-auto object-cover h-32 w-32'/> */}
         <div className='z-20 relative'>
           <h2 className='text-gray-500 text-sm uppercase tracking-[15px] pb-2'>{pageInfo?.role}</h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
              <span className='mr-3'>{text}</span>
              <Cursor cursorColor='#F7AB0A'/> 
          </h1>
          <div className='pt-5'>
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>
            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
         </div>
    </div>
  )
}

export default Hero