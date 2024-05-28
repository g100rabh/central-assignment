import React from "react";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

const Header = ({ setActivePage, activePage }) => {
  return (
    <header className={styles.header}>
      <Navbar setActivePage={setActivePage} activePage={activePage} />
    </header>
  );
};

export default Header;
