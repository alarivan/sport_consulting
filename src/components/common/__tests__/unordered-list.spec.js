import React from "react"
import { render } from "@testing-library/react"
import UnorderedList from "../UnorderedList.js"

describe("UnorderedList", () => {
  it("renders correctly without items", () => {
    const { asFragment } = render(<UnorderedList items={[]} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly with items", () => {
    const { asFragment } = render(
      <UnorderedList items={["item 1", "item 2"]} />
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
