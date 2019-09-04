import React from "react"
import { render } from "@testing-library/react"
import Section from "../Section"

describe("Section", () => {
  it("renders correctly", () => {
    const { asFragment, queryByTestId } = render(<Section>Children</Section>)

    expect(queryByTestId("section-title")).toBeNull()
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly with title", () => {
    const props = { title: "Title", showTitle: true }
    const { asFragment, getByTestId } = render(
      <Section {...props}>Children</Section>
    )

    expect(getByTestId("section-title").innerHTML).toContain(props.title)
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly with reverse modifier", () => {
    const props = { reverse: true }
    const { asFragment } = render(<Section {...props}>Children</Section>)

    expect(asFragment()).toMatchSnapshot()
  })
})
