import React, { createContext, useReducer } from "react";

export const OrdersContext = createContext();

const initialState = {
  orders: [],
};

const ordersReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    default:
      return state;
  }
};

export const OrdersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ordersReducer, initialState);

  const addOrder = (order) => {
    dispatch({ type: "ADD_ORDER", payload: order });
  };

  return (
    <OrdersContext.Provider value={{ orders: state.orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};
