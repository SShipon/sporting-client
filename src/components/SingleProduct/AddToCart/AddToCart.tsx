import { useState } from 'react';
import './AddToCart.css';
import CartAmountToggle from '../CartAmountToggle/CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';

interface Product {
  id: string;
  stock: number;
  name: string;
  images: { url: string };
  price: number;
}

interface AddToCartProps {
  singleProduct: Product;
}

const AddToCart: React.FC<AddToCartProps> = ({ singleProduct }) => {
  const dispatch = useDispatch();
  const { id, stock, name, images, price } = singleProduct;

  const [quantity, setQuantity] = useState(1);

  const setIncrease = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };
  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, image: images.url, price, quantity }));
  };

  return (
    <div>
      <hr />
      {/* add to cart */}
      <CartAmountToggle
        quantity={quantity}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      ></CartAmountToggle>

      <NavLink to="/cart" onClick={handleAddToCart}>
        <button className="addButton">Add To Cart</button>
      </NavLink>
    </div>
  );
};

export default AddToCart;
