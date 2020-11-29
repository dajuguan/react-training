import React, { useState } from "react";
import { UserInput } from "./inputHook";
import { useColors } from "../ColorProvider";
import styled from "styled-components";
import styles from "./styles/App.module.css";

// import "./styles/App.css";

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #171212;
  padding: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in;
`;
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
    <form className={styles.form} onSubmit={submit}>
      <input
        className={styles.input}
        {...titleProps}
        type="text"
        placeholder="color title"
        required
      ></input>
      <input
        className={styles.input}
        {...colorProps}
        type="color"
        required
      ></input>
      <Button>ADD</Button>
    </form>
  );
}
