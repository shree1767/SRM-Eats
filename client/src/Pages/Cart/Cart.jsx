import React from 'react';
import { useCart, useDispatchCart } from '../../Components/ContextReducer';
import { Link } from 'react-router-dom';
import './Cart.css';

import img from './assets/img.svg';

const Cart = (props) => {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div className='text-center bg-white items-center justify-center h-screen pt-[23vh] pb-[25vh]'>
        {/* when cart is empty */}
        <div>
          <img src={img} className='mx-auto' alt='emptycart' />
        </div>
        <h4 className='text-[18px] my-2 font-medium'>Your Cart is empty</h4>
        <p className='text-[#727070] text-[13px] mb-10'>
          You can go to the home page to view more Restaurants
        </p>
        <Link to='/Home'>
          <button className='bg-[#FA144B] py-2 px-8 text-white text-[15px]'>Add Food</button>
        </Link>
      </div>
    );
  }

  let subtotal = 0;
  data.map((food) => {
    subtotal += food.price;
  });
  subtotal = subtotal.toFixed(2);

  return (
    <div className="bg-white pt-[18vh] md:px-20 overflow-y-auto shadow ">
      {/* when cart has items */}
      <header className="bg-white ">
        <div className="container mx-auto px-4 py-6 md:px-8 text-left">
          <h1 className="text-2xl font-semibold mb-2">YOUR CART</h1>
          <p className="font-regular">
            Shipping Address: <br /> <span className="font-medium">{props.selectedValue}</span>
          </p>
        </div>
      </header>

      <main className="mx-auto pt-6 md:px-8 pb-[45vh]">
        <div className="bg-white rounded shadow">
          <div className="w-1/2 lg:float-left">
            <div className="">
              {data.map((food,index) => (
                <div className="grid grid-cols-3 px-3 md:grid-cols-4 md:gap-x-0 gap-x-[40vw] py-10 font-medium">
                  
                  <p className="flex items-center w-[30vw]">
                    <img src={food.img} className="md:block hidden w-[8vw] h-[8vw]" alt="food" />
                    <img src={food.img} className="md:hidden block w-[30vw] h-[30vw]" alt="food" />
                  </p>
                  <div className="w-[30vw]">
                    <p className="pb-4 ">{food.name}</p>
                    <div className='md:hidden block'>
                      <p className="">₹ {food.price}</p> 
                      <p className="text-sm pb-3">(Inc. all taxes)</p>
                    </div>
                    <button
                      type="button"
                      className="py-2 px-6 border border-[#FA144B] text-[#FA144B] text-sm rounded-md"
                      onClick={()=>{dispatch({type:"REMOVE",index:index})}}
                    >
                      Remove
                    </button>
                  </div>
                  
                  <p className="md:block pb-3">{food.qty}</p>
                  <div className="md:block hidden text-right">
                    <p className="text-2xl">₹ {food.price}</p> <br />
                    <p className="text-sm pb-3">(Inc. all taxes)</p>
                    <hr className="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:block hidden flex md:justify-center text-center mt-6 font-medium lg:text-right">
          <p>Total Amount: </p>
          <p>{subtotal}/-</p>
        </div>
        <div className="grid grid-cols-2 md:flex md:justify-end mt-6 lg:text-right items-center md:sticky fixed bottom-0 md:w-1/2 w-full">
          <div className="md:hidden block text-white flex md:justify-end font-regular lg:text-right bg-[#242424] py-4 px-4">
            <p>{subtotal} /-</p>
          </div>
          <button className="bg-[#FA144B] text-white font-medium py-2 px-4 md:w-[15vw] w-full h-full">
            Checkout
          </button>
        </div>
      </main>
    </div>
  );
};

export default Cart;

