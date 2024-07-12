import { useState } from 'react';
import './AddToCart.css';
import CartAmountToggle from '../CartAmountToggle/CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';

interface Products {
  id: string;
  stock: number;
  name: string;
  image: { url: string };
  price: number;
}

interface AddToCartProps {
  singleProduct: Products;
}

const AddToCart: React.FC<AddToCartProps> = ({ singleProduct }) => {
  console.log(singleProduct, 'data card add '); // Log the singleProduct object

  const dispatch = useDispatch();
  const { id, stock, name, image, price } = singleProduct;

  const [quantity, setQuantity] = useState(1);

  const setIncrease = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };
  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, image: image.url, price, quantity }));
  };

  return (
    <div>
      <hr />
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
