import { useState } from 'react';
import './AddToCart.css';
import CartAmountToggle from '../CartAmountToggle/CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/features/cartSlice';
import { Button } from '@/components/ui/button';
import { Item } from '@/types'; // Import CartItem type

interface Products {
  _id: string;
  stock: number;
  name: string;
  image: string;
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
    setQuantity(prevQuantity => prevQuantity < stock ? prevQuantity + 1 : stock);
  };

  const setDecrease = () => {
    setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
  };

  const handleAddToCart = () => {
    const payload: Item = {
      _id,
      name,
      image,
      price,
      quantity,
      description: '', 
      category: '',    
      brand: '',       
      rating: 0,       
      stock: 0         
    };

    dispatch(addToCart(payload));
  };

  return (
    <div>
      <hr />
      <CartAmountToggle
        quantity={quantity}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      ></CartAmountToggle>

      
      <NavLink to="/cart">
        <Button className="w-full font-bold bg-pink-600" onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </NavLink>
    </div>
  );
};

export default AddToCart;
