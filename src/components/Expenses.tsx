import styled from "styled-components"
import ExpenseItemStyled from "./ExpenseItem"

interface ExpensesProps {
  className?: string
  expenseData: Array<DataProvider>
}

interface DataProvider {
  date: Date
  title: string
  amount: number
  id: string
}

function Expenses({ className, expenseData }: ExpensesProps) {
  const expenseItems = expenseData.map((expense) => (
    <ExpenseItemStyled
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
      key={expense.id}
    />
  ))
  return <div className={className}>{expenseItems}</div>
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
