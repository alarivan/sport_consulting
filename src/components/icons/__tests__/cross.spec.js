import React from "react"
import { render } from "@testing-library/react"
import IconCross from "../Cross.js"

describe("Icon/cross", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<IconCross />)

    expect(asFragment()).toMatchSnapshot()
  })
})
