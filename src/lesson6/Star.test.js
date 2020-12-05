import React from "react"
import Star from "./Star"

import { render } from "@testing-library/react"
import { toHaveTextContent } from "@testing-library/jest-dom"

it("test render Star", () => {
    const { getByText } = render(<Star />)
    const h1 = getByText("Great Star")
    expect(h1).toHaveTextContent("Great Star")
})
