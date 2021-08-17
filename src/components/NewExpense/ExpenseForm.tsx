import { useForm, SubmitHandler } from "react-hook-form"
import styled from "styled-components"
import moment from "moment"

interface ExpenseFormProps {
  className?: string
  onSaveExpenseData: Function
  onCancelButtonClick: Function
}

export type FormValues = {
  title: string
  amount: number
  date: Date
}

function ExpenseForm({
  className,
  onSaveExpenseData,
  onCancelButtonClick,
}: ExpenseFormProps) {
  const { register, handleSubmit, reset } = useForm<FormValues>()
  function submitHandler(data: FormValues) {
    onSaveExpenseData(data)
    reset()
  }

  return (
    <form className={className} onSubmit={handleSubmit(submitHandler)}>
      <Controls>
        <div>
          <ControlLabel>Title</ControlLabel>
          <ControlInput {...register("title", { required: true })} type="text" />
        </div>
        <div>
          <ControlLabel>Amount</ControlLabel>
          <ControlInput
            {...register("amount", { required: true, valueAsNumber: true })}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div>
          <ControlLabel>Date</ControlLabel>
          <ControlInput
            {...register("date", { required: true, valueAsDate: true })}
            type="date"
            defaultValue={moment().format("YYYY-MM-DD")}
            min="2010-01-01"
            max="2022-12-31"
          />
        </div>
      </Controls>
      <Actions>
        <ActionsButton onClick={() => onCancelButtonClick()} type="reset">
          Cancel
        </ActionsButton>
        <ActionsButton type="submit">Add Expense</ActionsButton>
      </Actions>
    </form>
  )
}

const ExpenseFormStyled = styled(ExpenseForm)``

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`

const ControlLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`

const ControlInput = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
`

const Actions = styled.div`
  text-align: right;
`

const ActionsButton = styled.button`
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

export default ExpenseFormStyled
