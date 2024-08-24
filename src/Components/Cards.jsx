import React from 'react'
import single from '../Assets/user1.png';
import double from '../Assets/people.png';
import triple from '../Assets/networking.png';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="Single User" />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold '>$100</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8 mt-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-blue-300 w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black'>Start trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="Double User" />
          <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
          <p className='text-center text-4xl font-bold '>$150</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
            <p className='py-2 border-b mx-8 mt-8'>2 Granted Users</p>
            <p className='py-2 border-b mx-8 mt-8'>Send up to 10 GB</p>
          </div>
          <button className='bg-black w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-blue-300'>Start trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="Triple User" />
          <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
          <p className='text-center text-4xl font-bold '>$200</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>2 TB Storage</p>
            <p className='py-2 border-b mx-8 mt-8'>3 Granted Users</p>
            <p className='py-2 border-b mx-8 mt-8'>Send up to 20 GB</p>
          </div>
          <button className='bg-blue-300 w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black'>Start trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
