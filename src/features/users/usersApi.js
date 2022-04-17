import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../../config/app';
import { getAccessToken } from '../auth/utils';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: config.API_BASE_URL}),
    endpoints: (build) => ({
        getMe: build.query({
          query: () => ({
            url: 'users/me',
            headers: {authorization: `Bearer ${ getAccessToken() }`}
          })
        }),
        register: build.mutation({
          query: (body) => ({
              url: 'users',
              method: 'POST',
              body,
          })
        }),
        auth: build.mutation({
          query: (body) => ({
              url: 'auth',
              method: 'POST',
              body
          })
        })
    })
});

export const {useGetMeQuery, useRegisterMutation, useAuthMutation} = usersApi;
