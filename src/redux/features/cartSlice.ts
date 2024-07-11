import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  description: string;
  category: string;
  brand: string;
  isFeatured?: boolean;
  rating: number;
  stock: number;
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
      recalculateTotals(state);
    },

    deleteFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      recalculateTotals(state);
    },

    clearCart: (state) => {
      state.cart = [];
      state.total_cart_item = 0;
      state.total_price = 0;
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
        recalculateTotals(state);
      }
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find((item) => item._id === action.payload);
      if (item) {
        item.quantity++;
        recalculateTotals(state);
      }
    },

    updateCartItem: (state, action: PayloadAction<CartItem>) => {
      const updatedItem = action.payload;
      const index = state.cart.findIndex((item) => item._id === updatedItem._id);
      if (index !== -1) {
        state.cart[index] = { ...state.cart[index], ...updatedItem };
        recalculateTotals(state);
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

const recalculateTotals = (state: CartState) => {
  state.total_cart_item = state.cart.reduce((total, item) => total + item.quantity, 0);
  state.total_price = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const {
  addToCart,
  deleteFromCart,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  updateCartItem,
  totalSportingCartItem,
  sportingTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
