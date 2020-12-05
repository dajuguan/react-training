import React from "react"
import { render, fireEvent } from "@testing-library/react"
import { Checkbox } from "./Checkbox"

it("select the checkbox should toggle its value", () => {
    const { getByLabelText } = render(<Checkbox />)
    const checkbox = getByLabelText(/unchecked/)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(false)
})