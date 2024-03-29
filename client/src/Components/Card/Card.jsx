import React, { useState} from "react";
import add from "./assets/add.svg";
import remove from "./assets/remove.svg";
import { useDispatchCart,useCart } from "../ContextReducer";

const Card = (props) => {
  let dispatch = useDispatchCart()
  let data = useCart();
  const [qty, setQty] = useState(1);

  const decrease = () => {
    if (qty > 0) {
      setQty(qty => qty- 1);
    }
  };

  const increase = () => {
    setQty( qty => qty + 1);
  };



  const handleAddToCart = async() =>{
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:totalPrice,qty:qty,img:props.foodItem.img})
    console.log(data)
  }

  const totalPrice = props.foodItem.price * qty;

  return (
    <div className="menu-items my-5 py-10 lg:grid lg:grid-cols-4">
      <div className="item-card rounded-[15px] md:w-[30vw] xl:w-[20vw] bg-white py-7 px-9 shadow-md">
        <div className="flex space-x-3 items-center">
          <div className="py-5 text-[#383838] text-[14px]">
            <h5 className="font-medium">{props.foodItem.name}</h5>
            <p className="font-regular py-3">{props.foodItem.price}</p>
          </div>
          <div className="p-2">
            <img
              src={props.foodItem.img}
              className="lg:w-[10vw] w-[30vw]"
              alt="foodimg"
              style={{height:"120px",objectFit:"fill"}}
            />
          </div>
        </div>
        <hr />
        <div className="item-Cart py-3 flex justify-between">

        <button className="text-[#FA144B] border border-[#FA144B] py-2 px-3  text-[14px] font-regular rounded" onClick={handleAddToCart}>Add to Cart</button>
          <div className="items-center flex space-x-3 text-[14px] mr-3">
            <button className="control__btn" onClick={decrease}>
              <img src={remove} alt="rem" />
            </button>
            <p className="px-3">{qty}</p>
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
