import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
// function Contact() {
function Contact({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:klyuen91@gmail.com?subject=${formData?.subject}&body=Hi, my name is ${formData?.name}. ${formData?.message} (${formData?.email})`;
  };
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl md:px-10 px-2 mx-auto items-center justify-center'>
      <h3 className='uppercase text-md md:text-2xl lg:text-3xl tracking-[12px] md:tracking-[20px] text-[#CCD6F6] absolute top-12 md:top-20'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10 top-20 md:top-40 absolute'>
        <h4 className='text-sm md:text-2xl font-semibold text-[#CCD6F6]'>
          I have got just what you need. {''}
          <br />
          <span className='underline decoration-[#64FFDB]/50'>
            Let&apos;s chat.
          </span>
        </h4>
        <div className='space-y-3 md:space-y-8'>
          <div className='flex items-center space-x-2 md:space-x-5 justify-center'>
            <PhoneIcon className='h-4 w-4 md:h-7 md:w-7 animate-pulse text-[#64FFDB]' />
            {/* <p className='text-2xl'>0438 888 813</p> */}
            <p className='text-sm md:text-2xl text-[#8791AF]'>
              {pageInfo?.phoneNumber}
            </p>
          </div>
          <div className='flex items-center space-x-2 md:space-x-5 justify-center'>
            <EnvelopeIcon className='h-4 w-4 md:h-7 md:w-7 animate-pulse text-[#64FFDB]' />
            <p className='text-sm md:text-2xl text-[#8791AF]'>
              klyuen91@gmail.com
            </p>
          </div>
          {/* <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='h-7 w-7 animate-pulse text-[#64FFDB]'/>
                    <p className='text-2xl'>123 Developer Lane</p>
                </div> */}
        </div>
        <form
          className='flex flex-col space-y-2 w-fit mx-auto'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex flex-col md:flex-row space-x-0 md:space-x-2 space-y-2 md:space-y-0 text-[#6E7995]'>
            <input
              type='text'
              placeholder='Name'
              className='contactInput'
              {...register('name')}
            />
            <input
              type='email '
              placeholder='Email'
              className='contactInput'
              {...register('email')}
            />
          </div>
          <input
            type='text'
            placeholder='Subject'
            className='contactInput'
            {...register('subject')}
          />
          <textarea
            placeholder='Message'
            className='contactInput'
            {...register('message')}
          />
          <button
            type='submit'
            className='text-[#0A192F] bg-[#64FFDB] rounded-sm md:rounded-md px-5 py-2 md:px-10 md:py-5 md:font-bold text-sm md:text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
