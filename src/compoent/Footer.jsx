import React from 'react'

export const Footer = () => {
  return (
    <div className='h-52 w-full bg-gradient-to-b from-black to-gray-800 text-white '>
        <div className='flex flex-col mx-auto p-4 justify-center max-w-screen-lg w-full h-full '>
           <div className='pb-4'>

           <h1 className=' text-1xl font-bold inline border-b-4 border-gray-500'> My Contact:</h1>
           </div>
       
        <div className='pt-1'>
        <p> Author : GURURAAJ A</p>
        <p> Personal number: +91 6381063259</p>
        <p> G-Mail         : gururaaj222@gmail.com</p>
        </div>
        </div>
       </div>
  )
}

export default Footer;