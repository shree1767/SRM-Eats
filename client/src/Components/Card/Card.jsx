import React,{useState} from 'react'

import sandwich from './assets/sandwich.svg'
import add from './assets/add.svg'
import remove from './assets/remove.svg'

const Card = () => {
    const [counter,setCounter] = useState(0);
    const decrease = () => {
        if(counter>0){
          setCounter(count => count - 1);
        }
    }
    const increase =()=>{
        setCounter(count => count + 1);
    }
  return (
    <div className='menu-items my-5 py-10 lg:grid lg:grid-cols-4'>
        <div className='item-card rounded-[15px] md:w-[30vw] xl:w-[20vw] bg-white py-7 px-9 shadow-md'>
            <div className='flex space-x-3'>
                <div className='py-5 text-[#383838] text-[14px]'>
                    <h5 className='font-medium'>Chicken Sandwich</h5>
                    <p className='font-regular py-3'>Rs.70</p>
                </div>
                <div className=' px-3'>
                    <img src={sandwich} className='lg:w-[15vw] w-[30vw]' alt='foodimg'/>
                </div>
            </div>
                    <hr/>
            <div className='item-Cart pt-3 flex justify-between'>
                <p className='text-[#FA144B] text-[14px] font-regular'>Add to Cart</p>
                <div className='item-Amt flex space-x-3 text-[14px] mr-3'>
                    <button className="control__btn" onClick={decrease}><img src={remove} alt='rem'/></button>
                    <p className='px-3'>{counter}</p>
                    <button className="control__btn" onClick={increase}><img src={add} alt='add'/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card