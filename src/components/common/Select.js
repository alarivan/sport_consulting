import React from "react"
import styled from "styled-components"
import GenericInput from "../styled/Input.css.js"

const Select = styled.select`
  ${GenericInput}
`

export default props => (
  <Select {...props}>
    {props.options.map((o, index) => (
      <option key={index} value={o.value}>
        {o.label}
      </option>
    ))}
  </Select>
)
