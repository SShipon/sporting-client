import { configureStore } from "@reduxjs/toolkit";
  import productReducer from '../features/productsSlice'
import { baseApi } from "../api/api";
import filterProductsSlice from "../features/filterProductsSlice";


export const store = configureStore({

    reducer:{
      [baseApi.reducerPath] : baseApi.reducer,
      products: productReducer,
      filter: filterProductsSlice,
    },
    middleware: getDefaultMiddlewares => getDefaultMiddlewares().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch