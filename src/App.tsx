import ReactDOM from "react-dom"
import { useState } from "react"
import "./App.css"
import Expenses from "./components/Expenses"
import NewExpenseStyled from "./components/NewExpense"
import { ExpenseItemProps } from "./components/ExpenseItem"

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]

  const [currentExpenses, setExpenses] = useState(expenses)

  function addExpenseHandler(expense: ExpenseItemProps) {
    setExpenses((oldExpenses) => [
      ...oldExpenses,
      {
        id: expense.key,
        title: expense.title,
        amount: expense.amount,
        date: expense.date,
      },
    ])
  }

  return (
    <div className="App">
      <NewExpenseStyled onAddExpense={addExpenseHandler} />
      <Expenses
        key={currentExpenses
          .map((x) => x.id)
          .sort()
          .join()}
        expenseData={currentExpenses}
      />
    </div>
  )
}

export default App
