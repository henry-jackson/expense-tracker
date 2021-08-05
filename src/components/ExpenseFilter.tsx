import styled from "styled-components"
import { useState } from "react"
import Select from "react-select"

interface ExpensesFilterProps {
  className?: string
  onFilterSelect: Function
}

type FilterOption = {
  label: string
  value: string
}

function ExpensesFilter({ className }: ExpensesFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState("")
  return (
    <div className={className}>
      <Controls>
        <Label>Filter by year</Label>
        <Select
          onChange={(selection: FilterOption) => setSelectedFilter(selection.value)}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </Select>
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
`

const SelectStyled = styled(Select)`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`

export default ExpensesFilterStyled
