import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../../config/app';

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    tagTypes: ['Orders'],
    baseQuery: fetchBaseQuery({baseUrl: config.API_BASE_URL}),
    endpoints: (build) => ({
        getOrders: build.query({
            query: (limit = '') => `/orders?${limit && `_limit=${limit}`}`,
            providesTags: (result) => 
              result
              ? [
                  ...result.map(({ id }) => ({ type: 'Orders', id })),
                  { type: 'Orders', id: 'LIST' },
                ]
              : [{ type: 'Orders', id: 'LIST' }]
        }),
        addOrder: build.mutation({
            query: ({items, info}) => {
              return {
                url: 'orders',
                method: 'POST',
                body: {items, info},
            };},
            invalidatesTags: [{type: 'Orders', id: 'LIST'}]
        })
    })
});

export const {useGetOrdersQuery, useAddOrderMutation} = ordersApi;
