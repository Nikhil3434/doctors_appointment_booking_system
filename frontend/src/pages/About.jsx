import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      
    <div className='text-center text-2xl pt-10 text-gray-500'>
      <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-12'>
    <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />

<div className='flex flex-col justify-cenrtre gap-6 md:w-2/4 text-sm text-gray-600'>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis provident iste suscipit consectetur, aut minus laudantium possimus blanditiis, iusto laboriosam dolorem sapiente minima accusamus animi illum neque voluptatem vero. Nam.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur labore harum animi obcaecati incidunt neque autem officiis repudiandae dicta eveniet voluptatum minus, ipsa suscipit, asperiores molestias doloremque vero amet velit!</p>
  <b className='text-gray-800'>OUR VISION</b>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquam eveniet quas? At in accusamus neque aperiam perspiciatis quas optio, sint non quisquam quidem, adipisci itaque. Pariatur odit qui earum.</p>
</div>
    </div>
    <div className='text-xl my-4'>
      <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
    </div>

    <div className='flex flex-col md:flex-row mb-20'>
   <div className='border px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[-15px] hover:bg-primary hover-text-white transition-all duration-300 text-gray-600 cursor-pointer'>
       <b>EFFICIENCY</b>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio ducimus dignissimos nemo quos itaque rerum neque omnis excepturi, placeat nisi ullam quo! Esse veniam totam, beatae dolorem accusamus dignissimos!</p>
   </div>
   <div className='border px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[-15px] hover:bg-primary hover-text-white transition-all duration-300 text-gray-600 cursor-pointer'>
   <b>CONSISTENCY</b>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid unde nihil, velit esse dicta quidem incidunt reiciendis. Ratione accusamus, porro maxime laudantium nam, quaerat sed odio quod inventore beatae obcaecati.</p>
   </div>
   <div className='border px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[-15px] hover:bg-primary hover-text-white transition-all duration-300 text-gray-600 cursor-pointer'>
   <b>PERSONALIZATION</b>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quia corrupti consequuntur provident accusamus sunt aliquam molestias incidunt magnam minima deserunt vel dolorum nam, voluptates mollitia, porro animi quo pariatur?</p>
   </div>

    </div>
    </div>
  )
}

export default About