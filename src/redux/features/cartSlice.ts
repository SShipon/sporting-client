import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  total_cart_item: number;
  total_price: number;
  shipping_fee: number;
}

const initialState: CartState = {
  cart: [],
  total_cart_item: 0,
  total_price: 0,
  shipping_fee: 5,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { _id, quantity } = action.payload;
      const existingProduct = state.cart.find((item) => item._id === _id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cart.push(action.payload);
      }

    },
    deletedSport: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },

    clearCart: (state) => {
      state.cart = [];
    },
    setDecrease: (state, action: PayloadAction<string>) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    setIncrease: (state, action: PayloadAction<string>) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    totalSportingCartItem: (state) => {
      state.total_cart_item = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    sportingTotalPrice: (state) => {
      state.total_price = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const {
  addToCart,
  deletedSport,
  clearCart,
  setDecrease,
  setIncrease,
  totalSportingCartItem,
  sportingTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
