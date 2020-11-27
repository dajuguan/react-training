import "./App.css";
import Star from "./normal/components/Star";
import StarRating from "./normal/components/StarRating";
import Colors from "./normal/components/Colors";

import { Component, useState } from "react";
import Color from "./normal/components/Colors";
import ColorList from "./normal/components/ColorList";
import Children from "./normal/components/Children";
import Example from "./Click";
import AddColorForm from "./normal/components/AddColorForm";
import data from "./normal/components/data";

export default function App() {
  return (
    <div>
      <AddColorForm />
      <ColorList />
    </div>
  );
}
