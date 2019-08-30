import styled from "styled-components"

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  visibility: ${props => (props.open ? `visible` : `hidden`)};
  opacity: ${props => (props.open ? `1` : `0`)};
  transition: 0.5s;
  z-index: 2;
`

export const ModalContainer = styled.div`
  max-height: 100%;
  background: #fff;
  box-sizing: border-box;
  align-self: center;
  justify-self: center;
  max-width: 480px;
  padding: 1rem;
  width: 100%;
  position: relative;
  overflow: auto;
  transition: opacity 400ms ease-in-out;
  box-shadow: 0 0 3rem black;
  margin: calc(0.5rem + 2vw);
`

export const ModalHeader = styled.header`
  padding: 0 0 0.5rem 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`

export const ModalHeaderTitle = styled.h1`
  flex: 1 1 auto;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0.5rem 0 0;
`

export const ModalHeaderClose = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.7;
  }
`
