import styled from "styled-components"
import { useState, useEffect } from "react"
import ExpenseItemStyled from "./ExpenseItem"
import ExpensesFilterStyled from "./ExpenseFilter"

interface ExpensesProps {
  className?: string
  expenseData: DataProvider[]
}

interface DataProvider {
  date: Date
  title: string
  amount: number
  id: string
}

function Expenses({ className, expenseData }: ExpensesProps) {
  const [filterValue, setFilteredYear] = useState("all")

  const filterSelectHandler = (filter: string) => {
    setFilteredYear(filter)
  }

  const filteredExpenses = (filterValue: string) => {
    return filterValue === "all"
      ? expenseData
      : expenseData.filter(
          (item) => parseInt(filterValue) === item.date.getFullYear()
        )
  }

  return (
    <div className={className}>
      <ExpensesFilterStyled onFilterSelect={filterSelectHandler} />
      {filteredExpenses(filterValue).map((expense) => (
        <ExpenseItemStyled
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  )
}

const ExpensesStyled = styled(Expenses)`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`

export default ExpensesStyled
