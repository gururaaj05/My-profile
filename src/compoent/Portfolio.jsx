import React from 'react';
import todolist from "../photos/pics/todolist.png";

const Portfolio = () => {
    
    const port=[
        {
            id:1,
            src:todolist
        },
       
    ]

  return (

    <section id="Portfolio">
         <div name="Folio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto  flex-col flex justify-center w-full h-full'>
                 <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'> Profolio</p>
                <p className='py-6'> Check here out some of my Projects</p>
                </div>
                
            
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8'>

                {
                    port.map(({id,src})=>
                    <div key={id} className='shadow-md  rounded-lg'>
        
                        <img src={src} alt="" className='rounded-md duration-1000 hover:scale-105 border-none'/>

                        <div className='flex item-center shadow-gray-300 p-(-5) justify-center bg-green-400 rounded-lg mt-3 text-xl text-black'>
                            <button className='w-1/2 px-6 py-3 m-2 duration-200 hover:scale-110 hover:text-blue-800 font-bold '> Demo </button>
                            <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 hover:text-blue-800 font-bold'> Code </button>
                        </div>
                    </div>
                    )
                }
                    
                </div>
        </div> 
    </div>
  
    </section>
  )
   
}

export default Portfolio;