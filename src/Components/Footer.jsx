import React from 'react';
import {
    FaYoutubeSquare,
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-blue-300'>Finance.</h1>
        <p className='py-4'>
          A finance website offers comprehensive resources for financial management, including investment tracking, budgeting tools, market analysis, and expert insights. It helps users make informed decisions, manage portfolios, and stay updated on economic trends and financial news.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaYoutubeSquare size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>
      
      <div className='lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div>
          <h6 className='font-medium'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium'>Support</h6>
          <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Blogs</li>
            <li className='py-2 text-sm'>Careers</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium'>Company</h6>
          <ul>
            <li className='py-2 text-sm'>Claims</li>
            <li className='py-2 text-sm'>Policies</li>
            <li className='py-2 text-sm'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
