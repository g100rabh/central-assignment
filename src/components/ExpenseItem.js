import React from "react";
import styles from "./ExpenseItem.module.css";

const ExpenseItem = ({ expense, deleteExpense, handleEditExpense }) => {
  return (
    <div className={styles.expenseItem}>
      <div className={styles.expenseDetails}>
        <h3>{expense.title}</h3>
        <p>{expense.date}</p>
        <span className={styles.amt}>₹ {expense.amount.toFixed(2)}</span>
      </div>
      <div className={styles.btn}>
        <button
          className={styles.editButton}
          onClick={() => handleEditExpense(expense.id)}
        >
          Edit
        </button>
        <button
          className={styles.deleteButton}
          onClick={() => deleteExpense(expense.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
