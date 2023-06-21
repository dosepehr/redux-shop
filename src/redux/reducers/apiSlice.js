import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/stickers',
        }),
        getProduct: builder.query({
            query: (id) => `/stickers/${id}`,
        }),
    }),
});

export const { useGetProductsQuery, useGetProductQuery } = apiSlice;
