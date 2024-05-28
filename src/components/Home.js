import React from "react";
import { personalInfo } from "../data";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm
        <strong>
          <em>{personalInfo.name}</em>
        </strong>
        , a passionate developer based in {personalInfo.location}.
      </p>
    </section>
  );
};

export default Home;
