import React from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ setActivePage, activePage }) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li
          className={`${styles.navItem} ${
            activePage === "/" ? styles.active : ""
          }`}
          onClick={() => setActivePage("/")}
        >
          Home
        </li>
        <li
          className={`${styles.navItem} ${
            activePage === "/about" ? styles.active : ""
          }`}
          onClick={() => setActivePage("/about")}
        >
          About
        </li>
        <li
          className={`${styles.navItem} ${
            activePage === "/experience" ? styles.active : ""
          }`}
          onClick={() => setActivePage("/experience")}
        >
          Experience
        </li>
        <li
          className={`${styles.navItem} ${
            activePage === "/projects" ? styles.active : ""
          }`}
          onClick={() => setActivePage("/projects")}
        >
          Projects
        </li>
        <li
          className={`${styles.navItem} ${
            activePage === "/skills" ? styles.active : ""
          }`}
          onClick={() => setActivePage("/skills")}
        >
          Skills
        </li>
        <li
          className={`${styles.navItem} ${
            activePage === "/contact" ? styles.active : ""
          }`}
          onClick={() => setActivePage("/contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
