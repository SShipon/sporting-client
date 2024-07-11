import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000'}),
  tagTypes: ['product'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (featured) => {
        const params = new URLSearchParams();
        if(featured){
          params.append('featured', featured);
        }
        return {
          url: `/sports`,
          method: 'GET',
          params: params
        };
      },
      providesTags: ['product']
    }),


    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: '/sport',
        method: 'POST',
        body: newProduct,
      }),
      invalidatesTags: ['product'],
    }),  

    getSingleProduct: builder.query({
      query: (id) => ({
        method: 'GET',
        url: `/sport/${id}`,
      }),
    }),

    updatedProduct: builder.mutation({
      query: (options) => {
        return {
          url: `/sport/${options.id}`,
          method: 'PUT',
          body: options.data,
        };
      },
      invalidatesTags: ['product']
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/sport/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['product']
    }),
  }),
});

export const { useGetProductsQuery, useUpdatedProductMutation, useAddProductMutation, useDeleteProductMutation , useGetSingleProductQuery} = baseApi;
