import React from "react";
import ProductCard from "../components/ProductCard";
import styles from "./ProductListing.module.css";
import { productData } from "../data";

const ProductListing = () => {
  const products = productData;

  return (
    <div className={styles.productListing}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
