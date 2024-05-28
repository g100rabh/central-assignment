import React from "react";
import { experience } from "../data";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className={styles.expItem}>
          <h3>{exp.role}</h3>
          <p>{exp.company}</p>
          <p>{exp.duration}</p>
          <ul>
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
