import React from 'react';
import { Link } from 'react-router-dom';
import './Home.module.css';

import card from './assets/card1.svg';

const Home = () => {
  return (
    <div className='bg-white py-10 px-4 md:px-20'>
      <nav className='flex space-x-4 md:space-x-8 items-center justify-between'>
        <h3 className='text-xl md:text-2xl font-medium'>Restaurants Nearby</h3>
        {/* search */}
        <div className='hidden md:block border'>
          <div className="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search"
            />
          </div>
        </div>
      </nav>
      <hr className='my-5'/>
      {/* shops*/}
      <div className='md:flex mb-10 pt-5 md:space-x-5 space-y-5 md:space-y-0 md:justify-between'>
        <Link to='/ShopMenu' className='shop-card md:max-w-[18rem] w-full md:w-[75%] px-3 pt-5 pb-10 hover:shadow-lg'>
          <div>
            <img src={card} className='w-full' alt='shopimg'/>
            <p className='shop-name text-black text-base mt-4 mb-2 font-medium' id='shop-name'>Butty Food Corner</p>
          </div>
          <div className='flex justify-between text-sm mb-4'>
            <p className='shop-category text-[#727070]' id='shop-category'>North Indian, South Indian</p>
            <p className='shop-prices font-medium' id='shop-prices'>from ₹40</p>
          </div>
          <hr/>
        </Link>
        {/* // */}
      </div>
    </div>
  );
};

export default Home;
