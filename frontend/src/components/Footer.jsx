import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 mt-40 text-sm'>
            {/*  left section */}
            <div>
        <img className='mb-5 w-40' src={assets.logo} alt="" />
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cum voluptatem ea nesciunt delectus labore laboriosam, debitis veniam libero reiciendis. Hic vero animi, quaerat veritatis accusantium iure corporis qui sit?</p>
            </div>
             {/*  middle section */}
             <div>
                <p className='text-xl font-medium mb-5'> COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
                 {/*  right section */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+5343-363-363</li>
                    <li>medico@gmail.com</li>
                </ul>
                </div>
        </div>
        {/*  copywrite  */}
        <div>
<hr />
<p className='py-5 text-sm text-center '>Copyright 2025@ Medico - All right reserved</p>
        </div>
    </div>
  )
}

export default Footer