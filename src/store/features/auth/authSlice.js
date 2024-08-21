import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const initialState = {
  authToken: null,
  user: null,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
      state.user = jwtDecode(action.payload.access);
      localStorage.setItem("tokens", JSON.stringify(action.payload));
    },
    clearAuthToken: (state) => {
      state.authToken = null;
      state.user = null;
      localStorage.removeItem("tokens");
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  selectors: {
    userSelecter: (state) => state.user,
  },
});

export const { userSelecter } = authSlice.selectors;

export const { setAuthToken, clearAuthToken, setLoading } = authSlice.actions;

export default authSlice.reducer;
