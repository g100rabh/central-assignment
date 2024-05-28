import React from "react";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

const Header = ({ setActivePage }) => {
  return (
    <header className={styles.header}>
      <Navbar setActivePage={setActivePage} />
    </header>
  );
};

export default Header;
