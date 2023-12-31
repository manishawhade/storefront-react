import React from "react";
import ReactDOM from "react-dom/client";
// import "./assets/fonts/fontawesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <SnackbarProvider />
  </Provider>
);
