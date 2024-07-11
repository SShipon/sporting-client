import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the product type
type TProduct = {
  _id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  isFeatured?: boolean;
  image: string;
  rating: number;
  quantity: number;
  price: number;
  stock: number;
};

// Define the initial state type
type TInitialState = {
  isLoading: boolean;
  isError: boolean;
  products: TProduct[];
  featureProducts: TProduct[];
  singleProduct: TProduct | null;
};

const initialState: TInitialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  singleProduct: null,
};

// Create the slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.products.push({ ...action.payload, isFeatured: false });
    },
    deletedProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((product) => product._id !== action.payload);
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
    setApiData: (state, action: PayloadAction<TProduct[]>) => {
      const featureData = action.payload.filter(
        (currentElements: TProduct) => currentElements.isFeatured === true
      );
      state.products = action.payload;
      state.featureProducts = featureData;
      state.isLoading = false;
    },
    setApiError: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
    setSingleLoading: (state) => {
      state.isLoading = true;
    },
    setSingleProduct: (state, action: PayloadAction<TProduct>) => {
      state.singleProduct = action.payload;
      state.isLoading = false;
    },
    setSingleError: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const product = state.products.find((product) => product._id === action.payload);
      if (product) {
        product.isFeatured = !product.isFeatured;
      }
    },
  },
});

// Export actions and reducer
export const { 
  addProduct, 
  deletedProduct, 
  toggleComplete, 
  setLoading,
  setApiData,
  setApiError,
  setSingleLoading,
  setSingleProduct,
  setSingleError 
} = productSlice.actions;

export default productSlice.reducer;
