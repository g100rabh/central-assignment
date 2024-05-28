import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#home">Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="#about">About</a>
        </li>
        <li className={styles.navItem}>
          <a href="#experience">Experience</a>
        </li>
        <li className={styles.navItem}>
          <a href="#projects">Projects</a>
        </li>
        <li className={styles.navItem}>
          <a href="#skills">Skills</a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
