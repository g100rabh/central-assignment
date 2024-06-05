import React, { useCallback } from "react";
import ProductCard from "../components/ProductCard";
import styles from "./ProductListing.module.css";
import { productData } from "../data";
import { useCart } from "../context/CartContext";

const ProductListing = () => {
  const products = productData;

  const { dispatch } = useCart();

  const addToCart = useCallback(
    (product) => {
      dispatch({ type: "ADD_TO_CART", product });
    },
    [dispatch]
  );

  return (
    <div className={styles.productListing}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductListing;
