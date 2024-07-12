
import './CartAmountToggle.css';
import { FaMinus ,FaPlus } from 'react-icons/fa';

const CartAmountToggle = ({quantity,setIncrease,setDecrease}) => {
    return (
      <div>
        <div className="cart-button">
          <div className="amount-toggle">
            <button onClick={() => setDecrease()}> <FaMinus></FaMinus> </button>
            <div className="amount-style">{quantity}</div>
            <button onClick={() => setIncrease()}> <FaPlus></FaPlus> </button>
          </div>
            </div>
          
      </div>
    );
};

export default CartAmountToggle;