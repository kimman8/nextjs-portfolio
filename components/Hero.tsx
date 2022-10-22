import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi!👋 My Name Is ${pageInfo?.name}`,
      'I-Love-Rock-Climbing.tsx',
      '<ButLoveToCodeEvenMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        alt='Kim Yuen'
        width={190}
        height={190}
        className='rounded-full relative mx-auto object-cover'
      />
      {/* <img
        src='https://i.imgur.com/3KNTWBj.png'
        alt='Kim Yuen'
        className='rounded-full relative mx-auto object-cover h-32 w-32'
      /> */}
      <div className='z-20 relative'>
        <h2 className='text-[#CCD6F6] text-sm uppercase tracking-[15px] pb-2'>
          {pageInfo?.role}
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10 text-[#CCD6F6]'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#64FFDB' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton text-[#C8D2F1]'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton text-[#C8D2F1]'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton text-[#C8D2F1]'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton text-[#C8D2F1]'>Projects</button>
          </Link>
          <Link
            href='/files/KY-CV-AUG22.pdf'
            download
            target='_blank'
            rel='noopener noreferrer'
            className='heroButton text-[#C8D2F1]'
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
