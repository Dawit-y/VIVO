import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setAuthToken, clearAuthToken } from './authSlice';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.authToken?.access;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/jwt/create/',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAuthToken(data));
        } catch (error) {
          console.error('Login failed:', error);
        }
      },
    }),
    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: 'auth/jwt/refresh/',
        method: 'POST',
        body: { refresh: refreshToken },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAuthToken(data));
        } catch (error) {
          console.error('Token refresh failed:', error);
          dispatch(clearAuthToken());
        }
      },
    }),
    
  }),
});

export const { useLoginMutation, useRefreshTokenMutation } = authApi;
