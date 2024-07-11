import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Cart.css";

import {
  clearCart,
  totalSportingCartItem,
  sportingTotalPrice,
} from "@/redux/features/cartSlice";
import CartItem from "../CartItem/CartItem";
import { Button } from "@/components/ui/button";
import { Item } from "@/types";
import { RootState } from '@/redux/hooks/store';

const Cart = () => {
  const { cart, total_price, shipping_fee, total_cart_item } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalSportingCartItem());
    dispatch(sportingTotalPrice());
  }, [cart, dispatch]);

  if (!cart || cart.length === 0) {
    return (
      <div>
        <h3 className="text-center font-bold text-4xl  m-32 mx-auto ">Sporting Products Not available  available please your add product</h3>
      </div>
    );
  }

  return (
    <div className="my-20">
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="">
          <div>
            {cart.map((item: Item) => ( // Ensure item is typed as Item
              <CartItem key={item._id} item={item} />
            ))}
          </div>

          {/* Add other components as needed */}
        </div>

        <div className="flex lg:my-0 my-10">
          <div className="py-2 px-5">
            <div className="py-2">
              <Button className="bg-fuchsia-500">
                <NavLink to="/products">Continue Product</NavLink>
              </Button>
            </div>
            <div>
              <Button
                className="bg-cyan-600"
                onClick={() => dispatch(clearCart())}
              >
                Replace Product
              </Button>
            </div>
          </div>

          <div className="bg-gray-700 lg:w-[400px] lg:h-[230px] w-full p-5 rounded-2xl">
            <div className="text-white">
              <p className="">
                Total Items:
                <span className="lg:text-2xl text-base px-2">${total_cart_item}</span>{" "}
              </p>

              <p>
                Subtotal: <span className="lg:text-2xl text-base px-2">${total_price}</span>
              </p>

              <p>
                Shipping Fee:{" "}
                <span className="lg:text-2xl text-1xl px-2">${shipping_fee}</span>{" "}
              </p>

              <p>
                 Total :{" "}
                <span className="lg:text-2xl text-base px-2">${shipping_fee + total_price}</span>{" "}
              </p>

              <div className="py-4">
                <Button className="lg:w-56 block mx-auto font-bold bg-pink-600">
                  <NavLink to="/checkout">Checkout</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
