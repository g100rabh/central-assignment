import React from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpenseList.module.css";

const ExpenseList = ({ expenses, deleteExpense, handleEditExpense }) => {
  return (
    <div className={styles.expenseList}>
      {expenses.length === 0 && <h3>No Expenses available!</h3>}
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
          handleEditExpense={handleEditExpense}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
