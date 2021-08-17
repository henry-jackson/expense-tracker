import styled from "styled-components"
import ExpenseFormStyled, { FormValues } from "./ExpenseForm"
import { ExpenseItemProps } from "../Expense/ExpenseItem"
import { useState } from "react"

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

  const [drawerOpen, setDrawer] = useState(false)

  function toggleDrawer() {
    setDrawer((previousState: boolean) => !previousState)
  }

  if (!drawerOpen) {
    return (
      <div className={className}>
        <AddNewExpenseButton onClick={toggleDrawer}>
          Add New Expense
        </AddNewExpenseButton>
      </div>
    )
  }

  return (
    <div className={className}>
      <ExpenseFormStyled
        onCancelButtonClick={toggleDrawer}
        onSaveExpenseData={saveExpenseDataHandler}
      />
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

const AddNewExpenseButton = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: white;
  border-radius: 12px;
  margin-right: 1rem;

  &:hover,
  active {
    background-color: #510674;
    border-color: #510674;
  }
`

export default NewExpenseStyled
