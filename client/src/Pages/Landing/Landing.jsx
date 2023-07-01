import React from 'react'
import {Link} from 'react-router-dom'
import './Landing.module.css'
import main from './assets/main.png'
import progress from './assets/Group 9.svg'
import carousel1 from './assets/carousel1.svg'
import Dropdown from '../../Components/Dropdown/dropdown'

export const Landing = (props) => {
  
  return (
    <>
    <div className='flex mx-5'>
       <div className='py-12 md:my-12 my-5 lg:px-5 px-3 md:mx-3 mx-auto min-w-[45vw] md:text-left text-center'>
          <div className='text-[#ffffff] md:text-[40px] text-[35px] font-bold mt-12 pt-5'>Meals on Tips?</div>
          <div className='text-[#ffffff] md:text-[25px] text-[18px] font-regular '>Order food from Java to your hostel</div>
          <div className='flex mt-10 font-medium md:text-[13px] text-[10px]'>
            <Dropdown handleChange={props.handleChange} selectedValue={props.selectedValue}/>
              <button className='md:block hidden w-1/3 bg-[#FA144B] pl-6 pr-6 text-[13px] text-white font-bold '>
               {
                props.state?<Link to='/Home'>ORDER FOOD</Link>:<Link to='/Auth'>ORDER FOOD</Link>
               }
              </button>
          </div>
          <div className='md:hidden block mt-10 text-center'>
              <button className='w-1/3 bg-[#FA144B] mx-auto py-3 text-[13px] text-white font-bold '>
              {
                props.state?<Link to='/Home'>ORDER FOOD</Link>:<Link to='/Auth'>ORDER FOOD</Link>
               }
              </button>
          </div>
          
       </div>
       {/* image */}
       <div className='lg:block hidden absolute right-0 max-w-[50vw]'>
          <img src={main} alt='mainimg'/>
       </div>
    </div>
    <div className='lg:block hidden mt-12 h-full pt-10'>
        <img src={progress} alt='progressimg'/>
    </div>
    <div className='slider lg:hidden block mt-10 py-12 bg-[#383838] text-white text-center justify-center'>
        <div id='img'>
        <img src={carousel1} className='mx-auto' alt='progressimg'/>
        <p className='pt-5'>Select Food</p>
        </div>
    </div>
    </>
  )
}
