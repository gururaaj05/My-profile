import React from 'react';

 import mypic from "../photos/pics/mypic.png";

 import { RiArrowRightDoubleLine } from "react-icons/ri";

const Home = () => {
  return (
    <div name="home" 
    className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center  h-full
       px-4 md:flex-row'>
         <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                I'm a Software Engineer
            </h2>
            <p className='text-gray-300 py-4 max-w-md'>
                I have '2' year of exprience in building and designing the software,
                Currently i egarly to work on Web-application using technology like 
                MERN Stack,Boostrap,Tailwind and Figma.
            </p>
            <div>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md
                 bg-gradient-to-r from-cyan-500 to-blue-500 font-bold'> Portfolio

                    <span className='group-hover:rotate-90 duration-300'>
                 <RiArrowRightDoubleLine  size={25} className='ml-2' />
                    </span>
                 
                </button>
            </div>
         </div>
         <div>
            <img  src={mypic} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
         </div>
       </div>
    </div>
  );
};

export default Home;