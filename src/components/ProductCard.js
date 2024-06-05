import React, { useState } from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className={styles.productCard}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.productImage}
      />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        className={styles.quantityInput}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button className={styles.addToCartButton} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
