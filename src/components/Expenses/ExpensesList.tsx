import ExpenseItemStyled, { ExpenseItemProps } from "../Expense/ExpenseItem"
import styled from "styled-components"

interface ExpensesListProps {
  items: ExpenseItemProps[]
}

function ExpensesList({ items }: ExpensesListProps) {
  if (items.length === 0) {
    return <Fallback>No expenses found</Fallback>
  }
  return (
    <ExpensesListStyled>
      {items.map((expense: ExpenseItemProps) => (
        <ExpenseItemStyled
          id={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ExpensesListStyled>
  )
}

const ExpensesListStyled = styled.ul`
  list-style: none;
  padding: 0;
`

const Fallback = styled.p`
  color: white;
  text-align: center;
`

export default ExpensesList
