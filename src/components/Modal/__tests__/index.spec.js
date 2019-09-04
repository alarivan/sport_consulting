import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "jest-styled-components"
import Modal from "../index"

describe("Modal/index", () => {
  it("renders correctly", () => {
    const props = {
      onClose: jest.fn(),
      isOpen: true,
      title: "Title",
    }
    const { asFragment, queryByText } = render(
      <Modal {...props}>Content</Modal>
    )

    expect(queryByText(/Title/i)).not.toBeNull()
    expect(queryByText(/Content/i)).not.toBeNull()

    expect(asFragment()).toMatchSnapshot()
  })

  it("calls onClose", () => {
    const props = {
      onClose: jest.fn(),
      isOpen: true,
      title: "Title",
    }
    const { getByTestId } = render(<Modal {...props}>Content</Modal>)

    fireEvent.click(getByTestId("modal-header-close"))
    expect(props.onClose).toHaveBeenCalledTimes(1)

    fireEvent.click(getByTestId("modal-background"))
    expect(props.onClose).toHaveBeenCalledTimes(2)
  })
})
