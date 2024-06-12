import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { OrdersProvider } from "./context/OrderContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <CartProvider>
      <OrdersProvider>
        <App />
      </OrdersProvider>
    </CartProvider>
  </Router>
);
