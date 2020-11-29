import "./App.css";
import Star from "./lesson3_style/Star";
import StarRating from "./lesson3_style/StarRating";
import Colors from "./lesson3_style/Colors";

import { Component, useState } from "react";
import Color from "./lesson3_style/Colors";
import ColorList from "./lesson3_style/ColorList";
import Children from "./lesson3_style/Children";
import Example from "./Click";
import AddColorForm from "./lesson3_style/AddColorForm";
import data from "./lesson3_style/data";

// import "./lesson3_style/styles/App.css";
// import styles from "./lesson3_style/styles/App.module.css";

import styled from "styled-components";

import logo from "./lesson3_style/assets/logo192.png";

import { ReactComponent as Logo } from "./logo.svg";

import "./lesson3_style/styles/App.sass";

// const StyleContainer = styled.div`
//   width: 400px;
//   margin: auto;
//   padding: 20px;
//   background: pink;
//   color: #171212;
//   text-align: center;
// `;

export default function App() {
  return (
    <div className="container">
      <Logo />
      <AddColorForm />
      <ColorList />
    </div>
  );
}
