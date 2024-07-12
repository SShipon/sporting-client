
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface CartItem {
  id: string; // or whatever type your id is
  name: string;
  image: string; // assuming image is a string URL
  price: number;
  quantity: number;
}

interface CartState {
  cart: [];
  total_cart_item: number;
  total_price: number;
  shipping_fee: number;
}

const initialState: CartState = {
  cart: [],
  total_cart_item: 0,
  total_price: 0,
  shipping_fee: 5000,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, quantity } = action.payload;
      let existingProduct = state.cart.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    setDecrease: (state, action: PayloadAction<string>) => {
      let item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    setIncrease: (state, action: PayloadAction<string>) => {
      let item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    totalCartItem: (state) => {
      state.total_cart_item = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    cartTotalPrice: (state) => {
      state.total_price = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const {
  addToCart,
  removeItem,
  clearCart,
  setDecrease,
  setIncrease,
  totalCartItem,
  cartTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
