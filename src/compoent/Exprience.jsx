import React from 'react';

import express from "../photos/programing/express.png";
import html from "../photos/programing/html.png";
import mangodb from "../photos/programing/mangodb.png";
import node from "../photos/programing/node.png";
import react from "../photos/programing/react.png";
import tailwind from "../photos/programing/tailwind.png";
import css from "../photos/programing/css.png";


const Exprience = () => {
  
  const  languages =[
    {
      id:1,
      src:html,
      title:'HTML',
      style:'shadow-orange-500'
    },
    {
      id:2,
      src:express,
      title:'EXPRESS',
      style:'shadow-gray-500'
    },
    {
      id:3,
      src:mangodb,
      title:'MANGO DB',
      style:'shadow-green-500'
    },
    {
      id:4,
      src:node,
      title:'NODE JS',
      style:'shadow-green-200'
    },
    {
      id:5,
      src:react,
      title:'REACT JS',
      style:'shadow-blue-600'
    },
    {
      id:6,
      src:tailwind,
      title:'TAILWIND CSS',
      style:'shadow-sky-400'
    },
    
    {
      id:5,
      src:css,
      title:'CSS',
      style:'shadow-sky-400'
    },
    
    
  ]
  return (

    <section id="Experience">
       <div name="experinece" 
    className=' bg-gradient-to-b from-gray-800 to-black w-full md:h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex-col flex justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '> Experience</p>
          <p className='py-6'> These are the  technology i've work with</p>
        </div>


        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

          {
            languages.map(({id,src,title,style})=>(
              <div  key={id} className={`shadow-md hover:scale-110 duration-700 py-2 rounded-lg ${style}`}>
            <img src={src} alt='' className='w-24 mx-auto'/>
            <p className='mt-4'> {title} </p>
          </div>

            ))
          };
          

    
        </div>
      </div>
    </div>
    </section>

   
  )
}

export default Exprience