import { useEffect, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filter from "./components/Filter";
import Header from "./components/Header";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [editExpense, setEditExpense] = useState(null);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    if (selectedMonth === "") {
      setFilteredExpenses(expenses);
    } else {
      const month = parseInt(selectedMonth, 10);
      setFilteredExpenses(
        expenses.filter(
          (expense) => new Date(expense.date).getMonth() + 1 === month
        )
      );
    }
  }, [selectedMonth, expenses]);

  const addExpense = (expense) => {
    if (editExpense) {
      setExpenses(
        expenses.map((exp) => (exp.id === expense.id ? expense : exp))
      );
      setEditExpense(null);
    } else {
      setExpenses([...expenses, expense]);
    }
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleEditExpense = (id) => {
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    setEditExpense(expenseToEdit);
  };
  console.log(editExpense);

  return (
    <div className="App">
      <Header />
      <ExpenseForm addExpense={addExpense} editExpense={editExpense} />
      <div className="container">
        <Filter
          selectedMonth={selectedMonth}
          expenses={filteredExpenses}
          onMonthChange={setSelectedMonth}
        />
        <ExpenseList
          expenses={filteredExpenses}
          deleteExpense={deleteExpense}
          handleEditExpense={handleEditExpense}
        />
      </div>
    </div>
  );
}

export default App;
