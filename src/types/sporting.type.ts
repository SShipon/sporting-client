export type TProduct = {
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
  export type TInitialState = {
    isLoading: boolean;
    isError: boolean;
    products: TProduct[];
    featureProducts: TProduct[];
    singleProduct: TProduct | null;
  };
  
 export const initialState: TInitialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    singleProduct: null,
  };


 export type TProducts = {
    name: string;
    description: string;
    category: string;
    brand: string;
    isFeatured: boolean;
    image: string;
    rating?: number;
    quantity?: number;
    price?: number;
    stock?: number;
  };