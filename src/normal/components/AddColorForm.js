import React, { useState } from "react";
import { UserInput } from "./inputHook";
import { useColors } from "../../ColorProvider";
export default function AddColorForm() {
  const [titleProps, resetTitle] = UserInput("");
  const [colorProps, resetColor] = UserInput("");
  const { addColor } = useColors();
  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetColor("");
    resetTitle("");
  };
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title"
        required
      ></input>
      <input {...colorProps} type="color" required></input>
      <button>ADD</button>
    </form>
  );
}
