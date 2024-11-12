import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Connectus = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pcrnh8b', 
        'template_u25g9hl',
         form.current, {
        publicKey: 'Pa6Na1z3sn1WfZm_J',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Your opinion message is sent sucessfully");
          form.current.reset(); //resetting the normal page
        },
        (error) => {
          console.log('FAILED...', error.text);
           alert("Please fill the contact form. Check!");
        },
      );
  };

  return (

    <section id="Connect us"> <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white '>
    <div className='flex-col flex p-4 justify-center max-w-screen-lg mx-auto h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold border-b-4 inline border-gray-400'> Connect us</p>
        <p className='py-6'> Submit the from to connect with me!</p>
      </div>
  
    <div className='flex justify-center items-center '>


      <form ref={form}   onSubmit={sendEmail}  className="flex-col flex w-full md:w-1/2">
        <input type='text' name="to_name" placeholder='Enter your name'
         className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none hover:scale-105 duration-700'/> 

        <input type='email' name="user_email" placeholder='Enter your E-mail'
         className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none hover:scale-105 duration-700 '/> 

       <textarea placeholder='Enter your opinion' name="message"  rows="10"  
        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none hover:scale-105 duration-700'/>
        
        <button type='submit' value="Send"
         className='text-white bg-gradient-to-b from-cyan-500
          to-blue-500 py-3 px-6 my-8  mx-auto flex items-center
           rounded-md hover:scale-110 duration-500'>Let's connect</button>
         </form>
    </div>
    </div>
  </div></section>

   
  );
};


export default Connectus;