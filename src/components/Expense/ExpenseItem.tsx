import { useState } from "react"
import styled from "styled-components"
import ExpenseDateStyled from "./ExpenseDate"

export interface ExpenseItemProps {
  className?: string
  date: Date
  title: string
  amount: number
  id: string
}

function ExpenseItem({ className, date, title, amount, id }: ExpenseItemProps) {
  return (
    <li key={id} className={className}>
      <ExpenseDateStyled date={date} />
      <Description>
        <Title>{title}</Title>
        <Price>{`$${amount}`}</Price>
      </Description>
    </li>
  )
}

const ExpenseItemStyled = styled(ExpenseItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 12px;
  background-color: #4b4b4b;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;

  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }
`

const Title = styled.h2`
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  color: white;

  @media (min-width: 580px) {
    font-size: 1.25rem;
  }
`

const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;

  @media (min-width: 580px) {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
`

export default ExpenseItemStyled
