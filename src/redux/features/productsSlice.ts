import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TProduct = {
  _id: string;
  name:string,
  description: string,
  category:string
  stock:number,
  price:number,
  quantity:string,
  isFeatured?:boolean,
  rating: string,

 
};

type TInitialState = {
  products: TProduct[];
};

const initialState: TInitialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.products.push({ ...action.payload, isFeatured: false });
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const product = state.products.find((product) => product._id === action.payload);
      if (product) {
        product.isFeatured = !product.isFeatured;
      }
    },
    deletedProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((product) => product._id !== action.payload);
    },
  },
});

export const { addProduct, deletedProduct ,toggleComplete} = productSlice.actions;
export default productSlice.reducer;
