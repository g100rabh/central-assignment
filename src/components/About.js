import React from "react";
import { personalInfo } from "../data";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <p>{personalInfo.description}</p>
    </section>
  );
};

export default About;
