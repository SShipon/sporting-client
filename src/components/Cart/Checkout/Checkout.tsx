import { RootState } from "@/redux/hooks/store";
import React from "react";
import { useSelector } from "react-redux";

// Define the type for cart items
type CartItem = {
  _id: string;
  name: string;
  price: number;
};

const Checkout: React.FC = () => {
  const { cart, total_price, shipping_fee, total_cart_item } = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <div className="my-20">
      <h2 className="text-3xl font-bold mb-4">Checkout Summary</h2>

      {/* Display cart items */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Cart Items</h3>
        {cart.map((item: CartItem) => (
          <div
            key={item._id}
            className="flex items-center justify-between border-b border-gray-300 py-2"
          >
            <span className="mr-2">{item.name}</span>
            <span className="text-gray-600">{item.price}</span>
          </div>
        ))}
      </div>

      {/* Display totals */}
      <div className="border-t border-gray-300 pt-4">
        <div className="flex justify-between mb-2">
          <span>Total Items:</span>
          <span className="text-xl">{total_cart_item}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span className="text-xl">${total_price}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping Fee:</span>
          <span className="text-xl">${shipping_fee}</span>
        </div>
        <hr />
        <div className="flex justify-between mb-2">
          <span>Order Total:</span>
          <span className="text-xl">${total_price + shipping_fee}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
