import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>
);
