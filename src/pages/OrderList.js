import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { OrdersContext } from "../context/OrderContext";
import styles from "./OrderList.module.css";

export default function OrderList() {
  const { orders } = useContext(OrdersContext);
  console.log(orders);

  return (
    <div className={styles.orderList}>
      <h2>Order List</h2>
      {orders.length === 0 ? (
        <p>No orders available</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className={styles.order}>
            <h3>Order Date: {new Date(order.date).toLocaleDateString()}</h3>
            <p>Total Quantity: {order.totalQuantity}</p>
            <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
            <Link to={`/orders/${order.id}`} className={styles.viewOrderLink}>
              View Order
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
