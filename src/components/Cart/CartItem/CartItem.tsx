import React from 'react';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
    subtotal: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  console.log(item,)
  return (
    <div className="cart-item">
      <div>{item.name}</div>
      <div className="cart-hide"><img src={item.image} alt={item.name} /></div>
      <div>{item.price}</div>
      <div>{item.quantity}</div>
      <div className="cart-hide">{item.subtotal}</div>
      <div>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;

