import styled from "styled-components"
import { useState, useEffect } from "react"
import ExpenseItemStyled from "./ExpenseItem"
import ExpensesFilterStyled from "./ExpenseFilter"

interface ExpensesProps {
  className?: string
  expenseData: DataProvider[]
  key: string
}

interface DataProvider {
  date: Date
  title: string
  amount: number
  id: string
}

function Expenses({ className, expenseData }: ExpensesProps) {
  function createItemsFromData(data: DataProvider[]) {
    return data.map((expense) => (
      <ExpenseItemStyled
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
        key={expense.id}
      />
    ))
  }

  const allItems = createItemsFromData(expenseData)
  const [items, setItems] = useState(allItems)

  function filterSelectHandler(filterValue: string) {
    filterValue === "all"
      ? setItems(allItems)
      : setItems(
          createItemsFromData(
            expenseData.filter(
              (item) => parseInt(filterValue) === item.date.getFullYear()
            )
          )
        )
  }
  return (
    <div className={className}>
      <ExpensesFilterStyled onFilterSelect={filterSelectHandler} />
      {items}
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
