import React from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = () => {
  return (
    <form className={styles.expenseForm}>
      <div className={styles.formGroup}>
        <label>Title:</label>
        <input type="text" required />
      </div>
      <div className={styles.formGroup}>
        <label>Amount:</label>
        <input type="number" required />
      </div>
      <div className={styles.formGroup}>
        <label>Date:</label>
        <input type="date" required />
      </div>
      <div className={styles.formGroup}>
        <button type="submit" className={styles.submitButton}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
