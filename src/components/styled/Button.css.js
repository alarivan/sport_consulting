import styled from "styled-components"

const Button = styled.button`
  ${props =>
    props.block &&
    `
    display: block; 
    width: 100%;
    `}

  outline: none;
  border: none;
  border-radius: 3px;
  padding: 0.75rem 2rem;
  cursor: pointer;
  font-weight: 600;
  background-color: ${props => props.theme.primaryColor};
  color: #fff;
  transition: background-color 200ms ease-in-out;

  &:not(:disabled) {
    :hover,
    :focus,
    :active {
      background-color: ${props => props.theme.primaryColorHover};
    }
  }

  :disabled {
    background: #b4b6b8;
    cursor: not-allowed;
  }
`

export default Button
