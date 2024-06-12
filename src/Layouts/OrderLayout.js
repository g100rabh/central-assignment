import React from "react";
import { Outlet } from "react-router-dom";
import OrderList from "../pages/OrderList";

const OrdersLayout = () => {
  return (
    <div>
      <OrderList />
      <Outlet />
    </div>
  );
};

export default OrdersLayout;
