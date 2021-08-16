import styled from "styled-components"
import { useState } from "react"
import Select, { ValueType } from "react-select"

interface ExpensesFilterProps {
  className?: string
  onFilterSelect: Function
}

type YearOption = {
  label: string
  value: string
}

function ExpensesFilter({ className, onFilterSelect }: ExpensesFilterProps) {
  const options: YearOption[] = [
    { value: "all", label: "All" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2018", label: "2019" },
    { value: "2019", label: "2018" },
  ]
  return (
    <div className={className}>
      <Controls>
        <Label>Filter by year</Label>
        <SelectStyled
          onChange={(option: YearOption) => onFilterSelect(option.value)}
          options={options}
        />
      </Controls>
    </div>
  )
}

const ExpensesFilterStyled = styled(ExpensesFilter)`
  color: white;
  padding: 0 1rem;
`

const Controls = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  flex: 3;
`

const SelectStyled = styled(Select)`
  font: inherit;
  color: black;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
  flex: 1;
`

export default ExpensesFilterStyled
