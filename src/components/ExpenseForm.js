import React, { useState, useEffect } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ addExpense, editExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editExpense) {
      setTitle(editExpense.title);
      setAmount(editExpense.amount);
      setDate(editExpense.date);
    }
  }, [editExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: editExpense ? editExpense.id : Date.now(),
      title,
      amount: parseFloat(amount),
      date,
    };
    addExpense(expense);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form className={styles.expenseForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
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
