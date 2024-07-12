
// import './CartItem.css';
// import CartAmountToggle from '../../SingleProduct/CartAmountToggle/CartAmountToggle';
// import { FaTrash } from 'react-icons/fa';
// import { useCartContext } from '../../../context/cartContext';

// const CartItem = ({ id, name, image, price, amount }) => {

//      const { removeItem, setIncrease, setDecrease } = useCartContext();
//   return (
//     <div>
//       <div className="grid-five-column ">
//         {/* ---------cart-item---------- */}
//         <div className="cart-item-content">
//           <div>
//             <figure>
//               <img src={image} alt="" />
//             </figure>
//           </div>
//           <div>
//             <p>{name}</p>
//             <div className="color-div">
//               <p>color : </p>
//               <div
//                 className="color-style "
               
//               ></div>
//             </div>
//           </div>
//         </div>
//         {/* ---------Price---------- */}
//         <div className="cart-hide">
//           <p>
//            {price}
//           </p>
//         </div>
//         {/* ---------Quantity---------- */}
//         <div className="cart-quantity">
//           <CartAmountToggle
//             amount={amount}
//             setDecrease={()=>setDecrease(id)}
//             setIncrease={()=>setIncrease(id)}
//           ></CartAmountToggle>
//         </div>
//         {/* ---------Subtotal---------- */}
//         <div className="cart-hide">
//           <p>
//           {price * amount}
//           </p>
//         </div>
//         {/* ---------cart-remove---------- */}
//         <div>
//           <FaTrash className="remove-icon" onClick={()=>removeItem(id)}></FaTrash>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { CartItem } from '../../../types'; // adjust path as per your project structure
import './CartItem.css';
import { removeItem, setDecrease, setIncrease } from '@/redux/Features/cartSlice';

interface Props extends CartItem {}

const CartItemComponent: React.FC<Props> = ({
  id,
  name,
  image,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="grid-five-column ">
        <div className="cart-item-content">
          <div>
            <figure>
              <img src={image} alt="" />
            </figure>
          </div>
          <div>
            <p>{name}</p>
          </div>
        </div>
        <div className="cart-hide">
          <p>{price}</p>
        </div>
        <div className="cart-quantity">
          <div>
            <button onClick={() => dispatch(setDecrease(id))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => dispatch(setIncrease(id))}>+</button>
          </div>
        </div>
        <div className="cart-hide">
          <p>{price * quantity}</p>
        </div>
        <div>
          <FaTrash
            className="remove-icon"
            onClick={() => dispatch(removeItem(id))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItemComponent;
