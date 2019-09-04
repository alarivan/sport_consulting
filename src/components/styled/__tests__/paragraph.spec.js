import React from "react"
import { render } from "@testing-library/react"
import Paragraph from "../Paragraph.css.js"

describe("Paragraph", () => {
  it("renders correctly", () => {
    const { asFragment, container } = render(<Paragraph>Content</Paragraph>)

    expect(container.firstChild).toHaveStyleRule("font-weight", "500")
    expect(container.firstChild).toHaveStyleRule("font-size", "1.2rem")

    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly with bold", () => {
    const { asFragment, container } = render(
      <Paragraph bold={true}>Content</Paragraph>
    )

    expect(container.firstChild).toHaveStyleRule("font-weight", "600")
    expect(container.firstChild).toHaveStyleRule("font-size", "1.5rem")

    expect(asFragment()).toMatchSnapshot()
  })
})
