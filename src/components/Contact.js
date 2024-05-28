import React from "react";
import { personalInfo } from "../data";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <p>Feel free to reach out to me at:</p>
      <ul>
        <li>Phone: {personalInfo.phone}</li>
        <li>Email: {personalInfo.email}</li>
        <li>
          <a href={personalInfo.linkedIn}>LinkedIn</a>
        </li>
      </ul>
      <form className={styles.contactForm}>
        <label className={styles.label}>Name</label>
        <input type="text" name="name" required className={styles.input} />
        <label className={styles.label}>Email</label>
        <input type="email" name="email" required className={styles.input} />
        <label className={styles.label}>Message</label>
        <textarea
          name="message"
          required
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
