import { apiSlice } from "../api/apiSlice";

// Inject endpoints for login and refresh token
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/jwt/create/",
        method: "POST",
        body: credentials,
      }),
    }),
    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: "auth/jwt/refresh/",
        method: "POST",
        body: { refresh: refreshToken },
      }),
    }),
  }),
});

export const { useLoginMutation, useRefreshTokenMutation } = authApi;
