import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ setActivePage }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem} onClick={() => setActivePage("/")}>
          Home
        </li>
        <li className={styles.navItem} onClick={() => setActivePage("/about")}>
          About
        </li>
        <li
          className={styles.navItem}
          onClick={() => setActivePage("/experience")}
        >
          Experience
        </li>
        <li
          className={styles.navItem}
          onClick={() => setActivePage("/projects")}
        >
          Projects
        </li>
        <li className={styles.navItem} onClick={() => setActivePage("/skills")}>
          Skills
        </li>
        <li
          className={styles.navItem}
          onClick={() => setActivePage("/contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
