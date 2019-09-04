import React from "react"
import { render } from "@testing-library/react"
import Button from "../Button.css.js"
import theme from "../theme"

describe("Button", () => {
  it("renders correctly", () => {
    const { asFragment, container } = render(<Button>Label</Button>)

    expect(container.firstChild).not.toHaveStyleRule("display", "block")
    expect(container.firstChild).not.toHaveStyleRule("width", "100%")

    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly with block modifier", () => {
    const props = { block: true }
    const { asFragment, container } = render(<Button {...props}>Label</Button>)

    expect(container.firstChild).toHaveStyleRule("display", "block")
    expect(container.firstChild).toHaveStyleRule("width", "100%")

    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly with theme", () => {
    const props = { theme }
    const { asFragment } = render(<Button {...props}>Label</Button>)

    expect(asFragment()).toMatchSnapshot()
  })
})
