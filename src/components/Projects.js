import React from "react";
import { projects } from "../data";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div className={styles.projectItem} key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.achievements &&
                project.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
            </ul>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
