import React from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} width="6%" height="6%" />
      <p>{item.title}</p>
      <input
        type="number"
        value={item.quantity}
        min="1"
        className={styles.quantityInput}
        onChange={(e) => updateQuantity(item, Number(e.target.value))}
      />
      <p>${(item.price * item.quantity).toFixed(2)}</p>
      <button
        className={styles.removeButton}
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
