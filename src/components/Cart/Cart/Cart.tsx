import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Cart.css';
import { useEffect } from 'react';
import { clearCart, totalCartItem, cartTotalPrice } from '@/redux/features/cartSlice';
import CartItem from '../CartItem/CartItem';
import { RootState } from '../../redux/store'; // Adjust the path to your store

const Cart = () => {
  const { cart, total_price, shipping_fee, total_cart_item } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalCartItem());
    dispatch(cartTotalPrice());
  }, [cart, dispatch]);

  if (!cart || cart.length === 0) {
    return (
      <div>
        <h3 className="empty-cart">No Item In The Cart</h3>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="cart-heading grid-five-column">
        <p>Item</p>
        <p className="cart-hide">Price</p>
        <p>Quantity</p>
        <p className="cart-hide">Subtotal</p>
        <p>Remove</p>
      </div>
      <hr />
      <div className="cart-item">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <hr />
      <div className="cart-two-button">
        <NavLink to="/products" className="left-btn">
          Continue Shopping
        </NavLink>
        <button className="right-btn" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      </div>
      {/* ------TOTAL PRICE ----------*/}
      <div className="order-total--amount">
        <div className="order-total--subdata">
          <div className="total-field">
            <p>Total Items:</p>
            <p>{total_cart_item}</p>
          </div>
          <div className="total-field">
            <p>subtotal:</p>
            <p>{total_price}</p>
          </div>
          <div className="total-field">
            <p>shipping fee:</p>
            <p>{shipping_fee}</p>
          </div>
          <div className="total-field">
            <p>order Total :</p>
            <p>{shipping_fee + total_price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
