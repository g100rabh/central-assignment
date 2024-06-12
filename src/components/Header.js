import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import styles from "./Header.module.css";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">E-commerce App</Link>
      </div>
      <div>
        <Link to="/orders">Orders</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className={styles.itemCount}>{cart.length}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
