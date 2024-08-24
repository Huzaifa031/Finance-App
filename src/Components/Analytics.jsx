import React from 'react'
import data from '../Assets/data.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'> 
        <img className='w-[500px] mx-auto my-4' src={data} alt="" />
        <div className='flex flex-col justify-center'>
            <p className='text-blue-600 uppercase font-bold'>Data Analytics with Dashboard</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>Centralized data analytics management involves the strategic coordination and consolidation of data analytics activities within a single, unified framework. This approach allows organizations to streamline data processing, ensure consistency, and enhance decision-making efficiency. By centralizing data analytics, companies can leverage advanced technologies to integrate various data sources, enabling a holistic view of business operations. This leads to more accurate insights, improved performance tracking, and a stronger ability to forecast trends.</p>
            <button className='bg-black w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-blue-300'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
