import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeProvider from "./utils/ThemeContext";
import { AuthProvider } from "./context/AuthProvider";
import { store } from "./store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import App from "./App";
import { authApi } from "./store/features/auth/authApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
