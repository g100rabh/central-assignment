import React, { useContext, useMemo } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./Checkout.module.css";
import { OrdersContext } from "../context/OrderContext";

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const { addOrder } = useContext(OrdersContext);
  const navigate = useNavigate();

  const totalQuantity = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

  const handleConfirm = () => {
    const date = Date.now();
    const order = {
      id: date.toString(),
      items: cart,
      totalQuantity,
      totalPrice,
      date: new Date().toISOString(),
    };
    addOrder(order);
    dispatch({ type: "CLEAR_CART" });
    alert("Order confirmed!");
    navigate("/");
  };
  return (
    <div className={styles.checkout}>
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className={styles.checkoutItem}>
              <img src={item.image} alt={item.name} width="6%" height="6%" />
              <p>
                {item.title} x {item.quantity}
              </p>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className={styles.total}>
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
          <button className={styles.confirmButton} onClick={handleConfirm}>
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
