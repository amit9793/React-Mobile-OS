import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CartContextProvider from "./components/context/Cartcontext";
ReactDOM.render(
  <CartContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartContextProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
