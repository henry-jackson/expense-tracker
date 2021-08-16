import styled from "styled-components"

interface ExpenseDateProps {
  className?: string
  date: Date
}

function ExpenseDate({ className, date }: ExpenseDateProps) {
  const month = date.toLocaleString("en-US", { month: "long" })
  const day = date.toLocaleString("en-US", { day: "2-digit" })
  const year = date.getFullYear()
  return (
    <div className={className}>
      <Month>{month}</Month>
      <Day>{day}</Day>
      <Year>{year}</Year>
    </div>
  )
}

const ExpenseDateStyled = styled(ExpenseDate)`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`

const Month = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`

const Year = styled.div`
  font-size: 0.75rem;
`

const Day = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

export default ExpenseDateStyled
