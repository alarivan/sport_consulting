import React from "react"
import { render } from "@testing-library/react"
import Form from "../index.js"

describe("Form", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Form />)

    expect(asFragment()).toMatchSnapshot()
  })
})
