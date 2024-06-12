import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./pages/ProductListing";

import "./App.css";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order from "./pages/Order";
import Layout from "./Layouts/Layout";
import OrderList from "./pages/OrderList";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/orders/:id" element={<Order />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
