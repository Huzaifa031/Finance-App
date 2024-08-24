import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-col-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to out newsletter and stay up to date</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-med text-black' type="email" placeholder='Enter Email' />
                        <button className='bg-blue-300 w-[200px] rounded-md font-bold ml-4 my-6 px-6 py-3 text-black'> Notify me</button>
                       
                    </div>
                    <p>We care about the protection of data. <span className='text-blue-300 py-20'>Read our Privacy Policy</span> </p>
                </div>
                
            </div>
        </div>
    )
}

export default Newsletter
