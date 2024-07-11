import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  _id: string; // MongoDB id
  name: string;
  category: string;
  price: number;
  // Add other product fields as needed
}

interface Filters {
  text: string;
  category: string;
  price: number;
  minPrice: number;
  maxPrice: number;
}

interface FilterState {
  all_products: Product[];
  filter_products: Product[];
  sorting_value: string;
  filters: Filters;
}

interface UpdateFiltersPayload {
  name: keyof Filters;
  value: string | number;
}

const initialState: FilterState = {
  all_products: [],
  filter_products: [],
  sorting_value: 'lowest',
  filters: {
    text: '',
    category: 'all',
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    loadFilterProducts: (state, action: PayloadAction<Product[]>) => {
      state.all_products = action.payload;
      state.filter_products = action.payload;
      const prices = action.payload.map((product) => product.price);
      state.filters.maxPrice = Math.max(...prices);
      state.filters.minPrice = Math.min(...prices);
      state.filters.price = Math.max(...prices);
    },
    updateFiltersValue: (state, action: PayloadAction<UpdateFiltersPayload>) => {
      const { name, value } = action.payload;
      (state.filters[name] as string | number) = value;
    },
    filterProducts: (state) => {
      let tempProducts = [...state.all_products];
      const { text, category, price } = state.filters;

      if (text) {
        tempProducts = tempProducts.filter((product) =>
          product.name.toLowerCase().includes(text.toLowerCase())
        );
      }

      if (category !== 'all') {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }

      tempProducts = tempProducts.filter((product) => product.price <= price);

      state.filter_products = tempProducts;
    },
    updateSortValue: (state, action: PayloadAction<string>) => {
      state.sorting_value = action.payload;
    },
    sortingProducts: (state) => {
      let sortedProducts = [...state.filter_products];
      const { sorting_value } = state;

      if (sorting_value === 'lowest') {
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sorting_value === 'highest') {
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
      } else if (sorting_value === 'a-z') {
        sortedProducts = sortedProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (sorting_value === 'z-a') {
        sortedProducts = sortedProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      state.filter_products = sortedProducts;
    },
    clearFilters: (state) => {
      state.filters = {
        text: '',
        category: 'all',
        price: state.filters.maxPrice,
        minPrice: state.filters.minPrice,
        maxPrice: state.filters.maxPrice,
      };
      state.filter_products = state.all_products;
    },
    
  },
});

export const {
  loadFilterProducts,
  updateFiltersValue,
  filterProducts,
  updateSortValue,
  sortingProducts,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
