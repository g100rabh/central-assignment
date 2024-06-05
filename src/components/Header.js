import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">E-commerce App</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart />
              <span className={styles.itemCount}>{0}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
