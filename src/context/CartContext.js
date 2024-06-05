import React, { createContext, useReducer, useContext } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.findIndex(
        (item) => item.id === action.product.id
      );
      if (existingProductIndex >= 0) {
        const updatedCart = [...state];
        updatedCart[existingProductIndex].quantity += action.product.quantity;
        return updatedCart;
      } else {
        return [...state, action.product];
      }
    case "UPDATE_CART":
      return state.map((item) =>
        item.id === action.product.id
          ? { ...item, quantity: action.product.quantity }
          : item
      );
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.id);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
