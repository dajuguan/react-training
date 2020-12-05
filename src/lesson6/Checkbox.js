import React, { useReducer } from "react"

export function Checkbox() {
    const [checked, setChecked] = useReducer(
        checked => !checked,
        false
    )
    return <div>
        <label>
            {checked ? "checked" : "unchecked"}
            <input
                type="checkbox"
                value={checked}
                onChange={setChecked}
            />
        </label>
    </div>
}