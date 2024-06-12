import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./pages/ProductListing";

import "./App.css";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrdersLayout from "./Layouts/OrderLayout";
import Order from "./pages/Order";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<OrdersLayout />}>
          <Route path=":id" element={<Order />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
