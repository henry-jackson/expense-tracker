import styled from "styled-components"
import ExpenseFormStyled, { FormValues } from "./ExpenseForm"
import { ExpenseItemProps } from "../Expense/ExpenseItem"

interface NewExpenseProps {
  className?: string
  onAddExpense: Function
}

function NewExpense({ className, onAddExpense }: NewExpenseProps) {
  function saveExpenseDataHandler(enteredExpenseData: FormValues) {
    const itemProps: ExpenseItemProps = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    onAddExpense(itemProps)
  }

  return (
    <div className={className}>
      <ExpenseFormStyled onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

const NewExpenseStyled = styled(NewExpense)`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`

export default NewExpenseStyled
