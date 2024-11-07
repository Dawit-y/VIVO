import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { apiSlice } from "../api/apiSlice";

// Initial state
const initialState = {
  authToken: null,
  user: null,
  loading: true,
};

// Asynchronous Thunks for login and token refresh
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const response = await apiSlice.endpoints.login.initiate(credentials);
      const data = await response.unwrap();
      dispatch(setAuthToken(data));
      return data;
    } catch (error) {
      console.error("Login failed:", error);
      return rejectWithValue(error);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (refreshToken, { dispatch, rejectWithValue }) => {
    try {
      const response = await apiSlice.endpoints.refreshToken.initiate({
        refresh: refreshToken,
      });
      const data = await response.unwrap();
      dispatch(setAuthToken(data));
      return data;
    } catch (error) {
      console.error("Token refresh failed:", error);
      dispatch(clearAuthToken());
      return rejectWithValue(error);
    }
  }
);

// Auth Slice
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
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.authToken = action.payload;
        state.user = jwtDecode(action.payload.access);
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.authToken = action.payload;
        state.user = jwtDecode(action.payload.access);
      });
  },
});

// Selectors
export const userSelecter = (state) => state.auth.user;

// Export actions and reducer
export const { setAuthToken, clearAuthToken, setLoading } = authSlice.actions;
export default authSlice.reducer;
