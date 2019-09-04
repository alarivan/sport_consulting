import React from "react"
import { render } from "@testing-library/react"
import ArrowDown from "../ArrowDown.js"

describe("Icon/arrow-down", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<ArrowDown />)

    expect(asFragment()).toMatchSnapshot()
  })
})
