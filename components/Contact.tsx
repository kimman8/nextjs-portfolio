import React from 'react'
import {PhoneIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
// import { PageInfo } from '../typings'

// type Props = {
//     pageInfo: PageInfo;
// }
type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};
function Contact() {
// function Contact({pageInfo}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
      window.location.href = `mailto:klyuen91@gmail.com?subject=${formData?.subject}&body=Hi, my name is ${formData?.name}. ${formData?.message} (${formData?.email})`;
  };
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl md:px-10 px-5 justify-evenly mx-auto items-center'>
        <h3 className='uppercase text-gray-500 text-2xl tracking-[20px] absolute top-24'>Contact</h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>I have got just what you need. {''} 
                <span className='underline decoration-[#F7AB0A]/50'>
                 Let&apos;s chat.
                </span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]'/>
                    <p className='text-2xl'>0438 888 813</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]'/>
                    <a className="text-2xl" href='mailto:klyuen91@gmail.com'>
                        klyuen91@gmail.com
                    </a>
                </div>
                {/* <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]'/>
                    <p className='text-2xl'>123 Developer Lane</p>
                </div> */}
            </div>
            <form className='flex flex-col space-y-2 w- fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex space-x-2'>
                    <input type="text" placeholder='Name' className='contactInput' {...register("name")} />
                    <input type="email " placeholder='Email' className='contactInput' {...register("email")} />
                </div>
                <input type="text" placeholder='Subject ' className='contactInput' {...register("subject")} />
               <textarea placeholder='Message' className='contactInput' {...register("message")} /> 
               <button type='submit' className='text-black bg-[#F7AB0A] rounded-md px-10 py-5 font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact