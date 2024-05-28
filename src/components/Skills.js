import React from "react";
import { skills } from "../data";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.skillSections}>
        <div className={styles.skillSection}>
          <h3>Languages</h3>
          <ul>
            {skills.languages.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.skillSection}>
          <h3>Frontend & Libraries</h3>
          <ul>
            {skills.frontend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.skillSection}>
          <h3>Backend</h3>
          <ul>
            {skills.backend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.skillSection}>
          <h3>Databases</h3>
          <ul>
            {skills.databases.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.skillSection}>
          <h3>Tools & Others</h3>
          <ul>
            {skills.tools.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
