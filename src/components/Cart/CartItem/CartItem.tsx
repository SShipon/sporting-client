import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaMinus ,FaPlus } from 'react-icons/fa';
import {
  cartTotalPrice,
  setDecrease,
  setIncrease,
} from "@/redux/features/cartSlice";
import { Button } from "@/components/ui/button";
import { Item } from "@/types";
import { RootState } from "@/redux/hooks/store";


// Adjust the path as necessary

interface CartItemProps {
  item: Item; // Assuming Item is your defined type
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state:RootState) => state.cart.cart);


  useEffect(() => {
    dispatch(cartTotalPrice());
  }, [cart, dispatch]);

  const handleIncrease = () => {
    dispatch(setIncrease(item._id));
  };

  const handleDecrease = () => {
    dispatch(setDecrease(item._id));
  };

  return (


    <div className="flex px-2 py-4 flex-col md:flex-row justify-center items-center border-4 border-rose-23 gap-3">
    <div>
      <img className="lg:w-[180px] lg:md:w-[230px] w-[100%]" src={item.image} alt={item.name} />
    </div>
    <div>
      <h1>{item.name}</h1>
    </div>
    <div>
      <p>{item.price}</p>
    </div>
    <div>
      <p>{item.quantity}</p>
    </div>
    <div>
      <h6> {item.price * item.quantity}</h6>
    </div>
    <div className="mx-2 px-2 flex gap-2">
        <Button onClick={handleIncrease}><FaPlus/></Button>
        <Button onClick={handleDecrease}><FaMinus /></Button>
    </div>
  </div>
  );
};

export default CartItem;
