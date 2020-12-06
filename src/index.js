import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Errorboundary from "./lesson6/Errorboundary"
// import App from "./lesson4/longList";

// import "./lesson4/async";
// import ColorProvider from "./ColorProvider";

ReactDOM.render(
  <React.StrictMode>
    <Errorboundary>
      <App />
    </Errorboundary>

  </React.StrictMode>,
  document.getElementById("root")
);
