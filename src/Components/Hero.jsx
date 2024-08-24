import React from 'react';
import {ReactTyped} from 'react-typed';  // Remove the curly braces around ReactTyped

function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-blue-300 font-bold p-2'>Grow your business with Data Analytics</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Data.</h1>
            <div className='flex justify-center items-center'> 
                <p className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'>Fast Flexible Financing For</p>
                <ReactTyped
                  className='md:text-5xl sm:text-4xl text-xl font-bold pl-2' // Apply same classes here
                  strings={['B2B', 'BTC', 'SAAS']}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 p-8'>
              Monitor your Data Analytics to increase your revenue
            </p>
            <button className='bg-blue-300 w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black'>
              Get Started
            </button>
        </div>
    </div>
  );
}

export default Hero;
