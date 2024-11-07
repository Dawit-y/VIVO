import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/" }),
  //   prepareHeaders: (headers, { getState }) => {
  //     const token = getState().auth.authToken?.access;
  //     if (token) {
  //       headers.set("Authorization", `Bearer ${token}`);
  //     }
  //     return headers;
  //   },
  tagTypes: [],
  endpoints: (builder) => ({}),
});
