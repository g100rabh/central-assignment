import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductListing from "./pages/ProductListing";

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
      </Routes>
    </div>
  );
}

export default App;
