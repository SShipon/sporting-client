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

  
  interface FilterState {
    filter_products: TProduct[];
    isLoading: boolean;
  }
  
  export interface RootState {
    filter: FilterState;
  }
  
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




  export interface Item {
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
    // Add other properties as needed
  }


  //start filter type  component

  export interface FProduct {
    id: string;
    name: string;
    category: string;
    price: number;
    // add other product fields as needed
  }



  export interface TFilters {
    text: string;
    category: string;
    price: number;
    minPrice: number;
    maxPrice: number;
  }

  
 export interface Props {
    products: TProduct[];
  }