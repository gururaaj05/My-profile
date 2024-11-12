import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import   {Link} from "react-scroll";


const NavBar = () => {


  <section id="Home"></section>


    const [nav,setNav]=useState(false);

    const links=[
        {
        id:1,
        link:"Home",
        
    },
    {
        id:2,
        link:"About",
    },
    {
        id:3,
        link:"Portfolio",
    },
    {
        id:4,
        link:"Experience",
    },
    {
        id:5,
        link:"Connect us",
    },
]

  return (

    <section id="Home"> <div className='flex justify-between items-center w-full h-20
    px-5 text-white bg-gradient-to-b from-black via-black to-gray-800 fixed '>
 
     <div>
         <h1 className='text-4xl font-name ml-2'>GURURAAJ A</h1>
     </div>
 
 
     <ul className='hidden md:flex'> 
         {links.map(({id,link})=>(
             <li
              key={id} className='px-4 cursor-pointer 
             capitalize  text-gray-400 hover:text-blue-400 duration-400 left-16 font-bold hover:scale-150 duration-700'> 
             
             <Link
               to={link}
               spy={true}
               smooth={true}
               duration={500}
               activeClass="active"
             >
               {link}
             </Link>
 
             </li>
         ))}  
     </ul>
 
 
     <div onClick={()=> setNav(!nav)}className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden  '>
         {nav?<FaTimes size={30}/>:<FaBars size={30}/>}
     </div>
 
     
     {nav &&(
         
     <ul className='flex flex-col justify-center items-center
     absolute top-0 left-0 w-full h-500px bg-gradient-to-b
     from-black to-gray-900 text-smoke-900'>
 
     {links.map(({id,link})=>(
             <li
              key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl hover:text-blue-800 duration-300 '> 
              <Link onClick={()=>setNav(!nav)}
               to={link}
               spy={true}
               smooth={true}
               duration={500}
               activeClass="active"
             >
               {link}
             </Link>
             </li>
         ))}
     </ul>
 
     )}
     </div></section>


   
  );
};

export default NavBar;