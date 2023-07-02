import React from 'react'


const ShopCard = (props) => {
  return (
    <div className='md:flex mb-10 pt-5 md:space-x-5 space-y-5 md:space-y-0 md:justify-between'>
        <div className='shop-card md:max-w-[18rem]  md:w-[95%] px-3 pt-5 pb-10 hover:shadow-lg'>
          <div>
            <img src={props.imgsrc} className='w-full' alt='shopimg'/>
            <p className='shop-name text-black text-base mt-4 mb-2 font-medium' id='shop-name'>{props.shopName}</p>
          </div>
          <div className='flex justify-between text-sm mb-4'>
            <p className='shop-category text-[#727070]' id='shop-category'>North Indian, South Indian</p>
            <p className='shop-prices font-medium' id='shop-prices'>from ₹40</p>
          </div>
          <hr/>
        </div>
    </div>
  )
}

export default ShopCard