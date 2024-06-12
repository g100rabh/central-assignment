import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { OrdersContext } from "../context/OrderContext";
import styles from "./Order.module.css";

export default function Order() {
  const { id } = useParams();
  const { orders } = useContext(OrdersContext);
  const order = orders.find((item) => item.id === id);

  console.log(id, orders);

  if (!order) {
    return <p>Order not found</p>;
  }

  return (
    <div className={styles.orderDetails}>
      <h2>Order Details</h2>
      <h3>Order Date: {new Date(order.date).toLocaleDateString()}</h3>
      <p>Total Quantity: {order.totalQuantity}</p>
      <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
      <div className={styles.items}>
        {order.items.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.image} alt={item.title} />
            <div className={styles.itemDetails}>
              <p>{item.title}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
