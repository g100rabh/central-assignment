import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ selectedMonth, onMonthChange, expenses }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className={styles.filter}>
      <span>
        <label>Filter by Month:</label>
        <select
          value={selectedMonth}
          onChange={(e) => onMonthChange(e.target.value)}
          className={styles.select}
        >
          <option value="">All</option>
          {months.map((month, index) => (
            <option key={index} value={index + 1}>
              {month}
            </option>
          ))}
        </select>
      </span>
      <span>
        <label>Total Amount: Rs.</label>{" "}
        {expenses.reduce((acc, curr) => acc + curr.amount, 0)}
      </span>
    </div>
  );
};

export default Filter;
