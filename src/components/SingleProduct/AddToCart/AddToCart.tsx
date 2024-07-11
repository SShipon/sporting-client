import { useState } from 'react';
import './AddToCart.css';
import CartAmountToggle from '../CartAmountToggle/CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';
import { Button } from '@/components/ui/button';

interface Products {
  _id: string;
  stock: number;
  name: string;
  image: string,
  price: number;
}

interface AddToCartProps {
  singleProduct: Products;
}

const AddToCart: React.FC<AddToCartProps> = ({ singleProduct }) => {
  console.log(singleProduct, 'data card add '); // Log the singleProduct object

  const dispatch = useDispatch();
  const { _id, stock, name, image, price } = singleProduct;

  const [quantity, setQuantity] = useState(1);

  const setIncrease = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };
  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ _id, name, image, price, quantity }));
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
        <Button className="w-full font-bold bg-pink-600">Add To Cart</Button>
      </NavLink>
    </div>
  );
};

export default AddToCart;
