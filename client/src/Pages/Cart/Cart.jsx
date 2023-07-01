import React from 'react'
import {Link} from 'react-router-dom'
import './Cart.css'

import img from './assets/img.svg'

const Cart = () => {
  return (
    <div className='text-center bg-white items-center justify-center h-screen pt-[13vh] pb-[25vh]'>
      <div>
        <img src={img} className='mx-auto' alt='emptycart'/>
      </div>
      <h4 className='text-[18px] my-2 font-medium'>Your Cart is empty</h4>
      <p className='text-[#727070] text-[13px] mb-10'>You can go to the home page to view more Restaurants</p>
      <Link to='/Home'>
        <button className='bg-[#FA144B] py-2 px-8 text-white text-[15px]'>Add Food</button>
      </Link>
    </div>
  )
}

export default Cart