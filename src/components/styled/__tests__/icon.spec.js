import React from "react"
import { render } from "@testing-library/react"
import Icon from "../Icon.css.js"
import theme from "../theme"

describe("Button", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Icon />)

    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly with theme", () => {
    const { asFragment, container } = render(<Icon theme={theme} />)

    expect(container.firstChild).toHaveStyleRule("fill", theme.textColor)

    expect(asFragment()).toMatchSnapshot()
  })
})
