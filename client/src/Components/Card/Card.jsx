import React, { useState } from "react";
import add from "./assets/add.svg";
import remove from "./assets/remove.svg";

const Card = (props) => {
  const [counter, setCounter] = useState(0);

  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };

  const increase = () => {
    setCounter((count) => count + 1);
    
  };

  const totalPrice = props.foodPrice * counter;

  return (
    <div className="menu-items my-5 py-10 lg:grid lg:grid-cols-4">
      <div className="item-card rounded-[15px] md:w-[30vw] xl:w-[20vw] bg-white py-7 px-9 shadow-md">
        <div className="flex space-x-3 items-center">
          <div className="py-5 text-[#383838] text-[14px]">
            <h5 className="font-medium">{props.foodName}</h5>
            <p className="font-regular py-3">{props.foodPrice}</p>
          </div>
          <div className="p-2">
            <img
              src={props.imgsrc}
              className="lg:w-[10vw] w-[30vw]"
              alt="foodimg"
              style={{height:"120px",objectFit:"fill"}}
            />
          </div>
        </div>
        <hr />
        <div className="item-Cart pt-3 flex justify-between">
          <p className="text-[#FA144B] text-[14px] font-regular">Add to Cart</p>
          <div className="item-Amt flex space-x-3 text-[14px] mr-3">
            <button className="control__btn" onClick={decrease}>
              <img src={remove} alt="rem" />
            </button>
            <p className="px-3">{counter}</p>
            <button className="control__btn" onClick={increase}>
              <img src={add} alt="add" />
            </button>
          </div>
        </div>
        <p className="text-black text-[14px] font-regular">
          Total: {totalPrice}
        </p>
      </div>
    </div>
  );
};

export default Card;
